"use client";

import { useEffect, useRef } from "react";

const BG = { r: 5, g: 5, b: 7 };
const MAX_PARTICLES = 140;
const DPR_CAP = 2;

type Rgb = { r: number; g: number; b: number };

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: Rgb;
};

type PointerState = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  active: boolean;
};

const IRIDESCENT: Rgb[] = [
  { r: 168, g: 85, b: 247 },
  { r: 99, g: 102, b: 241 },
  { r: 139, g: 92, b: 246 },
  { r: 56, g: 189, b: 248 },
  { r: 192, g: 132, b: 252 },
  { r: 79, g: 70, b: 229 },
];

function pickColor(speed: number, t: number): Rgb {
  const index =
    Math.floor((t * 0.002 + speed * 0.04) % IRIDESCENT.length) % IRIDESCENT.length;
  const next = (index + 1) % IRIDESCENT.length;
  const blend = (speed * 0.06 + t * 0.001) % 1;
  const a = IRIDESCENT[index];
  const b = IRIDESCENT[next];
  return {
    r: a.r + (b.r - a.r) * blend,
    g: a.g + (b.g - a.g) * blend,
    b: a.b + (b.b - a.b) * blend,
  };
}

function spawnParticles(
  pool: Particle[],
  pointer: PointerState,
  width: number,
  height: number,
  time: number,
) {
  const speed = Math.hypot(pointer.vx, pointer.vy);
  if (!pointer.active && speed < 0.4) return;

  const count = Math.min(10, Math.max(1, Math.floor(speed / 6)));
  const baseSize = 18 + Math.min(speed * 1.8, 90);

  for (let i = 0; i < count; i++) {
    const slot = pool.find((p) => p.life <= 0);
    if (!slot) break;

    const spread = (i / count - 0.5) * 12;
    const color = pickColor(speed, time + i * 40);

    slot.x = pointer.x + spread;
    slot.y = pointer.y + spread * 0.5;
    slot.vx = pointer.vx * 0.35 + (Math.random() - 0.5) * 1.2;
    slot.vy = pointer.vy * 0.35 + (Math.random() - 0.5) * 1.2;
    slot.maxLife = 0.55 + Math.random() * 0.45;
    slot.life = slot.maxLife;
    slot.size = baseSize * (0.65 + Math.random() * 0.55);
    slot.color = color;
  }

  void width;
  void height;
}

function drawSplat(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  color: Rgb,
  alpha: number,
) {
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
  gradient.addColorStop(0, `rgba(${color.r},${color.g},${color.b},${alpha})`);
  gradient.addColorStop(0.35, `rgba(${color.r},${color.g},${color.b},${alpha * 0.45})`);
  gradient.addColorStop(1, `rgba(${color.r},${color.g},${color.b},0)`);

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

export function IridescentFluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const pointerRef = useRef<PointerState>({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    active: false,
  });
  const rafRef = useRef<number>(0);
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (reducedMotion || coarsePointer) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
    if (!ctx) return;

    particlesRef.current = Array.from({ length: MAX_PARTICLES }, () => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      life: 0,
      maxLife: 1,
      size: 0,
      color: IRIDESCENT[0],
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
      const width = window.innerWidth;
      const height = window.innerHeight;
      sizeRef.current = { width, height, dpr };

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    let lastX = window.innerWidth * 0.5;
    let lastY = window.innerHeight * 0.5;
    let lastMove = performance.now();

    const onPointerMove = (event: MouseEvent) => {
      const now = performance.now();
      const dt = Math.max(now - lastMove, 8);
      const x = event.clientX;
      const y = event.clientY;

      pointerRef.current.vx = ((x - lastX) / dt) * 16;
      pointerRef.current.vy = ((y - lastY) / dt) * 16;
      pointerRef.current.x = x;
      pointerRef.current.y = y;
      pointerRef.current.active = true;

      lastX = x;
      lastY = y;
      lastMove = now;
    };

    const onPointerLeave = () => {
      pointerRef.current.active = false;
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });
    window.addEventListener("mouseleave", onPointerLeave, { passive: true });

    let lastFrame = performance.now();

    const tick = (time: number) => {
      const dt = Math.min((time - lastFrame) / 1000, 0.032);
      lastFrame = time;

      const { width, height } = sizeRef.current;
      const pointer = pointerRef.current;
      const pool = particlesRef.current;

      pointer.vx *= 0.9;
      pointer.vy *= 0.9;

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = `rgba(${BG.r},${BG.g},${BG.b},${0.1 + Math.min(Math.hypot(pointer.vx, pointer.vy) * 0.001, 0.06)})`;
      ctx.fillRect(0, 0, width, height);

      spawnParticles(pool, pointer, width, height, time);

      ctx.globalCompositeOperation = "lighter";

      for (const particle of pool) {
        if (particle.life <= 0) continue;

        particle.life -= dt;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.94;
        particle.vy *= 0.94;

        const lifeRatio = Math.max(particle.life / particle.maxLife, 0);
        const alpha = lifeRatio * lifeRatio * 0.55;
        const radius = particle.size * (0.5 + lifeRatio * 0.5);

        drawSplat(ctx, particle.x, particle.y, radius, particle.color, alpha);
      }

      ctx.globalCompositeOperation = "source-over";
      rafRef.current = requestAnimationFrame(tick);
    };

    ctx.fillStyle = `rgb(${BG.r},${BG.g},${BG.b})`;
    ctx.fillRect(0, 0, sizeRef.current.width, sizeRef.current.height);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 bg-[#050507]"
    />
  );
}

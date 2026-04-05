function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function readScrollPaddingTopPx(): number {
  if (typeof document === "undefined") return 88;
  const raw = getComputedStyle(document.documentElement).scrollPaddingTop;
  const n = parseFloat(raw);
  return Number.isFinite(n) ? n : 88;
}

function computeDuration(distancePx: number, upward: boolean): number {
  const base = upward ? 1000 : 750;
  const stretch = distancePx * 0.72 + (upward ? 450 : 200);
  return Math.min(2800, Math.max(base, stretch));
}

/**
 * Animate window scroll to a Y position. Scrolling up uses a longer easing window by default.
 */
export function scrollToY(
  targetY: number,
  options?: { duration?: number },
): Promise<void> {
  return new Promise((resolve) => {
    const startY = window.scrollY;
    const maxY = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight,
    );
    const y = Math.max(0, Math.min(targetY, maxY));
    const diff = y - startY;
    if (Math.abs(diff) < 2) {
      resolve();
      return;
    }
    const upward = diff < 0;
    const duration =
      options?.duration ?? computeDuration(Math.abs(diff), upward);
    const t0 = performance.now();

    function frame(now: number) {
      const t = Math.min(1, (now - t0) / duration);
      const eased = easeInOutCubic(t);
      window.scrollTo(0, startY + diff * eased);
      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        resolve();
      }
    }
    requestAnimationFrame(frame);
  });
}

export function scrollToElementById(id: string): Promise<void> {
  const el = document.getElementById(id);
  if (!el) return Promise.resolve();
  const padding = readScrollPaddingTopPx();
  const top = el.getBoundingClientRect().top + window.scrollY - padding;
  return scrollToY(Math.max(0, top));
}

export function scrollToHashFromLocation(): Promise<void> {
  const raw = window.location.hash.slice(1);
  if (!raw) return scrollToY(0);
  return scrollToElementById(decodeURIComponent(raw));
}

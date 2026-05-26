/** Inverted curve mask — black fill above the arc; transparent scoop reveals the hologram section below. */
export function SectionCurveDivider() {
  return (
    <div className="section-curve-divider relative w-full overflow-visible" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 z-10 h-full w-full"
      >
        <path
          fill="#000000"
          d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,213.3C840,224,960,192,1080,170.7C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </div>
  );
}

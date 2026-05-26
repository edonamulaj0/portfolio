/** Inverted curve mask — black fill above the arc; transparent scoop reveals the hologram section below. */
export function SectionCurveDivider() {
  return (
    <div className="section-curve-divider relative w-full overflow-hidden" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 z-10 h-full w-full"
      >
        <path
          fill="#000000"
          d="M0,160L80,186.7C160,213,320,267,480,277.3C640,288,800,256,960,250.7C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
    </div>
  );
}

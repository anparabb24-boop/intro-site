// The site's signature element: a damped second-order step response —
// a system overshooting and settling to its setpoint. Doubles as a visual
// metaphor for finding balance between two disciplines under pressure.
export default function SettleCurve({ variant = 'hero' }) {
  if (variant === 'mark') {
    return (
      <svg className="settle-mark" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <line x1="0" y1="30" x2="100" y2="30" stroke="var(--slate)" strokeWidth="2" strokeDasharray="3 4" />
        <path
          d="M0 55 C 12 55, 18 4, 30 4 C 42 4, 46 44, 58 44 C 68 44, 72 24, 82 24 C 90 24, 94 30, 100 30"
          stroke="var(--signal)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      className="hero-curve"
      viewBox="0 0 620 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A damped oscillation settling to a steady line, representing balance found under pressure."
    >
      <line x1="0" y1="120" x2="620" y2="120" stroke="var(--slate)" strokeWidth="1.5" strokeDasharray="2 6" />
      <path
        d="M0 210
           C 40 210, 60 20, 110 20
           C 160 20, 175 175, 225 175
           C 265 175, 280 70, 325 70
           C 360 70, 372 145, 410 145
           C 440 145, 450 100, 480 100
           C 502 100, 508 128, 530 128
           C 548 128, 552 115, 570 115
           C 585 115, 590 120, 620 120"
        stroke="var(--signal)"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength="1"
        style={{
          strokeDasharray: 1,
          strokeDashoffset: 1,
          animation: 'draw-curve 1.8s ease-out forwards',
        }}
      />
      <style>{`
        @keyframes draw-curve {
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          path { animation: none !important; stroke-dashoffset: 0 !important; }
        }
      `}</style>
    </svg>
  );
}

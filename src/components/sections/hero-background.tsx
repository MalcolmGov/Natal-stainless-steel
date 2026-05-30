"use client";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {/* Base + mesh gradients */}
      <div className="hero-bg-base absolute inset-0" />
      <div className="hero-bg-mesh absolute inset-0" />

      {/* Blueprint grid */}
      <div className="hero-bg-grid absolute inset-0" />

      {/* Circuit trace accents */}
      <svg
        className="hero-bg-traces absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          d="M180 420 L380 420 L420 380 L620 380"
          stroke="url(#trace-blue)"
          strokeWidth="1"
          opacity="0.35"
        />
        <path
          d="M220 520 L340 520 L380 480 L520 480 L560 440"
          stroke="url(#trace-blue)"
          strokeWidth="1"
          opacity="0.2"
        />
        <path
          d="M900 280 L1040 280 L1080 320 L1240 320"
          stroke="url(#trace-blue)"
          strokeWidth="1"
          opacity="0.25"
        />
        <circle cx="380" cy="420" r="3" fill="rgba(19,104,168,0.5)" />
        <circle cx="620" cy="380" r="2.5" fill="rgba(255,255,255,0.35)" />
        <circle cx="1080" cy="320" r="3" fill="rgba(19,104,168,0.4)" />
        <defs>
          <linearGradient id="trace-blue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(19,104,168,0)" />
            <stop offset="40%" stopColor="rgba(74,159,212,0.6)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glow behind copy (left) */}
      <div className="hero-glow-copy absolute left-[-10%] top-[20%] h-[55%] w-[55%] rounded-full" />

      {/* Glow behind 3D render (right) */}
      <div className="hero-glow-visual absolute right-[-5%] top-[15%] h-[65%] w-[50%] rounded-full" />

      {/* Film grain */}
      <div className="hero-bg-noise absolute inset-0" />

      {/* Slow drifting ambient light */}
      <div className="hero-bg-drift absolute inset-0" />
    </div>
  );
}

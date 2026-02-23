/**
 * PVCellDiagram illustrates how photovoltaic cells convert sunlight
 * into electricity through the photovoltaic effect with dark mode support.
 */
export function PVCellDiagram() {
  return (
    <div className="rounded-lg border-2 border-border bg-card p-6 transition-colors">
      <h3 className="mb-4 text-center text-xl font-semibold text-foreground">
        How a Photovoltaic Cell Works
      </h3>
      <svg
        viewBox="0 0 800 500"
        className="mx-auto w-full max-w-3xl"
        role="img"
        aria-labelledby="pv-title pv-desc"
      >
        <title id="pv-title">Photovoltaic Cell Diagram</title>
        <desc id="pv-desc">
          Diagram showing sunlight hitting a solar cell, exciting electrons, and generating DC electricity
        </desc>

        {/* Sunlight rays */}
        <g>
          <line x1="100" y1="50" x2="150" y2="100" stroke="oklch(0.85 0.15 85)" strokeWidth="3" className="dark:stroke-[oklch(0.75_0.15_85)]" />
          <line x1="150" y1="50" x2="200" y2="100" stroke="oklch(0.85 0.15 85)" strokeWidth="3" className="dark:stroke-[oklch(0.75_0.15_85)]" />
          <line x1="200" y1="50" x2="250" y2="100" stroke="oklch(0.85 0.15 85)" strokeWidth="3" className="dark:stroke-[oklch(0.75_0.15_85)]" />
          <line x1="250" y1="50" x2="300" y2="100" stroke="oklch(0.85 0.15 85)" strokeWidth="3" className="dark:stroke-[oklch(0.75_0.15_85)]" />
          <text x="200" y="35" textAnchor="middle" className="fill-foreground text-sm font-medium">
            Sunlight (Photons)
          </text>
        </g>

        {/* Solar Cell */}
        <rect
          x="100"
          y="120"
          width="250"
          height="180"
          fill="oklch(0.45 0.12 240)"
          stroke="oklch(0.35 0.12 240)"
          strokeWidth="3"
          rx="8"
          className="dark:fill-[oklch(0.35_0.12_240)] dark:stroke-[oklch(0.25_0.12_240)]"
        />
        
        {/* N-type layer */}
        <rect x="110" y="130" width="230" height="60" fill="oklch(0.55 0.15 240)" rx="4" className="dark:fill-[oklch(0.45_0.15_240)]" />
        <text x="225" y="165" textAnchor="middle" className="fill-white text-xs font-medium">
          N-Type Silicon (Negative)
        </text>

        {/* P-type layer */}
        <rect x="110" y="200" width="230" height="60" fill="oklch(0.50 0.18 30)" rx="4" className="dark:fill-[oklch(0.40_0.18_30)]" />
        <text x="225" y="235" textAnchor="middle" className="fill-white text-xs font-medium">
          P-Type Silicon (Positive)
        </text>

        {/* Electric field indicator */}
        <line x1="120" y1="190" x2="330" y2="190" stroke="oklch(0.85 0.15 85)" strokeWidth="2" strokeDasharray="5,5" className="dark:stroke-[oklch(0.75_0.15_85)]" />
        <text x="360" y="195" className="fill-muted-foreground text-xs">
          Electric Field
        </text>

        {/* Electrons */}
        <circle cx="160" cy="150" r="6" fill="oklch(0.85 0.15 85)" className="dark:fill-[oklch(0.75_0.15_85)]" />
        <circle cx="200" cy="155" r="6" fill="oklch(0.85 0.15 85)" className="dark:fill-[oklch(0.75_0.15_85)]" />
        <circle cx="240" cy="150" r="6" fill="oklch(0.85 0.15 85)" className="dark:fill-[oklch(0.75_0.15_85)]" />
        <circle cx="280" cy="155" r="6" fill="oklch(0.85 0.15 85)" className="dark:fill-[oklch(0.75_0.15_85)]" />

        {/* Electron flow arrows */}
        <path d="M 160 170 L 160 210" stroke="oklch(0.85 0.15 85)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" className="dark:stroke-[oklch(0.75_0.15_85)]" />
        <path d="M 240 170 L 240 210" stroke="oklch(0.85 0.15 85)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" className="dark:stroke-[oklch(0.75_0.15_85)]" />

        {/* Wire connections */}
        <line x1="110" y1="140" x2="50" y2="140" stroke="oklch(0.4 0 0)" strokeWidth="4" className="dark:stroke-[oklch(0.6_0_0)]" />
        <line x1="110" y1="230" x2="50" y2="230" stroke="oklch(0.4 0 0)" strokeWidth="4" className="dark:stroke-[oklch(0.6_0_0)]" />
        <line x1="50" y1="140" x2="50" y2="350" stroke="oklch(0.4 0 0)" strokeWidth="4" className="dark:stroke-[oklch(0.6_0_0)]" />
        <line x1="50" y1="350" x2="350" y2="350" stroke="oklch(0.4 0 0)" strokeWidth="4" className="dark:stroke-[oklch(0.6_0_0)]" />
        <line x1="350" y1="350" x2="350" y2="230" stroke="oklch(0.4 0 0)" strokeWidth="4" className="dark:stroke-[oklch(0.6_0_0)]" />
        <line x1="350" y1="230" x2="340" y2="230" stroke="oklch(0.4 0 0)" strokeWidth="4" className="dark:stroke-[oklch(0.6_0_0)]" />

        {/* Current flow arrows */}
        <path d="M 50 280 L 50 320" stroke="oklch(0.7 0.2 30)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead-red)" />
        <text x="65" y="305" className="fill-earth-coral text-xs font-medium">
          Current Flow
        </text>

        {/* Load/Light bulb */}
        <circle cx="200" cy="350" r="25" fill="none" stroke="oklch(0.4 0 0)" strokeWidth="3" className="dark:stroke-[oklch(0.6_0_0)]" />
        <path d="M 190 340 L 200 350 L 210 340" stroke="oklch(0.85 0.15 85)" strokeWidth="2" fill="none" className="dark:stroke-[oklch(0.75_0.15_85)]" />
        <path d="M 190 360 L 200 350 L 210 360" stroke="oklch(0.85 0.15 85)" strokeWidth="2" fill="none" className="dark:stroke-[oklch(0.75_0.15_85)]" />
        <text x="200" y="395" textAnchor="middle" className="fill-foreground text-sm font-medium">
          DC Electricity Output
        </text>

        {/* Labels */}
        <text x="225" y="330" textAnchor="middle" className="fill-foreground text-base font-semibold">
          Single Solar Cell
        </text>

        {/* Solar Panel representation */}
        <rect x="450" y="120" width="300" height="200" fill="oklch(0.35 0.12 240)" stroke="oklch(0.25 0.12 240)" strokeWidth="3" rx="8" className="dark:fill-[oklch(0.25_0.12_240)] dark:stroke-[oklch(0.20_0.12_240)]" />
        <g>
          {[0, 1, 2].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <rect
                key={`${row}-${col}`}
                x={465 + col * 70}
                y={135 + row * 60}
                width="55"
                height="50"
                fill="oklch(0.45 0.12 240)"
                stroke="oklch(0.55 0.15 240)"
                strokeWidth="2"
                rx="4"
                className="dark:fill-[oklch(0.35_0.12_240)] dark:stroke-[oklch(0.45_0.15_240)]"
              />
            ))
          )}
        </g>
        <text x="600" y="350" textAnchor="middle" className="fill-foreground text-base font-semibold">
          Solar Panel (Many Cells)
        </text>
        <text x="600" y="375" textAnchor="middle" className="fill-muted-foreground text-sm">
          60-72 cells connected together
        </text>

        {/* Arrow markers */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="oklch(0.85 0.15 85)" className="dark:fill-[oklch(0.75_0.15_85)]" />
          </marker>
          <marker
            id="arrowhead-red"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="oklch(0.7 0.2 30)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

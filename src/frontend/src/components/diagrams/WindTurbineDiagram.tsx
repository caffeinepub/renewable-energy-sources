/**
 * WindTurbineDiagram depicts wind turbine components and the energy conversion process
 * with dark mode support.
 */
export function WindTurbineDiagram() {
  return (
    <div className="rounded-lg border-2 border-border bg-card p-6 transition-colors">
      <h3 className="mb-4 text-center text-xl font-semibold text-foreground">
        Wind Turbine Components
      </h3>
      <svg
        viewBox="0 0 800 600"
        className="mx-auto w-full max-w-3xl"
        role="img"
        aria-labelledby="wind-title wind-desc"
      >
        <title id="wind-title">Wind Turbine Diagram</title>
        <desc id="wind-desc">
          Diagram showing the main components of a wind turbine and how they convert wind energy to electricity
        </desc>

        {/* Tower */}
        <rect x="350" y="250" width="100" height="300" fill="oklch(0.85 0.02 100)" stroke="oklch(0.70 0.02 100)" strokeWidth="2" className="dark:fill-[oklch(0.35_0.02_100)] dark:stroke-[oklch(0.50_0.02_100)]" />
        
        {/* Nacelle (housing) */}
        <ellipse cx="400" cy="240" rx="80" ry="40" fill="oklch(0.80 0.02 100)" stroke="oklch(0.65 0.02 100)" strokeWidth="2" className="dark:fill-[oklch(0.30_0.02_100)] dark:stroke-[oklch(0.45_0.02_100)]" />
        
        {/* Rotor hub */}
        <circle cx="400" cy="240" r="25" fill="oklch(0.75 0.02 100)" stroke="oklch(0.60 0.02 100)" strokeWidth="2" className="dark:fill-[oklch(0.25_0.02_100)] dark:stroke-[oklch(0.40_0.02_100)]" />
        
        {/* Blades */}
        <path d="M 400 240 L 380 80 L 400 100 L 420 80 Z" fill="oklch(0.90 0.02 200)" stroke="oklch(0.75 0.02 200)" strokeWidth="2" className="dark:fill-[oklch(0.40_0.02_200)] dark:stroke-[oklch(0.55_0.02_200)]" />
        <path d="M 400 240 L 520 340 L 490 330 L 500 360 Z" fill="oklch(0.90 0.02 200)" stroke="oklch(0.75 0.02 200)" strokeWidth="2" className="dark:fill-[oklch(0.40_0.02_200)] dark:stroke-[oklch(0.55_0.02_200)]" />
        <path d="M 400 240 L 280 340 L 300 360 L 310 330 Z" fill="oklch(0.90 0.02 200)" stroke="oklch(0.75 0.02 200)" strokeWidth="2" className="dark:fill-[oklch(0.40_0.02_200)] dark:stroke-[oklch(0.55_0.02_200)]" />
        
        {/* Wind arrows */}
        <g>
          <path d="M 100 150 L 200 150" stroke="oklch(0.60 0.12 200)" strokeWidth="3" fill="none" markerEnd="url(#wind-arrow)" className="dark:stroke-[oklch(0.70_0.12_200)]" />
          <path d="M 100 240 L 200 240" stroke="oklch(0.60 0.12 200)" strokeWidth="3" fill="none" markerEnd="url(#wind-arrow)" className="dark:stroke-[oklch(0.70_0.12_200)]" />
          <path d="M 100 330 L 200 330" stroke="oklch(0.60 0.12 200)" strokeWidth="3" fill="none" markerEnd="url(#wind-arrow)" className="dark:stroke-[oklch(0.70_0.12_200)]" />
          <text x="150" y="130" textAnchor="middle" className="fill-foreground text-sm font-medium">
            Wind
          </text>
        </g>

        {/* Labels */}
        <text x="400" y="60" textAnchor="middle" className="fill-foreground text-sm font-semibold">
          Blades
        </text>
        <text x="400" y="210" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Rotor Hub
        </text>
        <text x="500" y="240" textAnchor="start" className="fill-foreground text-xs font-medium">
          Nacelle (Generator & Gearbox)
        </text>
        <text x="400" y="570" textAnchor="middle" className="fill-foreground text-sm font-semibold">
          Tower
        </text>

        {/* Ground */}
        <line x1="250" y1="550" x2="550" y2="550" stroke="oklch(0.50 0.08 60)" strokeWidth="4" className="dark:stroke-[oklch(0.60_0.08_60)]" />

        {/* Power line */}
        <path d="M 450 500 L 600 500" stroke="oklch(0.40 0 0)" strokeWidth="3" className="dark:stroke-[oklch(0.60_0_0)]" />
        <text x="650" y="505" textAnchor="start" className="fill-foreground text-xs font-medium">
          Electricity to Grid
        </text>

        {/* Arrow marker */}
        <defs>
          <marker
            id="wind-arrow"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="oklch(0.60 0.12 200)" className="dark:fill-[oklch(0.70_0.12_200)]" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

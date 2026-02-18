/**
 * WaterTurbineGeneratorDiagram shows the flow from water through
 * turbine to generator for hydroelectric power generation.
 */
export function WaterTurbineGeneratorDiagram() {
  return (
    <div className="rounded-lg border-2 border-border bg-card p-6">
      <h3 className="mb-4 text-center text-xl font-semibold">
        Water → Turbine → Generator
      </h3>
      <svg
        viewBox="0 0 800 400"
        className="mx-auto w-full max-w-3xl"
        role="img"
        aria-labelledby="hydro-title hydro-desc"
      >
        <title id="hydro-title">Hydropower Generation Diagram</title>
        <desc id="hydro-desc">
          Diagram showing water flowing through a turbine to spin a generator and produce electricity
        </desc>

        {/* Dam/Reservoir */}
        <rect x="50" y="100" width="150" height="150" fill="oklch(0.65 0.15 220)" opacity="0.6" />
        <text x="125" y="90" textAnchor="middle" className="fill-foreground text-sm font-semibold">
          Reservoir
        </text>
        <text x="125" y="180" textAnchor="middle" className="fill-white text-xs">
          High Water Level
        </text>

        {/* Penstock (pipe) */}
        <rect x="200" y="160" width="120" height="40" fill="oklch(0.5 0 0)" stroke="oklch(0.3 0 0)" strokeWidth="2" />
        <path d="M 200 180 Q 210 180 220 185" stroke="oklch(0.65 0.15 220)" strokeWidth="3" fill="none" />
        <path d="M 230 185 Q 240 188 250 190" stroke="oklch(0.65 0.15 220)" strokeWidth="3" fill="none" />
        <path d="M 260 190 Q 270 192 280 193" stroke="oklch(0.65 0.15 220)" strokeWidth="3" fill="none" />
        <text x="260" y="150" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Penstock (Pipe)
        </text>

        {/* Water flow arrows */}
        <path d="M 210 180 L 230 180" stroke="oklch(0.65 0.15 220)" strokeWidth="2" markerEnd="url(#arrow-water)" />
        <path d="M 250 185 L 270 185" stroke="oklch(0.65 0.15 220)" strokeWidth="2" markerEnd="url(#arrow-water)" />
        <path d="M 290 190 L 310 190" stroke="oklch(0.65 0.15 220)" strokeWidth="2" markerEnd="url(#arrow-water)" />

        {/* Turbine */}
        <circle cx="380" cy="180" r="50" fill="oklch(0.55 0.12 150)" stroke="oklch(0.45 0.12 150)" strokeWidth="3" />
        <g transform="translate(380, 180)">
          <path d="M 0 -30 L 10 -10 L 0 0 L -10 -10 Z" fill="oklch(0.45 0.12 150)" />
          <path d="M 30 0 L 10 10 L 0 0 L 10 -10 Z" fill="oklch(0.45 0.12 150)" />
          <path d="M 0 30 L -10 10 L 0 0 L 10 10 Z" fill="oklch(0.45 0.12 150)" />
          <path d="M -30 0 L -10 -10 L 0 0 L -10 10 Z" fill="oklch(0.45 0.12 150)" />
          <circle cx="0" cy="0" r="8" fill="oklch(0.35 0.12 150)" />
        </g>
        <text x="380" y="250" textAnchor="middle" className="fill-foreground text-sm font-semibold">
          Turbine
        </text>
        <text x="380" y="268" textAnchor="middle" className="fill-muted-foreground text-xs">
          (Spins from water pressure)
        </text>

        {/* Shaft */}
        <rect x="425" y="170" width="80" height="20" fill="oklch(0.4 0 0)" stroke="oklch(0.3 0 0)" strokeWidth="2" />
        <text x="465" y="160" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Shaft
        </text>

        {/* Generator */}
        <rect x="505" y="140" width="100" height="80" fill="oklch(0.6 0.18 30)" stroke="oklch(0.5 0.18 30)" strokeWidth="3" rx="8" />
        <circle cx="555" cy="180" r="25" fill="oklch(0.7 0.18 30)" stroke="oklch(0.5 0.18 30)" strokeWidth="2" />
        <path d="M 545 170 L 555 180 L 565 170" stroke="oklch(0.3 0 0)" strokeWidth="2" fill="none" />
        <path d="M 545 190 L 555 180 L 565 190" stroke="oklch(0.3 0 0)" strokeWidth="2" fill="none" />
        <text x="555" y="250" textAnchor="middle" className="fill-foreground text-sm font-semibold">
          Generator
        </text>
        <text x="555" y="268" textAnchor="middle" className="fill-muted-foreground text-xs">
          (Converts motion to electricity)
        </text>

        {/* Electricity output */}
        <line x1="605" y1="160" x2="680" y2="160" stroke="oklch(0.85 0.15 85)" strokeWidth="4" />
        <line x1="605" y1="200" x2="680" y2="200" stroke="oklch(0.85 0.15 85)" strokeWidth="4" />
        <path d="M 640 165 L 640 195" stroke="oklch(0.85 0.15 85)" strokeWidth="3" fill="none" />
        <path d="M 650 165 L 650 195" stroke="oklch(0.85 0.15 85)" strokeWidth="3" fill="none" />
        <path d="M 660 165 L 660 195" stroke="oklch(0.85 0.15 85)" strokeWidth="3" fill="none" />
        <text x="720" y="185" className="fill-foreground text-sm font-semibold">
          Electricity
        </text>

        {/* Process flow labels */}
        <g>
          <circle cx="125" cy="320" r="20" fill="oklch(0.65 0.15 220)" />
          <text x="125" y="327" textAnchor="middle" className="fill-white text-sm font-bold">1</text>
          <text x="125" y="355" textAnchor="middle" className="fill-foreground text-xs font-medium">
            Water stored
          </text>
        </g>
        <g>
          <circle cx="260" cy="320" r="20" fill="oklch(0.5 0 0)" />
          <text x="260" y="327" textAnchor="middle" className="fill-white text-sm font-bold">2</text>
          <text x="260" y="355" textAnchor="middle" className="fill-foreground text-xs font-medium">
            Water flows down
          </text>
        </g>
        <g>
          <circle cx="380" cy="320" r="20" fill="oklch(0.55 0.12 150)" />
          <text x="380" y="327" textAnchor="middle" className="fill-white text-sm font-bold">3</text>
          <text x="380" y="355" textAnchor="middle" className="fill-foreground text-xs font-medium">
            Turbine spins
          </text>
        </g>
        <g>
          <circle cx="555" cy="320" r="20" fill="oklch(0.6 0.18 30)" />
          <text x="555" y="327" textAnchor="middle" className="fill-white text-sm font-bold">4</text>
          <text x="555" y="355" textAnchor="middle" className="fill-foreground text-xs font-medium">
            Generator produces power
          </text>
        </g>

        {/* Arrow markers */}
        <defs>
          <marker
            id="arrow-water"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="oklch(0.65 0.15 220)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

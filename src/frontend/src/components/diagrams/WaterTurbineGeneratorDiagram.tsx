/**
 * WaterTurbineGeneratorDiagram shows the hydropower process from reservoir through
 * penstock, turbine, and generator to electricity output with dark mode support.
 */
export function WaterTurbineGeneratorDiagram() {
  return (
    <div className="rounded-lg border-2 border-border bg-card p-6 transition-colors">
      <h3 className="mb-4 text-center text-xl font-semibold text-foreground">
        Hydropower Generation Process
      </h3>
      <svg
        viewBox="0 0 800 500"
        className="mx-auto w-full max-w-3xl"
        role="img"
        aria-labelledby="hydro-title hydro-desc"
      >
        <title id="hydro-title">Hydropower Diagram</title>
        <desc id="hydro-desc">
          Diagram showing water flowing from a reservoir through a penstock to spin a turbine and generator
        </desc>

        {/* Dam */}
        <path d="M 100 150 L 100 400 L 300 450 L 300 200 Z" fill="oklch(0.70 0.02 100)" stroke="oklch(0.55 0.02 100)" strokeWidth="2" className="dark:fill-[oklch(0.30_0.02_100)] dark:stroke-[oklch(0.45_0.02_100)]" />
        
        {/* Reservoir water */}
        <path d="M 100 150 L 100 200 L 300 200 L 300 150 Z" fill="oklch(0.60 0.15 220)" stroke="oklch(0.50 0.15 220)" strokeWidth="2" className="dark:fill-[oklch(0.40_0.15_220)] dark:stroke-[oklch(0.30_0.15_220)]" />
        
        {/* Penstock (pipe) */}
        <rect x="280" y="200" width="40" height="200" fill="oklch(0.50 0.02 100)" stroke="oklch(0.40 0.02 100)" strokeWidth="2" className="dark:fill-[oklch(0.35_0.02_100)] dark:stroke-[oklch(0.25_0.02_100)]" />
        
        {/* Turbine */}
        <circle cx="300" cy="420" r="30" fill="oklch(0.45 0.12 150)" stroke="oklch(0.35 0.12 150)" strokeWidth="2" className="dark:fill-[oklch(0.35_0.12_150)] dark:stroke-[oklch(0.25_0.12_150)]" />
        <path d="M 300 420 L 285 405 M 300 420 L 315 405 M 300 420 L 315 435 M 300 420 L 285 435" stroke="oklch(0.90 0.02 100)" strokeWidth="2" className="dark:stroke-[oklch(0.70_0.02_100)]" />
        
        {/* Generator */}
        <rect x="340" y="390" width="80" height="60" fill="oklch(0.55 0.08 80)" stroke="oklch(0.45 0.08 80)" strokeWidth="2" rx="5" className="dark:fill-[oklch(0.35_0.08_80)] dark:stroke-[oklch(0.25_0.08_80)]" />
        
        {/* Shaft connecting turbine to generator */}
        <line x1="330" y1="420" x2="340" y2="420" stroke="oklch(0.40 0 0)" strokeWidth="4" className="dark:stroke-[oklch(0.60_0_0)]" />
        
        {/* Water flow arrows */}
        <path d="M 300 250 L 300 290" stroke="oklch(0.60 0.15 220)" strokeWidth="3" fill="none" markerEnd="url(#water-arrow)" className="dark:stroke-[oklch(0.70_0.15_220)]" />
        <path d="M 300 350 L 300 390" stroke="oklch(0.60 0.15 220)" strokeWidth="3" fill="none" markerEnd="url(#water-arrow)" className="dark:stroke-[oklch(0.70_0.15_220)]" />
        
        {/* Outflow water */}
        <path d="M 270 440 L 200 470 L 200 480 L 100 480" fill="oklch(0.60 0.15 220)" stroke="oklch(0.50 0.15 220)" strokeWidth="2" className="dark:fill-[oklch(0.40_0.15_220)] dark:stroke-[oklch(0.30_0.15_220)]" />
        
        {/* Power lines */}
        <line x1="420" y1="400" x2="550" y2="350" stroke="oklch(0.40 0 0)" strokeWidth="3" className="dark:stroke-[oklch(0.60_0_0)]" />
        <line x1="420" y1="440" x2="550" y2="440" stroke="oklch(0.40 0 0)" strokeWidth="3" className="dark:stroke-[oklch(0.60_0_0)]" />
        
        {/* Labels */}
        <text x="200" y="140" textAnchor="middle" className="fill-foreground text-sm font-semibold">
          Reservoir
        </text>
        <text x="250" y="300" textAnchor="end" className="fill-foreground text-xs font-medium">
          Penstock
        </text>
        <text x="300" y="475" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Turbine
        </text>
        <text x="380" y="380" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Generator
        </text>
        <text x="600" y="395" textAnchor="start" className="fill-foreground text-sm font-medium">
          Electricity
        </text>
        <text x="150" y="470" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Outflow
        </text>

        {/* Ground */}
        <line x1="50" y1="480" x2="750" y2="480" stroke="oklch(0.50 0.08 60)" strokeWidth="4" className="dark:stroke-[oklch(0.60_0.08_60)]" />

        {/* Arrow marker */}
        <defs>
          <marker
            id="water-arrow"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="oklch(0.60 0.15 220)" className="dark:fill-[oklch(0.70_0.15_220)]" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

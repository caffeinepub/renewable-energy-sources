/**
 * BiomassProcessDiagram shows the biomass energy conversion process from fuel through
 * combustion, steam generation, turbine, and generator with dark mode support.
 */
export function BiomassProcessDiagram() {
  return (
    <div className="rounded-lg border-2 border-border bg-card p-6 transition-colors">
      <h3 className="mb-4 text-center text-xl font-semibold text-foreground">
        Biomass Energy Conversion Process
      </h3>
      <svg
        viewBox="0 0 800 400"
        className="mx-auto w-full max-w-3xl"
        role="img"
        aria-labelledby="biomass-title biomass-desc"
      >
        <title id="biomass-title">Biomass Process Diagram</title>
        <desc id="biomass-desc">
          Diagram showing biomass fuel being burned to create heat, which boils water to create steam, which spins a turbine connected to a generator
        </desc>

        {/* Biomass fuel pile */}
        <ellipse cx="100" cy="300" rx="60" ry="40" fill="oklch(0.50 0.08 60)" stroke="oklch(0.40 0.08 60)" strokeWidth="2" className="dark:fill-[oklch(0.35_0.08_60)] dark:stroke-[oklch(0.25_0.08_60)]" />
        <text x="100" y="360" textAnchor="middle" className="fill-foreground text-sm font-semibold">
          Biomass Fuel
        </text>
        
        {/* Furnace/Combustion chamber */}
        <rect x="200" y="200" width="120" height="150" fill="oklch(0.70 0.02 100)" stroke="oklch(0.55 0.02 100)" strokeWidth="2" className="dark:fill-[oklch(0.30_0.02_100)] dark:stroke-[oklch(0.45_0.02_100)]" />
        <path d="M 240 280 Q 250 260 260 280 Q 270 260 280 280" stroke="oklch(0.70 0.20 30)" strokeWidth="3" fill="none" className="dark:stroke-[oklch(0.60_0.20_30)]" />
        <text x="260" y="370" textAnchor="middle" className="fill-foreground text-sm font-semibold">
          Furnace
        </text>
        
        {/* Arrow from fuel to furnace */}
        <path d="M 160 300 L 200 300" stroke="oklch(0.50 0.08 60)" strokeWidth="3" fill="none" markerEnd="url(#biomass-arrow)" className="dark:stroke-[oklch(0.60_0.08_60)]" />
        
        {/* Boiler */}
        <rect x="350" y="180" width="100" height="170" fill="oklch(0.75 0.02 100)" stroke="oklch(0.60 0.02 100)" strokeWidth="2" className="dark:fill-[oklch(0.32_0.02_100)] dark:stroke-[oklch(0.47_0.02_100)]" />
        <circle cx="400" cy="265" r="30" fill="oklch(0.60 0.15 220)" stroke="oklch(0.50 0.15 220)" strokeWidth="2" className="dark:fill-[oklch(0.40_0.15_220)] dark:stroke-[oklch(0.30_0.15_220)]" />
        <text x="400" y="370" textAnchor="middle" className="fill-foreground text-sm font-semibold">
          Boiler
        </text>
        
        {/* Heat transfer arrow */}
        <path d="M 320 250 L 350 250" stroke="oklch(0.70 0.20 30)" strokeWidth="3" fill="none" markerEnd="url(#heat-arrow)" className="dark:stroke-[oklch(0.60_0.20_30)]" />
        <text x="335" y="240" textAnchor="middle" className="fill-earth-coral text-xs font-medium">
          Heat
        </text>
        
        {/* Steam pipe */}
        <path d="M 400 180 L 400 150 L 500 150" stroke="oklch(0.50 0.02 100)" strokeWidth="4" fill="none" className="dark:stroke-[oklch(0.60_0.02_100)]" />
        
        {/* Steam indicators */}
        <ellipse cx="450" cy="140" rx="10" ry="5" fill="oklch(0.90 0.02 100)" opacity="0.6" className="dark:fill-[oklch(0.70_0.02_100)]" />
        <ellipse cx="470" cy="135" rx="8" ry="4" fill="oklch(0.90 0.02 100)" opacity="0.4" className="dark:fill-[oklch(0.70_0.02_100)]" />
        
        {/* Turbine */}
        <circle cx="550" cy="150" r="40" fill="oklch(0.45 0.12 150)" stroke="oklch(0.35 0.12 150)" strokeWidth="2" className="dark:fill-[oklch(0.35_0.12_150)] dark:stroke-[oklch(0.25_0.12_150)]" />
        <path d="M 550 150 L 530 130 M 550 150 L 570 130 M 550 150 L 570 170 M 550 150 L 530 170" stroke="oklch(0.90 0.02 100)" strokeWidth="2" className="dark:stroke-[oklch(0.70_0.02_100)]" />
        <text x="550" y="220" textAnchor="middle" className="fill-foreground text-sm font-semibold">
          Turbine
        </text>
        
        {/* Generator */}
        <rect x="620" y="120" width="80" height="60" fill="oklch(0.55 0.08 80)" stroke="oklch(0.45 0.08 80)" strokeWidth="2" rx="5" className="dark:fill-[oklch(0.35_0.08_80)] dark:stroke-[oklch(0.25_0.08_80)]" />
        <text x="660" y="220" textAnchor="middle" className="fill-foreground text-sm font-semibold">
          Generator
        </text>
        
        {/* Shaft */}
        <line x1="590" y1="150" x2="620" y2="150" stroke="oklch(0.40 0 0)" strokeWidth="4" className="dark:stroke-[oklch(0.60_0_0)]" />
        
        {/* Power lines */}
        <line x1="700" y1="130" x2="750" y2="100" stroke="oklch(0.40 0 0)" strokeWidth="3" className="dark:stroke-[oklch(0.60_0_0)]" />
        <line x1="700" y1="170" x2="750" y2="170" stroke="oklch(0.40 0 0)" strokeWidth="3" className="dark:stroke-[oklch(0.60_0_0)]" />
        <text x="760" y="140" textAnchor="start" className="fill-foreground text-sm font-medium">
          Electricity
        </text>

        {/* Arrow markers */}
        <defs>
          <marker
            id="biomass-arrow"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="oklch(0.50 0.08 60)" className="dark:fill-[oklch(0.60_0.08_60)]" />
          </marker>
          <marker
            id="heat-arrow"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="oklch(0.70 0.20 30)" className="dark:fill-[oklch(0.60_0.20_30)]" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

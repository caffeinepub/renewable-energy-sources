/**
 * BiomassProcessDiagram illustrates the conversion of biomass
 * into electricity through combustion and steam generation.
 */
export function BiomassProcessDiagram() {
  return (
    <div className="rounded-lg border-2 border-border bg-card p-6">
      <h3 className="mb-4 text-center text-xl font-semibold">
        Biomass to Electricity Process
      </h3>
      <svg
        viewBox="0 0 800 400"
        className="mx-auto w-full max-w-3xl"
        role="img"
        aria-labelledby="biomass-title biomass-desc"
      >
        <title id="biomass-title">Biomass Energy Process Diagram</title>
        <desc id="biomass-desc">
          Diagram showing biomass combustion creating heat, producing steam, spinning turbine, and generating electricity
        </desc>

        {/* Biomass fuel */}
        <g>
          <rect x="50" y="150" width="100" height="80" fill="oklch(0.55 0.08 80)" stroke="oklch(0.45 0.08 80)" strokeWidth="2" rx="8" />
          <circle cx="80" cy="175" r="8" fill="oklch(0.45 0.08 60)" />
          <circle cx="105" cy="180" r="6" fill="oklch(0.45 0.08 60)" />
          <circle cx="120" cy="175" r="7" fill="oklch(0.45 0.08 60)" />
          <circle cx="75" cy="200" r="7" fill="oklch(0.45 0.08 60)" />
          <circle cx="100" cy="205" r="8" fill="oklch(0.45 0.08 60)" />
          <circle cx="125" cy="200" r="6" fill="oklch(0.45 0.08 60)" />
          <text x="100" y="135" textAnchor="middle" className="fill-foreground text-sm font-semibold">
            Biomass Fuel
          </text>
          <text x="100" y="255" textAnchor="middle" className="fill-muted-foreground text-xs">
            (Wood, crops, waste)
          </text>
        </g>

        {/* Arrow to furnace */}
        <path d="M 150 190 L 190 190" stroke="oklch(0.5 0 0)" strokeWidth="3" markerEnd="url(#arrow-process)" />

        {/* Furnace/Boiler */}
        <g>
          <rect x="190" y="140" width="120" height="100" fill="oklch(0.4 0.15 30)" stroke="oklch(0.3 0.15 30)" strokeWidth="3" rx="8" />
          
          {/* Flames */}
          <path d="M 220 200 Q 220 180 230 170 Q 225 185 230 200 Z" fill="oklch(0.7 0.25 30)" opacity="0.8" />
          <path d="M 240 200 Q 240 175 250 165 Q 245 180 250 200 Z" fill="oklch(0.75 0.25 40)" opacity="0.8" />
          <path d="M 260 200 Q 260 180 270 170 Q 265 185 270 200 Z" fill="oklch(0.7 0.25 30)" opacity="0.8" />
          
          {/* Heat waves */}
          <path d="M 210 160 Q 215 155 220 160" stroke="oklch(0.85 0.15 30)" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M 240 155 Q 245 150 250 155" stroke="oklch(0.85 0.15 30)" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M 270 160 Q 275 155 280 160" stroke="oklch(0.85 0.15 30)" strokeWidth="2" fill="none" opacity="0.6" />
          
          <text x="250" y="125" textAnchor="middle" className="fill-foreground text-sm font-semibold">
            Furnace/Boiler
          </text>
          <text x="250" y="265" textAnchor="middle" className="fill-muted-foreground text-xs">
            HEAT
          </text>
        </g>

        {/* Water pipes to boiler */}
        <line x1="250" y1="240" x2="250" y2="280" stroke="oklch(0.65 0.15 220)" strokeWidth="4" />
        <text x="265" y="265" className="fill-muted-foreground text-[10px]">Water in</text>

        {/* Steam pipe out */}
        <line x1="310" y1="170" x2="360" y2="170" stroke="oklch(0.5 0 0)" strokeWidth="6" />
        <g>
          <circle cx="320" cy="165" r="3" fill="oklch(0.9 0 0)" opacity="0.6" />
          <circle cx="330" cy="162" r="3" fill="oklch(0.9 0 0)" opacity="0.6" />
          <circle cx="340" cy="165" r="3" fill="oklch(0.9 0 0)" opacity="0.6" />
          <circle cx="350" cy="162" r="3" fill="oklch(0.9 0 0)" opacity="0.6" />
        </g>
        <text x="335" y="155" textAnchor="middle" className="fill-foreground text-xs font-medium">
          STEAM
        </text>

        {/* Turbine */}
        <g>
          <circle cx="410" cy="170" r="45" fill="oklch(0.55 0.12 150)" stroke="oklch(0.45 0.12 150)" strokeWidth="3" />
          <g transform="translate(410, 170)">
            <path d="M 0 -25 L 10 -10 L 0 0 L -10 -10 Z" fill="oklch(0.45 0.12 150)" />
            <path d="M 25 0 L 10 10 L 0 0 L 10 -10 Z" fill="oklch(0.45 0.12 150)" />
            <path d="M 0 25 L -10 10 L 0 0 L 10 10 Z" fill="oklch(0.45 0.12 150)" />
            <path d="M -25 0 L -10 -10 L 0 0 L -10 10 Z" fill="oklch(0.45 0.12 150)" />
            <circle cx="0" cy="0" r="8" fill="oklch(0.35 0.12 150)" />
          </g>
          <text x="410" y="235" textAnchor="middle" className="fill-foreground text-sm font-semibold">
            TURBINE
          </text>
        </g>

        {/* Shaft */}
        <rect x="455" y="162" width="60" height="16" fill="oklch(0.4 0 0)" stroke="oklch(0.3 0 0)" strokeWidth="2" />

        {/* Generator */}
        <g>
          <rect x="515" y="140" width="80" height="60" fill="oklch(0.6 0.18 30)" stroke="oklch(0.5 0.18 30)" strokeWidth="3" rx="6" />
          <circle cx="555" cy="170" r="20" fill="oklch(0.7 0.18 30)" stroke="oklch(0.5 0.18 30)" strokeWidth="2" />
          <path d="M 548 163 L 555 170 L 562 163" stroke="oklch(0.3 0 0)" strokeWidth="2" fill="none" />
          <path d="M 548 177 L 555 170 L 562 177" stroke="oklch(0.3 0 0)" strokeWidth="2" fill="none" />
          <text x="555" y="225" textAnchor="middle" className="fill-foreground text-sm font-semibold">
            GENERATOR
          </text>
        </g>

        {/* Electricity output */}
        <line x1="595" y1="160" x2="650" y2="160" stroke="oklch(0.85 0.15 85)" strokeWidth="4" />
        <line x1="595" y1="180" x2="650" y2="180" stroke="oklch(0.85 0.15 85)" strokeWidth="4" />
        <path d="M 615 165 L 615 175" stroke="oklch(0.85 0.15 85)" strokeWidth="3" />
        <path d="M 625 165 L 625 175" stroke="oklch(0.85 0.15 85)" strokeWidth="3" />
        <path d="M 635 165 L 635 175" stroke="oklch(0.85 0.15 85)" strokeWidth="3" />
        <text x="690" y="175" className="fill-foreground text-sm font-semibold">
          ELECTRICITY
        </text>

        {/* Process flow indicators */}
        <g>
          <circle cx="100" cy="320" r="18" fill="oklch(0.55 0.08 80)" stroke="oklch(0.45 0.08 80)" strokeWidth="2" />
          <text x="100" y="327" textAnchor="middle" className="fill-white text-sm font-bold">1</text>
          <text x="100" y="355" textAnchor="middle" className="fill-foreground text-xs font-medium">
            Biomass
          </text>
        </g>
        <g>
          <circle cx="250" cy="320" r="18" fill="oklch(0.7 0.25 30)" stroke="oklch(0.6 0.25 30)" strokeWidth="2" />
          <text x="250" y="327" textAnchor="middle" className="fill-white text-sm font-bold">2</text>
          <text x="250" y="355" textAnchor="middle" className="fill-foreground text-xs font-medium">
            Heat
          </text>
        </g>
        <g>
          <circle cx="410" cy="320" r="18" fill="oklch(0.9 0 0)" stroke="oklch(0.7 0 0)" strokeWidth="2" />
          <text x="410" y="327" textAnchor="middle" className="fill-foreground text-sm font-bold">3</text>
          <text x="410" y="355" textAnchor="middle" className="fill-foreground text-xs font-medium">
            Steam
          </text>
        </g>
        <g>
          <circle cx="555" cy="320" r="18" fill="oklch(0.55 0.12 150)" stroke="oklch(0.45 0.12 150)" strokeWidth="2" />
          <text x="555" y="327" textAnchor="middle" className="fill-white text-sm font-bold">4</text>
          <text x="555" y="355" textAnchor="middle" className="fill-foreground text-xs font-medium">
            Turbine Spins
          </text>
        </g>
        <g>
          <circle cx="690" cy="320" r="18" fill="oklch(0.85 0.15 85)" stroke="oklch(0.75 0.15 85)" strokeWidth="2" />
          <text x="690" y="327" textAnchor="middle" className="fill-foreground text-sm font-bold">5</text>
          <text x="690" y="355" textAnchor="middle" className="fill-foreground text-xs font-medium">
            Electricity
          </text>
        </g>

        {/* Arrow marker */}
        <defs>
          <marker
            id="arrow-process"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="oklch(0.5 0 0)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

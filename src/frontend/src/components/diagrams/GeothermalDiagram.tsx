/**
 * GeothermalDiagram illustrates geothermal power plant with underground reservoir,
 * production well, turbine, generator, and reinjection well with dark mode support.
 */
export function GeothermalDiagram() {
  return (
    <div className="rounded-lg border-2 border-border bg-card p-6 transition-colors">
      <h3 className="mb-4 text-center text-xl font-semibold text-foreground">
        Geothermal Power Plant
      </h3>
      <svg
        viewBox="0 0 800 600"
        className="mx-auto w-full max-w-3xl"
        role="img"
        aria-labelledby="geo-title geo-desc"
      >
        <title id="geo-title">Geothermal Energy Diagram</title>
        <desc id="geo-desc">
          Diagram showing underground heat reservoir, production well, turbine, generator, and injection well
        </desc>

        {/* Ground layers */}
        <rect x="0" y="300" width="800" height="50" fill="oklch(0.60 0.08 60)" className="dark:fill-[oklch(0.40_0.08_60)]" />
        <rect x="0" y="350" width="800" height="100" fill="oklch(0.50 0.08 50)" className="dark:fill-[oklch(0.35_0.08_50)]" />
        <rect x="0" y="450" width="800" height="150" fill="oklch(0.40 0.08 40)" className="dark:fill-[oklch(0.30_0.08_40)]" />
        
        {/* Underground heat reservoir */}
        <ellipse cx="400" cy="520" rx="200" ry="60" fill="oklch(0.65 0.20 30)" stroke="oklch(0.55 0.20 30)" strokeWidth="2" className="dark:fill-[oklch(0.45_0.20_30)] dark:stroke-[oklch(0.35_0.20_30)]" />
        
        {/* Production well */}
        <rect x="280" y="150" width="30" height="370" fill="oklch(0.70 0.02 100)" stroke="oklch(0.55 0.02 100)" strokeWidth="2" className="dark:fill-[oklch(0.35_0.02_100)] dark:stroke-[oklch(0.50_0.02_100)]" />
        
        {/* Injection well */}
        <rect x="490" y="200" width="30" height="320" fill="oklch(0.70 0.02 100)" stroke="oklch(0.55 0.02 100)" strokeWidth="2" className="dark:fill-[oklch(0.35_0.02_100)] dark:stroke-[oklch(0.50_0.02_100)]" />
        
        {/* Steam rising in production well */}
        <path d="M 295 450 Q 290 400 295 350 Q 300 300 295 250 Q 290 200 295 150" stroke="oklch(0.85 0.02 100)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="dark:stroke-[oklch(0.70_0.02_100)]" />
        
        {/* Power plant building */}
        <rect x="200" y="100" width="200" height="50" fill="oklch(0.75 0.02 100)" stroke="oklch(0.60 0.02 100)" strokeWidth="2" className="dark:fill-[oklch(0.30_0.02_100)] dark:stroke-[oklch(0.45_0.02_100)]" />
        
        {/* Turbine */}
        <circle cx="330" cy="125" r="20" fill="oklch(0.45 0.12 150)" stroke="oklch(0.35 0.12 150)" strokeWidth="2" className="dark:fill-[oklch(0.35_0.12_150)] dark:stroke-[oklch(0.25_0.12_150)]" />
        
        {/* Generator */}
        <rect x="360" y="110" width="30" height="30" fill="oklch(0.55 0.08 80)" stroke="oklch(0.45 0.08 80)" strokeWidth="2" className="dark:fill-[oklch(0.35_0.08_80)] dark:stroke-[oklch(0.25_0.08_80)]" />
        
        {/* Cooling tower */}
        <path d="M 420 150 L 440 100 L 460 100 L 480 150 Z" fill="oklch(0.80 0.02 100)" stroke="oklch(0.65 0.02 100)" strokeWidth="2" className="dark:fill-[oklch(0.35_0.02_100)] dark:stroke-[oklch(0.50_0.02_100)]" />
        <path d="M 440 100 L 445 70 L 455 70 L 460 100" fill="oklch(0.85 0.02 100)" stroke="oklch(0.70 0.02 100)" strokeWidth="1" className="dark:fill-[oklch(0.40_0.02_100)] dark:stroke-[oklch(0.55_0.02_100)]" />
        
        {/* Steam from cooling tower */}
        <ellipse cx="450" cy="60" rx="15" ry="8" fill="oklch(0.90 0.02 100)" opacity="0.7" className="dark:fill-[oklch(0.70_0.02_100)]" />
        <ellipse cx="445" cy="50" rx="12" ry="6" fill="oklch(0.90 0.02 100)" opacity="0.5" className="dark:fill-[oklch(0.70_0.02_100)]" />
        
        {/* Pipes */}
        <line x1="350" y1="125" x2="360" y2="125" stroke="oklch(0.40 0 0)" strokeWidth="3" className="dark:stroke-[oklch(0.60_0_0)]" />
        <path d="M 390 125 L 420 125 L 420 150" stroke="oklch(0.40 0 0)" strokeWidth="3" fill="none" className="dark:stroke-[oklch(0.60_0_0)]" />
        <path d="M 480 150 L 505 150 L 505 200" stroke="oklch(0.40 0 0)" strokeWidth="3" fill="none" className="dark:stroke-[oklch(0.60_0_0)]" />
        
        {/* Power lines */}
        <line x1="390" y1="110" x2="550" y2="50" stroke="oklch(0.40 0 0)" strokeWidth="3" className="dark:stroke-[oklch(0.60_0_0)]" />
        
        {/* Labels */}
        <text x="295" y="90" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Production Well
        </text>
        <text x="330" y="175" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Turbine
        </text>
        <text x="375" y="175" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Generator
        </text>
        <text x="450" y="185" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Cooling Tower
        </text>
        <text x="505" y="190" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Injection Well
        </text>
        <text x="400" y="560" textAnchor="middle" className="fill-white text-sm font-semibold">
          Hot Water/Steam Reservoir
        </text>
        <text x="600" y="45" textAnchor="start" className="fill-foreground text-sm font-medium">
          Electricity
        </text>
        
        {/* Ground level label */}
        <text x="50" y="325" textAnchor="start" className="fill-foreground text-xs font-medium">
          Ground Level
        </text>
        <text x="50" y="475" textAnchor="start" className="fill-white text-xs font-medium">
          1-2 miles deep
        </text>

        {/* Heat indicators */}
        <text x="400" y="540" textAnchor="middle" className="fill-white text-xs">
          300°F+ (150°C+)
        </text>
      </svg>
    </div>
  );
}

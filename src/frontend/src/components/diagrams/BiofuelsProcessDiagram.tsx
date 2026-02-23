/**
 * BiofuelsProcessDiagram illustrates both ethanol production pathway (crops→grinding→fermentation→distillation)
 * and biodiesel production pathway (oils→filtering→transesterification→separation) with dark mode support.
 */
export function BiofuelsProcessDiagram() {
  return (
    <div className="rounded-lg border-2 border-border bg-card p-6 transition-colors">
      <h3 className="mb-4 text-center text-xl font-semibold text-foreground">
        Biofuels Production Pathways
      </h3>
      <svg
        viewBox="0 0 900 600"
        className="mx-auto w-full max-w-4xl"
        role="img"
        aria-labelledby="biofuels-title biofuels-desc"
      >
        <title id="biofuels-title">Biofuels Process Diagram</title>
        <desc id="biofuels-desc">
          Diagram showing ethanol production from crops and biodiesel production from oils
        </desc>

        {/* Ethanol Pathway - Top Half */}
        <text x="450" y="30" textAnchor="middle" className="fill-foreground text-lg font-bold">
          Ethanol Production
        </text>

        {/* Crops */}
        <ellipse cx="100" cy="100" rx="50" ry="40" fill="oklch(0.65 0.15 100)" stroke="oklch(0.55 0.15 100)" strokeWidth="2" className="dark:fill-[oklch(0.45_0.15_100)] dark:stroke-[oklch(0.35_0.15_100)]" />
        <text x="100" y="105" textAnchor="middle" className="fill-white text-xs font-semibold">
          Corn/
        </text>
        <text x="100" y="120" textAnchor="middle" className="fill-white text-xs font-semibold">
          Sugarcane
        </text>
        <text x="100" y="155" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Crops
        </text>

        {/* Grinding */}
        <rect x="200" y="70" width="80" height="60" fill="oklch(0.70 0.02 100)" stroke="oklch(0.55 0.02 100)" strokeWidth="2" className="dark:fill-[oklch(0.35_0.02_100)] dark:stroke-[oklch(0.50_0.02_100)]" />
        <text x="240" y="105" textAnchor="middle" className="fill-foreground text-xs font-semibold">
          Grinding
        </text>
        <text x="240" y="155" textAnchor="middle" className="fill-foreground text-xs font-medium">
          + Enzymes
        </text>

        {/* Fermentation */}
        <rect x="330" y="70" width="80" height="60" fill="oklch(0.60 0.15 220)" stroke="oklch(0.50 0.15 220)" strokeWidth="2" className="dark:fill-[oklch(0.40_0.15_220)] dark:stroke-[oklch(0.30_0.15_220)]" />
        <text x="370" y="105" textAnchor="middle" className="fill-white text-xs font-semibold">
          Fermentation
        </text>
        <text x="370" y="155" textAnchor="middle" className="fill-foreground text-xs font-medium">
          + Yeast
        </text>

        {/* Distillation */}
        <rect x="460" y="70" width="80" height="60" fill="oklch(0.75 0.02 100)" stroke="oklch(0.60 0.02 100)" strokeWidth="2" className="dark:fill-[oklch(0.38_0.02_100)] dark:stroke-[oklch(0.53_0.02_100)]" />
        <text x="500" y="105" textAnchor="middle" className="fill-foreground text-xs font-semibold">
          Distillation
        </text>
        <text x="500" y="155" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Purification
        </text>

        {/* Ethanol product */}
        <ellipse cx="620" cy="100" rx="50" ry="40" fill="oklch(0.85 0.15 85)" stroke="oklch(0.75 0.15 85)" strokeWidth="2" className="dark:fill-[oklch(0.55_0.15_85)] dark:stroke-[oklch(0.45_0.15_85)]" />
        <text x="620" y="105" textAnchor="middle" className="fill-foreground text-xs font-semibold">
          Ethanol
        </text>
        <text x="620" y="155" textAnchor="middle" className="fill-foreground text-xs font-medium">
          E10, E85 Fuel
        </text>

        {/* Arrows for ethanol pathway */}
        <path d="M 150 100 L 200 100" stroke="oklch(0.50 0.08 100)" strokeWidth="2" fill="none" markerEnd="url(#arrow1)" className="dark:stroke-[oklch(0.60_0.08_100)]" />
        <path d="M 280 100 L 330 100" stroke="oklch(0.50 0.08 100)" strokeWidth="2" fill="none" markerEnd="url(#arrow1)" className="dark:stroke-[oklch(0.60_0.08_100)]" />
        <path d="M 410 100 L 460 100" stroke="oklch(0.50 0.08 100)" strokeWidth="2" fill="none" markerEnd="url(#arrow1)" className="dark:stroke-[oklch(0.60_0.08_100)]" />
        <path d="M 540 100 L 570 100" stroke="oklch(0.50 0.08 100)" strokeWidth="2" fill="none" markerEnd="url(#arrow1)" className="dark:stroke-[oklch(0.60_0.08_100)]" />

        {/* Divider line */}
        <line x1="50" y1="250" x2="850" y2="250" stroke="oklch(0.70 0.02 100)" strokeWidth="2" strokeDasharray="5,5" className="dark:stroke-[oklch(0.50_0.02_100)]" />

        {/* Biodiesel Pathway - Bottom Half */}
        <text x="450" y="300" textAnchor="middle" className="fill-foreground text-lg font-bold">
          Biodiesel Production
        </text>

        {/* Oils/Fats */}
        <ellipse cx="100" cy="400" rx="50" ry="40" fill="oklch(0.70 0.15 60)" stroke="oklch(0.60 0.15 60)" strokeWidth="2" className="dark:fill-[oklch(0.50_0.15_60)] dark:stroke-[oklch(0.40_0.15_60)]" />
        <text x="100" y="400" textAnchor="middle" className="fill-white text-xs font-semibold">
          Vegetable
        </text>
        <text x="100" y="415" textAnchor="middle" className="fill-white text-xs font-semibold">
          Oils/Fats
        </text>
        <text x="100" y="455" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Soybean, Canola
        </text>

        {/* Filtering */}
        <rect x="200" y="370" width="80" height="60" fill="oklch(0.70 0.02 100)" stroke="oklch(0.55 0.02 100)" strokeWidth="2" className="dark:fill-[oklch(0.35_0.02_100)] dark:stroke-[oklch(0.50_0.02_100)]" />
        <text x="240" y="405" textAnchor="middle" className="fill-foreground text-xs font-semibold">
          Filtering
        </text>
        <text x="240" y="455" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Remove Impurities
        </text>

        {/* Transesterification */}
        <rect x="330" y="370" width="80" height="60" fill="oklch(0.55 0.12 180)" stroke="oklch(0.45 0.12 180)" strokeWidth="2" className="dark:fill-[oklch(0.35_0.12_180)] dark:stroke-[oklch(0.25_0.12_180)]" />
        <text x="370" y="395" textAnchor="middle" className="fill-white text-[10px] font-semibold">
          Transesterification
        </text>
        <text x="370" y="455" textAnchor="middle" className="fill-foreground text-xs font-medium">
          + Methanol
        </text>

        {/* Separation */}
        <rect x="460" y="370" width="80" height="60" fill="oklch(0.75 0.02 100)" stroke="oklch(0.60 0.02 100)" strokeWidth="2" className="dark:fill-[oklch(0.38_0.02_100)] dark:stroke-[oklch(0.53_0.02_100)]" />
        <text x="500" y="405" textAnchor="middle" className="fill-foreground text-xs font-semibold">
          Separation
        </text>
        <text x="500" y="455" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Washing
        </text>

        {/* Biodiesel product */}
        <ellipse cx="620" cy="400" rx="50" ry="40" fill="oklch(0.80 0.15 60)" stroke="oklch(0.70 0.15 60)" strokeWidth="2" className="dark:fill-[oklch(0.50_0.15_60)] dark:stroke-[oklch(0.40_0.15_60)]" />
        <text x="620" y="405" textAnchor="middle" className="fill-foreground text-xs font-semibold">
          Biodiesel
        </text>
        <text x="620" y="455" textAnchor="middle" className="fill-foreground text-xs font-medium">
          B20, B100 Fuel
        </text>

        {/* Arrows for biodiesel pathway */}
        <path d="M 150 400 L 200 400" stroke="oklch(0.50 0.08 60)" strokeWidth="2" fill="none" markerEnd="url(#arrow2)" className="dark:stroke-[oklch(0.60_0.08_60)]" />
        <path d="M 280 400 L 330 400" stroke="oklch(0.50 0.08 60)" strokeWidth="2" fill="none" markerEnd="url(#arrow2)" className="dark:stroke-[oklch(0.60_0.08_60)]" />
        <path d="M 410 400 L 460 400" stroke="oklch(0.50 0.08 60)" strokeWidth="2" fill="none" markerEnd="url(#arrow2)" className="dark:stroke-[oklch(0.60_0.08_60)]" />
        <path d="M 540 400 L 570 400" stroke="oklch(0.50 0.08 60)" strokeWidth="2" fill="none" markerEnd="url(#arrow2)" className="dark:stroke-[oklch(0.60_0.08_60)]" />

        {/* Uses */}
        <text x="750" y="100" textAnchor="middle" className="fill-foreground text-xs font-medium">
          → Vehicles
        </text>
        <text x="750" y="400" textAnchor="middle" className="fill-foreground text-xs font-medium">
          → Diesel Engines
        </text>

        {/* Arrow markers */}
        <defs>
          <marker
            id="arrow1"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="oklch(0.50 0.08 100)" className="dark:fill-[oklch(0.60_0.08_100)]" />
          </marker>
          <marker
            id="arrow2"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="oklch(0.50 0.08 60)" className="dark:fill-[oklch(0.60_0.08_60)]" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

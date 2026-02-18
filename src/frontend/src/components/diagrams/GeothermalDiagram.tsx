/**
 * GeothermalDiagram shows underground heat extraction and
 * electricity generation from geothermal energy.
 */
export function GeothermalDiagram() {
  return (
    <div className="rounded-lg border-2 border-border bg-card p-6">
      <h3 className="mb-4 text-center text-xl font-semibold">
        Geothermal Power Plant
      </h3>
      <svg
        viewBox="0 0 800 500"
        className="mx-auto w-full max-w-3xl"
        role="img"
        aria-labelledby="geo-title geo-desc"
      >
        <title id="geo-title">Geothermal Energy Diagram</title>
        <desc id="geo-desc">
          Diagram showing underground heat reservoir, production well, steam turbine, and reinjection well
        </desc>

        {/* Ground level */}
        <line x1="0" y1="200" x2="800" y2="200" stroke="oklch(0.5 0.08 80)" strokeWidth="3" />
        <text x="20" y="195" className="fill-foreground text-xs font-medium">Ground Level</text>

        {/* Underground layers */}
        <rect x="0" y="200" width="800" height="100" fill="oklch(0.6 0.08 80)" opacity="0.3" />
        <rect x="0" y="300" width="800" height="100" fill="oklch(0.5 0.08 60)" opacity="0.4" />
        <rect x="0" y="400" width="800" height="100" fill="oklch(0.4 0.12 40)" opacity="0.5" />

        {/* Heat indicators in deep layer */}
        <g>
          <circle cx="200" cy="430" r="8" fill="oklch(0.7 0.25 30)" opacity="0.7" />
          <circle cx="250" cy="450" r="6" fill="oklch(0.7 0.25 30)" opacity="0.7" />
          <circle cx="300" cy="440" r="7" fill="oklch(0.7 0.25 30)" opacity="0.7" />
          <circle cx="350" cy="460" r="8" fill="oklch(0.7 0.25 30)" opacity="0.7" />
          <circle cx="400" cy="445" r="6" fill="oklch(0.7 0.25 30)" opacity="0.7" />
          <circle cx="450" cy="455" r="7" fill="oklch(0.7 0.25 30)" opacity="0.7" />
          <text x="325" y="490" textAnchor="middle" className="fill-foreground text-sm font-semibold">
            Hot Rock & Underground Reservoir (300-700°F)
          </text>
        </g>

        {/* Production well */}
        <rect x="250" y="50" width="30" height="400" fill="oklch(0.5 0 0)" stroke="oklch(0.3 0 0)" strokeWidth="2" />
        <text x="265" y="40" textAnchor="middle" className="fill-foreground text-xs font-semibold">
          Production Well
        </text>

        {/* Steam/hot water rising */}
        <g>
          <path d="M 260 420 Q 258 380 260 340" stroke="oklch(0.85 0.15 30)" strokeWidth="3" fill="none" opacity="0.7" />
          <path d="M 270 420 Q 272 380 270 340" stroke="oklch(0.85 0.15 30)" strokeWidth="3" fill="none" opacity="0.7" />
          <circle cx="260" cy="350" r="4" fill="oklch(0.85 0.15 30)" opacity="0.6" />
          <circle cx="270" cy="370" r="3" fill="oklch(0.85 0.15 30)" opacity="0.6" />
          <circle cx="265" cy="390" r="4" fill="oklch(0.85 0.15 30)" opacity="0.6" />
        </g>

        {/* Power plant building */}
        <rect x="200" y="80" width="180" height="120" fill="oklch(0.75 0 0)" stroke="oklch(0.55 0 0)" strokeWidth="3" rx="8" />
        <text x="290" y="70" textAnchor="middle" className="fill-foreground text-sm font-semibold">
          Power Plant
        </text>

        {/* Turbine */}
        <circle cx="320" cy="140" r="35" fill="oklch(0.55 0.12 150)" stroke="oklch(0.45 0.12 150)" strokeWidth="3" />
        <g transform="translate(320, 140)">
          <path d="M 0 -20 L 8 -8 L 0 0 L -8 -8 Z" fill="oklch(0.45 0.12 150)" />
          <path d="M 20 0 L 8 8 L 0 0 L 8 -8 Z" fill="oklch(0.45 0.12 150)" />
          <path d="M 0 20 L -8 8 L 0 0 L 8 8 Z" fill="oklch(0.45 0.12 150)" />
          <path d="M -20 0 L -8 -8 L 0 0 L -8 8 Z" fill="oklch(0.45 0.12 150)" />
        </g>
        <text x="320" y="190" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Turbine
        </text>

        {/* Generator */}
        <rect x="360" y="120" width="50" height="40" fill="oklch(0.6 0.18 30)" stroke="oklch(0.5 0.18 30)" strokeWidth="2" rx="4" />
        <circle cx="385" cy="140" r="12" fill="oklch(0.7 0.18 30)" />
        <text x="385" y="190" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Generator
        </text>

        {/* Electricity output */}
        <line x1="410" y1="140" x2="460" y2="140" stroke="oklch(0.85 0.15 85)" strokeWidth="4" />
        <path d="M 430 135 L 430 145" stroke="oklch(0.85 0.15 85)" strokeWidth="2" />
        <path d="M 440 135 L 440 145" stroke="oklch(0.85 0.15 85)" strokeWidth="2" />
        <text x="490" y="145" className="fill-foreground text-sm font-semibold">
          Electricity
        </text>

        {/* Cooling tower */}
        <path d="M 420 80 L 440 80 L 450 120 L 410 120 Z" fill="oklch(0.7 0 0)" stroke="oklch(0.5 0 0)" strokeWidth="2" />
        <g>
          <circle cx="425" cy="65" r="3" fill="oklch(0.8 0 0)" opacity="0.6" />
          <circle cx="430" cy="60" r="3" fill="oklch(0.8 0 0)" opacity="0.6" />
          <circle cx="435" cy="55" r="3" fill="oklch(0.8 0 0)" opacity="0.6" />
        </g>
        <text x="430" y="45" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Cooling Tower
        </text>

        {/* Reinjection well */}
        <rect x="520" y="50" width="30" height="400" fill="oklch(0.5 0 0)" stroke="oklch(0.3 0 0)" strokeWidth="2" />
        <text x="535" y="40" textAnchor="middle" className="fill-foreground text-xs font-semibold">
          Injection Well
        </text>

        {/* Water going down */}
        <g>
          <path d="M 530 240 Q 532 280 530 320" stroke="oklch(0.65 0.15 220)" strokeWidth="3" fill="none" markerEnd="url(#arrow-down)" />
          <path d="M 540 240 Q 538 280 540 320" stroke="oklch(0.65 0.15 220)" strokeWidth="3" fill="none" markerEnd="url(#arrow-down)" />
        </g>

        {/* Pipes connecting */}
        <line x1="280" y1="100" x2="320" y2="100" stroke="oklch(0.5 0 0)" strokeWidth="4" />
        <line x1="355" y1="140" x2="360" y2="140" stroke="oklch(0.5 0 0)" strokeWidth="4" />
        <line x1="410" y1="140" x2="430" y2="140" stroke="oklch(0.5 0 0)" strokeWidth="4" />
        <line x1="430" y1="140" x2="430" y2="120" stroke="oklch(0.5 0 0)" strokeWidth="4" />
        <line x1="430" y1="200" x2="430" y2="220" stroke="oklch(0.5 0 0)" strokeWidth="4" />
        <line x1="430" y1="220" x2="520" y2="220" stroke="oklch(0.5 0 0)" strokeWidth="4" />

        {/* Process labels */}
        <g className="text-xs">
          <text x="600" y="250" className="fill-foreground font-semibold">Process:</text>
          <text x="600" y="275" className="fill-muted-foreground">1. Hot water/steam rises</text>
          <text x="600" y="295" className="fill-muted-foreground">2. Steam spins turbine</text>
          <text x="600" y="315" className="fill-muted-foreground">3. Generator makes electricity</text>
          <text x="600" y="335" className="fill-muted-foreground">4. Water cools & returns</text>
          <text x="600" y="355" className="fill-muted-foreground">5. Sustainable cycle</text>
        </g>

        {/* Arrow markers */}
        <defs>
          <marker
            id="arrow-down"
            markerWidth="10"
            markerHeight="10"
            refX="5"
            refY="9"
            orient="auto"
          >
            <polygon points="0 0, 10 0, 5 10" fill="oklch(0.65 0.15 220)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

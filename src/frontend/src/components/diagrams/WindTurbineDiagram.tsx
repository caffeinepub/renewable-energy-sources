/**
 * WindTurbineDiagram illustrates the components of a wind turbine
 * and how wind energy is converted to electricity.
 */
export function WindTurbineDiagram() {
  return (
    <div className="rounded-lg border-2 border-border bg-card p-6">
      <h3 className="mb-4 text-center text-xl font-semibold">
        Wind Turbine Components
      </h3>
      <svg
        viewBox="0 0 800 500"
        className="mx-auto w-full max-w-3xl"
        role="img"
        aria-labelledby="wind-title wind-desc"
      >
        <title id="wind-title">Wind Turbine Diagram</title>
        <desc id="wind-desc">
          Diagram showing wind turbine components: blades, rotor, shaft, gearbox, and generator
        </desc>

        {/* Wind arrows */}
        <g>
          <path d="M 50 150 L 120 150" stroke="oklch(0.7 0.1 200)" strokeWidth="3" markerEnd="url(#arrow-wind)" />
          <path d="M 50 200 L 120 200" stroke="oklch(0.7 0.1 200)" strokeWidth="3" markerEnd="url(#arrow-wind)" />
          <path d="M 50 250 L 120 250" stroke="oklch(0.7 0.1 200)" strokeWidth="3" markerEnd="url(#arrow-wind)" />
          <text x="85" y="135" textAnchor="middle" className="fill-foreground text-sm font-semibold">
            Wind
          </text>
        </g>

        {/* Tower */}
        <rect x="340" y="200" width="60" height="220" fill="oklch(0.85 0 0)" stroke="oklch(0.6 0 0)" strokeWidth="2" />
        <rect x="330" y="420" width="80" height="20" fill="oklch(0.7 0 0)" stroke="oklch(0.5 0 0)" strokeWidth="2" />
        <text x="370" y="455" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Tower
        </text>

        {/* Nacelle (housing) */}
        <rect x="280" y="150" width="180" height="60" fill="oklch(0.75 0 0)" stroke="oklch(0.55 0 0)" strokeWidth="3" rx="8" />
        <text x="370" y="135" textAnchor="middle" className="fill-foreground text-sm font-semibold">
          Nacelle (Housing)
        </text>

        {/* Rotor hub */}
        <circle cx="250" cy="180" r="30" fill="oklch(0.65 0 0)" stroke="oklch(0.45 0 0)" strokeWidth="3" />
        <text x="250" y="245" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Rotor Hub
        </text>

        {/* Blades */}
        <g>
          {/* Blade 1 (top) */}
          <ellipse cx="250" cy="80" rx="15" ry="70" fill="oklch(0.9 0 0)" stroke="oklch(0.6 0 0)" strokeWidth="2" />
          <text x="270" y="60" className="fill-foreground text-xs font-medium">Blade</text>
          
          {/* Blade 2 (bottom-left) */}
          <ellipse cx="190" cy="230" rx="70" ry="15" fill="oklch(0.9 0 0)" stroke="oklch(0.6 0 0)" strokeWidth="2" transform="rotate(-60 190 230)" />
          
          {/* Blade 3 (bottom-right) */}
          <ellipse cx="310" cy="230" rx="70" ry="15" fill="oklch(0.9 0 0)" stroke="oklch(0.6 0 0)" strokeWidth="2" transform="rotate(60 310 230)" />
        </g>

        {/* Low-speed shaft */}
        <rect x="280" y="172" width="50" height="16" fill="oklch(0.5 0 0)" stroke="oklch(0.3 0 0)" strokeWidth="2" />
        <text x="305" y="165" textAnchor="middle" className="fill-foreground text-[10px] font-medium">
          Low-Speed Shaft
        </text>

        {/* Gearbox */}
        <rect x="330" y="165" width="50" height="30" fill="oklch(0.6 0.15 30)" stroke="oklch(0.5 0.15 30)" strokeWidth="2" rx="4" />
        <circle cx="345" cy="180" r="8" fill="oklch(0.5 0.15 30)" stroke="oklch(0.4 0.15 30)" strokeWidth="1" />
        <circle cx="365" cy="180" r="5" fill="oklch(0.5 0.15 30)" stroke="oklch(0.4 0.15 30)" strokeWidth="1" />
        <text x="355" y="210" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Gearbox
        </text>

        {/* High-speed shaft */}
        <rect x="380" y="174" width="40" height="12" fill="oklch(0.5 0 0)" stroke="oklch(0.3 0 0)" strokeWidth="2" />
        <text x="400" y="170" textAnchor="middle" className="fill-foreground text-[10px] font-medium">
          High-Speed Shaft
        </text>

        {/* Generator */}
        <rect x="420" y="160" width="60" height="40" fill="oklch(0.6 0.18 30)" stroke="oklch(0.5 0.18 30)" strokeWidth="3" rx="6" />
        <circle cx="450" cy="180" r="12" fill="oklch(0.7 0.18 30)" stroke="oklch(0.5 0.18 30)" strokeWidth="2" />
        <path d="M 445 175 L 450 180 L 455 175" stroke="oklch(0.3 0 0)" strokeWidth="1.5" fill="none" />
        <path d="M 445 185 L 450 180 L 455 185" stroke="oklch(0.3 0 0)" strokeWidth="1.5" fill="none" />
        <text x="450" y="220" textAnchor="middle" className="fill-foreground text-xs font-medium">
          Generator
        </text>

        {/* Electricity output */}
        <line x1="480" y1="180" x2="520" y2="180" stroke="oklch(0.85 0.15 85)" strokeWidth="3" />
        <path d="M 495 175 L 495 185" stroke="oklch(0.85 0.15 85)" strokeWidth="2" fill="none" />
        <path d="M 500 175 L 500 185" stroke="oklch(0.85 0.15 85)" strokeWidth="2" fill="none" />
        <path d="M 505 175 L 505 185" stroke="oklch(0.85 0.15 85)" strokeWidth="2" fill="none" />
        <text x="560" y="185" className="fill-foreground text-sm font-semibold">
          Electricity
        </text>

        {/* Process flow */}
        <g className="text-xs">
          <text x="550" y="280" className="fill-foreground font-semibold">Energy Conversion Process:</text>
          <text x="550" y="305" className="fill-muted-foreground">1. Wind → Kinetic Energy (moving air)</text>
          <text x="550" y="325" className="fill-muted-foreground">2. Blades Rotate → Mechanical Energy</text>
          <text x="550" y="345" className="fill-muted-foreground">3. Gearbox → Increases rotation speed</text>
          <text x="550" y="365" className="fill-muted-foreground">4. Generator → Electrical Energy</text>
        </g>

        {/* Rotation indicator */}
        <g>
          <path
            d="M 250 140 A 40 40 0 0 1 290 180"
            fill="none"
            stroke="oklch(0.7 0.2 30)"
            strokeWidth="2"
            strokeDasharray="5,5"
            markerEnd="url(#arrow-rotation)"
          />
          <text x="270" y="125" className="fill-earth-coral text-[10px] font-medium">
            Rotation
          </text>
        </g>

        {/* Arrow markers */}
        <defs>
          <marker
            id="arrow-wind"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="oklch(0.7 0.1 200)" />
          </marker>
          <marker
            id="arrow-rotation"
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill="oklch(0.7 0.2 30)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

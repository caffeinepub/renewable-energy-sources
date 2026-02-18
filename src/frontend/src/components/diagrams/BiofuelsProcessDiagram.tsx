/**
 * BiofuelsProcessDiagram illustrates the production of ethanol and biodiesel
 * from organic materials through fermentation and chemical processes.
 */
export function BiofuelsProcessDiagram() {
  return (
    <div className="rounded-lg border-2 border-border bg-card p-6">
      <h3 className="mb-4 text-center text-xl font-semibold">
        Biofuels Production Process
      </h3>
      <svg
        viewBox="0 0 900 500"
        className="mx-auto w-full max-w-4xl"
        role="img"
        aria-labelledby="biofuels-title biofuels-desc"
      >
        <title id="biofuels-title">Biofuels Production Process Diagram</title>
        <desc id="biofuels-desc">
          Diagram showing two pathways: ethanol production from crops through fermentation and distillation, and biodiesel production from oils through transesterification
        </desc>

        {/* Title sections */}
        <text x="225" y="30" textAnchor="middle" className="fill-foreground text-lg font-bold">
          ETHANOL PATHWAY
        </text>
        <text x="675" y="30" textAnchor="middle" className="fill-foreground text-lg font-bold">
          BIODIESEL PATHWAY
        </text>

        {/* ETHANOL PATHWAY */}
        
        {/* Step 1: Crops/Feedstock */}
        <g>
          <rect x="150" y="60" width="150" height="60" fill="oklch(0.7 0.15 120)" stroke="oklch(0.6 0.15 120)" strokeWidth="2" rx="8" />
          {/* Corn kernels */}
          <circle cx="180" cy="80" r="6" fill="oklch(0.85 0.15 85)" />
          <circle cx="200" cy="85" r="7" fill="oklch(0.85 0.15 85)" />
          <circle cx="220" cy="80" r="6" fill="oklch(0.85 0.15 85)" />
          <circle cx="240" cy="85" r="7" fill="oklch(0.85 0.15 85)" />
          <circle cx="260" cy="80" r="6" fill="oklch(0.85 0.15 85)" />
          <circle cx="190" cy="100" r="7" fill="oklch(0.85 0.15 85)" />
          <circle cx="210" cy="105" r="6" fill="oklch(0.85 0.15 85)" />
          <circle cx="230" cy="100" r="7" fill="oklch(0.85 0.15 85)" />
          <circle cx="250" cy="105" r="6" fill="oklch(0.85 0.15 85)" />
          <text x="225" y="145" textAnchor="middle" className="fill-foreground text-sm font-semibold">
            Crops (Corn, Sugarcane)
          </text>
        </g>

        {/* Arrow down */}
        <path d="M 225 120 L 225 160" stroke="oklch(0.5 0 0)" strokeWidth="3" markerEnd="url(#arrow-bio)" />

        {/* Step 2: Grinding/Mashing */}
        <g>
          <rect x="150" y="160" width="150" height="60" fill="oklch(0.65 0.12 40)" stroke="oklch(0.55 0.12 40)" strokeWidth="2" rx="8" />
          <text x="225" y="185" textAnchor="middle" className="fill-white text-xs font-semibold">
            Grinding & Enzymes
          </text>
          <text x="225" y="205" textAnchor="middle" className="fill-white text-[10px]">
            (Break down starches
          </text>
          <text x="225" y="217" textAnchor="middle" className="fill-white text-[10px]">
            into sugars)
          </text>
        </g>

        {/* Arrow down */}
        <path d="M 225 220 L 225 260" stroke="oklch(0.5 0 0)" strokeWidth="3" markerEnd="url(#arrow-bio)" />

        {/* Step 3: Fermentation */}
        <g>
          <rect x="150" y="260" width="150" height="60" fill="oklch(0.6 0.18 30)" stroke="oklch(0.5 0.18 30)" strokeWidth="2" rx="8" />
          {/* Bubbles */}
          <circle cx="180" cy="285" r="4" fill="oklch(0.9 0 0)" opacity="0.6" />
          <circle cx="200" cy="280" r="5" fill="oklch(0.9 0 0)" opacity="0.6" />
          <circle cx="220" cy="285" r="4" fill="oklch(0.9 0 0)" opacity="0.6" />
          <circle cx="240" cy="280" r="5" fill="oklch(0.9 0 0)" opacity="0.6" />
          <circle cx="260" cy="285" r="4" fill="oklch(0.9 0 0)" opacity="0.6" />
          <text x="225" y="310" textAnchor="middle" className="fill-white text-xs font-semibold">
            Fermentation
          </text>
          <text x="225" y="325" textAnchor="middle" className="fill-white text-[10px]">
            (Yeast converts sugars)
          </text>
        </g>

        {/* Arrow down */}
        <path d="M 225 320 L 225 360" stroke="oklch(0.5 0 0)" strokeWidth="3" markerEnd="url(#arrow-bio)" />

        {/* Step 4: Distillation */}
        <g>
          <rect x="150" y="360" width="150" height="60" fill="oklch(0.55 0.15 260)" stroke="oklch(0.45 0.15 260)" strokeWidth="2" rx="8" />
          {/* Steam/vapor */}
          <path d="M 180 380 Q 180 370 185 365" stroke="oklch(0.9 0 0)" strokeWidth="2" fill="none" opacity="0.7" />
          <path d="M 200 380 Q 200 370 205 365" stroke="oklch(0.9 0 0)" strokeWidth="2" fill="none" opacity="0.7" />
          <path d="M 220 380 Q 220 370 225 365" stroke="oklch(0.9 0 0)" strokeWidth="2" fill="none" opacity="0.7" />
          <path d="M 240 380 Q 240 370 245 365" stroke="oklch(0.9 0 0)" strokeWidth="2" fill="none" opacity="0.7" />
          <path d="M 260 380 Q 260 370 265 365" stroke="oklch(0.9 0 0)" strokeWidth="2" fill="none" opacity="0.7" />
          <text x="225" y="400" textAnchor="middle" className="fill-white text-xs font-semibold">
            Distillation
          </text>
          <text x="225" y="415" textAnchor="middle" className="fill-white text-[10px]">
            (Separate & purify)
          </text>
        </g>

        {/* Arrow down */}
        <path d="M 225 420 L 225 460" stroke="oklch(0.5 0 0)" strokeWidth="3" markerEnd="url(#arrow-bio)" />

        {/* Final Product: Ethanol */}
        <g>
          <rect x="175" y="460" width="100" height="30" fill="oklch(0.75 0.15 85)" stroke="oklch(0.65 0.15 85)" strokeWidth="2" rx="6" />
          <text x="225" y="480" textAnchor="middle" className="fill-foreground text-sm font-bold">
            ETHANOL
          </text>
        </g>

        {/* BIODIESEL PATHWAY */}
        
        {/* Step 1: Oils/Fats */}
        <g>
          <rect x="600" y="60" width="150" height="60" fill="oklch(0.7 0.15 60)" stroke="oklch(0.6 0.15 60)" strokeWidth="2" rx="8" />
          {/* Oil drops */}
          <ellipse cx="640" cy="85" rx="12" ry="15" fill="oklch(0.85 0.15 50)" opacity="0.8" />
          <ellipse cx="670" cy="90" rx="14" ry="17" fill="oklch(0.85 0.15 50)" opacity="0.8" />
          <ellipse cx="700" cy="85" rx="12" ry="15" fill="oklch(0.85 0.15 50)" opacity="0.8" />
          <ellipse cx="730" cy="90" rx="13" ry="16" fill="oklch(0.85 0.15 50)" opacity="0.8" />
          <text x="675" y="145" textAnchor="middle" className="fill-foreground text-sm font-semibold">
            Oils & Fats
          </text>
        </g>

        {/* Arrow down */}
        <path d="M 675 120 L 675 160" stroke="oklch(0.5 0 0)" strokeWidth="3" markerEnd="url(#arrow-bio)" />

        {/* Step 2: Filtering */}
        <g>
          <rect x="600" y="160" width="150" height="60" fill="oklch(0.65 0.12 200)" stroke="oklch(0.55 0.12 200)" strokeWidth="2" rx="8" />
          <text x="675" y="185" textAnchor="middle" className="fill-white text-xs font-semibold">
            Filtering
          </text>
          <text x="675" y="205" textAnchor="middle" className="fill-white text-[10px]">
            (Remove impurities)
          </text>
        </g>

        {/* Arrow down */}
        <path d="M 675 220 L 675 260" stroke="oklch(0.5 0 0)" strokeWidth="3" markerEnd="url(#arrow-bio)" />

        {/* Step 3: Transesterification */}
        <g>
          <rect x="600" y="260" width="150" height="60" fill="oklch(0.6 0.18 340)" stroke="oklch(0.5 0.18 340)" strokeWidth="2" rx="8" />
          <text x="675" y="280" textAnchor="middle" className="fill-white text-xs font-semibold">
            Transesterification
          </text>
          <text x="675" y="295" textAnchor="middle" className="fill-white text-[10px]">
            (Mix with alcohol
          </text>
          <text x="675" y="307" textAnchor="middle" className="fill-white text-[10px]">
            & catalyst)
          </text>
        </g>

        {/* Arrow down */}
        <path d="M 675 320 L 675 360" stroke="oklch(0.5 0 0)" strokeWidth="3" markerEnd="url(#arrow-bio)" />

        {/* Step 4: Separation */}
        <g>
          <rect x="600" y="360" width="150" height="60" fill="oklch(0.55 0.15 180)" stroke="oklch(0.45 0.15 180)" strokeWidth="2" rx="8" />
          {/* Layers */}
          <rect x="620" y="375" width="110" height="15" fill="oklch(0.75 0.15 50)" opacity="0.7" />
          <rect x="620" y="390" width="110" height="15" fill="oklch(0.65 0.1 30)" opacity="0.7" />
          <text x="675" y="372" textAnchor="middle" className="fill-white text-[10px]">
            Biodiesel (top)
          </text>
          <text x="675" y="418" textAnchor="middle" className="fill-white text-[10px]">
            Glycerin (bottom)
          </text>
        </g>

        {/* Arrow down */}
        <path d="M 675 420 L 675 460" stroke="oklch(0.5 0 0)" strokeWidth="3" markerEnd="url(#arrow-bio)" />

        {/* Final Product: Biodiesel */}
        <g>
          <rect x="625" y="460" width="100" height="30" fill="oklch(0.75 0.15 50)" stroke="oklch(0.65 0.15 50)" strokeWidth="2" rx="6" />
          <text x="675" y="480" textAnchor="middle" className="fill-foreground text-sm font-bold">
            BIODIESEL
          </text>
        </g>

        {/* Bottom section: Uses */}
        <g>
          <text x="450" y="35" textAnchor="middle" className="fill-muted-foreground text-sm font-semibold">
            ↓ USES ↓
          </text>
          
          {/* Transportation */}
          <rect x="100" y="50" width="700" height="1" fill="oklch(0.7 0 0)" opacity="0.2" />
          
          {/* Vehicle icon */}
          <g transform="translate(380, 515)">
            <rect x="0" y="0" width="140" height="50" fill="oklch(0.6 0.15 220)" stroke="oklch(0.5 0.15 220)" strokeWidth="2" rx="6" />
            <circle cx="30" cy="45" r="8" fill="oklch(0.3 0 0)" />
            <circle cx="110" cy="45" r="8" fill="oklch(0.3 0 0)" />
            <rect x="15" y="10" width="110" height="25" fill="oklch(0.7 0.1 220)" rx="3" />
            <text x="70" y="27" textAnchor="middle" className="fill-foreground text-xs font-semibold">
              Transportation
            </text>
          </g>
          
          {/* Power plant icon */}
          <g transform="translate(550, 515)">
            <rect x="0" y="0" width="140" height="50" fill="oklch(0.6 0.15 30)" stroke="oklch(0.5 0.15 30)" strokeWidth="2" rx="6" />
            <rect x="50" y="15" width="40" height="30" fill="oklch(0.7 0.1 30)" />
            <rect x="55" y="5" width="10" height="15" fill="oklch(0.7 0.1 30)" />
            <rect x="75" y="5" width="10" height="15" fill="oklch(0.7 0.1 30)" />
            <text x="70" y="27" textAnchor="middle" className="fill-foreground text-xs font-semibold">
              Power Plants
            </text>
          </g>
          
          {/* Heating icon */}
          <g transform="translate(210, 515)">
            <rect x="0" y="0" width="140" height="50" fill="oklch(0.6 0.15 10)" stroke="oklch(0.5 0.15 10)" strokeWidth="2" rx="6" />
            {/* Flame */}
            <path d="M 60 30 Q 60 20 65 15 Q 63 22 65 30 Z" fill="oklch(0.75 0.25 40)" />
            <path d="M 70 30 Q 70 18 75 12 Q 73 20 75 30 Z" fill="oklch(0.8 0.25 50)" />
            <path d="M 80 30 Q 80 20 85 15 Q 83 22 85 30 Z" fill="oklch(0.75 0.25 40)" />
            <text x="70" y="27" textAnchor="middle" className="fill-foreground text-xs font-semibold">
              Heating
            </text>
          </g>
        </g>

        {/* Arrow marker definition */}
        <defs>
          <marker
            id="arrow-bio"
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

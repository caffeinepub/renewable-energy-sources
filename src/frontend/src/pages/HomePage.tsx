import { Link } from '@tanstack/react-router';
import { SITE_NAME } from '@/constants/site';

/**
 * Energy topic cards configuration with images and routes
 */
const energyCards = [
  {
    title: 'Solar Energy',
    image: '/assets/generated/solar-panels-card.dim_1600x900.png',
    alt: 'Solar panels capturing sunlight on a sunny day',
    path: '/solar',
  },
  {
    title: 'Hydropower & Tidal Energy',
    image: '/assets/generated/hydro-dam-card.dim_1600x900.png',
    alt: 'Hydroelectric dam with flowing water generating power',
    path: '/hydro',
  },
  {
    title: 'Wind Energy',
    image: '/assets/generated/wind-turbine-card.dim_1600x900.png',
    alt: 'Modern wind turbines on a landscape generating clean energy',
    path: '/wind',
  },
  {
    title: 'Geothermal Energy',
    image: '/assets/generated/geothermal-plant-card.dim_1600x900.png',
    alt: 'Geothermal power plant with steam rising from underground heat',
    path: '/geothermal',
  },
  {
    title: 'Biomass Energy',
    image: '/assets/generated/biomass-plant-card.dim_1600x900.png',
    alt: 'Biomass power plant processing organic materials for energy',
    path: '/biomass',
  },
  {
    title: 'Biofuels',
    image: '/assets/generated/biofuel-production-card-fixed.dim_1600x900.png',
    alt: 'Biofuel production with corn and processing equipment',
    path: '/biofuels',
  },
];

/**
 * HomePage displays tall vertical interactive image strips side-by-side,
 * each linking to a detailed page about a renewable energy topic.
 */
export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col">
      {/* Hero Section */}
      <div className="bg-background py-8 text-center">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {SITE_NAME}
        </h1>
        <p className="mx-auto max-w-2xl px-4 text-base text-muted-foreground sm:text-lg">
          Explore the power of clean, sustainable energy sources that are shaping our future.
          Click on any topic below to learn more.
        </p>
      </div>

      {/* Vertical Strips Container */}
      <div className="flex flex-1 flex-col overflow-x-auto md:flex-row">
        {energyCards.map((card) => (
          <Link
            key={card.path}
            to={card.path}
            className="group relative flex-1 overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 hover:flex-[1.2] hover:shadow-2xl"
            onKeyDown={(e) => {
              if (e.key === ' ') {
                e.preventDefault();
                e.currentTarget.click();
              }
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={card.image}
                alt={card.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-opacity duration-300 group-hover:from-black/70 group-hover:via-black/30" />

            {/* Title */}
            <div className="relative flex h-full min-h-[300px] items-end p-6 md:min-h-[500px] lg:min-h-[600px]">
              <h2 className="text-2xl font-bold text-white drop-shadow-2xl transition-transform duration-300 group-hover:scale-105 sm:text-3xl lg:text-4xl">
                {card.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

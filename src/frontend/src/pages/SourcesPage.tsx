/**
 * SourcesPage lists curated educational resources with simplified high-school-level
 * descriptions organized by category with dark mode support.
 */
export default function SourcesPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">Educational Resources</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Explore these trusted sources to learn more about renewable energy and sustainability.
        </p>

        {/* Government Resources */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Government Resources</h2>
          <div className="space-y-4">
            <ResourceCard
              title="U.S. Department of Energy - Energy Efficiency & Renewable Energy"
              description="Official government resource with detailed information about all types of renewable energy, research programs, and energy-saving tips."
              url="https://www.energy.gov/eere/office-energy-efficiency-renewable-energy"
            />
            <ResourceCard
              title="U.S. Energy Information Administration (EIA)"
              description="Provides data, analysis, and forecasts about energy production and consumption in the United States, including renewable energy statistics."
              url="https://www.eia.gov/renewable/"
            />
            <ResourceCard
              title="National Renewable Energy Laboratory (NREL)"
              description="Leading research lab for renewable energy and energy efficiency, with educational materials and research publications."
              url="https://www.nrel.gov/"
            />
          </div>
        </section>

        {/* International Organizations */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">International Organizations</h2>
          <div className="space-y-4">
            <ResourceCard
              title="International Renewable Energy Agency (IRENA)"
              description="Global organization supporting countries in their transition to renewable energy, with reports and data from around the world."
              url="https://www.irena.org/"
            />
            <ResourceCard
              title="International Energy Agency (IEA)"
              description="Provides analysis and data on global energy trends, including renewable energy adoption and climate change."
              url="https://www.iea.org/topics/renewables"
            />
          </div>
        </section>

        {/* Educational Institutions */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Educational Institutions</h2>
          <div className="space-y-4">
            <ResourceCard
              title="NASA Climate Kids"
              description="Fun, easy-to-understand information about climate, energy, and the environment designed for students."
              url="https://climatekids.nasa.gov/"
            />
            <ResourceCard
              title="National Geographic - Renewable Energy"
              description="Articles, videos, and interactive content about renewable energy and environmental science."
              url="https://www.nationalgeographic.com/environment/topic/renewable-energy"
            />
          </div>
        </section>

        {/* Non-Profit Organizations */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Non-Profit Organizations</h2>
          <div className="space-y-4">
            <ResourceCard
              title="Union of Concerned Scientists - Renewable Energy"
              description="Science-based information about renewable energy benefits, policies, and environmental impacts."
              url="https://www.ucsusa.org/clean-energy"
            />
            <ResourceCard
              title="American Council on Renewable Energy (ACORE)"
              description="Organization dedicated to building a secure and prosperous America with clean, renewable energy."
              url="https://www.acore.org/"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

interface ResourceCardProps {
  title: string;
  description: string;
  url: string;
}

function ResourceCard({ title, description, url }: ResourceCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg dark:bg-card/50"
    >
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mb-3 text-sm text-muted-foreground">{description}</p>
      <span className="inline-flex items-center text-sm font-medium text-primary hover:underline">
        Visit Resource
        <svg
          className="ml-1 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </span>
    </a>
  );
}

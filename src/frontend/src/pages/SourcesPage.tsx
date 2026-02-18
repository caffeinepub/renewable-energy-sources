import { ExternalLink, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

/**
 * Educational resources and references for renewable energy topics
 */
const sources = [
  {
    category: 'Government & Educational Resources',
    items: [
      {
        title: 'U.S. Department of Energy - Energy Efficiency & Renewable Energy',
        description: 'Complete information on all types of renewable energy technologies and research.',
        url: 'https://www.energy.gov/eere/office-energy-efficiency-renewable-energy',
      },
      {
        title: 'National Renewable Energy Laboratory (NREL)',
        description: 'Top research center for renewable energy and energy efficiency.',
        url: 'https://www.nrel.gov/',
      },
      {
        title: 'U.S. Energy Information Administration (EIA)',
        description: 'Official energy statistics and analysis from the U.S. government.',
        url: 'https://www.eia.gov/energyexplained/renewable-sources/',
      },
    ],
  },
  {
    category: 'International Organizations',
    items: [
      {
        title: 'International Renewable Energy Agency (IRENA)',
        description: 'Global organization helping countries switch to renewable energy.',
        url: 'https://www.irena.org/',
      },
      {
        title: 'International Energy Agency (IEA) - Renewables',
        description: 'International analysis and data on renewable energy markets and policies.',
        url: 'https://www.iea.org/topics/renewables',
      },
    ],
  },
  {
    category: 'Educational Institutions',
    items: [
      {
        title: 'MIT Energy Initiative',
        description: 'Research and education on energy challenges and solutions from MIT.',
        url: 'https://energy.mit.edu/',
      },
      {
        title: 'Stanford Energy',
        description: 'Stanford University\'s research and educational programs on energy and environment.',
        url: 'https://energy.stanford.edu/',
      },
    ],
  },
  {
    category: 'Non-Profit Organizations',
    items: [
      {
        title: 'Union of Concerned Scientists - Renewable Energy',
        description: 'Science-based analysis and support for clean energy solutions.',
        url: 'https://www.ucsusa.org/clean-energy',
      },
      {
        title: 'American Council on Renewable Energy (ACORE)',
        description: 'National non-profit organization working to build a secure renewable energy economy.',
        url: 'https://www.acore.org/',
      },
    ],
  },
];

/**
 * SourcesPage provides a curated list of reputable educational resources
 * and references about renewable energy topics.
 */
export default function SourcesPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-earth-green/10 p-4">
              <BookOpen className="h-12 w-12 text-earth-green" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Sources & References</h1>
          <p className="text-lg text-muted-foreground">
            Check out these trusted educational resources to learn more about renewable energy. All sources are reliable organizations that provide accurate, science-based information.
          </p>
        </div>

        {/* Sources by Category */}
        <div className="space-y-8">
          {sources.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="mb-4 text-2xl font-semibold">{category.category}</h2>
              <div className="space-y-4">
                {category.items.map((source, sourceIndex) => (
                  <Card key={sourceIndex} className="transition-shadow hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-start justify-between gap-4">
                        <span className="text-lg">{source.title}</span>
                        <ExternalLink className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                      </CardTitle>
                      <CardDescription>{source.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-earth-green hover:underline"
                      >
                        Visit Website
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {categoryIndex < sources.length - 1 && <Separator className="mt-8" />}
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <Card className="mt-12 border-earth-green/20 bg-earth-green/5">
          <CardHeader>
            <CardTitle className="text-lg">About These Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              The sources listed above are carefully chosen from government agencies, educational institutions, and trusted non-profit organizations. They provide accurate, peer-reviewed, and current information about renewable energy technologies, research, and policies. Always check information from multiple sources when doing research.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { BiomassProcessDiagram } from '@/components/diagrams/BiomassProcessDiagram';

/**
 * BiomassEnergyPage explains biomass energy with simplified high-school-level text
 * and includes the process flow diagram with dark mode support.
 */
export default function BiomassEnergyPage() {
  return (
    <div className="container py-12">
      <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Biomass Energy</h1>
        <p className="lead text-muted-foreground">
          Converting organic materials into clean, renewable energy through combustion and other processes.
        </p>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold text-foreground">What is Biomass?</h2>
          
          <p className="text-foreground/90">
            Biomass is organic material that comes from plants and animals. "Organic" means it was once living.
            Examples of biomass include wood, crops, food waste, animal waste, and yard trimmings. All of these
            materials store energy from the sun. Plants capture sunlight through photosynthesis and store it as
            chemical energy. When we burn biomass or break it down, we release that stored energy.
          </p>

          <h3 className="text-2xl font-medium text-foreground">How Biomass Energy Works</h3>
          <p className="text-foreground/90">
            The most common way to get energy from biomass is by burning it. When biomass burns, it releases
            heat. This heat can warm buildings directly. It can also be used to make electricity. In a biomass
            power plant, biomass fuel is burned in a large furnace. The heat from burning boils water in a
            boiler. This creates steam. The steam spins a turbine connected to a generator. The generator
            makes electricity. After the steam spins the turbine, it cools down and turns back into water.
            The water goes back to the boiler to be heated again.
          </p>

          <h3 className="text-2xl font-medium text-foreground">Types of Biomass Fuel</h3>
          <p className="text-foreground/90">
            Many different materials can be used as biomass fuel. Wood and wood waste from sawmills are very
            common. Agricultural waste like corn stalks, wheat straw, and rice husks can be burned. Energy
            crops are plants grown specifically for fuel, like switchgrass and fast-growing trees. Even garbage
            and landfill waste can be burned to make energy. Animal waste from farms can be turned into biogas,
            which burns like natural gas.
          </p>

          <h3 className="text-2xl font-medium text-foreground">Is Biomass Renewable?</h3>
          <p className="text-foreground/90">
            Biomass is considered renewable because we can grow more of it. Trees can be replanted. Crops grow
            every year. Waste is always being produced. However, biomass does release carbon dioxide when it
            burns. The key is that plants absorb carbon dioxide as they grow. If we plant new trees and crops
            to replace what we burn, the carbon cycle stays balanced. This makes biomass much cleaner than
            fossil fuels like coal and oil, which release carbon that has been stored underground for millions
            of years.
          </p>

          {/* Diagram */}
          <div className="not-prose my-8">
            <BiomassProcessDiagram />
          </div>
        </section>
      </article>
    </div>
  );
}

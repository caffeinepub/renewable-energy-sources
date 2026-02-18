import { BiomassProcessDiagram } from '@/components/diagrams/BiomassProcessDiagram';

/**
 * BiomassEnergyPage explains how organic materials are converted
 * into electricity through combustion and thermal processes.
 */
export default function BiomassEnergyPage() {
  return (
    <div className="container py-12">
      <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
        <h1 className="text-4xl font-bold tracking-tight">Biomass Energy</h1>
        <p className="lead text-muted-foreground">
          Converting organic materials into renewable energy through natural processes.
        </p>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold">Understanding Biomass Energy</h2>
          
          <h3 className="text-2xl font-medium">What is Biomass?</h3>
          <p>
            Biomass is organic material from plants and animals. It includes any plant or animal matter that can be turned into energy. Biomass is renewable because plants and trees can be regrown, and organic waste is always being produced. When we use biomass for energy, we're using stored solar energy—plants capture energy from the sun through photosynthesis and store it in their tissues. This stored energy can then be released and turned into electricity or heat.
          </p>

          <h3 className="text-2xl font-medium">Organic Materials Used</h3>
          <p>
            Many types of organic materials can be used as biomass fuel. Wood and wood waste (like sawdust, bark, and wood chips from lumber mills) are common sources. Agricultural crops and their waste—such as corn stalks, wheat straw, rice husks, and sugarcane leftovers—are also widely used. Other biomass sources include energy crops (plants grown just for fuel, like switchgrass), food waste from homes and restaurants, animal manure from farms, and even algae. Each type of biomass has different energy content, but all can be turned into useful energy.
          </p>

          <h3 className="text-2xl font-medium">Combustion and Processing</h3>
          <p>
            The most common way to get energy from biomass is by burning it. Biomass is burned in special furnaces or boilers designed to handle organic materials well. Before burning, the biomass is often processed to improve its energy output. This might include drying it to remove moisture (wet biomass doesn't burn well), chopping or grinding it into smaller pieces for better burning, or pressing it into pellets or briquettes for easier handling and storage. Some biomass can also be turned into gas through a process called gasification, where heat and limited oxygen break down the organic material into burnable gases.
          </p>

          <h3 className="text-2xl font-medium">Heat → Steam → Turbine → Electricity</h3>
          <p>
            When biomass burns, it releases heat energy. This heat is used to boil water in large boilers, creating high-pressure steam. The steam then goes through pipes to a steam turbine—a machine with many blades arranged in rows. As the high-pressure steam rushes past these blades, it makes the turbine spin rapidly. The spinning turbine connects to a generator, which turns the mechanical energy of rotation into electrical energy through electromagnetic induction. After passing through the turbine, the steam is cooled and turns back into water, which returns to the boiler to be heated again. The electricity is sent through transformers and power lines to provide energy for homes, schools, and businesses.
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

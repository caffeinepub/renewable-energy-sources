import { GeothermalDiagram } from '@/components/diagrams/GeothermalDiagram';

/**
 * GeothermalEnergyPage describes geothermal energy with simplified high-school-level
 * paragraphs and includes the labeled underground heat diagram with dark mode support.
 */
export default function GeothermalEnergyPage() {
  return (
    <div className="container py-12">
      <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Geothermal Energy</h1>
        <p className="lead text-muted-foreground">
          Tapping into Earth's internal heat to generate clean, reliable electricity and heating.
        </p>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold text-foreground">What is Geothermal Energy?</h2>
          
          <p className="text-foreground/90">
            Geothermal energy comes from heat inside the Earth. The word "geothermal" means "Earth heat."
            Deep underground, the Earth is very hot. This heat comes from the Earth's core, which is as hot
            as the surface of the sun. The heat also comes from radioactive decay of minerals in the Earth's
            crust. This heat has been there since the Earth formed billions of years ago, and it will last
            for billions more years.
          </p>

          <h3 className="text-2xl font-medium text-foreground">Underground Heat Reservoirs</h3>
          <p className="text-foreground/90">
            In some places, underground water gets heated by hot rocks deep in the Earth. This creates
            geothermal reservoirs—underground pools of hot water and steam. These reservoirs can be one or
            two miles below the surface. The water in these reservoirs can be over 300°F (150°C). Geothermal
            power plants drill wells down to these reservoirs to bring the hot water and steam to the surface.
          </p>

          <h3 className="text-2xl font-medium text-foreground">Making Electricity from Heat</h3>
          <p className="text-foreground/90">
            A geothermal power plant pumps hot water or steam from underground through a production well.
            The steam spins a turbine connected to a generator. The generator makes electricity. After the
            steam spins the turbine, it cools down and turns back into water. This water is pumped back
            underground through an injection well. This refills the reservoir so it can be used again. This
            makes geothermal energy sustainable—it can keep producing power for a very long time.
          </p>

          <h3 className="text-2xl font-medium text-foreground">Benefits of Geothermal Energy</h3>
          <p className="text-foreground/90">
            Geothermal energy is clean and reliable. It doesn't burn fuel or create air pollution. Unlike
            solar and wind energy, geothermal plants can run 24 hours a day, every day. They don't depend
            on weather or time of day. Geothermal energy can also be used directly for heating buildings,
            growing plants in greenhouses, and warming fish farms. Countries like Iceland use geothermal
            energy to heat most of their buildings.
          </p>

          {/* Diagram */}
          <div className="not-prose my-8">
            <GeothermalDiagram />
          </div>
        </section>
      </article>
    </div>
  );
}

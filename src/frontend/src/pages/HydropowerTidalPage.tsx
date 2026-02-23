import { WaterTurbineGeneratorDiagram } from '@/components/diagrams/WaterTurbineGeneratorDiagram';

/**
 * HydropowerTidalPage covers hydropower and tidal energy generation with simplified
 * high-school-level paragraphs and includes the Water→Turbine→Generator diagram with dark mode support.
 */
export default function HydropowerTidalPage() {
  return (
    <div className="container py-12">
      <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Hydropower & Tidal Energy</h1>
        <p className="lead text-muted-foreground">
          Harnessing the power of moving water to generate clean, renewable electricity.
        </p>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold text-foreground">Hydropower</h2>
          
          <h3 className="text-2xl font-medium text-foreground">How Hydropower Works</h3>
          <p className="text-foreground/90">
            Hydropower uses the energy of moving water to make electricity. Most hydropower plants use dams
            built across rivers. The dam holds back water in a reservoir—a large artificial lake. When the
            water is released, it flows down through large pipes called penstocks. The moving water has a lot
            of energy because it falls from a high place. This falling water spins turbines at the bottom of
            the dam. The turbines connect to generators that make electricity.
          </p>

          <h3 className="text-2xl font-medium text-foreground">Turbines and Generators</h3>
          <p className="text-foreground/90">
            A turbine is like a big fan with blades. When water rushes past the blades, it makes them spin very
            fast. The spinning turbine connects to a generator through a shaft. Inside the generator, magnets
            spin near coils of wire. This creates an electric current. The electricity travels through power
            lines to homes and businesses. After the water spins the turbine, it flows back into the river
            downstream.
          </p>

          <h3 className="text-2xl font-medium text-foreground">Benefits of Hydropower</h3>
          <p className="text-foreground/90">
            Hydropower is a clean energy source. It doesn't burn fuel or create pollution. Dams can also control
            flooding and store water for dry seasons. Hydropower plants can start making electricity very quickly
            when demand is high. They can also stop just as fast. This makes them very flexible. Hydropower is
            one of the oldest and most reliable forms of renewable energy.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-foreground">Tidal Energy</h2>
          
          <h3 className="text-2xl font-medium text-foreground">What is Tidal Energy?</h3>
          <p className="text-foreground/90">
            Tidal energy uses the movement of ocean tides to make electricity. Tides are caused by the pull of
            the moon's gravity on Earth's oceans. The water level rises and falls twice each day. This creates
            strong currents of moving water. Tidal energy systems capture this movement and turn it into
            electricity.
          </p>

          <h3 className="text-2xl font-medium text-foreground">Tidal Turbines</h3>
          <p className="text-foreground/90">
            Tidal turbines work like underwater wind turbines. They are placed on the ocean floor in areas with
            strong tidal currents. When the tide comes in or goes out, water flows past the turbine blades. This
            makes them spin. The spinning turbines connect to generators that make electricity. Cables carry the
            electricity to shore. Tidal energy is very predictable because tides follow a regular schedule.
          </p>

          {/* Diagram */}
          <div className="not-prose my-8">
            <WaterTurbineGeneratorDiagram />
          </div>
        </section>
      </article>
    </div>
  );
}

import { WaterTurbineGeneratorDiagram } from '@/components/diagrams/WaterTurbineGeneratorDiagram';

/**
 * HydropowerTidalPage explains how hydroelectric dams and tidal power
 * systems generate electricity from moving water.
 */
export default function HydropowerTidalPage() {
  return (
    <div className="container py-12">
      <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
        <h1 className="text-4xl font-bold tracking-tight">Hydropower & Tidal Energy</h1>
        <p className="lead text-muted-foreground">
          Converting the energy of moving water into clean, renewable electricity.
        </p>

        {/* Hydropower Section */}
        <section className="mt-8">
          <h2 className="text-3xl font-semibold">Hydropower</h2>
          
          <h3 className="text-2xl font-medium">What is Hydropower?</h3>
          <p>
            Hydropower (also called hydroelectric power) is electricity made from moving water. It's one of the oldest and most common types of renewable energy. Rivers and waterfalls have kinetic energy (energy from motion). Hydropower systems capture this energy to make electricity without burning fossil fuels or creating pollution.
          </p>

          <h3 className="text-2xl font-medium">How Dams Store Energy</h3>
          <p>
            Hydroelectric dams block rivers to create large lakes called reservoirs. The water stored behind the dam sits at a high level, which gives it potential energy—energy stored because of its height. The higher the water and the more water there is, the more energy is available. When the dam's gates open, this stored energy is ready to become electricity.
          </p>

          <h3 className="text-2xl font-medium">From Water to Electricity</h3>
          <p>
            When water is released from the reservoir, it flows down through large pipes called penstocks. As the water rushes down, its potential energy changes to kinetic energy (motion). This fast-moving water hits the blades of a turbine and makes it spin quickly. The spinning turbine connects to a generator—a machine that turns motion into electrical energy. Inside the generator, the spinning creates a magnetic field that produces electricity. The electricity then travels through power lines to homes and businesses.
          </p>
        </section>

        {/* Tidal Power Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold">Tidal Energy</h2>
          
          <h3 className="text-2xl font-medium">What is Tidal Power?</h3>
          <p>
            Tidal power uses energy from ocean tides—the regular rise and fall of sea levels caused by the moon and sun's gravity. Tides are very predictable, making tidal energy reliable. Unlike wind or solar power, we know exactly when tides will happen and how strong they'll be. This allows for steady electricity generation.
          </p>

          <h3 className="text-2xl font-medium">Underwater Turbines</h3>
          <p>
            Tidal energy systems use underwater turbines that look like wind turbines but work in water. These turbines are placed where tidal currents are strong, like narrow channels between islands. As the tide flows in and out, the moving water spins the turbine blades. Because water is much heavier than air, even slow-moving tidal currents have a lot of energy and can make plenty of electricity. The spinning turbines connect to generators that turn this motion into electrical power.
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

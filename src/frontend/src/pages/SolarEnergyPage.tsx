import { PVCellDiagram } from '@/components/diagrams/PVCellDiagram';

/**
 * SolarEnergyPage explains passive vs active solar heating systems
 * and photovoltaic cells with an educational diagram.
 */
export default function SolarEnergyPage() {
  return (
    <div className="container py-12">
      <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
        <h1 className="text-4xl font-bold tracking-tight">Solar Energy</h1>
        <p className="lead text-muted-foreground">
          Harnessing the power of the sun to create clean, renewable electricity and heat.
        </p>

        {/* Section 1: Passive vs Active Solar Heating */}
        <section className="mt-8">
          <h2 className="text-3xl font-semibold">Passive vs Active Solar Heating</h2>
          
          <h3 className="text-2xl font-medium">What is Passive Solar Heating?</h3>
          <p>
            Passive solar heating is a simple way to warm buildings using only the sun. No machines are needed.
            Buildings are designed with large windows that face the sun. Sunlight comes through the windows and
            heats up the rooms inside. Heavy materials like concrete, brick, or tile soak up this heat during
            the day. At night, these materials slowly let the heat back out. This keeps the building warm without
            using any pumps or fans.
          </p>

          <h3 className="text-2xl font-medium">What is Active Solar Heating?</h3>
          <p>
            Active solar heating uses machines to collect and move heat from the sun. Solar collectors on the
            roof catch sunlight and turn it into heat. This heat warms up water or air inside the collectors.
            Then pumps or fans push the hot water or air through pipes to different rooms in the building.
            The system can save extra heat in special tanks. This stored heat can be used later when the sun
            goes down or on cloudy days.
          </p>

          <h3 className="text-2xl font-medium">How Solar Energy Regulates Temperature</h3>
          <p>
            Both types of solar heating keep buildings at a comfortable temperature. Passive systems use heavy
            materials that soak up heat slowly and let it out slowly. This stops the temperature from changing
            too fast. Active systems use controls and thermostats to send heat to the right place at the right
            time. This gives you exact control over the temperature all day and night.
          </p>
        </section>

        {/* Section 2: Photovoltaic Cells */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold">Photovoltaic Cells</h2>
          
          <h3 className="text-2xl font-medium">What are Photovoltaic (PV) Cells?</h3>
          <p>
            Photovoltaic cells are also called solar cells. They turn sunlight into electricity. These cells
            are made from special materials called semiconductors. Silicon is the most common one. When sunlight
            hits a solar cell, it makes electricity flow. This electricity can power homes, schools, and businesses.
          </p>

          <h3 className="text-2xl font-medium">The Photovoltaic Effect</h3>
          <p>
            The photovoltaic effect is how solar cells make electricity. Sunlight is made of tiny energy packets
            called photons. When photons hit the semiconductor material, they knock electrons loose. These free
            electrons start moving around. The moving electrons create an electric current. The semiconductor is
            treated in a special way to make an electric field. This field pushes all the electrons in the same
            direction. This creates DC (direct current) electricity.
          </p>

          <h3 className="text-2xl font-medium">From Cells to Panels</h3>
          <p>
            One solar cell only makes a tiny bit of electricity—about 0.5 volts. That's not enough to power
            anything useful. So many cells are connected together to make a solar panel. Most solar panels have
            60 to 72 cells. You can connect many panels together to make a solar array. A big array can power
            a whole building. It can even send extra electricity back to the power grid.
          </p>

          {/* Diagram */}
          <div className="not-prose my-8">
            <PVCellDiagram />
          </div>
        </section>
      </article>
    </div>
  );
}

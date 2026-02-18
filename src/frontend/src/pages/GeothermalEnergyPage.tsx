import { GeothermalDiagram } from '@/components/diagrams/GeothermalDiagram';

/**
 * GeothermalEnergyPage explains how heat from Earth's interior
 * is used to generate electricity through geothermal power plants.
 */
export default function GeothermalEnergyPage() {
  return (
    <div className="container py-12">
      <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
        <h1 className="text-4xl font-bold tracking-tight">Geothermal Energy</h1>
        <p className="lead text-muted-foreground">
          Tapping into Earth's internal heat to produce clean, reliable electricity.
        </p>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold">Understanding Geothermal Energy</h2>
          
          <h3 className="text-2xl font-medium">What is Geothermal Energy?</h3>
          <p>
            Geothermal energy is heat energy from deep inside the Earth. "Geo" means Earth, and "thermal" means heat. This renewable energy uses natural heat stored under Earth's surface to make electricity and provide heating. Unlike solar or wind energy, geothermal energy works 24 hours a day, 365 days a year. This makes it a very reliable power source that doesn't depend on weather.
          </p>

          <h3 className="text-2xl font-medium">Heat from Earth's Core</h3>
          <p>
            The center of Earth, called the core, is incredibly hot—about 10,800°F (6,000°C), as hot as the sun's surface! This heat was created billions of years ago when Earth formed. It's also continuously made by radioactive minerals breaking down deep underground. This heat slowly moves outward toward Earth's surface through layers of rock. In some places, especially near tectonic plate boundaries and volcanic areas, this heat is much closer to the surface and easier to reach.
          </p>

          <h3 className="text-2xl font-medium">Underground Reservoirs</h3>
          <p>
            Geothermal reservoirs are underground pools of hot water and steam trapped in porous rock. These reservoirs form when rainwater and snowmelt seep deep into the ground through cracks and porous rocks. As this water goes deeper, it gets heated by the hot rocks around it. The heated water and steam get trapped under layers of solid rock, creating a natural underground pool of heat energy. Geothermal power plants drill wells (sometimes over a mile deep) to reach these reservoirs and bring the hot water or steam to the surface.
          </p>

          <h3 className="text-2xl font-medium">Steam Turning Turbines</h3>
          <p>
            Once the hot water or steam reaches the surface through production wells, it goes into a geothermal power plant. If the reservoir makes steam directly, it goes straight to a turbine. If the reservoir makes hot water, the pressure is lowered to turn some of the water into steam (this is called "flashing"). The high-pressure steam rushes through the blades of a turbine, making it spin at high speeds—similar to how wind turns a wind turbine or water turns a hydroelectric turbine.
          </p>

          <h3 className="text-2xl font-medium">Electricity Generation Process</h3>
          <p>
            The spinning turbine connects to a generator, which turns the mechanical energy of rotation into electrical energy. Inside the generator, the rotating shaft turns magnets surrounded by coils of wire, creating a magnetic field that makes electricity. After the steam passes through the turbine, it's cooled in a cooling tower where it turns back into water. This water is then pumped back into the geothermal reservoir through injection wells, making the process sustainable. The electricity goes to a transformer that adjusts the voltage before sending it through power lines to homes and businesses.
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

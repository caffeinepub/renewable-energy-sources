import { WindTurbineDiagram } from '@/components/diagrams/WindTurbineDiagram';

/**
 * WindEnergyPage explains how wind turbines convert wind energy
 * into electricity through mechanical and electrical processes.
 */
export default function WindEnergyPage() {
  return (
    <div className="container py-12">
      <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
        <h1 className="text-4xl font-bold tracking-tight">Wind Energy</h1>
        <p className="lead text-muted-foreground">
          Capturing the power of moving air to generate clean, renewable electricity.
        </p>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold">How Wind Energy Works</h2>
          
          <h3 className="text-2xl font-medium">What is Wind Energy?</h3>
          <p>
            Wind energy is electricity made from moving air in Earth's atmosphere. Wind happens when the sun heats different parts of Earth unevenly, causing air to move from high-pressure areas to low-pressure areas. This moving air has kinetic energy that can be captured and turned into electrical power using wind turbines. Wind energy is completely renewable and creates no greenhouse gas emissions.
          </p>

          <h3 className="text-2xl font-medium">How Wind Turns the Blades</h3>
          <p>
            Modern wind turbines have large blades (often 100-300 feet long) shaped like airplane wings. When wind flows over these blades, it creates different air pressures on each side—lower pressure on one side and higher pressure on the other. This pressure difference creates lift, which makes the blades rotate. The blades are angled and shaped to catch the most wind energy, and they can turn to face the wind for best performance.
          </p>

          <h3 className="text-2xl font-medium">The Rotor → Shaft → Generator Process</h3>
          <p>
            The rotating blades attach to a central hub called the rotor. As the blades spin, they turn the rotor, which connects to a low-speed shaft. This shaft typically spins at about 30-60 times per minute. Inside the turbine's housing (called the nacelle), a gearbox speeds up this rotation dramatically—to 1,000-1,800 times per minute. This high-speed shaft connects directly to a generator, which is the part that actually makes electricity.
          </p>

          <h3 className="text-2xl font-medium">Converting Mechanical to Electrical Energy</h3>
          <p>
            The generator has powerful magnets and coils of copper wire. When the high-speed shaft spins the magnets inside the generator, they create a changing magnetic field around the wire coils. This changing magnetic field makes electrons in the wire move, creating an electric current. This is how mechanical energy (the spinning motion) becomes electrical energy. The electricity then travels through cables down the turbine tower to a transformer, which adjusts the voltage before sending the power to the electrical grid for homes and businesses.
          </p>

          {/* Diagram */}
          <div className="not-prose my-8">
            <WindTurbineDiagram />
          </div>
        </section>
      </article>
    </div>
  );
}

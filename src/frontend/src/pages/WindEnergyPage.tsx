import { WindTurbineDiagram } from '@/components/diagrams/WindTurbineDiagram';

/**
 * WindEnergyPage explains wind energy conversion with simplified high-school-level text
 * and includes a labeled wind turbine diagram with dark mode support.
 */
export default function WindEnergyPage() {
  return (
    <div className="container py-12">
      <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Wind Energy</h1>
        <p className="lead text-muted-foreground">
          Converting the kinetic energy of moving air into clean, renewable electricity.
        </p>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold text-foreground">How Wind Turbines Work</h2>
          
          <h3 className="text-2xl font-medium text-foreground">Wind as an Energy Source</h3>
          <p className="text-foreground/90">
            Wind is moving air. When the sun heats different parts of the Earth unevenly, air moves from hot
            areas to cool areas. This creates wind. Wind has kinetic energy—the energy of motion. Wind turbines
            capture this energy and turn it into electricity we can use.
          </p>

          <h3 className="text-2xl font-medium text-foreground">The Rotor and Blades</h3>
          <p className="text-foreground/90">
            A wind turbine has large blades that spin when wind blows past them. The blades are shaped like
            airplane wings. When wind hits the blades, it creates lift—the same force that makes airplanes fly.
            This lift makes the blades spin around a central hub called the rotor. Most turbines have three
            blades. The blades can be over 100 feet long on big turbines.
          </p>

          <h3 className="text-2xl font-medium text-foreground">From Rotation to Electricity</h3>
          <p className="text-foreground/90">
            The spinning rotor connects to a shaft inside the turbine tower. This shaft spins slowly—only about
            15 to 20 times per minute. That's too slow to make electricity efficiently. So the shaft connects
            to a gearbox. The gearbox speeds up the rotation to about 1,500 rotations per minute. This fast
            spinning shaft connects to a generator. The generator uses magnets and coils of wire to convert
            the spinning motion into electricity. The electricity travels down cables inside the tower and
            goes to the power grid.
          </p>

          <h3 className="text-2xl font-medium text-foreground">Wind Farms</h3>
          <p className="text-foreground/90">
            Wind turbines are often grouped together in wind farms. A wind farm can have dozens or even hundreds
            of turbines. They are placed in areas with steady, strong winds—like open plains, hilltops, or
            offshore in the ocean. Wind farms can generate enough electricity to power thousands of homes.
            The electricity from all the turbines combines and feeds into the power grid.
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

import { BiofuelsProcessDiagram } from '@/components/diagrams/BiofuelsProcessDiagram';

/**
 * BiofuelsPage explains ethanol and biodiesel production with simplified high-school-level
 * step-by-step sections and includes the BiofuelsProcessDiagram with dark mode support.
 */
export default function BiofuelsPage() {
  return (
    <div className="container py-12">
      <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Biofuels</h1>
        <p className="lead text-muted-foreground">
          Liquid fuels made from renewable plant materials that can power vehicles and machinery.
        </p>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold text-foreground">What are Biofuels?</h2>
          
          <p className="text-foreground/90">
            Biofuels are liquid fuels made from plants and other organic materials. The two main types are
            ethanol and biodiesel. These fuels can replace or be mixed with gasoline and diesel made from
            petroleum. Biofuels are renewable because we can grow more plants every year. They also produce
            less pollution than fossil fuels.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-foreground">Ethanol Production</h2>
          
          <h3 className="text-2xl font-medium text-foreground">Step 1: Growing the Crops</h3>
          <p className="text-foreground/90">
            Ethanol is made from crops that contain sugar or starch. In the United States, most ethanol comes
            from corn. In Brazil, it comes from sugarcane. Other crops like wheat, barley, and sugar beets can
            also be used. Farmers plant these crops in the spring and harvest them in the fall.
          </p>

          <h3 className="text-2xl font-medium text-foreground">Step 2: Grinding and Mixing</h3>
          <p className="text-foreground/90">
            At the ethanol plant, the corn kernels are ground into a fine powder. This powder is mixed with
            water to make a mash. Enzymes are added to the mash. Enzymes are special proteins that break down
            the starch in the corn into simple sugars. The mash is heated to help the enzymes work faster.
          </p>

          <h3 className="text-2xl font-medium text-foreground">Step 3: Fermentation</h3>
          <p className="text-foreground/90">
            The sugary mash is moved to large fermentation tanks. Yeast is added to the tanks. Yeast is a tiny
            living organism that eats sugar and produces ethanol and carbon dioxide. This process is called
            fermentation—the same process used to make beer and wine. The fermentation takes about 48 hours.
            When it's done, the liquid contains about 10% ethanol.
          </p>

          <h3 className="text-2xl font-medium text-foreground">Step 4: Distillation</h3>
          <p className="text-foreground/90">
            The fermented liquid is heated in a distillation column. Ethanol boils at a lower temperature than
            water. As the liquid heats up, the ethanol evaporates first. The ethanol vapor rises to the top of
            the column where it cools and turns back into liquid. This concentrated ethanol is about 95% pure.
            A final drying step removes the last bit of water, making it 99% pure ethanol.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-foreground">Biodiesel Production</h2>
          
          <h3 className="text-2xl font-medium text-foreground">Step 1: Collecting Oils and Fats</h3>
          <p className="text-foreground/90">
            Biodiesel is made from vegetable oils and animal fats. Common sources include soybean oil, canola
            oil, corn oil, and used cooking oil from restaurants. Animal fats from meat processing can also be
            used. These oils and fats are collected and transported to a biodiesel plant.
          </p>

          <h3 className="text-2xl font-medium text-foreground">Step 2: Filtering</h3>
          <p className="text-foreground/90">
            The oils and fats are filtered to remove any dirt, food particles, or water. Clean oil is important
            for making high-quality biodiesel. Used cooking oil especially needs careful filtering because it
            may contain bits of food.
          </p>

          <h3 className="text-2xl font-medium text-foreground">Step 3: Transesterification</h3>
          <p className="text-foreground/90">
            The clean oil is mixed with alcohol (usually methanol) and a catalyst (usually sodium hydroxide or
            potassium hydroxide). This mixture is heated and stirred. A chemical reaction called transesterification
            takes place. The oil molecules break apart and recombine with the alcohol to form biodiesel. This
            reaction also produces glycerin as a byproduct.
          </p>

          <h3 className="text-2xl font-medium text-foreground">Step 4: Separation and Washing</h3>
          <p className="text-foreground/90">
            After the reaction, the mixture separates into two layers. The biodiesel floats on top because it's
            lighter. The glycerin sinks to the bottom. The two layers are separated. The biodiesel is washed
            with water to remove any remaining alcohol, catalyst, or soap. Then it's dried to remove water.
            The final product is pure biodiesel ready to use in diesel engines.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-foreground">Using Biofuels</h2>
          
          <p className="text-foreground/90">
            Ethanol is usually blended with gasoline. E10 fuel contains 10% ethanol and 90% gasoline. E85 fuel
            contains 85% ethanol and is used in flex-fuel vehicles. Biodiesel can be used pure (B100) or blended
            with petroleum diesel. B20 (20% biodiesel, 80% diesel) is a common blend. Most diesel engines can
            run on biodiesel blends without any modifications. Biofuels help reduce our dependence on petroleum
            and lower greenhouse gas emissions.
          </p>

          {/* Diagram */}
          <div className="not-prose my-8">
            <BiofuelsProcessDiagram />
          </div>
        </section>
      </article>
    </div>
  );
}

import { BiofuelsProcessDiagram } from '@/components/diagrams/BiofuelsProcessDiagram';

/**
 * BiofuelsPage explains the production of ethanol and biodiesel
 * and their applications in transportation and power generation.
 */
export default function BiofuelsPage() {
  return (
    <div className="container py-12">
      <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
        <h1 className="text-4xl font-bold tracking-tight">Biofuels</h1>
        <p className="lead text-muted-foreground">
          Renewable liquid fuels made from organic materials for transportation and energy.
        </p>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold">What are Biofuels?</h2>
          <p>
            Biofuels are liquid or gas fuels made from renewable organic materials, mainly plants. Unlike fossil fuels (coal, oil, and natural gas) that took millions of years to form, biofuels can be made relatively quickly from crops and waste materials. The two most common types are ethanol and biodiesel. These fuels can replace or be mixed with traditional gasoline and diesel, helping reduce our use of fossil fuels and decrease greenhouse gas emissions from transportation and power generation.
          </p>
        </section>

        {/* Ethanol Production Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold">Ethanol Production</h2>
          
          <h3 className="text-2xl font-medium">Step 1: Selecting Feedstock</h3>
          <p>
            Ethanol production starts with choosing the right plant materials, called feedstock. The most common feedstocks are crops high in sugars or starches, such as corn, sugarcane, wheat, and barley. In the United States, corn is the main source, while Brazil mostly uses sugarcane. These crops are harvested and brought to ethanol production facilities.
          </p>

          <h3 className="text-2xl font-medium">Step 2: Breaking Down Starches</h3>
          <p>
            If the feedstock has starches (like corn), it must first be broken down into simple sugars. The corn kernels are ground into a fine powder and mixed with water to make a mash. Enzymes are added to this mash, which break the complex starch molecules into simple sugars like glucose. This is similar to how your body digests food. If the feedstock already has sugars (like sugarcane), this step can be skipped.
          </p>

          <h3 className="text-2xl font-medium">Step 3: Fermentation</h3>
          <p>
            Fermentation is the key process that turns sugars into ethanol. Yeast (the same type used to make bread and beer) is added to the sugar solution. The yeast eats the sugar and makes ethanol (alcohol) and carbon dioxide. This happens in large fermentation tanks and usually takes 40-50 hours. The result is a liquid mixture with about 10-15% ethanol, along with water and other substances.
          </p>

          <h3 className="text-2xl font-medium">Step 4: Distillation and Dehydration</h3>
          <p>
            The fermented mixture is heated in a distillation column. Since ethanol boils at a lower temperature than water, it evaporates first and rises to the top of the column, where it's collected. This increases the ethanol concentration to about 95%. To make fuel-grade ethanol (which must be at least 99% pure), the remaining water is removed through a dehydration process using special drying materials. The final product is pure ethanol ready to be mixed with gasoline.
          </p>
        </section>

        {/* Biodiesel Production Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold">Biodiesel Production</h2>
          
          <h3 className="text-2xl font-medium">Step 1: Collecting Oils and Fats</h3>
          <p>
            Biodiesel is made from oils and fats rather than sugars or starches. Common sources include vegetable oils (soybean, canola, palm, sunflower), animal fats (beef tallow, pork lard, chicken fat), and used cooking oil from restaurants. These oils and fats are collected and filtered to remove any food particles, water, or other stuff that could mess up the production process.
          </p>

          <h3 className="text-2xl font-medium">Step 2: Transesterification</h3>
          <p>
            Transesterification is the chemical process that turns oils and fats into biodiesel. The cleaned oil is mixed with an alcohol (usually methanol) and a catalyst (typically sodium hydroxide or potassium hydroxide). When heated and mixed together, a chemical reaction happens that breaks apart the large, complex fat molecules. This reaction makes two products: biodiesel (also called fatty acid methyl esters or FAME) and glycerin (a thick, sweet liquid used in soaps and cosmetics).
          </p>

          <h3 className="text-2xl font-medium">Step 3: Separation and Purification</h3>
          <p>
            After the reaction is done, the mixture is allowed to settle. Glycerin is heavier than biodiesel, so it sinks to the bottom and can be drained off and sold. The biodiesel layer on top still has traces of alcohol, catalyst, soap, and other impurities. It's washed with water several times to remove these, then dried to remove any remaining water. The result is pure biodiesel that meets fuel quality standards.
          </p>

          <h3 className="text-2xl font-medium">Step 4: Quality Testing</h3>
          <p>
            Before biodiesel can be sold and used, it must pass strict quality tests to make sure it meets industry standards. Tests check things like viscosity (thickness), flash point (safety), cloud point (cold weather performance), and contamination levels. Only biodiesel that passes all these tests is approved for use in vehicles and equipment.
          </p>
        </section>

        {/* Usage Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold">How Biofuels are Used</h2>
          
          <h3 className="text-2xl font-medium">Transportation Applications</h3>
          <p>
            Ethanol is mainly mixed with gasoline to make fuel for cars, trucks, and motorcycles. Most gasoline in the United States has 10% ethanol (called E10), which can be used in any gasoline vehicle. Some vehicles, called flex-fuel vehicles, can run on E85 (85% ethanol, 15% gasoline). Biodiesel can be used in diesel engines either pure (B100) or mixed with petroleum diesel in different amounts (B5, B20, etc.). Many buses, trucks, trains, and boats use biodiesel blends. Both fuels help reduce emissions and decrease dependence on imported oil.
          </p>

          <h3 className="text-2xl font-medium">Power Plant Applications</h3>
          <p>
            Biofuels can also be burned in power plants to make electricity. Some power plants are designed just to run on biofuels, while others can switch between biofuels and traditional fossil fuels. When burned, biofuels heat water to create steam, which drives turbines connected to generators—the same process used in coal or natural gas power plants. Using biofuels in power plants helps diversify energy sources and can reduce overall carbon emissions, especially when the biofuels are made from waste materials or sustainably grown crops.
          </p>
        </section>

        {/* Diagram */}
        <div className="not-prose my-8">
          <BiofuelsProcessDiagram />
        </div>
      </article>
    </div>
  );
}

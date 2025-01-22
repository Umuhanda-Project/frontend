import PricingCard from "../components/PricingCard";
import { pricingOptions } from "../utils";




const Pricing = () => (
  <div className="p-4">
    <p className="text-center text-xl font-bold">Hitamo Ifatabuguzi</p>
    <div className="flex my-6 space-x-6 max-md:flex-col flex-wrap">
      {pricingOptions.map(({ id, header, description, price, options }) => (
         <PricingCard
          key={id}
          header={header}
          description={description}
          price={price}
          options={options}
        />
      ))}
    </div>
  </div>
);

export default Pricing;

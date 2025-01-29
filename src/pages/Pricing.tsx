import PricingCard from "../components/PricingCard";
import { pricingOptions } from "../utils/pricingOptions";


const Pricing = () => (
  <div className="p-4">
    <p className="text-center text-3xl font-bold underline py-4">Hitamo Ifatabuguzi</p>
    <div className="flex items-center justify-center my-6 space-x-6 max-md:flex-col max-md:space-y-4 flex-wrap">
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

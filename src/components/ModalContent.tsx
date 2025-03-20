import { useEffect, useState } from 'react';
import mtn from '../assets/mtn.jpg';
import { PricingPlans } from '../utils/PricingPlans';
import { language_options } from '../utils/languageOptions';
import { useForm } from 'react-hook-form';
import PaymentButton from './PaymentButton';

type PricingPlan = {
  id: number;
  name: string;
  price: number;
  language: string;
};

export const ModalContent = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [filteredPlans, setFilteredPlans] = useState<PricingPlan[]>([]);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (selectedLanguage) {
      const plans = PricingPlans.filter((plan) => plan.language === selectedLanguage);
      console.log(plans);
      setFilteredPlans(plans);
    }
  }, [selectedLanguage]);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };
  const onSubmit = () => {
    console.log('data');
  };

  return (
    <div className="w-full max-w-2xl flex flex-col items-center justify-center p-6 bg-white rounded-lg">
      <img src={mtn} alt="Mtn_Logo" className="w-96 h-16 object-cover" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full py-4">
          <p className="py-4 font-medium text-lg">Choose Language</p>
          <div className="flex gap-4 flex-wrap">
            {language_options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register('language')}
                  name="language"
                  id={`language-${option.id}`}
                  value={option.value}
                  checked={selectedLanguage === option.value}
                  onChange={() => handleLanguageChange(option.value)}
                  className="h-4 w-4"
                />
                <label htmlFor={`language-${option.id}`}>{option.name}</label>
              </div>
            ))}
          </div>
        </div>

        {filteredPlans.length > 0 && (
          <div className="w-full">
            <p className="py-4 font-medium text-lg">Choose Plan</p>
            <div className="space-y-2">
              {filteredPlans.map((plan) => (
                <div key={plan.id} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    {...register('plan')}
                    name="plan"
                    id={`plan-${plan.id}`}
                    className="h-4 w-4"
                  />
                  <label htmlFor={`plan-${plan.id}`}>
                    {plan.name.toLocaleUpperCase()} - {plan.language} - {plan.price}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
        <PaymentButton subscriptionId="67bf7c68c884017f1366f660" />
      </form>

      {selectedLanguage && filteredPlans.length === 0 && (
        <div className="w-full py-4 text-center text-red-500">
          No plans available for the selected language.
        </div>
      )}
    </div>
  );
};

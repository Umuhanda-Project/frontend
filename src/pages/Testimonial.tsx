import TestimonialCard from "../components/TestimonialCard";
import { TestimonialData } from "../utils/index"

const Testimonial = () => {
  return (
    <div className="px-4 py-8 bg-gray-50">
      <p className="text-center font-bold text-2xl text-gray-800">
        Umva ibyo abanyeshuri bavuga
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 justify-items-center">
        {TestimonialData.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            initials={testimonial.initials}
            rating={testimonial.rating}
            text={testimonial.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

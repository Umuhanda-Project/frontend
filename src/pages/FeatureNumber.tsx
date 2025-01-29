import { PiStudentLight } from "react-icons/pi";
import { FaQuestion } from "react-icons/fa6";
import { MdOutlinePlayLesson } from "react-icons/md";
const featuresData = [
  {
    id: 1,
    status: 3000,
    icon: <PiStudentLight className="w-10 h-10 text-blue-500" />,
    desc: "Abanyeshuri",
  },
  {
    id: 2,
    status: 600,
    icon: <FaQuestion className="w-10 h-10 text-blue-500" />,
    desc: "Amasomo",
  },
  {
    id: 3,
    status: 400,
    icon: <MdOutlinePlayLesson className="w-10 h-10 text-blue-500" />,
    desc: "Ibibazo",
  },
];
const FeatureNumber = () => {
  return (
    <div className="flex items-center space-x-8 justify-center py-8 bg-blue-100">
      {featuresData.map((feature) => {
        return (
          <div className="flex flex-row items-center space-x-2">
            {feature.icon}
            <div className="flex-col">
              <span className="text-xl font-bold">{feature.status}+</span>
              <p>{feature.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureNumber;

import { PiStudentLight } from "react-icons/pi";
import { FaQuestion } from "react-icons/fa6";
import { MdOutlinePlayLesson } from "react-icons/md";

const FeatureNumber = () => {
  return (
    <div className="flex items-center space-x-8 justify-center py-4 bg-blue-100">
       <div className="flex flex-row items-center">
        <PiStudentLight className="w-10 h-10 text-blue-500" />
        <div className="flex-col">
          <span className="text-xl font-bold">3000+</span>
          <p>Abanyeshuri</p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <FaQuestion className="w-10 h-10 text-blue-500" />
        <div className="flex-col">
          <span>600+</span>
          <p>Amasomo</p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <MdOutlinePlayLesson className="w-10 h-10 text-blue-500" />
        <div className="flex-col">
          <span>400+</span>
          <p>Ibibazo</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureNumber;

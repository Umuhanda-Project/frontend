import { BsQuestionCircleFill } from "react-icons/bs";
import { MdTimer, MdOutlineScore, MdCheckCircle } from "react-icons/md";
import { motion } from "framer-motion";
import Layout from "./Layout";
import { useNavigate } from "react-router";

const Exam = () => {
    const navigate = useNavigate()
  return (
    <Layout>
      <div className="flex flex-col items-center px-4 py-10 space-y-6 md:space-y-12">
        {/* Title Section */}
        <motion.p
          className="text-3xl font-extrabold text-blue-600 sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Amabwiriza y'ikizamini
        </motion.p>

        {/* Instructions Section */}
        <motion.div
          className="w-full max-w-2xl space-y-8 bg-white p-6 rounded-2xl shadow-lg sm:p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {[
            { label: "Umubare w'ibibazo", value: "20", icon: <BsQuestionCircleFill className="w-6 h-6 text-blue-500" /> },
            { label: "Iminota y'ikizamini", value: "20 mins", icon: <MdTimer className="w-6 h-6 text-green-500" /> },
            { label: "Amanota yose", value: "20", icon: <MdOutlineScore className="w-6 h-6 text-yellow-500" /> },
            { label: "Amanota yo gutsindiraho", value: "20", icon: <MdCheckCircle className="w-6 h-6 text-purple-500" /> },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-4 last:border-b-0 last:pb-0"
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <p className="text-lg font-medium text-gray-700">{item.label}</p>
              </div>
              <p className="text-lg font-semibold text-gray-800">{item.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Start Button */}
        <motion.button
          className="px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("questions")}
        >
          Tangira Ikizamini
        </motion.button>
      </div>
    </Layout>
  );
};

export default Exam;

import { MdOutlinePlayLesson, MdOutlineSportsScore } from "react-icons/md";
import Layout from "./Layout";
import { motion } from "framer-motion";
import { PiExamThin } from "react-icons/pi";
import lesson1 from "../../../assets/lesson1.png";
import lesson2 from "../../../assets/lesson2.png";
import lesson3 from "../../../assets/lesson3.png";

const Home = () => {
  const courses = [
    {
      id: 1,
      title: "Isomo ry' ibyapa",
      description: "Ibibazo n' ibisubizo byagufasha kwitegura ikizami cya provisoire",
      image: lesson1,
    },
    {
      id: 2,
      title: "Isomo rya mbere",
      description: "Ibibazo n’ ibisubizo byagufasha kwitegura ikizami cya provisoire",
      image: lesson2,
    },
    {
      id: 3,
      title: "Isomo rya kabiri",
      description: "Ibibazo n’ ibisubizo byagufasha kwitegura ikizami cya provisoire",
      image: lesson3,
    },
  ];

  return (
    <Layout>
      {/* Metrics Section */}
      <motion.div
        className="px-6 py-8 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 flex items-center space-x-4 sm:space-x-2"
          >
            <MdOutlinePlayLesson className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
                Amasomo
              </h2>
              <p className="text-2xl sm:text-3xl font-bold text-blue-500">
            3
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 flex items-center space-x-4 sm:space-x-2"
          >
            <PiExamThin className="w-12 h-12 sm:w-16 sm:h-16 text-green-600" />
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
                Inshuro Wakoze Ibizamini
              </h2>
              <p className="text-2xl sm:text-3xl font-bold text-green-500">4</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 flex items-center space-x-4 sm:space-x-2"
          >
            <MdOutlineSportsScore className="w-12 h-12 sm:w-16 sm:h-16 text-red-600" />
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
                Amanota Menshi Wagize
              </h2>
              <p className="text-2xl sm:text-3xl font-bold text-red-500">13</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Courses Section */}
      <motion.div
        className="px-6 py-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          Amasomo
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {course.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-2">
                  {course.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="my-4 bg-blue-600 text-white px-8 sm:px-12 py-2 rounded-full"
                >
                  Tangira
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Home;

import { motion } from "framer-motion";
import { courses } from "../../../../utils/Courses";
import { useNavigate } from "react-router";

const Notes = () => {
    const navigate = useNavigate()
  return (
    <>
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
                  onClick={() => navigate("/client/lessons/lesson/" + course.id)}
                >
                  Tangira
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Notes;

import { motion } from "framer-motion";
import { courses } from "../../../../utils/Courses";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

/**
 * Interface defining the structure of a course.
 */
interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  label:string
}

/**
 * Props for the Notes component.
 */
interface NotesProps {
  length: number;
}

/**
 * A component that displays a list of available courses dynamically.
 * Uses Framer Motion for animations and React Router for navigation.
 */
const Notes: React.FC<NotesProps> = ({ length }) => {
  const navigate = useNavigate();
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Filter courses based on the provided length.
    const total = courses.slice(0, length);
    setFilteredCourses(total);
  }, [length]);

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="px-6 py-8"
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2, duration: 0.6 }}
      variants={containerVariants}
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 underline">
        Amasomo
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                {course.title}
              </h2>
              <span className="bg-blue-600 rounded-full p-2 text-white text-xs">{course.label}</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                {course.description}
              </p>
              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                className="mt-4 bg-blue-600 text-white px-6 sm:px-10 py-2 rounded-full"
                onClick={() => navigate(`/client/lessons/lesson/${course.id}`)}
              >
                Tangira
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Notes;

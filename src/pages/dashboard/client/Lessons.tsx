import { courses } from "../../../utils/Courses";
import Layout from "./Layout";
import { motion } from "framer-motion";
import Notes from "./components/Notes";

const Lessons = () => {

  return (
    <div>
      <Layout>
        {/* Courses Section */}
        <motion.div
          className="px-6 py-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
           <Notes length={courses.length}/>
        </motion.div>
      </Layout>
    </div>
  );
};

export default Lessons;

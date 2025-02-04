import video from "../assets/video1.mp4";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <div className="relative flex items-center justify-center my-6">
      {/* Video Background */}
      <video
        src={video}
        className="rounded-md w-[80vw] max-h-[600px] max-sm:[90vw] object-cover"
        autoPlay
        muted
        loop
      />

      {/* Overlay Content */}
      <div className="absolute flex flex-col items-center text-center space-y-4  p-6 rounded-md">
        <motion.p
          className="text-lg sm:text-4xl font-bold text-blue-700 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Witegure gukora ikizamini mugihe gito
        </motion.p>
        <motion.button
          className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Tangira hano"
        >
          Tangira hano
        </motion.button>
      </div>
    </div>
  );
};

export default CallToAction;

import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex justify-between items-center w-full px-6 py-4 border-b-2 border-slate-200 bg-white shadow-sm"
    >
      {/* User Info Section */}
      <div className="flex flex-col space-y-1">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-lg font-bold text-gray-700"
        >
          John
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm text-gray-500"
        >
          Murakaza neza
        </motion.p>
      </div>

      {/* Icon Section */}
      <div className="flex space-x-6 items-center">
        {/* Notification Icon */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Notifications"
          className="relative group text-gray-600 hover:text-blue-500 text-2xl transition duration-300 ease-in-out"
        >
          <IoIosCheckmarkCircleOutline />
          {/* Badge for Notifications */}
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center text-white text-xs font-bold rounded-full"
          >
            
          </motion.span>
        </motion.button>

        {/* Settings Icon */}
        <motion.button
          whileHover={{ rotate: 90, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Settings"
          className="text-gray-600 hover:text-blue-500 text-2xl transition duration-300 ease-in-out"
        >
          <IoSettingsOutline />
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;

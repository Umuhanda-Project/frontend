import { MdPlayLesson } from "react-icons/md";
import logo from "../../../../assets/Umuhanda_logo.png";
import { RiDashboardFill } from "react-icons/ri";
import { PiExamThin } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import { motion } from "framer-motion";

const MENU_ITEMS = [
  {
    id: 1,
    name: "Ahabanza",
    href: "/client",
    icon: <RiDashboardFill />,
  },
  {
    id: 2,
    name: "Amasomo",
    href: "/client",
    icon: <MdPlayLesson />,
  },
  {
    id: 3,
    name: "Ibizamini",
    href: "/client",
    icon: <PiExamThin />,
  },
  {
    id: 4,
    name: "Igenamiterere",
    href: "/client",
    icon: <CiSettings />,
  },
  {
    id: 5,
    name: "Gusohoka",
    href: "/client",
    icon: <AiOutlineLogout />,
  },
];

const Sidebar = () => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen w-64 bg-gray-50 border-r border-gray-200 flex flex-col justify-between lg:w-72"
    >
      {/* Logo Section */}
      <div className="p-6">
        <motion.img
          src={logo}
          alt="Umuhanda Logo"
          className="w-36 mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Menu Items */}
      <nav className="mb-36 flex flex-col space-y-4 px-4">
        {MENU_ITEMS.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.href}
            className="flex items-center space-x-4 text-gray-600 hover:bg-blue-500 hover:text-white rounded-lg p-3 transition-all duration-300"
            aria-label={item.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </motion.a>
        ))}
      </nav>

      {/* Footer Section */}
      <div className="p-6 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          © 2025 <span className="font-semibold">Umuhanda</span>
        </p>
      </div>
    </motion.div>
  );
};

export default Sidebar;

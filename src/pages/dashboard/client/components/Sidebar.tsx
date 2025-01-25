import { useState, useEffect } from "react";
import { MdPlayLesson } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { PiExamThin } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { AiOutlineLogout, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../../../assets/Umuhanda_logo.png";
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
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
      if (window.innerWidth >= 1024) {
        setIsOpen(true); // Always show sidebar on large screens
      } else {
        setIsOpen(false); // Collapse sidebar on smaller screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Toggle Button (Only for Mobile View) */}
      {isMobile && (
        <button
          className="fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-md shadow-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Sidebar"
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      )}
      <motion.div
        initial={{ x: isMobile ? "-100%" : 0 }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`max-lg:fixed max-lg:bg-white inset-y-0 left-0 w-64   border-r border-gray-200 flex flex-col min-h-screen justify-between z-40 transform ${
          isMobile ? "lg:static" : ""
        }`}
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
              className="flex items-center space-x-4 text-black hover:bg-blue-500 hover:text-white rounded-lg p-3 transition-all duration-300"
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
          <p className="text-sm text-black text-center">
            © 2025 <span className="font-semibold">Umuhanda</span>
          </p>
        </div>
      </motion.div>
      Ï
    </>
  );
};

export default Sidebar;

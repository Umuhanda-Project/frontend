import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";

import logo from "../../../../assets/Umuhanda_logo.png";
import { motion } from "framer-motion";
import { RiDashboardFill } from "react-icons/ri";
import { AiOutlineLogout, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { MdPlayLesson } from "react-icons/md";
import { PiExamThin } from "react-icons/pi";
import { IoBookSharp } from "react-icons/io5";

const MENU_ITEMS = [
  {
    id: 1,
    nameKey: "home", // Key for i18n
    href: "/client",
    icon: <RiDashboardFill />,
  },
  {
    id: 2,
    nameKey: "lessons", // Key for i18n
    href: "/client/lessons",
    icon: <MdPlayLesson />,
  },
  {
    id: 3,
    nameKey: "exams", // Key for i18n
    href: "/client/exam",
    icon: <PiExamThin />,
  },
  {
    id:6,
    nameKey:"igazeti",
    href:"/client/igazeti",
    icon:<IoBookSharp/>
  },
  {
    id: 4,
    nameKey: "settings", // Key for i18n
    href: "/client/settings",
    icon: <CiSettings />,
  },
  {
    id: 5,
    nameKey: "logout", // Key for i18n
    href: "/signin",
    icon: <AiOutlineLogout />,
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation(); // Hook for translation
  const location = useLocation();

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
        className={`fixed lg:static inset-y-0 left-0 w-64 bg-white border-r border-gray-200 flex flex-col min-h-screen justify-between z-40 transform`}
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
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <a
                href={item.href}
                className={`flex items-center space-x-4 rounded-lg p-3 text-black transition-all duration-300 ${
                  location.pathname === item.href
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-500 hover:text-white"
                }`}
                aria-label={t(item.nameKey)} // Using the translation function
              >
                <span className={`text-xl ${location.pathname === item.href && "text-white"}`}>{item.icon}</span>
                <span className={`font-medium ${location.pathname === item.href && "text-white"}`}>{t(item.nameKey)}</span> {/* Translated name */}
              </a>
            </motion.div>
          ))}
        </nav>

        {/* Footer Section */}
        <div className="p-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © 2025 <span className="font-semibold">Umuhanda</span>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;

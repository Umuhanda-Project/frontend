import logo from "../assets/Umuhanda_logo.png";
import { NavLink } from "react-router";

// Constants for easier maintainability
const MENU_ITEMS = [
  { name: "Ahabanza", href: "/" },
  { name: "Kora Ibizamini", href: "/signin" },
  { name: "Injiramo", href: "/signin" },
  { name: "Ibiciro", href: "/" },
  { name: "Twandikire", href: "/contact" },
];

const LANGUAGES = [
  { label: "🇷🇼 Kinyarwanda", value: "kinyarwanda" },
  { label: "🇬🇧 English", value: "english" },
  { label: "🇫🇷 French", value: "french" },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 shadow-md">
      {/* Logo Section */}
      <div>
        <img
          src={logo}
          alt="Umuhanda Logo - Navigate to Home"
          className="w-32 max-md:w-24"
        />
      </div>

      {/* Navigation & Language Section */}
      <div className="flex items-center space-x-8 max-md:space-x-4">
        {/* Navigation Menu */}
        <nav aria-label="Main navigation">
          <ul className="flex items-center space-x-8 max-md:space-x-4">
            {MENU_ITEMS.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm font-medium ${
                      isActive ? "text-blue-500 underline" : "text-gray-700"
                    } hover:text-blue-500 transition duration-300`
                  }
                
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Selector */}
        <div>
          <label
            htmlFor="language-options"
            className="sr-only"
          >
            Select Language
          </label>
          <select
            id="language-options"
            name="language-options"
            className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {LANGUAGES.map((lang, index) => (
              <option key={index} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;

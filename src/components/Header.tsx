import logo from "../assets/Umuhanda_logo.png";

// Constants for easier maintainability
const MENU_ITEMS = ["Ahabanza", "Kora Ibizamini", "Injiramo", "Ibiciro", "Twandikire"];

const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 px-6 max-lg:items-center max-lg:p-0 max-md:flex-col">
      {/* Logo Section */}
      <div>
        <img src={logo} alt="Umuhanda Logo" className="w-44 max-lg:w-24" />
      </div>

      {/* Navigation & Language Section */}
      <div className="flex items-center space-x-24 max-lg:space-x-12 max-sm:flex-col max-md:space-x-6">
        {/* Navigation Menu */}
        <nav aria-label="Main navigation">
          <ul className="flex items-center space-x-12 max-lg:space-x-4 max-md:space-x-2 max-sm:space-x-1">
            {MENU_ITEMS.map((item, index) => (
              <li key={index} className="max-md:text-xs hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Selector */}
        <div className="flex items-center space-x-2">
          <select
            name="language-options"
            id="language-options"
            className="border rounded px-2 py-1"
            aria-label="Language selector"
          >
            <option value="kinyarwanda">🇷🇼 Kinyarwanda</option>
            <option value="english">🇬🇧 English</option>
            <option value="french">🇫🇷 French</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;

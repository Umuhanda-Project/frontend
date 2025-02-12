import React from 'react'
import i18n from '../utils/i18n';

const LANGUAGES = [
    { label: "🇷🇼 Kinyarwanda", value: "kinyarwanda" },
    { label: "🇬🇧 English", value: "english" },
    { label: "🇫🇷 French", value: "french" },
  ];
  
  const LanguageSwitcher = () => {
    const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value === "kinyarwanda") i18n.changeLanguage("kiny");
      if (e.target.value === "english") i18n.changeLanguage("en");
      if (e.target.value === "french") i18n.changeLanguage("fr");
    };
  return (
    <div> {/* Language Selector */}
    <div>
      <label htmlFor="language-options" className="sr-only">
        Select Language
      </label>
      <select
        id="language-options"
        name="language-options"
        className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleChangeLanguage}
      >
        {LANGUAGES.map((lang, index) => (
          <option key={index} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div></div>
  )
}

export default LanguageSwitcher
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';


const LanguageSwitcher = () => {
  const { state, setLanguage } = useLanguage();
  
  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "kinyarwanda") setLanguage("kiny");
    if (e.target.value === "english") setLanguage("en");
    if (e.target.value === "french") setLanguage("fr");
  };
  
  // Determine which language is currently selected
  const getCurrentValue = () => {
    switch(state.currentCode) {
      case 'kiny': return 'kinyarwanda';
      case 'en': return 'english';
      case 'fr': return 'french';
      default: return 'english';
    }
  };
  
  return (
    <div>
      <label htmlFor="language-options" className="sr-only">
        Select Language
      </label>
      <select
        id="language-options"
        name="language-options"
        className="border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleChangeLanguage}
        value={getCurrentValue()}
      >
        <option value="kinyarwanda">🇷🇼 Kinyarwanda</option>
        <option value="english">🇬🇧 English</option>
        <option value="french">🇫🇷 French</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
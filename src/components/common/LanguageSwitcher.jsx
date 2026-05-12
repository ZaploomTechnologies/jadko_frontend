import React, { useState, useEffect, useRef } from 'react';
import { Search, Globe, ChevronDown, Check } from 'lucide-react';

const languages = [
  { name: 'English', code: 'en' },
  { name: 'Hindi', code: 'hi' },
  { name: 'Gujarati', code: 'gu' },
  { name: 'Marathi', code: 'mr' },
  { name: 'Bengali', code: 'bn' },
  { name: 'Tamil', code: 'ta' },
  { name: 'Telugu', code: 'te' },
  { name: 'Kannada', code: 'kn' },
  { name: 'Malayalam', code: 'ml' },
  { name: 'Punjabi', code: 'pa' },
  { name: 'Sanskrit', code: 'sa' },
  { name: 'Urdu', code: 'ur' },
  { name: 'French', code: 'fr' },
  { name: 'German', code: 'de' },
  { name: 'Spanish', code: 'es' },
  { name: 'Arabic', code: 'ar' },
  { name: 'Chinese', code: 'zh-CN' },
  { name: 'Japanese', code: 'ja' },
  { name: 'Russian', code: 'ru' },
];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLang, setSelectedLang] = useState('en');
  const [availableLanguages, setAvailableLanguages] = useState([
    { name: 'English', code: 'en' },
    { name: 'Hindi', code: 'hi' },
    { name: 'Gujarati', code: 'gu' },
    { name: 'Marathi', code: 'mr' },
  ]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Function to extract languages from Google's hidden dropdown
    const fetchGoogleLanguages = () => {
      const googleSelect = document.querySelector('.goog-te-combo');
      if (googleSelect && googleSelect.options.length > 1) {
        const langs = Array.from(googleSelect.options)
          .filter(opt => opt.value !== '') // Filter out the placeholder
          .map(opt => ({
            name: opt.text,
            code: opt.value
          }));
        
        if (langs.length > 0) {
          // Add English explicitly if it's the page language and not in the list
          const hasEnglish = langs.find(l => l.code === 'en');
          const finalLangs = hasEnglish ? langs : [{ name: 'English', code: 'en' }, ...langs];
          
          setAvailableLanguages(finalLangs);
          return true; // Successfully loaded
        }
      }
      return false;
    };

    // Try immediately
    if (!fetchGoogleLanguages()) {
      // If not ready, poll for it
      const interval = setInterval(() => {
        if (fetchGoogleLanguages()) {
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode) => {
    setSelectedLang(langCode);
    setIsOpen(false);
    
    // Trigger Google Translate
    const googleSelect = document.querySelector('.goog-te-combo');
    if (googleSelect) {
      googleSelect.value = langCode;
      googleSelect.dispatchEvent(new Event('change'));
    }
  };

  const filteredLanguages = availableLanguages.filter((lang) =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentLangName = availableLanguages.find(l => l.code === selectedLang)?.name || 'English';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-50 border border-gray-100 hover:border-jadko-primary transition-all duration-300 group"
      >
        <Globe className="w-4 h-4 text-jadko-primary group-hover:rotate-12 transition-transform" />
        <span className="text-sm font-medium text-gray-700">{currentLangName}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100] animate-in fade-in zoom-in duration-200">
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search language..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-transparent focus:border-jadko-primary focus:bg-white rounded-xl text-sm transition-all outline-none"
                autoFocus
              />
            </div>
          </div>
          
          <div className="max-h-60 overflow-y-auto custom-scrollbar">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm text-left hover:bg-jadko-primary/5 transition-colors ${
                    selectedLang === lang.code ? 'text-jadko-primary bg-jadko-primary/5 font-semibold' : 'text-gray-600'
                  }`}
                >
                  <span>{lang.name}</span>
                  {selectedLang === lang.code && <Check className="w-4 h-4" />}
                </button>
              ))
            ) : (
              <div className="px-4 py-6 text-center text-gray-400 text-sm">
                No languages found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

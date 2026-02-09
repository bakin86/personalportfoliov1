import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check localStorage or system preference
    const saved = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved ? saved === 'true' : prefersDark;
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="hidden sm:block fixed top-6 right-6 z-50 p-4 border-2 border-brutal-red bg-white dark:bg-brutal-black transition-colors group hover:scale-110"
      whileHover={{ rotate: 180 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="text-brutal-red" size={24} />
      ) : (
        <Moon className="text-brutal-red" size={24} />
      )}
    </motion.button>
  );
};

export default DarkModeToggle;

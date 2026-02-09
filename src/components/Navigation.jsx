import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('main');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['main', 'about', 'featured', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#main', icon: Home, id: 'main' },
    { name: 'ABOUT', href: '#about', icon: User, id: 'about' },
    { name: 'WORK', href: '#featured', icon: Briefcase, id: 'featured' },
    { name: 'PROJECTS', href: '#projects', icon: FolderOpen, id: 'projects' },
    { name: 'CONTACT', href: '#contact', icon: Mail, id: 'contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsExpanded(false);
    }
  };

  return (
    <>
      {/* Mobile: Just show burger menu button on left */}
      <div className="block sm:hidden fixed top-4 left-4 z-50">
        <motion.button
          onClick={() => setIsExpanded(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-brutal-black border-2 border-brutal-red shadow-lg"
          aria-label="Open menu"
        >
          <Menu size={20} className="text-brutal-red" />
        </motion.button>
      </div>

      {/* Desktop: Full dynamic island */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden sm:block fixed top-3 sm:top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[calc(100%-2rem)] sm:max-w-none sm:w-auto px-4 sm:px-0"
      >
        <motion.div
          animate={{
            width: isExpanded 
              ? 'min(700px, calc(100vw - 2rem))' 
              : scrolled 
                ? 'min(280px, calc(100vw - 2rem))' 
                : 'min(320px, calc(100vw - 2rem))',
            height: isExpanded ? '64px' : '56px',
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
          className="relative mx-auto"
        >
          {/* Dynamic Island Container */}
          <div className="absolute inset-0 bg-brutal-black dark:bg-white border-2 border-brutal-red rounded-full overflow-hidden shadow-2xl backdrop-blur-xl">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-brutal-red/5 via-transparent to-brutal-red/5"></div>

            {/* Collapsed State - Desktop only */}
            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative h-full hidden sm:flex items-center justify-between px-3 sm:px-6 md:px-8 gap-2"
                >
                  {/* Logo/Brand */}
                  <motion.div 
                    className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-2 border-brutal-red flex items-center justify-center rounded-md flex-shrink-0">
                      <span className="font-yapari text-sm sm:text-base md:text-lg text-brutal-red">/</span>
                    </div>
                    <span className="font-coolvetica text-[10px] sm:text-xs md:text-sm font-bold text-white dark:text-brutal-black hidden xxs:inline truncate">
                      PORTFOLIO
                    </span>
                  </motion.div>

                  {/* Active Section Indicator - Hidden on mobile */}
                  <div className="hidden md:flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-brutal-red/10 rounded-full flex-shrink min-w-0">
                    {navItems.map((item) => {
                      if (item.id === activeSection) {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={item.id}
                            layoutId="activeIndicator"
                            className="flex items-center gap-1.5 sm:gap-2 min-w-0"
                          >
                            <Icon className="text-brutal-red flex-shrink-0" size={14} />
                            <span className="font-drowner text-xs text-white dark:text-brutal-black truncate">
                              {item.name}
                            </span>
                          </motion.div>
                        );
                      }
                      return null;
                    })}
                  </div>

                  {/* Expand Button - Desktop only */}
                  <motion.button
                    onClick={() => setIsExpanded(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden sm:flex w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 items-center justify-center rounded-full bg-brutal-red text-white hover:bg-brutal-red-dark transition-colors flex-shrink-0"
                    aria-label="Open menu"
                  >
                    <Menu size={14} className="sm:w-4 sm:h-4" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expanded State */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative h-full flex items-center justify-between px-2 sm:px-3 md:px-6 gap-1 sm:gap-2"
                >
                  {/* Navigation Items */}
                  <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 overflow-x-auto scrollbar-hide flex-1 min-w-0">
                    {navItems.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = item.id === activeSection;
                      
                      return (
                        <motion.button
                          key={item.name}
                          onClick={() => scrollToSection(item.href)}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative group flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2 sm:px-2.5 md:px-4 py-2 rounded-full transition-all whitespace-nowrap flex-shrink-0 ${
                            isActive 
                              ? 'bg-brutal-red text-white' 
                              : 'text-white dark:text-brutal-black hover:bg-brutal-red/10'
                          }`}
                        >
                          <Icon size={12} className={`sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-brutal-red'}`} />
                          <span className="font-drowner text-[10px] sm:text-xs font-bold hidden xxs:inline">
                            {item.name}
                          </span>
                          
                          {/* Active indicator dot */}
                          {isActive && (
                            <motion.div
                              layoutId="activeDot"
                              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brutal-red rounded-full"
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Close Button */}
                  <motion.button
                    onClick={() => setIsExpanded(false)}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-brutal-red text-white hover:bg-brutal-red-dark transition-colors flex-shrink-0"
                    aria-label="Close menu"
                  >
                    <X size={14} className="sm:w-4 sm:h-4" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Animated border glow */}
            <motion.div
              animate={{
                opacity: isExpanded ? 0.3 : 0,
              }}
              className="absolute inset-0 rounded-full border-2 border-brutal-red blur-md pointer-events-none"
            />
          </div>

          {/* Shadow effect */}
          <div className="absolute inset-0 rounded-full bg-brutal-red/10 blur-xl -z-10" />
        </motion.div>
      </motion.div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brutal-black/95 dark:bg-white/95 backdrop-blur-xl z-40 sm:hidden"
            onClick={() => setIsExpanded(false)}
          >
            <div className="flex flex-col items-center justify-center h-full gap-4 px-6 pt-20">
              {/* Close button at top */}
              <motion.button
                onClick={() => setIsExpanded(false)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-brutal-black border-2 border-brutal-red"
                aria-label="Close menu"
              >
                <X size={20} className="text-brutal-red" />
              </motion.button>

              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = item.id === activeSection;
                return (
                  <motion.button
                    key={item.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToSection(item.href);
                    }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`group w-full max-w-xs flex items-center gap-4 p-4 border-2 transition-all ${
                      isActive
                        ? 'border-brutal-red bg-brutal-red text-white'
                        : 'border-brutal-red text-white dark:text-brutal-black hover:bg-brutal-red hover:text-white'
                    }`}
                  >
                    <Icon 
                      className={`${isActive ? 'text-white' : 'text-brutal-red group-hover:text-white'} transition-colors`} 
                      size={24} 
                    />
                    <span className="font-yapari text-2xl">
                      {item.name}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

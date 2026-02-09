import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const DynamicIslandNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('main');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

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
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
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
      {/* Dynamic Island Navigation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-3 sm:top-4 lg:top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:px-6 lg:px-0"
      >
        <motion.div
          animate={{
            width: isExpanded 
              ? isMobile ? '100%' : '800px'
              : scrolled 
                ? isMobile ? '100%' : '320px'
                : isMobile ? '100%' : '360px',
            height: isExpanded 
              ? isMobile ? '60px' : '70px' 
              : isMobile ? '56px' : '60px',
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
          className="relative mx-auto max-w-[95vw] lg:max-w-none"
        >
          {/* Dynamic Island Container */}
          <div className={`absolute inset-0 bg-brutal-black dark:bg-white border-2 border-brutal-red overflow-hidden shadow-2xl backdrop-blur-xl ${
            isMobile ? 'rounded-2xl' : 'rounded-full'
          }`}>
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-brutal-red/5 via-transparent to-brutal-red/5"></div>

            {/* Collapsed State */}
            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative h-full flex items-center justify-between px-4 sm:px-6 lg:px-8"
                >
                  {/* Logo/Brand */}
                  <motion.div 
                    className="flex items-center gap-2 sm:gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 border-2 border-brutal-red flex items-center justify-center rounded-md bg-white dark:bg-brutal-black">
                      <span className="font-yapari text-lg sm:text-xl text-brutal-red">/</span>
                    </div>
                    <div className="hidden sm:block">
                      <div className="font-yapari text-sm lg:text-base text-white dark:text-brutal-black">
                        PORTFOLIO
                      </div>
                      <div className="font-mono text-[7px] lg:text-[8px] text-brutal-red uppercase tracking-widest">
                        Creative Studio
                      </div>
                    </div>
                  </motion.div>

                  {/* Active Section Indicator - Desktop only */}
                  <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-brutal-red/10 rounded-full">
                    {navItems.map((item) => {
                      if (item.id === activeSection) {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={item.id}
                            layoutId="activeIndicator"
                            className="flex items-center gap-2"
                          >
                            <Icon className="text-brutal-red" size={14} />
                            <span className="font-mono text-xs text-white dark:text-brutal-black font-bold">
                              {item.name}
                            </span>
                          </motion.div>
                        );
                      }
                      return null;
                    })}
                  </div>

                  {/* Right side actions */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    {/* Dark Mode Toggle */}
                    <div className="hidden sm:block">
                      <DarkModeToggle />
                    </div>

                    {/* Expand Button */}
                    <motion.button
                      onClick={() => setIsExpanded(true)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-brutal-red text-white hover:bg-brutal-red-dark transition-colors"
                      aria-label="Open menu"
                    >
                      <Menu size={18} />
                    </motion.button>
                  </div>
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
                  className="relative h-full flex items-center justify-between px-4 sm:px-6"
                >
                  {/* Navigation Items */}
                  <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide flex-1">
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
                          className={`relative group flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 lg:px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                            isActive 
                              ? 'bg-brutal-red text-white' 
                              : 'text-white dark:text-brutal-black hover:bg-brutal-red/10'
                          }`}
                        >
                          <Icon size={14} className={isActive ? 'text-white' : 'text-brutal-red'} />
                          <span className="font-mono text-xs font-bold hidden xs:inline">
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

                  {/* Right side in expanded state */}
                  <div className="flex items-center gap-2 ml-2">
                    {/* Dark Mode Toggle - Expanded state */}
                    <div className="hidden sm:block">
                      <DarkModeToggle />
                    </div>

                    {/* Close Button */}
                    <motion.button
                      onClick={() => setIsExpanded(false)}
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-brutal-red text-white hover:bg-brutal-red-dark transition-colors flex-shrink-0"
                      aria-label="Close menu"
                    >
                      <X size={18} />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Animated border glow */}
            <motion.div
              animate={{
                opacity: isExpanded ? 0.3 : 0,
              }}
              className={`absolute inset-0 border-2 border-brutal-red blur-md pointer-events-none ${
                isMobile ? 'rounded-2xl' : 'rounded-full'
              }`}
            />
          </div>

          {/* Shadow effect */}
          <div className={`absolute inset-0 bg-brutal-red/10 blur-xl -z-10 ${
            isMobile ? 'rounded-2xl' : 'rounded-full'
          }`} />
        </motion.div>
      </motion.div>

      {/* Mobile Full-Screen Menu (for very small screens when expanded) */}
      <AnimatePresence>
        {isExpanded && window.innerWidth < 475 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brutal-black/95 dark:bg-white/95 backdrop-blur-xl z-40 xs:hidden"
            onClick={() => setIsExpanded(false)}
          >
            <div className="flex flex-col items-center justify-center h-full gap-4 px-6 pt-20">
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
                    className={`group w-full max-w-sm flex items-center gap-4 p-4 border-2 transition-all ${
                      isActive
                        ? 'border-brutal-red bg-brutal-red text-white dark:text-white'
                        : 'border-brutal-red text-white dark:text-brutal-black hover:bg-brutal-red hover:text-white'
                    }`}
                  >
                    <Icon className={`${isActive ? 'text-white' : 'text-brutal-red group-hover:text-white'} transition-colors`} size={24} />
                    <span className="font-yapari text-2xl">
                      {item.name}
                    </span>
                  </motion.button>
                );
              })}

              {/* Dark Mode Toggle in mobile menu */}
              <div className="mt-6">
                <DarkModeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DynamicIslandNav;

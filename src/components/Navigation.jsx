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
    }
  };

  return (
    <>
      {/* Dynamic Island Navigation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      >
        <motion.div
          animate={{
            width: isExpanded ? '700px' : scrolled ? '280px' : '320px',
            height: isExpanded ? '70px' : '56px',
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
          className="relative max-w-[95vw]"
        >
          {/* Dynamic Island Container */}
          <div className="absolute inset-0 bg-brutal-black dark:bg-white border-2 border-brutal-red rounded-full overflow-hidden shadow-2xl backdrop-blur-xl">
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
                  className="relative h-full flex items-center justify-between px-6 md:px-8"
                >
                  {/* Logo/Brand */}
                  <motion.div 
                    className="flex items-center gap-2 md:gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-7 h-7 md:w-8 md:h-8 border-2 border-brutal-red flex items-center justify-center rounded-md">
                      <span className="font-yapari text-lg text-brutal-red">/</span>
                    </div>
                    <span className="font-coolvetica text-xs md:text-sm font-bold text-white dark:text-brutal-black">
                      
                    </span>
                  </motion.div>

                  {/* Active Section Indicator */}
                  <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-brutal-red/10 rounded-full">
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
                            <span className="font-drowner text-xs text-white dark:text-brutal-black">
                              {item.name}
                            </span>
                          </motion.div>
                        );
                      }
                      return null;
                    })}
                  </div>

                  {/* Expand Button */}
                  <motion.button
                    onClick={() => setIsExpanded(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-brutal-red text-white hover:bg-brutal-red-dark transition-colors"
                  >
                    <Menu size={16} />
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
                  className="relative h-full flex items-center justify-between px-4 md:px-6"
                >
                  {/* Navigation Items */}
                  <div className="flex items-center gap-1 md:gap-2 overflow-x-auto scrollbar-hide">
                    {navItems.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = item.id === activeSection;
                      
                      return (
                        <motion.button
                          key={item.name}
                          onClick={() => {
                            scrollToSection(item.href);
                            setIsExpanded(false);
                          }}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative group flex items-center gap-2 px-3 md:px-4 py-2 rounded-full transition-all ${
                            isActive 
                              ? 'bg-brutal-red text-white' 
                              : 'text-white dark:text-brutal-black hover:bg-brutal-red/10'
                          }`}
                        >
                          <Icon size={14} className={isActive ? 'text-white' : 'text-brutal-red'} />
                          <span className="font-drowner text-xs font-bold hidden sm:inline whitespace-nowrap">
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
                    className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-brutal-red text-white hover:bg-brutal-red-dark transition-colors flex-shrink-0 ml-2"
                  >
                    <X size={16} />
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

      {/* Mobile Full-Screen Menu (for very small screens) */}
      <AnimatePresence>
        {isExpanded && window.innerWidth < 640 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brutal-black/95 dark:bg-white/95 backdrop-blur-xl z-40 sm:hidden"
            onClick={() => setIsExpanded(false)}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToSection(item.href);
                      setIsExpanded(false);
                    }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-4 text-white dark:text-brutal-black"
                  >
                    <Icon className="text-brutal-red group-hover:scale-110 transition-transform" size={24} />
                    <span className="font-yapari text-4xl group-hover:text-brutal-red transition-colors">
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

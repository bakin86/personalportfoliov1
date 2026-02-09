import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 dark:bg-brutal-black/95 backdrop-blur-lg shadow-lg border-b-2 border-brutal-red' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-2 sm:gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-brutal-red flex items-center justify-center bg-white dark:bg-brutal-black">
                <span className="font-yapari text-xl sm:text-2xl text-brutal-red">/</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-yapari text-lg sm:text-xl text-brutal-black dark:text-white">
                  PORTFOLIO
                </div>
                <div className="font-mono text-[8px] text-brutal-red uppercase tracking-widest">
                  Creative Studio
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = item.id === activeSection;
                
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative group flex items-center gap-2 px-4 py-2 transition-all ${
                      isActive 
                        ? 'text-brutal-red' 
                        : 'text-brutal-black dark:text-white hover:text-brutal-red'
                    }`}
                  >
                    <Icon size={16} className={isActive ? 'text-brutal-red' : ''} />
                    <span className="font-mono text-sm font-bold">
                      {item.name}
                    </span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brutal-red"
                      />
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 border-2 border-brutal-red opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                  </motion.button>
                );
              })}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Dark Mode Toggle */}
              <DarkModeToggle />

              {/* CTA Button - Hidden on mobile */}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-brutal-red bg-brutal-red text-white font-mono text-xs sm:text-sm font-bold hover:bg-transparent hover:text-brutal-red transition-all"
              >
                LET'S TALK
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-brutal-red bg-brutal-red text-white hover:bg-transparent hover:text-brutal-red transition-all"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-brutal-red"
          style={{
            width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
          }}
        />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-brutal-black/80 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white dark:bg-brutal-black border-l-4 border-brutal-red z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b-2 border-brutal-red">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-brutal-red flex items-center justify-center">
                      <span className="font-yapari text-xl text-brutal-red">/</span>
                    </div>
                    <div>
                      <div className="font-yapari text-lg text-brutal-black dark:text-white">MENU</div>
                      <div className="font-mono text-[8px] text-brutal-red uppercase tracking-widest">Navigation</div>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center border-2 border-brutal-red text-brutal-red hover:bg-brutal-red hover:text-white transition-all"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 p-6">
                  <nav className="space-y-2">
                    {navItems.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = item.id === activeSection;
                      
                      return (
                        <motion.button
                          key={item.name}
                          onClick={() => scrollToSection(item.href)}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 10 }}
                          className={`w-full group flex items-center gap-4 p-4 border-2 transition-all ${
                            isActive
                              ? 'border-brutal-red bg-brutal-red text-white'
                              : 'border-brutal-black/10 dark:border-white/10 text-brutal-black dark:text-white hover:border-brutal-red'
                          }`}
                        >
                          <Icon size={24} className={isActive ? 'text-white' : 'text-brutal-red'} />
                          <div className="flex-1 text-left">
                            <div className="font-yapari text-xl">
                              {item.name}
                            </div>
                            <div className="font-mono text-[10px] text-brutal-red uppercase tracking-widest">
                              {item.id}
                            </div>
                          </div>
                          {isActive && (
                            <motion.div
                              layoutId="mobileActiveIndicator"
                              className="w-2 h-2 bg-white rounded-full"
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </nav>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t-2 border-brutal-red">
                  <motion.button
                    onClick={() => scrollToSection('#contact')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 border-2 border-brutal-red bg-brutal-red text-white font-mono text-sm font-bold hover:bg-transparent hover:text-brutal-red transition-all"
                  >
                    GET IN TOUCH
                  </motion.button>
                  
                  <div className="mt-4 text-center">
                    <p className="font-mono text-xs text-brutal-black/50 dark:text-white/50">
                      Ready to start a project?
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationBar;

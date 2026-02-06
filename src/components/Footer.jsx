import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t-2 border-brutal-red bg-white dark:bg-brutal-black">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 border-2 border-brutal-red flex items-center justify-center">
                  <span className="font-display text-2xl text-brutal-red">/</span>
                </div>
                <div>
                  <div className="font-display text-xl text-brutal-black dark:text-white">PORTFOLIO</div>
                  <div className="font-mono text-[8px] text-brutal-red uppercase tracking-widest">Creative Studio</div>
                </div>
              </div>
              <p className="font-mono text-sm text-brutal-black/60 dark:text-white/60 leading-relaxed">
                Creating digital experiences that break conventions and inspire innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-mono text-xs text-brutal-red uppercase tracking-wider mb-4">
                Navigation
              </h3>
              <nav className="space-y-2">
                {['Home', 'About', 'Work', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => document.querySelector(`#${item.toLowerCase()}`).scrollIntoView({ behavior: 'smooth' })}
                    className="block font-mono text-sm text-brutal-black dark:text-white hover:text-brutal-red transition-colors"
                  >
                    / {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-mono text-xs text-brutal-red uppercase tracking-wider mb-4">
                Let's Connect
              </h3>
              <p className="font-mono text-sm text-brutal-black/60 dark:text-white/60 mb-4">
                Ready to start a project?
              </p>
              <button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="group border-2 border-brutal-red px-6 py-3 font-mono text-sm font-bold text-brutal-red hover:bg-brutal-red hover:text-white transition-all"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-brutal-red mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="font-mono text-sm text-brutal-black/50 dark:text-white/50 text-center md:text-left">
              <p className="flex items-center gap-2 justify-center md:justify-start flex-wrap">
                © {currentYear} Portfolio. Built with
                <Heart className="text-brutal-red fill-brutal-red" size={14} />
                and precision.
              </p>
            </div>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -4 }}
              whileTap={{ y: 0 }}
              className="group flex items-center gap-2 border-2 border-brutal-red px-6 py-3 font-mono text-xs font-bold text-brutal-red hover:bg-brutal-red hover:text-white transition-all"
            >
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
              BACK TO TOP
            </motion.button>
          </div>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border-t-2 border-r-2 border-brutal-red/20"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-b-2 border-l-2 border-brutal-red/20"></div>
    </footer>
  );
};

export default Footer;

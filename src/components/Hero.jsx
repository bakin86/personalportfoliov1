import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Download } from 'lucide-react';
import TiltedCard from './TiltedCard';
import ScrollReveal, { ScrollRevealText, ScrollRevealWords } from './ScrollReveal';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="main" className="min-h-screen flex items-center relative overflow-hidden pt-24">
      {/* Unique Abstract Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #ff0000 1px, transparent 1px),
              linear-gradient(to bottom, #ff0000 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Animated Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] border-2 border-brutal-red/10 dark:border-brutal-red/20"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />

        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 -left-32 w-64 h-64 border border-brutal-red/10 dark:border-brutal-red/20 rounded-full"
        />

        {/* Diagonal Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-brutal-red/10 to-transparent transform -skew-x-12"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-brutal-red/10 to-transparent transform skew-x-12"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Label */}
            <ScrollReveal variant="fade-right" delay={0.2}>
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-brutal-red"></div>
                <span className="font-sans-serif text-xs text-brutal-red uppercase tracking-[0.3em]">
                  {personal.role}
                </span>
              </div>
            </ScrollReveal>

            {/* Name */}
            <ScrollReveal variant="fade-up" delay={0.3}>
              <h1 className="font text-7xl md:text-8xl lg:text-9xl leading-[0.9] text-brutal-black dark:text-white mb-4">
                {personal.name.split(' ').map((word, i) => (
                  <span key={i} className="block">
                    {i === 0 ? (
                      <ScrollRevealText text={word} delay={0.5} />
                    ) : (
                      <span className="text-brutal-red">
                        <ScrollRevealText text={word} delay={0.7} />
                      </span>
                    )}
                  </span>
                ))}
              </h1>
            </ScrollReveal>

            {/* Tagline */}
            <ScrollReveal variant="fade-up" delay={0.9}>
              <p className="font-sans-serif text-lg md:text-xl text-brutal-black/70 dark:text-white/70 max-w-lg leading-relaxed border-l-2 border-brutal-red pl-6">
                <ScrollRevealWords text={personal.tagline} delay={0.2} wordDelay={0.03} />
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal variant="fade-up" delay={1.2}>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-8 py-4 border-2 border-brutal-red bg-brutal-red text-white  font-bold text-sm overflow-hidden hover:bg-transparent hover:text-brutal-red transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    LET'S TALK
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button
                  className="group px-8 py-4 border-2 border-brutal-red text-brutal-red font-sans-serif font-bold text-sm hover:bg-brutal-red hover:text-white transition-all duration-300"
                >
                  <span className="flex items-center gap-2"> 
                    <Download size={16} />
                    RESUME
                  </span>
                </button>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal variant="fade-up" delay={1.4}>
              <div className="flex gap-12 pt-8">
                <div>
                  <div className="font text-4xl text-brutal-red">5+</div>
                  <div className="font-sans-serif text-xs text-brutal-black/50 dark:text-white/50 uppercase tracking-wider">Years Exp</div>
                </div>
                <div>
                  <div className="font text-4xl text-brutal-red">50+</div>
                  <div className="font-sans-serif text-xs text-brutal-black/50 dark:text-white/50 uppercase tracking-wider">Projects</div>
                </div>
                <div>
                  <div className="font text-4xl text-brutal-red">30+</div>
                  <div className="font-sans-serif text-xs text-brutal-black/50 dark:text-white/50 uppercase tracking-wider">Clients</div>
                </div>
              </div>
            </ScrollReveal>
          </motion.div>

          {/* Right: Profile Picture with Unique Frame */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <TiltedCard rotateAmplitude={18} className="relative max-w-lg mx-auto">
              {/* Decorative Corners */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-brutal-red"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-brutal-red"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-brutal-red"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-brutal-red"></div>

              {/* Main Image Container */}
              <div className="relative aspect-square overflow-hidden bg-brutal-gray-light dark:bg-brutal-gray">
                <img 
                  src="/profile-picture.png" 
                  alt={personal.name}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Placeholder */}
                <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-brutal-red/5 to-transparent">
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-6 border-4 border-brutal-red flex items-center justify-center">
                      <span className="font-display text-8xl text-brutal-red">
                        {personal.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <p className="font-mono text-xs text-brutal-black/50 dark:text-white/50">
                      Add photo:<br/>
                      <code className="text-brutal-red">/public/profile-picture.jpg</code>
                    </p>
                  </div>
                </div>

                {/* Red Overlay on Hover */}
                <div className="absolute inset-0 bg-brutal-red/20 opacity-0 hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 bg-white dark:bg-brutal-black border-4 border-brutal-red p-6 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-brutal-red rounded-full animate-pulse"></div>
                  <span className="font-sans-serif text-xs text-brutal-black dark:text-white uppercase tracking-wider">
                    {personal.availability}
                  </span>
                </div>
              </motion.div>
            </TiltedCard>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-brutal-red rotate-90">SCROLL</span>
        <div className="w-px h-16 bg-gradient-to-b from-brutal-red to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;

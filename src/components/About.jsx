import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Zap, Target } from 'lucide-react';
import ScrollReveal, { ScrollRevealText, ScrollRevealWords } from './ScrollReveal';
import React from 'react';

const About = () => {
  const { about } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const icons = [Code, Palette, Zap, Target];

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden bg-white dark:bg-brutal-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #ff0000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Large Number Background */}
      <div className="absolute top-20 right-10 font-display text-[20rem] text-brutal-red/5 dark:text-brutal-red/10 leading-none select-none">
        02
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <ScrollReveal variant="fade-right" delay={0.1}>
              <div className="flex items-center gap-6 mb-4">
                <div className="w-12 h-12 border-2 border-brutal-red flex items-center justify-center">
                  <span className="font-mono text-xs text-brutal-red">02</span>
                </div>
                <h2 className="font-yapari text-6xl md:text-8xl text-brutal-black dark:text-white">
                  <ScrollRevealText text="ABOUT" delay={0.3} />
                  <span className="text-brutal-red">.</span>
                </h2>
              </div>
              <div className="h-px bg-brutal-red w-32 ml-20"></div>
            </ScrollReveal>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left: Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="space-y-12">
                <ScrollReveal variant="fade-up" delay={0.3}>
                  <p className="font-drowner text-2xl md:text-3xl text-brutal-black dark:text-white leading-relaxed">
                    <ScrollRevealWords text={about.description} wordDelay={0.02} />
                  </p>
                </ScrollReveal>

                {/* Expertise Grid */}
                <div>
                  <h3 className="font-mono text-sm text-brutal-red uppercase tracking-widest mb-8 flex items-center gap-3">
                    <div className="w-8 h-px bg-brutal-red"></div>
                    EXPERTISE
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {about.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-brutal-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        <div className="relative border border-brutal-black/10 dark:border-white/10 group-hover:border-brutal-red p-4 transition-colors">
                          <div className="flex items-center gap-3">
                            {icons[index % icons.length] && 
                              React.createElement(icons[index % icons.length], { 
                                className: "text-brutal-red group-hover:text-white transition-colors", 
                                size: 20 
                              })
                            }
                            <span className="font-mono text-sm text-brutal-black dark:text-white group-hover:text-white transition-colors">
                              {skill}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5"
            >
              <div className="space-y-8 lg:sticky lg:top-32">
                {about.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="border-2 border-brutal-black dark:border-white group-hover:border-brutal-red p-8 transition-all duration-300">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="font-display text-7xl text-brutal-red mb-2 group-hover:scale-110 transition-transform origin-left">
                            {stat.value}
                          </div>
                          <div className="font-mono text-xs text-brutal-black/50 dark:text-white/50 uppercase tracking-widest">
                            {stat.label}
                          </div>
                        </div>
                        <div className="w-16 h-16 border-2 border-brutal-red flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="font-mono text-xs text-brutal-red">{`0${index + 1}`}</span>
                        </div>
                      </div>
                      
                      {/* Hover effect line */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-brutal-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                    </div>
                  </motion.div>
                ))}

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="border-l-4 border-brutal-red pl-6 py-4"
                >
                  <p className="font-mono text-lg text-brutal-black/70 dark:text-white/70 italic">
                    "Creating experiences that
                    <br />
                    <span className="text-brutal-red not-italic">break conventions.</span>"
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

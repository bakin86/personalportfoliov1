import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal, { ScrollRevealText, ScrollRevealWords } from './ScrollReveal';

const Projects = () => {
  const { projects } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getStatusColor = (status) => {
    switch (status) {
      case 'COMPLETED': return 'border-green-500 text-green-500';
      case 'IN DEVELOPMENT': return 'border-brutal-red text-brutal-red';
      case 'PROTOTYPE': return 'border-blue-500 text-blue-500';
      case 'PLANNING': return 'border-yellow-500 text-yellow-500';
      default: return 'border-white text-white';
    }
  };

  return (
    <section id="projects" ref={ref} className="py-32 relative overflow-hidden bg-white dark:bg-brutal-black">
      {/* Large Number */}
      <div className="absolute top-20 right-10 font-display text-[20rem] text-brutal-red/5 dark:text-brutal-red/10 leading-none select-none">
        04
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
                  <span className="font-mono text-xs text-brutal-red">04</span>
                </div>
                <h2 className="font-display text-6xl md:text-8xl text-brutal-black dark:text-white">
                  <ScrollRevealText text="PROJECTS" delay={0.3} />
                  <span className="text-brutal-red">.</span>
                </h2>
              </div>
              <div className="h-px bg-brutal-red w-32 ml-20"></div>
            </ScrollReveal>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="h-full border-2 border-brutal-black/10 dark:border-white/10 hover:border-brutal-red transition-all duration-300 p-8 bg-white/50 dark:bg-brutal-gray/50">
                  {/* Header */}
                  <ScrollReveal variant="fade-up" delay={index * 0.15 + 0.1}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="font-display text-3xl md:text-4xl text-brutal-black dark:text-white mb-3 leading-tight group-hover:text-brutal-red transition-colors">
                          <ScrollRevealText text={project.title} charDelay={0.03} />
                        </h3>
                        <span className={`inline-block font-mono text-xs px-3 py-1 border ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>

                      {/* Project Number */}
                      <div className="font-display text-6xl text-brutal-red/10 group-hover:text-brutal-red/30 transition-colors">
                        0{project.id}
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Concept */}
                  <ScrollReveal variant="fade-up" delay={index * 0.15 + 0.2}>
                    <p className="font-mono text-sm text-brutal-black/70 dark:text-white/70 mb-8 leading-relaxed">
                      <ScrollRevealWords text={project.concept} wordDelay={0.02} />
                    </p>
                  </ScrollReveal>

                  {/* Progress */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-xs text-brutal-black/40 dark:text-white/40 uppercase tracking-wider">
                        Progress
                      </span>
                      <span className="font-mono text-sm font-bold text-brutal-red">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="relative h-2 bg-brutal-black/5 dark:bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${project.progress}%` } : {}}
                        transition={{ duration: 1.5, delay: index * 0.15 + 0.5, ease: "easeOut" }}
                        className="absolute inset-y-0 left-0 bg-brutal-red"
                      >
                        {/* Animated stripe */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[slide-in_2s_linear_infinite]"></div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2 border-t border-brutal-black/10 dark:border-white/10 pt-6">
                    <span className="font-mono text-xs text-brutal-black/40 dark:text-white/40 uppercase tracking-wider">
                      Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs text-brutal-black/60 dark:text-white/60 hover:text-brutal-red transition-colors"
                        >
                          / {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover decoration */}
                  <div className="absolute top-0 left-0 w-2 h-0 bg-brutal-red group-hover:h-full transition-all duration-500"></div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <div className="border-2 border-brutal-red p-12 bg-brutal-red/5">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="font-display text-4xl md:text-5xl text-brutal-black dark:text-white mb-2">
                    HAVE AN IDEA<span className="text-brutal-red">?</span>
                  </h3>
                  <p className="font-mono text-brutal-black/70 dark:text-white/70">
                    Let's turn your concept into reality
                  </p>
                </div>
                <button
                  onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-10 py-5 border-2 border-brutal-red bg-brutal-red text-white font-mono font-bold text-sm hover:bg-transparent hover:text-brutal-red transition-all duration-300"
                >
                  START A PROJECT
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

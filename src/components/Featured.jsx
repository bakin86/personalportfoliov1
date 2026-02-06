import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import TiltedCard from './TiltedCard';
import ScrollReveal, { ScrollRevealText, ScrollRevealWords } from './ScrollReveal';

const Featured = () => {
  const { featured } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="featured" ref={ref} className="py-32 relative bg-brutal-light-bg dark:bg-brutal-gray overflow-hidden">
      {/* Large Number */}
      <div className="absolute top-20 left-10 font-yapari text-[20rem] text-brutal-red/5 dark:text-brutal-red/10 leading-none select-none">
        03
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
                  <span className="font-drowner text-xs text-brutal-red">03</span>
                </div>
                <h2 className="font-yapari text-6xl md:text-8xl text-brutal-black dark:text-white">
                  <ScrollRevealText text="FEATURED" delay={0.3} />
                  <span className="text-brutal-red">.</span>
                </h2>
              </div>
              <div className="h-px bg-brutal-red w-32 ml-20"></div>
            </ScrollReveal>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {featured.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  {/* Image/Visual Side */}
                  <div className="lg:col-span-5">
                    <ScrollReveal variant="fade-right" delay={index * 0.2}>
                      <TiltedCard rotateAmplitude={18}>
                        <div className="relative aspect-[4/3] overflow-hidden bg-brutal-gray dark:bg-brutal-black border-2 border-brutal-black/10 dark:border-white/10 group-hover:border-brutal-red transition-colors">
                          {/* Project Image - Replace with your own images */}
                          <img 
                            src={`/projects/project-${project.id}.jpg`}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              // Fallback if image doesn't exist
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          
                          {/* Placeholder if no image */}
                          <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-brutal-red/10 to-transparent">
                            <div className="text-center p-8">
                              <div className="font-yapari text-9xl text-brutal-red/20 mb-4">
                                {`0${project.id}`}
                              </div>
                              <p className="font-coolvetica text-xs text-brutal-black/50 dark:text-white/50">
                                Add image to:<br/>
                                <code className="text-brutal-red">/public/projects/project-{project.id}.jpg</code>
                              </p>
                            </div>
                          </div>
                          
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-brutal-red opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
                          
                          {/* Corner accents */}
                          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brutal-red transform scale-0 group-hover:scale-100 transition-transform origin-top-left duration-300"></div>
                          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-brutal-red transform scale-0 group-hover:scale-100 transition-transform origin-bottom-right duration-300"></div>
                        </div>
                      </TiltedCard>
                    </ScrollReveal>
                  </div>

                  {/* Content Side */}
                  <div className="lg:col-span-7">
                    <div className="space-y-6">
                      {/* Meta */}
                      <ScrollReveal variant="fade-left" delay={index * 0.2 + 0.1}>
                        <div className="flex items-center gap-4 font-drowner text-xs text-brutal-red">
                          <span className="border border-brutal-red px-3 py-1">
                            {project.category}
                          </span>
                          <span>{project.year}</span>
                        </div>
                      </ScrollReveal>

                      {/* Title */}
                      <ScrollReveal variant="fade-left" delay={index * 0.2 + 0.2}>
                        <h3 className="font-yapari text-5xl md:text-6xl text-brutal-black dark:text-white group-hover:text-brutal-red transition-colors leading-tight">
                          <ScrollRevealText text={project.title} charDelay={0.02} />
                        </h3>
                      </ScrollReveal>

                      {/* Description */}
                      <ScrollReveal variant="fade-left" delay={index * 0.2 + 0.3}>
                        <p className="font-coolvetica text-lg text-brutal-black/70 dark:text-white/70 leading-relaxed max-w-2xl">
                          <ScrollRevealWords text={project.description} wordDelay={0.02} />
                        </p>
                      </ScrollReveal>

                      {/* Tech Stack */}
                      <ScrollReveal variant="fade-left" delay={index * 0.2 + 0.4}>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="font-drowner text-xs px-3 py-1 border border-brutal-black/10 dark:border-white/10 text-brutal-black/60 dark:text-white/60 hover:border-brutal-red hover:text-brutal-red transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </ScrollReveal>

                      {/* Link */}
                      <ScrollReveal variant="fade-left" delay={index * 0.2 + 0.5}>
                        <a
                          href={project.link}
                          className="inline-flex items-center gap-2 font-drowner font-bold text-sm text-brutal-red hover:gap-4 transition-all group/link"
                        >
                          VIEW PROJECT
                          <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </a>
                      </ScrollReveal>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="mt-12 h-px bg-brutal-black/10 dark:bg-white/10"></div>
              </motion.article>
            ))}
          </div>

          {/* View All CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <button className="group relative px-12 py-5 border-2 border-brutal-red font-drowner font-bold text-sm overflow-hidden">
              <span className="relative z-10 text-brutal-red group-hover:text-white transition-colors">
                VIEW ALL PROJECTS
              </span>
              <div className="absolute inset-0 bg-brutal-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Featured;

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { sendEmail } from '../utils/emailService';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Github, Twitter, Linkedin, Phone } from 'lucide-react';
import ScrollReveal, { ScrollRevealText } from './ScrollReveal';

const Contact = () => {
  const { personal, social } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      await sendEmail(formData);
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
      }, 5000);
    } catch (error) {
      setStatus({ loading: false, success: false, error: error.message });
    }
  };

  const socialIcons = {
    github: Github,
    twitter: Twitter,
    linkedin: Linkedin,
    dribbble: Mail
  };

  return (
    <section id="contact" ref={ref} className="py-32 relative overflow-hidden bg-brutal-light-bg dark:bg-brutal-gray">
      {/* Large Number */}
      <div className="absolute top-20 left-10 font-display text-[20rem] text-brutal-red/5 dark:text-brutal-red/10 leading-none select-none">
        05
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
                  <span className="font-mono text-xs text-brutal-red">05</span>
                </div>
                <h2 className="font-display text-6xl md:text-8xl text-brutal-black dark:text-white">
                  <ScrollRevealText text="CONTACT" delay={0.3} />
                  <span className="text-brutal-red">.</span>
                </h2>
              </div>
              <div className="h-px bg-brutal-red w-32 ml-20"></div>
            </ScrollReveal>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h3 className="font-display text-4xl text-brutal-black dark:text-white mb-8">
                  LET'S WORK
                  <br />
                  <span className="text-brutal-red">TOGETHER</span>
                </h3>
                <p className="font-mono text-lg text-brutal-black/70 dark:text-white/70 leading-relaxed">
                  Have a project in mind? Let's discuss how we can bring your vision to life.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Email */}
                <div className="group border-l-4 border-brutal-red pl-6 py-2 hover:pl-8 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="text-brutal-red" size={20} />
                    <span className="font-mono text-xs text-brutal-black/40 dark:text-white/40 uppercase tracking-wider">
                      Email
                    </span>
                  </div>
                  <a 
                    href={`mailto:${personal.email}`} 
                    className="font-mono text-xl text-brutal-black dark:text-white hover:text-brutal-red transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>

                {/* Location */}
                <div className="group border-l-4 border-brutal-red pl-6 py-2 hover:pl-8 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="text-brutal-red" size={20} />
                    <span className="font-mono text-xs text-brutal-black/40 dark:text-white/40 uppercase tracking-wider">
                      Location
                    </span>
                  </div>
                  <div className="font-mono text-xl text-brutal-black dark:text-white">
                    {personal.location}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-mono text-xs text-brutal-black/40 dark:text-white/40 uppercase tracking-wider mb-6">
                  Connect
                </h4>
                <div className="flex gap-4">
                  {social.map((item, index) => {
                    const Icon = socialIcons[item.icon] || Mail;
                    return (
                      <motion.a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="group w-14 h-14 border-2 border-brutal-black/10 dark:border-white/10 hover:border-brutal-red flex items-center justify-center transition-all hover:scale-110"
                      >
                        <Icon className="text-brutal-black dark:text-white group-hover:text-brutal-red transition-colors" size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Decorative Quote */}
              <div className="border-2 border-brutal-red p-6 bg-brutal-red/5">
                <p className="font-mono text-sm text-brutal-black dark:text-white italic leading-relaxed">
                  "Every great project starts with a conversation. Let's make yours exceptional."
                </p>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Input */}
                <div className="group">
                  <label htmlFor="name" className="block font-mono text-xs text-brutal-black/40 dark:text-white/40 uppercase tracking-wider mb-3">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-brutal-black/20 dark:border-white/20 focus:border-brutal-red px-0 py-4 font-mono text-lg text-brutal-black dark:text-white outline-none transition-colors placeholder:text-brutal-black/20 dark:placeholder:text-white/20"
                    placeholder=""
                  />
                </div>

                {/* Email Input */}
                <div className="group">
                  <label htmlFor="email" className="block font-mono text-xs text-brutal-black/40 dark:text-white/40 uppercase tracking-wider mb-3">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-brutal-black/20 dark:border-white/20 focus:border-brutal-red px-0 py-4 font-mono text-lg text-brutal-black dark:text-white outline-none transition-colors placeholder:text-brutal-black/20 dark:placeholder:text-white/20"
                    placeholder="@example.com"
                  />
                </div>

                {/* Message Input */}
                <div className="group">
                  <label htmlFor="message" className="block font-mono text-xs text-brutal-black/40 dark:text-white/40 uppercase tracking-wider mb-3">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-transparent border-b-2 border-brutal-black/20 dark:border-white/20 focus:border-brutal-red px-0 py-4 font-mono text-lg text-brutal-black dark:text-white outline-none transition-colors resize-none placeholder:text-brutal-black/20 dark:placeholder:text-white/20"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="group relative w-full border-2 border-brutal-red px-8 py-5 font-mono font-bold text-sm bg-brutal-red text-white hover:bg-transparent hover:text-brutal-red transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {status.loading ? (
                      'SENDING MESSAGE...'
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>

                {/* Status Messages */}
                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 border-2 border-green-500 bg-green-500/10"
                  >
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="font-mono text-sm text-brutal-black dark:text-white">
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 border-2 border-brutal-red bg-brutal-red/10"
                  >
                    <AlertCircle className="text-brutal-red flex-shrink-0" size={20} />
                    <span className="font-mono text-sm text-brutal-black dark:text-white">
                      {status.error}
                    </span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

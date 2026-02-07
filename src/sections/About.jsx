import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { HiCode, HiLightningBolt, HiSparkles, HiCube } from 'react-icons/hi';
import { about, personalInfo } from '../data/portfolio';
import { SectionHeading } from '../components/ui';
import { staggerContainer, staggerItem, easings } from '../utils/animations';

/**
 * Animated counter component for stats
 */
const AnimatedCounter = ({ value, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const numericValue = parseInt(value);

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * numericValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/**
 * Premium About Section
 * Features: Stats, visual accents, refined typography
 */
const About = () => {
  const stats = [
    { value: '50', suffix: 'K+', label: 'Lines of Code', icon: HiCode },
    { value: '20', suffix: '+', label: 'Projects Shipped', icon: HiCube },
    { value: '3', suffix: '+', label: 'Years Experience', icon: HiLightningBolt },
    { value: '12', suffix: '+', label: 'Technologies', icon: HiSparkles },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          badge="About Me"
          title={about.title}
          subtitle="Get to know the person behind the code"
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Main content - 3 columns */}
          <motion.div 
            className="lg:col-span-3 space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            {about.content.map((paragraph, index) => (
              <motion.p 
                key={index} 
                variants={staggerItem}
                className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Signature-style name */}
            <motion.div 
              variants={staggerItem}
              className="pt-4"
            >
              <p className="text-xl font-display font-semibold text-neutral-900 dark:text-white">
                — {personalInfo.name}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
                {personalInfo.role} • {personalInfo.location}
              </p>
            </motion.div>
          </motion.div>

          {/* Stats sidebar - 2 columns */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: easings.easeOutExpo }}
          >
            <div className="sticky top-28">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-900/5 dark:hover:shadow-black/20"
                  >
                    {/* Icon */}
                    <div className="mb-4 w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    
                    {/* Value */}
                    <div className="font-display font-bold text-3xl text-neutral-900 dark:text-white mb-1">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    
                    {/* Label */}
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Quick facts card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 dark:from-neutral-800 dark:to-neutral-900 text-white"
              >
                <h4 className="font-semibold mb-3">Currently</h4>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Building scalable systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Learning Rust & WebAssembly
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Open to new opportunities
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

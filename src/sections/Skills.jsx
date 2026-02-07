import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGo,

  SiReact,
  SiNextdotjs,
  SiNodedotjs,

  SiTailwindcss,
  SiPostgresql,
  SiRedis,

  SiDocker,
  SiAmazonaws, // 👈 FIXED HERE
  SiGit,
  SiVercel,
  SiFirebase,
  SiVite,
} from "react-icons/si";

import { HiCode, HiServer, HiCube, HiCog, HiChip } from 'react-icons/hi';
import { skills } from '../data/portfolio';
import { SectionHeading, Card, Badge } from '../components/ui';
import { staggerContainer, staggerItem, easings } from '../utils/animations';

// Icon mapping for skills
const skillIcons = {
  'JavaScript/TypeScript': SiJavascript,
  'Python': SiPython,
  'Go': SiGo,
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  'PostgreSQL': SiPostgresql,
  'Redis': SiRedis,
  'Docker': SiDocker,
  'AWS':   SiAmazonaws,
  'Git': SiGit,
  'Vercel': SiVercel,
  'Firebase': SiFirebase,
  'Vite': SiVite,
};

// Category icons and colors
const categoryConfig = {
  'Languages': { icon: HiCode, gradient: 'from-orange-500 to-amber-500' },
  'Frontend': { icon: HiCube, gradient: 'from-blue-500 to-cyan-500' },
  'Backend': { icon: HiServer, gradient: 'from-emerald-500 to-teal-500' },
  'Tools & Platforms': { icon: HiCog, gradient: 'from-purple-500 to-pink-500' },
  'Practices': { icon: HiChip, gradient: 'from-rose-500 to-orange-500' },
};

/**
 * Individual skill tag with icon
 */
const SkillTag = ({ skill }) => {
  const Icon = skillIcons[skill];
  
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="group flex items-center gap-2 px-3 py-2 bg-neutral-50 dark:bg-neutral-800/50 hover:bg-white dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 rounded-xl transition-all duration-300 cursor-default"
    >
      {Icon && (
        <Icon className="w-4 h-4 text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors" />
      )}
      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {skill}
      </span>
    </motion.div>
  );
};

/**
 * Premium Skills Section
 * Features: Categorized skill cards with icons and hover effects
 */
const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-neutral-50/50 dark:bg-neutral-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          badge="Tech Stack"
          title={skills.title}
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.categories.map((category, index) => {
            const config = categoryConfig[category.name] || { icon: HiCode, gradient: 'from-neutral-500 to-neutral-600' };
            const CategoryIcon = config.icon;
            
            return (
              <motion.div
                key={category.name}
                variants={staggerItem}
                className="group"
              >
                <Card 
                  variant="default" 
                  padding="lg"
                  className="h-full"
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-lg shadow-neutral-900/10`}>
                      <CategoryIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <SkillTag key={skill} skill={skill} />
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-500 dark:text-neutral-500">
            Always learning and exploring new technologies.{' '}
            <span className="text-neutral-700 dark:text-neutral-300 font-medium">
              Currently diving into Rust, WebAssembly, and AI/ML.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

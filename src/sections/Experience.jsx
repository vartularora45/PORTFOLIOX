import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap, HiCode, HiCalendar, HiLocationMarker } from 'react-icons/hi';
import { experience } from '../data/portfolio';
import { SectionHeading, Card, Badge } from '../components/ui';
import { staggerContainer, staggerItem, easings } from '../utils/animations';

// Type configuration for different experience types
const typeConfig = {
  work: {
    icon: HiBriefcase,
    color: 'bg-blue-500',
    lightBg: 'bg-blue-50 dark:bg-blue-900/20',
    label: 'Work'
  },
  education: {
    icon: HiAcademicCap,
    color: 'bg-emerald-500',
    lightBg: 'bg-emerald-50 dark:bg-emerald-900/20',
    label: 'Education'
  },
  project: {
    icon: HiCode,
    color: 'bg-purple-500',
    lightBg: 'bg-purple-50 dark:bg-purple-900/20',
    label: 'Project'
  }
};

/**
 * Experience Card Component
 */
const ExperienceCard = ({ item, index, isLast }) => {
  const config = typeConfig[item.type] || typeConfig.work;
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: easings.easeOutExpo }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[15px] md:left-[23px] top-12 bottom-0 w-px bg-gradient-to-b from-neutral-300 dark:from-neutral-700 to-transparent" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 md:left-2 top-0">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: 'spring' }}
          className={`relative flex items-center justify-center w-8 h-8 rounded-full ${config.color} shadow-lg`}
        >
          <Icon className="w-4 h-4 text-white" />
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-current" />
        </motion.div>
      </div>

      {/* Content card */}
      <Card variant="default" padding="lg" className="ml-4 md:ml-6">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant={item.type === 'work' ? 'primary' : item.type === 'education' ? 'success' : 'purple'} size="sm">
                {config.label}
              </Badge>
            </div>
            <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-semibold mt-1">
              {item.organization}
            </p>
          </div>
          
          {/* Date & Location */}
          <div className="flex flex-col items-end gap-1 text-sm text-neutral-500 dark:text-neutral-500">
            <span className="flex items-center gap-1.5">
              <HiCalendar className="w-4 h-4" />
              {item.date}
            </span>
            <span className="flex items-center gap-1.5">
              <HiLocationMarker className="w-4 h-4" />
              {item.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          {item.description}
        </p>

        {/* Highlights */}
        {item.highlights && item.highlights.length > 0 && (
          <div className="space-y-2">
            {item.highlights.map((highlight, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 + 0.3 }}
                className="flex items-start gap-3 text-sm"
              >
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500" />
                <span className="text-neutral-600 dark:text-neutral-400">
                  {highlight}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </Card>
    </motion.div>
  );
};

/**
 * Premium Experience Section
 * Features: Clean timeline, type indicators, smooth animations
 */
const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-neutral-50/50 dark:bg-neutral-950/50">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          badge="Journey"
          title="Experience"
          subtitle="Professional experience, education, and notable contributions"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          className="relative"
        >
          {experience.map((item, index) => (
            <ExperienceCard 
              key={item.id} 
              item={item} 
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

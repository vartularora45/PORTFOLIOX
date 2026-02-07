import { motion } from 'framer-motion';

/**
 * Premium Section Heading component with consistent styling
 * Includes animated underline and optional badge
 */
const SectionHeading = ({ 
  title, 
  subtitle,
  badge,
  align = 'center',
  className = '' 
}) => {
  
  const alignments = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl mb-16 ${alignments[align]} ${className}`}
    >
      {badge && (
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full border border-primary-200/50 dark:border-primary-800/50"
        >
          {badge}
        </motion.span>
      )}
      
      <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-neutral-900 dark:text-white">
        {title}
      </h2>
      
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {subtitle}
        </p>
      )}
      
      {/* Animated underline accent */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`mt-6 h-1 w-20 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full origin-left ${
          align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
        }`}
      />
    </motion.div>
  );
};

export default SectionHeading;

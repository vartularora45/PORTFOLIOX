import { forwardRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Premium Card component with hover effects and variants
 * Supports glassmorphism, glow effects, and smooth animations
 */
const Card = forwardRef(({ 
  children, 
  variant = 'default',
  hover = true,
  padding = 'md',
  className = '',
  onClick,
  ...props 
}, ref) => {

  // Base card styles
  const baseStyles = `
    relative rounded-2xl
    transition-all duration-500 ease-out
  `;

  // Variant styles
  const variants = {
    default: `
      bg-white dark:bg-neutral-900
      border border-neutral-200 dark:border-neutral-800
      ${hover ? 'hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-xl hover:shadow-neutral-900/5 dark:hover:shadow-black/20' : ''}
    `,
    glass: `
      bg-white/60 dark:bg-neutral-900/60
      backdrop-blur-xl
      border border-white/20 dark:border-neutral-700/50
      ${hover ? 'hover:bg-white/80 dark:hover:bg-neutral-900/80 hover:shadow-xl' : ''}
    `,
    gradient: `
      bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950
      border border-neutral-200 dark:border-neutral-800
      ${hover ? 'hover:shadow-xl hover:shadow-primary-500/10' : ''}
    `,
    glow: `
      bg-white dark:bg-neutral-900
      border border-neutral-200 dark:border-neutral-800
      ${hover ? 'hover:border-primary-500/50 hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.3)]' : ''}
    `,
    elevated: `
      bg-white dark:bg-neutral-900
      shadow-lg shadow-neutral-900/5 dark:shadow-black/20
      ${hover ? 'hover:shadow-2xl hover:shadow-neutral-900/10 dark:hover:shadow-black/30 hover:-translate-y-1' : ''}
    `,
    flat: `
      bg-neutral-50 dark:bg-neutral-800/50
      ${hover ? 'hover:bg-neutral-100 dark:hover:bg-neutral-800' : ''}
    `
  };

  // Padding variants
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`.trim();

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      className={combinedClasses}
      whileHover={hover ? { y: -2 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = 'Card';

/**
 * Card Header subcomponent
 */
export const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

/**
 * Card Title subcomponent
 */
export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`font-display font-semibold text-xl text-neutral-900 dark:text-white ${className}`}>
    {children}
  </h3>
);

/**
 * Card Description subcomponent
 */
export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-neutral-600 dark:text-neutral-400 ${className}`}>
    {children}
  </p>
);

/**
 * Card Content subcomponent
 */
export const CardContent = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
);

/**
 * Card Footer subcomponent
 */
export const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800 ${className}`}>
    {children}
  </div>
);

export default Card;

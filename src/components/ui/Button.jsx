import { forwardRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Premium Button component with multiple variants and sizes
 * Supports icons, loading states, and smooth animations
 */
const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon,
  iconPosition = 'right',
  isLoading = false,
  disabled = false,
  className = '',
  href,
  onClick,
  type = 'button',
  ...props 
}, ref) => {
  
  // Base styles applied to all variants
  const baseStyles = `
    inline-flex items-center justify-center gap-2 
    font-medium rounded-xl
    transition-all duration-300 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `;

  // Variant-specific styles
  const variants = {
    primary: `
      bg-neutral-900 dark:bg-white 
      text-white dark:text-neutral-900 
      hover:bg-neutral-800 dark:hover:bg-neutral-100
      hover:shadow-lg hover:shadow-neutral-900/20 dark:hover:shadow-white/20
      active:scale-[0.98]
    `,
    secondary: `
      bg-transparent
      border-2 border-neutral-900 dark:border-white
      text-neutral-900 dark:text-white
      hover:bg-neutral-900 hover:text-white 
      dark:hover:bg-white dark:hover:text-neutral-900
      active:scale-[0.98]
    `,
    ghost: `
      bg-transparent
      text-neutral-600 dark:text-neutral-400
      hover:text-neutral-900 dark:hover:text-white
      hover:bg-neutral-100 dark:hover:bg-neutral-800
    `,
    gradient: `
      bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500
      text-white font-semibold
      hover:shadow-lg hover:shadow-primary-500/30
      hover:brightness-110
      active:scale-[0.98]
    `,
    glass: `
      bg-white/10 dark:bg-white/5
      backdrop-blur-md
      border border-white/20 dark:border-white/10
      text-neutral-900 dark:text-white
      hover:bg-white/20 dark:hover:bg-white/10
    `
  };

  // Size variants
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    icon: 'p-3'
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg 
      className="animate-spin h-5 w-5" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" cy="12" r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const content = (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>
      )}
      {children}
      {!isLoading && icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>
      )}
    </>
  );

  // Render as anchor if href is provided
  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={`group ${combinedClasses}`}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
      className={`group ${combinedClasses}`}
      {...props}
    >
      {content}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;

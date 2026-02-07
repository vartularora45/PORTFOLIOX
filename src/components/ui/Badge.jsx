import { forwardRef } from 'react';

/**
 * Premium Badge component for labels, tags, and status indicators
 */
const Badge = forwardRef(({ 
  children, 
  variant = 'default',
  size = 'md',
  icon,
  dot = false,
  pulse = false,
  className = '',
  ...props 
}, ref) => {

  // Base styles
  const baseStyles = `
    inline-flex items-center gap-1.5
    font-medium rounded-full
    transition-colors duration-200
  `;

  // Variant styles
  const variants = {
    default: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300',
    primary: 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300',
    success: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
    warning: 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
    error: 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300',
    purple: 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    outline: 'bg-transparent border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300',
    gradient: 'bg-gradient-to-r from-primary-500/10 to-purple-500/10 text-primary-700 dark:text-primary-300 border border-primary-200/50 dark:border-primary-800/50'
  };

  // Size styles
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  return (
    <span ref={ref} className={combinedClasses} {...props}>
      {dot && (
        <span className={`w-2 h-2 rounded-full ${
          variant === 'success' ? 'bg-emerald-500' :
          variant === 'warning' ? 'bg-amber-500' :
          variant === 'error' ? 'bg-red-500' :
          variant === 'primary' ? 'bg-primary-500' :
          'bg-neutral-500'
        } ${pulse ? 'animate-pulse' : ''}`} />
      )}
      {icon && <span className="text-current">{icon}</span>}
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

export default Badge;

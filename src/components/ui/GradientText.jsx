/**
 * Premium Gradient Text component for eye-catching headlines
 * Supports multiple gradient presets and custom gradients
 */
const GradientText = ({ 
  children, 
  variant = 'primary',
  animate = false,
  className = '',
  as: Component = 'span',
  ...props 
}) => {

  // Gradient presets
  const gradients = {
    primary: 'from-primary-500 via-purple-500 to-pink-500',
    sunset: 'from-orange-500 via-pink-500 to-purple-500',
    ocean: 'from-cyan-400 via-blue-500 to-purple-600',
    forest: 'from-emerald-400 via-teal-500 to-cyan-500',
    fire: 'from-yellow-400 via-orange-500 to-red-500',
    purple: 'from-violet-500 via-purple-500 to-fuchsia-500',
    monochrome: 'from-neutral-500 via-neutral-700 to-neutral-900 dark:from-neutral-400 dark:via-neutral-200 dark:to-white',
    gold: 'from-amber-400 via-yellow-500 to-orange-500'
  };

  // Animation styles
  const animationClass = animate ? 'animate-gradient bg-[length:200%_auto]' : '';

  const baseStyles = `
    bg-gradient-to-r ${gradients[variant]}
    bg-clip-text text-transparent
    ${animationClass}
  `;

  return (
    <Component className={`${baseStyles} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
};

export default GradientText;

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-gradient-to-r from-gold to-gold-dark text-navy-dark hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5',
  secondary: 'border-2 border-white text-white hover:bg-white hover:text-navy-dark',
  'secondary-gold': 'border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark',
  dark: 'bg-navy text-white hover:bg-navy-light',
  ghost: 'text-gold hover:bg-gold/10',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 ${variants[variant]} ${sizes[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  // Link (internal)
  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {children}
      </Link>
    );
  }

  // Anchor (external)
  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  // Button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseClasses}
      disabled={disabled}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

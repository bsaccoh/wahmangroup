import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hover = true,
  onClick,
  glass = false,
  ...props
}) => {
  return (
    <motion.div
      className={`rounded-2xl overflow-hidden transition-all duration-300 ${
        glass
          ? 'glass-card-dark'
          : 'bg-white shadow-sm border border-grey-light/50'
      } ${
        hover
          ? 'hover:shadow-xl hover:-translate-y-1 hover:border-gold/30 cursor-pointer'
          : ''
      } ${className}`}
      onClick={onClick}
      whileHover={hover ? { scale: 1.02 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SectionTitle = ({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-12 md:mb-16 ${alignClasses[align]} ${className}`}
    >
      {subtitle && (
        <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3 block font-body">
          {subtitle}
        </span>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? 'text-white' : 'text-navy-dark'
        }`}
      >
        {title}
      </h2>
      <div className="flex justify-center mt-4 mb-6">
        <div className={`h-1 w-16 rounded-full bg-gradient-to-r from-gold to-gold-light ${align === 'left' ? 'mr-auto' : align === 'right' ? 'ml-auto' : ''}`} />
      </div>
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            light ? 'text-white/60' : 'text-grey-medium'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;

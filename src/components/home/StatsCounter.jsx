import { useCounterAnimation } from '../../hooks/useCounterAnimation';
import { stats } from '../../data/stats';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const StatItem = ({ stat }) => {
  const [counterRef, count] = useCounterAnimation(stat.value, 2000);

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gold mb-2">
        {count}
        <span className="text-gold-light">{stat.suffix}</span>
      </div>
      <h3 className="text-white font-semibold text-lg mb-1 font-body">{stat.label}</h3>
      <p className="text-white/40 text-sm">{stat.description}</p>
    </div>
  );
};

const StatsCounter = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-navy" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="container-custom relative z-10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsCounter;

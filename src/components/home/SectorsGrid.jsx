import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GiMining, GiOilPump, GiFarmer } from 'react-icons/gi';
import { MdApartment, MdFlight, MdSwapHoriz } from 'react-icons/md';
import { sectors } from '../../data/sectors';
import SectionTitle from '../common/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const iconMap = {
  GiMining, GiOilPump, GiFarmer, MdApartment, MdFlight, MdSwapHoriz,
};

const SectorCard = ({ sector, index }) => {
  const navigate = useNavigate();
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const Icon = iconMap[sector.icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => navigate(`/sectors/${sector.id}`)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(`/sectors/${sector.id}`);
        }
      }}
      role="link"
      tabIndex={0}
      aria-label={`Learn more about our ${sector.name} division`}
      className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 shadow-md hover:shadow-2xl transition-shadow duration-500"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url('${sector.image.replace('w=1200', 'w=600')}')` }}
      />

      {/* Base gradient — always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-navy-dark/10" />

      {/* Sector-color top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: sector.color }}
      />

      {/* Hover tint overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
        style={{ backgroundColor: sector.color }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {/* Icon badge */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${sector.color}30`, color: sector.color, border: `1px solid ${sector.color}50` }}
        >
          {Icon && <Icon className="text-xl" />}
        </div>

        {/* Name */}
        <h3 className="font-heading text-xl font-bold text-white mb-1 leading-tight">
          {sector.name}
        </h3>

        {/* Tagline — always visible */}
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          {sector.tagline}
        </p>

        {/* Explore button — slides up on hover */}
        <div className="flex items-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span
            className="text-sm font-semibold px-4 py-1.5 rounded-lg"
            style={{ backgroundColor: sector.color, color: '#fff' }}
          >
            Explore →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const SectorsGrid = () => {
  return (
    <section className="section-padding bg-grey-light">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Portfolio"
          title="Sectors We Operate In"
          description="WAHMAN Group is strategically diversified across six core sectors, driving sustainable growth and creating value across Africa and beyond."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {sectors.map((sector, index) => (
            <SectorCard key={sector.id} sector={sector} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsGrid;

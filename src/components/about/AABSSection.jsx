import { motion } from 'framer-motion';
import {
  MdLocalShipping, MdConstruction, MdComputer, MdSwapHoriz,
  MdTrendingUp, MdFavorite,
} from 'react-icons/md';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const aabsSectors = [
  {
    icon: MdLocalShipping,
    title: 'Logistics',
    description: 'End-to-end supply chain and freight solutions connecting markets across Africa and internationally.',
    color: '#1A3A6B',
  },
  {
    icon: MdConstruction,
    title: 'Construction',
    description: 'Infrastructure and civil construction projects delivering quality built environments across West Africa.',
    color: '#C9A84C',
  },
  {
    icon: MdComputer,
    title: 'Technology',
    description: 'Digital solutions and technology integration driving innovation across business operations and communities.',
    color: '#2196F3',
  },
  {
    icon: MdSwapHoriz,
    title: 'Trading',
    description: 'Commodity and general trading operations facilitating commerce between Africa, Europe, and Asia.',
    color: '#E65100',
  },
  {
    icon: MdTrendingUp,
    title: 'Investment',
    description: 'Strategic investment in high-growth opportunities, startups, and established businesses across the region.',
    color: '#2D6A4F',
  },
  {
    icon: MdFavorite,
    title: 'Charity',
    description: 'Philanthropic initiatives supporting education, healthcare, and community development across Sierra Leone.',
    color: '#9C27B0',
  },
];

const AABSSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="section-padding bg-navy-dark overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-[80px]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            {/* WAHMAN subsidiary badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 text-gold text-xs font-semibold uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              WAHMAN ABU Group Subsidiary
            </span>

            {/* AABS Logo mark */}
            <div className="flex items-center gap-5 mb-5">
              {/* SVG mountain/diamond logo mark */}
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <svg viewBox="0 0 60 50" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  {/* Mountain peaks */}
                  <polygon points="10,40 22,15 34,40" fill="#1A3A6B" opacity="0.85"/>
                  <polygon points="26,40 38,12 50,40" fill="#1A3A6B"/>
                  {/* Gold arc / swoosh */}
                  <path d="M6,38 Q30,25 54,38" stroke="#C9A84C" strokeWidth="2.5" fill="none"/>
                  {/* Diamond */}
                  <polygon points="30,43 33,47 30,51 27,47" fill="#C9A84C"/>
                </svg>
              </div>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-none">
                  AABS
                </h2>
                <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mt-1">
                  Investment &amp; Trading Group
                </p>
              </div>
            </div>

            <p className="text-white/60 text-base leading-relaxed max-w-xl">
              AABS Investment &amp; Trading Group is a dynamic subsidiary of WAHMAN ABU Group, operating across six complementary sectors that support and amplify the Group's broader mission of driving sustainable economic growth across Africa and beyond.
            </p>
          </motion.div>

          {/* Divider stat */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-56 shrink-0 bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
          >
            <p className="font-heading text-5xl font-bold text-gradient-gold mb-2">6</p>
            <p className="text-white/60 text-sm uppercase tracking-wider">Active Divisions</p>
            <div className="border-t border-white/10 mt-5 pt-5">
              <p className="font-heading text-3xl font-bold text-white mb-1">2003</p>
              <p className="text-white/40 text-xs uppercase tracking-wider">Est. alongside WAHMAN</p>
            </div>
          </motion.div>
        </div>

        {/* Sectors grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aabsSectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${sector.color}25`, color: sector.color }}
              >
                <sector.icon className="text-2xl" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">{sector.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{sector.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AABSSection;

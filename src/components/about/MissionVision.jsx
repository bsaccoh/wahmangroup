import { motion } from 'framer-motion';
import { MdFlag, MdVisibility, MdDiamond } from 'react-icons/md';
import SectionTitle from '../common/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const items = [
  {
    icon: MdFlag,
    title: 'Our Mission',
    description:
      'To drive sustainable economic growth across Africa through strategic investments, responsible resource development, and the creation of lasting value for all stakeholders.',
    color: 'from-gold to-gold-dark',
  },
  {
    icon: MdVisibility,
    title: 'Our Vision',
    description:
      'To be Africa\'s most trusted and impactful diversified conglomerate — a bridge between the continent\'s vast potential and the global marketplace.',
    color: 'from-navy to-navy-light',
  },
  {
    icon: MdDiamond,
    title: 'Our Values',
    description:
      'Integrity in every transaction. Innovation in every solution. Impact in every community. We are guided by the highest ethical standards and an unwavering commitment to excellence.',
    color: 'from-gold-dark to-navy',
  },
];

const MissionVision = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="section-padding bg-grey-light">
      <div className="container-custom">
        <SectionTitle
          subtitle="Purpose & Direction"
          title="Mission, Vision & Values"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden"
            >
              {/* Gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />

              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="text-2xl text-white" />
              </div>

              <h3 className="font-heading text-xl font-bold text-navy-dark mb-4">
                {item.title}
              </h3>
              <p className="text-grey-medium text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

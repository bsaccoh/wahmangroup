import { motion } from 'framer-motion';
import { MdPublic, MdHandshake, MdTrendingUp, MdSecurity } from 'react-icons/md';
import SectionTitle from '../common/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const values = [
  {
    icon: MdPublic,
    title: 'Pan-African Vision',
    description: 'Operating across 10+ countries with deep understanding of local markets and global connectivity.',
  },
  {
    icon: MdHandshake,
    title: 'Strategic Partnerships',
    description: 'Building lasting relationships with governments, institutions, and businesses worldwide.',
  },
  {
    icon: MdTrendingUp,
    title: 'Sustainable Growth',
    description: 'Long-term value creation through responsible investment and ESG-aligned business practices.',
  },
  {
    icon: MdSecurity,
    title: 'Trusted Leadership',
    description: 'Decades of experience with a leadership team committed to integrity and excellence.',
  },
];

const WhyWahman = () => {
  const [ref, isVisible] = useScrollAnimation();
  const yearsActive = new Date().getFullYear() - 2003;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          subtitle="Why WAHMAN"
          title="What Sets Us Apart"
          description={`For over ${yearsActive} years, WAHMAN Group has been at the forefront of African business, combining vision, integrity, and innovation.`}
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                <item.icon className="text-3xl text-navy group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-dark mb-3">
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

export default WhyWahman;

import { motion } from 'framer-motion';
import { MdCheckCircle, MdNature, MdWaterDrop, MdPeople, MdPublic, MdForest, MdSolarPower } from 'react-icons/md';
import SectionTitle from '../common/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Button from '../common/Button';
import sustainabilityBg from '../../assets/investor-img.png';

const esgPillars = [
  {
    icon: MdNature,
    title: 'Environmental',
    color: '#2D6A4F',
    items: [
      'Carbon reduction targets across all operations',
      'Reforestation and land rehabilitation programs',
      'Water conservation and management systems',
      'Renewable energy integration in mining operations',
    ],
  },
  {
    icon: MdPeople,
    title: 'Social',
    color: '#C9A84C',
    items: [
      'Community investment and development programs',
      'Local employment and skills training initiatives',
      'Health and safety excellence standards',
      'Education partnerships and scholarships',
    ],
  },
  {
    icon: MdPublic,
    title: 'Governance',
    color: '#1A3A6B',
    items: [
      'Transparent corporate governance frameworks',
      'Anti-corruption and ethical business practices',
      'Independent board oversight and compliance',
      'Stakeholder engagement and reporting',
    ],
  },
];

const esgMetrics = [
  { icon: MdForest, value: '12,000+', label: 'Trees Planted', sublabel: 'via reforestation programs' },
  { icon: MdPeople, value: '2,500+', label: 'Local Jobs Created', sublabel: 'across all operations' },
  { icon: MdSolarPower, value: '30%', label: 'Renewable Energy', sublabel: 'of operational power use' },
  { icon: MdWaterDrop, value: '40%', label: 'Water Recycled', sublabel: 'at processing sites' },
];

const sdgGoals = [
  { number: 1, name: 'No Poverty' },
  { number: 7, name: 'Affordable and Clean Energy' },
  { number: 8, name: 'Decent Work and Economic Growth' },
  { number: 9, name: 'Industry, Innovation and Infrastructure' },
  { number: 12, name: 'Responsible Consumption and Production' },
  { number: 13, name: 'Climate Action' },
  { number: 15, name: 'Life on Land' },
  { number: 17, name: 'Partnerships for the Goals' },
];

const ESGSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();
  const [ref3, isVisible3] = useScrollAnimation();

  return (
    <div>
      {/* Hero Banner */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url('${sustainabilityBg}')` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy-dark/75" />
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-gold"
              style={{
                width: `${180 + i * 120}px`,
                height: `${180 + i * 120}px`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
            />
          ))}
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold/50" />
              <span className="text-gold text-sm font-semibold uppercase tracking-[0.3em]">
                ESG Framework
              </span>
              <div className="h-px w-8 bg-gold/50" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Committed to a{' '}
              <span className="text-gradient-gold">Sustainable</span> Future
            </h1>
            <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
              At WAHMAN Group, sustainability is not an afterthought — it is woven into every investment decision, operational process, and community relationship we hold.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ESG Metrics */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {esgMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-grey-light rounded-2xl hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="text-2xl text-gold" />
                </div>
                <p className="font-heading text-3xl font-bold text-navy-dark mb-1">{metric.value}</p>
                <p className="text-navy font-semibold text-sm">{metric.label}</p>
                <p className="text-grey-medium text-xs mt-1">{metric.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="section-padding bg-grey-light">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Approach"
            title="Our Sustainability Commitment"
            description="WAHMAN Group integrates Environmental, Social, and Governance principles into every aspect of our business operations."
          />

          <div ref={ref2} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {esgPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-500"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                >
                  <pillar.icon className="text-2xl" />
                </div>

                <h3 className="font-heading text-xl font-bold text-navy-dark mb-4">
                  {pillar.title}
                </h3>

                <ul className="space-y-3">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-grey-medium">
                      <MdCheckCircle className="text-gold mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="section-padding gradient-navy">
        <div className="container-custom">
          <SectionTitle
            subtitle="Global Impact"
            title="UN Sustainable Development Goals"
            description="Our operations are aligned with the following UN SDGs, contributing to global sustainability targets."
            light
          />

          <div ref={ref3} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={goal.number}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible3 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-gold/10 hover:border-gold/30 transition-all duration-300"
              >
                <span className="text-gold font-heading text-2xl font-bold block">
                  {goal.number}
                </span>
                <span className="text-white/60 text-xs mt-1 block">{goal.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-grey-light">
        <div className="container-custom text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy-dark mb-4">
            Partner With Us for a Sustainable Future
          </h3>
          <p className="text-grey-medium max-w-2xl mx-auto mb-8">
            We invite investors, partners, and communities to join us in building a more sustainable and equitable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary">
              Get In Touch
            </Button>
            <Button to="/investors" variant="secondary-gold">
              Investor Information
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ESGSection;

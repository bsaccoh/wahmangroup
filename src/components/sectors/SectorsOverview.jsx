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

const SectorsOverview = () => {
  const navigate = useNavigate();
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          subtitle="What We Do"
          title="Our Business Sectors"
          description="WAHMAN Group operates across six interconnected sectors, creating synergies that amplify our impact and deliver value across the value chain."
        />

        <div ref={ref} className="space-y-6">
          {sectors.map((sector, index) => {
            const Icon = iconMap[sector.icon];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => navigate(`/sectors/${sector.id}`)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate(`/sectors/${sector.id}`); } }}
                role="link"
                tabIndex={0}
                aria-label={`View ${sector.name} sector details`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-grey-light/50 hover:shadow-xl hover:border-gold/20 transition-all duration-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              >
                <div className={`flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden bg-navy/10">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-${
                          index === 0 ? '1504328345606-18bbc8c9d7d1' :
                          index === 1 ? '1513828583688-c52646db42da' :
                          index === 2 ? '1560493676-04071c5f467b' :
                          index === 3 ? '1486406146926-c627a92ad1ab' :
                          index === 4 ? '1436491865332-7a61a109db05' :
                          '1454165804606-c3d57bc86b40'
                        }?w=600&q=75')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${sector.color}15`, color: sector.color }}
                      >
                        {Icon && <Icon className="text-xl" />}
                      </div>
                      <span className="text-xs text-grey-medium uppercase tracking-wider font-semibold">
                        {sector.subtitle}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-navy-dark mb-2 group-hover:text-gold-dark transition-colors">
                      {sector.name}
                    </h3>
                    <p className="text-gold text-sm font-medium italic mb-3">{sector.tagline}</p>
                    <p className="text-grey-medium text-sm leading-relaxed mb-4 line-clamp-3">
                      {sector.overview}
                    </p>

                    <div className="flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectorsOverview;

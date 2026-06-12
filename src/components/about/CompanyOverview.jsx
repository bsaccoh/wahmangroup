import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../common/SectionTitle';
import aboutImage from '../../assets/img_4.jpeg';

const CompanyOverview = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="WAHMAN Group headquarters"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Accent box */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center shadow-lg hidden md:flex">
              <div className="text-center text-navy-dark">
                <span className="block text-3xl font-heading font-bold">{new Date().getFullYear() - 2003}+</span>
                <span className="text-xs font-semibold uppercase tracking-wide">Years</span>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3 block">
              Our Story
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-dark mb-6">
              Building Africa's Future,{' '}
              <span className="text-gradient-gold">One Sector at a Time</span>
            </h2>
            <div className="space-y-4 text-grey-medium leading-relaxed">
              <p>
                Founded in 2003 in Freetown, Sierra Leone, WAHMAN Group has grown from a
                mineral trading enterprise into one of West Africa's most diversified
                conglomerates. Our journey reflects a deep commitment to responsible
                investment, sustainable growth, and cross-continental partnership.
              </p>
              <p>
                Today, the Group operates across six core sectors — mining, oil & gas,
                agriculture, real estate, aviation, and trade — with operations spanning
                over 10 countries. We connect African resources, talent, and markets to
                global opportunities.
              </p>
              <p>
                At WAHMAN Group, we believe in the transformative power of business to
                drive social progress. Every investment we make is guided by our commitment
                to creating shared value for our stakeholders, partners, and the
                communities in which we operate.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;

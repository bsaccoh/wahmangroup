import { motion } from 'framer-motion';
import { timeline } from '../../data/timeline';
import SectionTitle from '../common/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Timeline = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="section-padding gradient-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle
          subtitle="Our Journey"
          title="Company Milestones"
          description="Two decades of growth, innovation, and impact across Africa."
          light
        />

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gold/20" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start gap-6 mb-10 md:mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-navy z-10 mt-1" />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}
              >
                <span className="text-gold font-heading text-2xl font-bold">{item.year}</span>
                <h3 className="text-white font-heading text-lg font-semibold mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

import { motion } from 'framer-motion';
import { teamMembers } from '../../data/team';
import SectionTitle from '../common/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const LeadershipTeam = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          subtitle="Leadership"
          title="Meet Our Team"
          description="Our experienced leadership team brings decades of expertise across multiple industries and geographies."
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-grey-light/50 hover:shadow-xl hover:border-gold/20 transition-all duration-500"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-navy to-navy-light">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: member.imagePosition || 'center' }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="text-gold font-heading text-3xl font-bold">
                        {member.name.split(' ').map((n) => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                )}

                {/* Hover overlay — desktop only (md+) */}
                <div className="absolute inset-0 bg-navy-dark/90 items-center justify-center p-6 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white/80 text-sm leading-relaxed text-center">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Name + title (always visible) */}
              <div className="px-5 pt-4 pb-2 text-center">
                <h3 className="font-heading text-lg font-bold text-navy-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-gold text-sm font-medium">{member.title}</p>
              </div>

              {/* Bio — always visible on mobile, hidden on md+ (shown via hover there) */}
              <div className="px-5 pb-5 md:hidden">
                <p className="text-grey-medium text-sm leading-relaxed text-center">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;

import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MdCheckCircle, MdChevronRight } from 'react-icons/md';
import { GiMining, GiOilPump, GiFarmer } from 'react-icons/gi';
import { MdApartment, MdFlight, MdSwapHoriz } from 'react-icons/md';
import { sectors } from '../data/sectors';
import Button from '../components/common/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap = {
  GiMining, GiOilPump, GiFarmer, MdApartment, MdFlight, MdSwapHoriz,
};

const SectorDetail = () => {
  const { sectorId } = useParams();
  const sector = sectors.find((s) => s.id === sectorId);
  const [ref, isVisible] = useScrollAnimation();

  if (!sector) {
    return <Navigate to="/notFound" replace />;
  }

  const Icon = iconMap[sector.icon];
  
  // Use local asset if provided, otherwise upscale the Unsplash URL for the hero
  const imageUrl = typeof sector.image === 'string' && sector.image.startsWith('https://images.unsplash.com')
    ? sector.image.replace('w=1200', 'w=1920')
    : sector.image;

  return (
    <>
      <Helmet>
        <title>{sector.name} | WAHMAN Group</title>
        <meta name="description" content={sector.overview} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${sector.name} | WAHMAN Group`} />
        <meta property="og:description" content={sector.overview} />
        <meta property="og:url" content={`https://wahmangroup.com/sectors/${sector.id}`} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${sector.name} | WAHMAN Group`} />
        <meta name="twitter:description" content={sector.overview} />
        <meta name="twitter:image" content={imageUrl} />
        <link rel="canonical" href={`https://wahmangroup.com/sectors/${sector.id}`} />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${imageUrl}')` }}
            />
            <div className="absolute inset-0 bg-navy-dark/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 to-transparent" />
          </div>

          <div className="container-custom relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-1.5 text-white/50 text-sm flex-wrap">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><MdChevronRight className="text-white/30" /></li>
                <li><Link to="/sectors" className="hover:text-white transition-colors">Sectors</Link></li>
                <li><MdChevronRight className="text-white/30" /></li>
                <li className="text-white/80" aria-current="page">{sector.name}</li>
              </ol>
            </nav>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: sector.color, color: '#fff' }}
                >
                  {Icon && <Icon className="text-3xl" />}
                </div>
                <div>
                  <span className="text-gold text-sm font-semibold uppercase tracking-wider block">
                    {sector.subtitle}
                  </span>
                  <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
                    {sector.name}
                  </h1>
                </div>
              </div>
              <p className="text-xl text-white/80 font-body leading-relaxed mt-6">
                {sector.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="font-heading text-3xl font-bold text-navy-dark mb-6">Overview</h2>
                  <p className="text-grey-medium text-lg leading-relaxed mb-10">
                    {sector.overview}
                  </p>

                  <h3 className="font-heading text-2xl font-bold text-navy-dark mb-6">Key Activities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {sector.activities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-grey-light rounded-xl">
                        <MdCheckCircle className="text-gold mt-1 shrink-0 text-lg" />
                        <span className="text-navy-dark font-medium">{activity}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-navy-dark mb-6">Strategic Highlights</h3>
                  <div className="space-y-6 mb-10">
                    {sector.highlights.map((highlight, index) => (
                      <div key={index} className="border-l-4 pl-6" style={{ borderColor: sector.color }}>
                        <h4 className="font-heading text-xl font-bold text-navy-dark mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-grey-medium leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                {/* Sustainability Panel */}
                <div className="bg-navy-dark rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-[40px] -mr-10 -mt-10" />
                  <h3 className="font-heading text-xl font-bold text-white mb-4 relative z-10">
                    Sustainability Focus
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 relative z-10">
                    {sector.sustainability}
                  </p>
                  <Button to="/sustainability" variant="primary" size="sm" className="w-full relative z-10">
                    Read ESG Report
                  </Button>
                </div>

                {/* Contact Panel */}
                <div className="bg-grey-light border border-grey-medium/20 rounded-2xl p-8 text-center">
                  <h3 className="font-heading text-xl font-bold text-navy-dark mb-4">
                    Partner in {sector.name}
                  </h3>
                  <p className="text-grey-medium text-sm mb-6">
                    Interested in exploring opportunities within our {sector.name.toLowerCase()} division?
                  </p>
                  <Button to="/contact" variant="dark" size="sm" className="w-full">
                    Contact Us
                  </Button>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SectorDetail;

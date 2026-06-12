import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Button from '../common/Button';
import heroPoster from '../../assets/hero.png';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Slow down the video playback
    }
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with video and gradient overlay */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={heroPoster}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/mining-vid1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" />
      </div>

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4 md:mb-6"
          >
            <div className="h-px w-6 bg-gold/50" />
            <span className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] font-body">
              Diversified Conglomerate
            </span>
            <div className="h-px w-6 bg-gold/50" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-6 leading-tight"
          >
            Investing in Africa's{' '}
            <span className="text-gradient-gold">Future</span>.{' '}
            <br className="hidden md:block" />
            Connecting the{' '}
            <span className="text-gradient-gold">World</span>.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-white/60 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-7 md:mb-10 font-body leading-relaxed px-2 sm:px-0"
          >
            <span className="sm:hidden">
              Mining, energy, agriculture, real estate, aviation &amp; trade — across Africa and the world.
            </span>
            <span className="hidden sm:inline">
              A multi-sector conglomerate driving growth across mining, energy, agriculture,
              real estate, aviation, and trade — building bridges between Africa and the world.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Button to="/sectors" variant="primary" size="md" className="w-full sm:w-auto sm:!px-8 sm:!py-4">
              Explore Our Portfolio
            </Button>
            <Button to="/contact" variant="secondary" size="md" className="w-full sm:w-auto sm:!px-8 sm:!py-4">
              Partner With Us
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-gold transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <MdKeyboardArrowDown className="text-2xl" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;

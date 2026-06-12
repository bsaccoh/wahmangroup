import { motion } from 'framer-motion';

const MapEmbed = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl border border-grey-light/50 relative bg-grey-light"
    >
      <iframe
        title="WAHMAN ABU Group Headquarters — 13 Walpole Street, Freetown, Sierra Leone"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.927!2d-13.2341!3d8.4836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf04c1774d1bf7c7%3A0x81eb59b3a9b9c3a5!2sFreetown%2C%20Sierra%20Leone!5e0!3m2!1sen!2ssl!4v1720000000000!5m2!1sen!2ssl"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
      ></iframe>
    </motion.div>
  );
};

export default MapEmbed;

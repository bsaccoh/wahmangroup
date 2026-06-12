import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MdErrorOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Sectors', to: '/sectors' },
  { label: 'News & Media', to: '/news' },
  { label: 'Contact Us', to: '/contact' },
];

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | WAHMAN Group</title>
        <meta name="description" content="The page you are looking for could not be found. Return to the WAHMAN Group homepage." />
      </Helmet>

      <main className="min-h-screen pt-20 flex items-center justify-center bg-grey-light section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-grey-medium/10"
          >
            <div className="w-20 h-20 mx-auto bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
              <MdErrorOutline className="text-4xl" />
            </div>
            <h1 className="font-heading text-5xl font-bold text-navy-dark mb-3">404</h1>
            <h2 className="text-xl font-semibold text-navy mb-4">Page Not Found</h2>
            <p className="text-grey-medium mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <Button to="/" variant="primary" className="w-full mb-6">
              Return Home
            </Button>

            <div className="border-t border-grey-light pt-6">
              <p className="text-grey-medium text-sm mb-4">Or explore these pages:</p>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="px-4 py-2.5 rounded-lg bg-grey-light text-navy text-sm font-medium hover:bg-gold/10 hover:text-gold-dark transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default NotFound;

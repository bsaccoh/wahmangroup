import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const sections = [
  {
    title: '1. Information We Collect',
    body: 'We collect information you provide directly to us, such as when you fill out the contact form on our website (name, company, email address, phone number, and message content). We also collect information automatically when you use our website, including IP address, browser type, pages visited, and time spent on pages.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'We use the information we collect to respond to your inquiries, send you requested information about our services, improve our website and services, comply with legal obligations, and communicate with you about news and events (where you have given consent).',
  },
  {
    title: '3. Sharing of Information',
    body: 'We do not sell, trade, or transfer your personal information to third parties without your consent, except as required by law or to trusted partners who assist in operating our website, conducting our business, or servicing you, provided those parties agree to keep this information confidential.',
  },
  {
    title: '4. Data Retention',
    body: 'We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law. Contact form submissions are retained for a maximum of three years unless a longer retention period is required for business reasons.',
  },
  {
    title: '5. Cookies',
    body: 'Our website may use cookies and similar tracking technologies to improve your browsing experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you do not accept cookies, some portions of our website may not function properly.',
  },
  {
    title: '6. Security',
    body: 'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.',
  },
  {
    title: '7. Your Rights',
    body: 'Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data, object to processing, and withdraw consent at any time. To exercise these rights, please contact us at privacy@wahmangroup.com.',
  },
  {
    title: '8. Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with a revised effective date. Your continued use of our website after any changes constitutes your acceptance of the updated policy.',
  },
  {
    title: '9. Contact Us',
    body: 'If you have any questions about this Privacy Policy, please contact us at: WAHMAN Group, 15 Siaka Stevens Street, Freetown, Sierra Leone. Email: privacy@wahmangroup.com. Phone: +232 76 000 000.',
  },
];

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | WAHMAN Group</title>
        <meta name="description" content="WAHMAN Group's Privacy Policy — how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://wahmangroup.com/privacy" />
      </Helmet>

      <main className="pt-28 pb-16 bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3 block">
              Legal
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy-dark mb-4">
              Privacy Policy
            </h1>
            <p className="text-grey-medium mb-2">
              <strong>Effective Date:</strong> 1 January 2025
            </p>
            <p className="text-grey-medium mb-10 leading-relaxed">
              WAHMAN Group ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website at wahmangroup.com.
            </p>

            <div className="space-y-8">
              {sections.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="border-b border-grey-light pb-8 last:border-0"
                >
                  <h2 className="font-heading text-xl font-bold text-navy-dark mb-3">{section.title}</h2>
                  <p className="text-grey-medium leading-relaxed">{section.body}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-grey-light rounded-2xl">
              <p className="text-grey-medium text-sm">
                Questions about this policy?{' '}
                <Link to="/contact" className="text-gold font-semibold hover:underline">
                  Contact us
                </Link>{' '}
                or email{' '}
                <a href="mailto:privacy@wahmangroup.com" className="text-gold font-semibold hover:underline">
                  privacy@wahmangroup.com
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Privacy;

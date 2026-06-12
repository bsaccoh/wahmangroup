import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing and using the WAHMAN Group website (wahmangroup.com), you accept and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our website.',
  },
  {
    title: '2. Use of Website',
    body: 'You may use this website only for lawful purposes and in accordance with these Terms. You agree not to use this website in any way that violates applicable local, national, or international laws or regulations; to transmit unsolicited or unauthorised advertising material; or to engage in any conduct that restricts or inhibits any person\'s use or enjoyment of the website.',
  },
  {
    title: '3. Intellectual Property',
    body: 'All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of WAHMAN Group and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.',
  },
  {
    title: '4. Disclaimer of Warranties',
    body: 'This website is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. WAHMAN Group makes no representations or warranties regarding the accuracy, completeness, or reliability of any information on this website.',
  },
  {
    title: '5. Limitation of Liability',
    body: 'To the fullest extent permitted by law, WAHMAN Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this website or any content contained herein.',
  },
  {
    title: '6. Third-Party Links',
    body: 'Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.',
  },
  {
    title: '7. Investment Information',
    body: 'Nothing on this website constitutes investment advice, financial advice, or a recommendation to buy or sell any security or investment product. Any forward-looking statements regarding WAHMAN Group\'s business operations are subject to risks and uncertainties.',
  },
  {
    title: '8. Governing Law',
    body: 'These Terms of Use shall be governed by and construed in accordance with the laws of Sierra Leone. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Sierra Leone.',
  },
  {
    title: '9. Changes to Terms',
    body: 'We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes your acceptance of the new terms.',
  },
  {
    title: '10. Contact',
    body: 'For questions about these Terms of Use, please contact: WAHMAN Group, 15 Siaka Stevens Street, Freetown, Sierra Leone. Email: legal@wahmangroup.com.',
  },
];

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use | WAHMAN Group</title>
        <meta name="description" content="WAHMAN Group's Terms of Use — the rules and conditions governing use of our website." />
        <link rel="canonical" href="https://wahmangroup.com/terms" />
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
              Terms of Use
            </h1>
            <p className="text-grey-medium mb-2">
              <strong>Effective Date:</strong> 1 January 2025
            </p>
            <p className="text-grey-medium mb-10 leading-relaxed">
              Please read these Terms of Use carefully before using the WAHMAN Group website. By accessing or using our website, you agree to be legally bound by these terms.
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
                Questions about these terms?{' '}
                <Link to="/contact" className="text-gold font-semibold hover:underline">
                  Contact us
                </Link>{' '}
                or email{' '}
                <a href="mailto:legal@wahmangroup.com" className="text-gold font-semibold hover:underline">
                  legal@wahmangroup.com
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

export default Terms;

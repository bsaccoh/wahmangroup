import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import ContactForm from '../components/contact/ContactForm';
import MapEmbed from '../components/contact/MapEmbed';
import SectionTitle from '../components/common/SectionTitle';

const contactCards = [
  {
    icon: MdPhone,
    title: 'Call Us',
    lines: [
      { label: 'Africa', value: '+232 76 920000', href: 'tel:+23276920000' },
      { label: 'Europe', value: '+39 329 3661921', href: 'tel:+393293661921' },
      { label: 'USA', value: '+1 914 918 5695', href: 'tel:+19149185695' },
    ],
  },
  {
    icon: MdLocationOn,
    title: 'Visit Us',
    lines: [
      { value: '13 Walpole Street' },
      { value: 'Freetown, Sierra Leone' },
      { value: 'West Africa' },
    ],
  },
  {
    icon: MdEmail,
    title: 'Email Us',
    lines: [
      { value: 'info@wahmangroup.com', href: 'mailto:info@wahmangroup.com' },
    ],
  },
];

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | WAHMAN ABU Group</title>
        <meta name="description" content="Get in touch with WAHMAN ABU Group for general inquiries, investment opportunities, and partnerships." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us | WAHMAN ABU Group" />
        <meta property="og:description" content="Get in touch with WAHMAN ABU Group for general inquiries, investment opportunities, and partnerships." />
        <meta property="og:url" content="https://wahmangroup.com/contact" />
        <meta property="og:image" content="https://wahmangroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | WAHMAN ABU Group" />
        <meta name="twitter:description" content="Get in touch with WAHMAN ABU Group for general inquiries, investment opportunities, and partnerships." />
        <meta name="twitter:image" content="https://wahmangroup.com/og-image.jpg" />
        <link rel="canonical" href="https://wahmangroup.com/contact" />
      </Helmet>

      <main className="pt-28 pb-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Get In Touch"
            title="Contact Us"
            description="Our team is ready to answer your inquiries and discuss potential partnerships."
            align="center"
          />

          {/* Chairman info banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 mb-4 bg-navy-dark rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <div className="flex-1">
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">Direct Contact</p>
              <h3 className="font-heading text-white text-xl font-bold">
                <span className="text-gold">Alhaji Abu</span> Sesay
              </h3>
              <p className="text-white/50 text-sm mt-0.5">President / Chairman, WAHMAN ABU Group</p>
            </div>
            <a
              href="mailto:info@wahmangroup.com"
              className="shrink-0 px-5 py-2.5 bg-gold text-navy-dark text-sm font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              Send Email
            </a>
          </motion.div>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-grey-light rounded-2xl p-6 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-navy-dark flex items-center justify-center">
                  <card.icon className="text-gold text-xl" />
                </div>
                <h4 className="font-heading font-bold text-navy-dark">{card.title}</h4>
                <div className="space-y-1.5">
                  {card.lines.map((line, j) => (
                    <div key={j} className="flex items-baseline gap-2">
                      {line.label && (
                        <span className="text-xs text-grey-medium font-medium w-12 shrink-0">{line.label}</span>
                      )}
                      {line.href ? (
                        <a href={line.href} className="text-navy-dark text-sm font-medium hover:text-gold transition-colors">
                          {line.value}
                        </a>
                      ) : (
                        <span className="text-navy-dark text-sm">{line.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <ContactForm />
            <MapEmbed />
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;

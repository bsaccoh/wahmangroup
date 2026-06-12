import { motion } from 'framer-motion';
import {
  MdTrendingUp, MdAccountBalance, MdDescription, MdShield,
  MdGroups, MdBarChart, MdDownload, MdOpenInNew, MdCheckCircle,
  MdHandshake, MdPhone, MdEmail, MdLocationOn,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { sectors } from '../../data/sectors';
import investorBg from '../../assets/investor-img.png';

const keyMetrics = [
  { value: '2003', label: 'Year Established' },
  { value: '6', label: 'Core Sectors' },
  { value: '8+', label: 'Countries of Operation' },
  { value: '500+', label: 'Employees Group-Wide' },
];

const whyInvestPoints = [
  'Diversified portfolio across six high-growth African sectors mitigates single-sector risk',
  'Over two decades of on-the-ground operational experience in West Africa',
  'Established government relationships and regulatory expertise across 8+ countries',
  'Experienced local management team with deep market knowledge',
  'Transparent ESG framework aligned with UN Sustainable Development Goals',
  'Strategic positioning across Africa–Europe–Asia trade corridors',
];

const investmentTypes = [
  {
    icon: MdTrendingUp,
    title: 'Equity Partnership',
    description: 'Acquire a direct equity stake in the WAHMAN ABU Group or a specific sector subsidiary, participating in long-term capital growth.',
  },
  {
    icon: MdHandshake,
    title: 'Joint Ventures',
    description: 'Co-develop specific projects with shared capital, expertise, and returns — from mining concessions to real estate developments.',
  },
  {
    icon: MdAccountBalance,
    title: 'Trade Finance',
    description: 'Support commodity import/export transactions across our mining, agriculture, and trading operations with structured finance solutions.',
  },
  {
    icon: MdBarChart,
    title: 'Project Investment',
    description: 'Fund specific capital projects across mining, energy infrastructure, aviation, or property development with defined return horizons.',
  },
];

const highlights = [
  {
    icon: MdTrendingUp,
    title: 'Growth Track Record',
    description: 'Consistent year-over-year growth across all six core sectors, with a diversified portfolio that mitigates risk.',
  },
  {
    icon: MdAccountBalance,
    title: 'Financial Stability',
    description: 'Strong balance sheet supported by revenue streams across mining, energy, agriculture, real estate, aviation, and trade.',
  },
  {
    icon: MdDescription,
    title: 'Transparent Reporting',
    description: 'Annual financial and ESG reports published with full transparency, adhering to international reporting standards.',
  },
  {
    icon: MdEmail,
    title: 'Investor Relations',
    description: 'Dedicated investor relations team providing timely updates, quarterly reports, and direct communication channels.',
  },
];

const governanceItems = [
  {
    icon: MdShield,
    title: 'Board Oversight',
    description: 'An independent board of directors provides strategic oversight and ensures accountability across all group entities.',
  },
  {
    icon: MdGroups,
    title: 'Executive Leadership',
    description: 'Experienced C-suite team with decades of combined expertise in African markets, commodities, and international finance.',
  },
  {
    icon: MdBarChart,
    title: 'Audit & Compliance',
    description: 'External audits conducted annually. Internal audit function monitors compliance with financial and operational controls.',
  },
];

const reports = [
  { title: 'Annual Report 2023', type: 'PDF', size: '4.2 MB' },
  { title: 'ESG Report 2023', type: 'PDF', size: '2.8 MB' },
  { title: 'Corporate Governance Statement', type: 'PDF', size: '1.1 MB' },
  { title: 'Group Strategy Overview', type: 'PDF', size: '3.5 MB' },
];

const InvestorSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();
  const [ref3, isVisible3] = useScrollAnimation();
  const [ref4, isVisible4] = useScrollAnimation();
  const [ref5, isVisible5] = useScrollAnimation();

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url('${investorBg}')` }}
        />
        <div className="absolute inset-0 bg-navy-dark/78" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold/50" />
              <span className="text-gold text-sm font-semibold uppercase tracking-[0.3em]">
                Investor Relations
              </span>
              <div className="h-px w-8 bg-gold/50" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Invest in{' '}
              <span className="text-gradient-gold">Africa's Growth</span> Story
            </h1>
            <p className="text-white/65 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
              WAHMAN ABU Group offers investors access to a diversified portfolio of high-growth sectors across the African continent, backed by over two decades of operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary">Partner With Us</Button>
              <a
                href="mailto:info@wahmangroup.com"
                className="px-6 py-3 border border-white/30 text-white rounded-lg hover:border-gold hover:text-gold transition-all duration-300 text-sm font-medium"
              >
                info@wahmangroup.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Key Metrics ── */}
      <section className="gradient-navy py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {keyMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="font-heading text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                  {metric.value}
                </p>
                <p className="text-white/60 text-sm uppercase tracking-wider">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Invest ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em] block mb-3">
                The Opportunity
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-dark mb-6 leading-tight">
                Why Invest in WAHMAN ABU Group?
              </h2>
              <p className="text-grey-medium leading-relaxed mb-8">
                Africa is the world's fastest-growing continent. WAHMAN ABU Group sits at the intersection of this growth — with established operations, deep local expertise, and a diversified model that captures value across six strategic sectors.
              </p>
              <ul className="space-y-3">
                {whyInvestPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <MdCheckCircle className="text-gold text-lg mt-0.5 shrink-0" />
                    <span className="text-navy-dark text-sm leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Founded', value: '2003', sub: '20+ years of operations' },
                { label: 'Sectors', value: '6', sub: 'Diversified portfolio' },
                { label: 'Countries', value: '8+', sub: 'Pan-African presence' },
                { label: 'Team', value: '500+', sub: 'Skilled professionals' },
              ].map((stat, i) => (
                <div key={i} className="bg-grey-light rounded-2xl p-6 text-center hover:shadow-md transition-all duration-300">
                  <p className="font-heading text-4xl font-bold text-navy-dark mb-1">{stat.value}</p>
                  <p className="text-gold font-semibold text-sm mb-1">{stat.label}</p>
                  <p className="text-grey-medium text-xs">{stat.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Investment Types ── */}
      <section className="section-padding bg-grey-light">
        <div className="container-custom">
          <SectionTitle
            subtitle="How to Invest"
            title="Investment Opportunities"
            description="We offer several structured pathways for investors to participate in WAHMAN ABU Group's growth across Africa."
          />
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investmentTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-grey-light/60 hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <type.icon className="text-2xl text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy-dark mb-3">{type.title}</h3>
                <p className="text-grey-medium text-sm leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Investment Highlights ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Investor Relations"
            title="Why We Stand Out"
            description="WAHMAN ABU Group combines financial discipline with on-the-ground expertise to deliver consistent, sustainable returns."
          />
          <div ref={ref2} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5 p-6 bg-grey-light rounded-2xl hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                  <item.icon className="text-2xl text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy-dark mb-2">{item.title}</h3>
                  <p className="text-grey-medium text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sector Portfolio ── */}
      <section className="section-padding bg-grey-light">
        <div className="container-custom">
          <SectionTitle
            subtitle="Portfolio Diversification"
            title="Our Six Investment Sectors"
            description="Each sector represents a distinct revenue stream, reducing concentration risk and creating multiple paths to growth."
          />
          <div ref={ref3} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  to={`/sectors/${sector.id}`}
                  className="flex items-center gap-4 p-5 bg-white rounded-xl border border-grey-light/50 hover:border-gold/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div
                    className="w-3 h-12 rounded-full shrink-0"
                    style={{ backgroundColor: sector.color }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-heading font-bold text-navy-dark group-hover:text-gold transition-colors">
                      {sector.name}
                    </p>
                    <p className="text-grey-medium text-xs mt-0.5 truncate">{sector.tagline}</p>
                  </div>
                  <MdOpenInNew className="text-grey-medium group-hover:text-gold text-sm shrink-0 transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Corporate Governance ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Corporate Governance"
            title="Built on Accountability"
            description="Our governance framework ensures the highest standards of transparency, integrity, and stakeholder accountability."
          />
          <div ref={ref4} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {governanceItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible4 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-grey-light rounded-2xl p-8 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <item.icon className="text-2xl text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy-dark mb-3">{item.title}</h3>
                <p className="text-grey-medium text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reports & Downloads ── */}
      <section className="section-padding bg-grey-light">
        <div className="container-custom">
          <SectionTitle
            subtitle="Publications"
            title="Reports &amp; Documents"
            description="Access our latest financial reports, ESG disclosures, and corporate governance documents. Contact us to request any document."
          />
          <div ref={ref5} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
            {reports.map((report, index) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible5 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-between p-5 bg-white rounded-xl border border-grey-light/50 hover:border-gold/30 hover:shadow-sm transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                    <MdDescription className="text-xl text-gold" />
                  </div>
                  <div>
                    <p className="text-navy-dark font-semibold text-sm">{report.title}</p>
                    <p className="text-grey-medium text-xs mt-0.5">{report.type} · {report.size}</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  aria-label={`Request ${report.title}`}
                  className="text-xs text-gold border border-gold/40 rounded-lg px-3 py-1.5 hover:bg-gold hover:text-navy-dark transition-all duration-300 shrink-0 flex items-center gap-1"
                >
                  <MdDownload className="text-base" />
                  Request
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Contact ── */}
      <section className="section-padding bg-navy-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact person */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em] block mb-4">
                Investor Relations Contact
              </span>
              <h2 className="font-heading text-3xl font-bold text-white mb-2">
                <span className="text-gold">Alhaji Abu</span> Sesay
              </h2>
              <p className="text-white/50 text-sm mb-8">President / Chairman, WAHMAN ABU Group</p>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <MdPhone className="text-gold text-lg" />
                  </div>
                  <div className="space-y-1">
                    <a href="tel:+23276920000" className="block text-white text-sm hover:text-gold transition-colors">
                      <span className="text-white/40 text-xs mr-2">Africa</span>+232 76 920000
                    </a>
                    <a href="tel:+393293661921" className="block text-white text-sm hover:text-gold transition-colors">
                      <span className="text-white/40 text-xs mr-2">Europe</span>+39 329 3661921
                    </a>
                    <a href="tel:+19149185695" className="block text-white text-sm hover:text-gold transition-colors">
                      <span className="text-white/40 text-xs mr-2">USA</span>+1 914 918 5695
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <MdEmail className="text-gold text-lg" />
                  </div>
                  <a href="mailto:info@wahmangroup.com" className="text-white text-sm hover:text-gold transition-colors">
                    info@wahmangroup.com
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <MdLocationOn className="text-gold text-lg" />
                  </div>
                  <span className="text-white/70 text-sm">
                    13 Walpole Street, Freetown, Sierra Leone, West Africa
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <MdHandshake className="text-gold text-3xl" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                Ready to Partner?
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Whether you're exploring equity partnership, a joint venture, or trade finance, our team is ready to discuss the right structure for your goals.
              </p>
              <div className="flex flex-col gap-3">
                <Button to="/contact" variant="primary" className="w-full">
                  Schedule a Meeting
                </Button>
                <a
                  href="mailto:info@wahmangroup.com"
                  className="w-full py-3 border border-white/20 text-white/70 rounded-lg hover:border-gold hover:text-gold transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2"
                >
                  <MdOpenInNew className="text-base" />
                  info@wahmangroup.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorSection;

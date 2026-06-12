import { Helmet } from 'react-helmet-async';
import InvestorSection from '../components/investors/InvestorSection';

const Investors = () => {
  return (
    <>
      <Helmet>
        <title>Investor Relations | WAHMAN ABU Group</title>
        <meta name="description" content="Invest in Africa's growth story with WAHMAN ABU Group — a diversified conglomerate across mining, energy, agriculture, real estate, aviation, and trade." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Investor Relations | WAHMAN ABU Group" />
        <meta property="og:description" content="Invest in Africa's growth story with WAHMAN ABU Group — a diversified conglomerate across mining, energy, agriculture, real estate, aviation, and trade." />
        <meta property="og:url" content="https://wahmangroup.com/investors" />
        <meta property="og:image" content="https://wahmangroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Investor Relations | WAHMAN ABU Group" />
        <meta name="twitter:description" content="Invest in Africa's growth story with WAHMAN ABU Group — a diversified conglomerate across mining, energy, agriculture, real estate, aviation, and trade." />
        <meta name="twitter:image" content="https://wahmangroup.com/og-image.jpg" />
        <link rel="canonical" href="https://wahmangroup.com/investors" />
      </Helmet>

      <main className="pt-20">
        <InvestorSection />
      </main>
    </>
  );
};

export default Investors;

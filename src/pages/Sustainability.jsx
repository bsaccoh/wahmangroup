import { Helmet } from 'react-helmet-async';
import ESGSection from '../components/sustainability/ESGSection';

const Sustainability = () => {
  return (
    <>
      <Helmet>
        <title>Sustainability &amp; ESG | WAHMAN Group</title>
        <meta name="description" content="Discover WAHMAN Group's commitment to Environmental, Social, and Governance (ESG) principles and sustainable development across Africa." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sustainability & ESG | WAHMAN Group" />
        <meta property="og:description" content="Discover WAHMAN Group's commitment to Environmental, Social, and Governance (ESG) principles and sustainable development across Africa." />
        <meta property="og:url" content="https://wahmangroup.com/sustainability" />
        <meta property="og:image" content="https://wahmangroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sustainability & ESG | WAHMAN Group" />
        <meta name="twitter:description" content="Discover WAHMAN Group's commitment to Environmental, Social, and Governance (ESG) principles and sustainable development across Africa." />
        <meta name="twitter:image" content="https://wahmangroup.com/og-image.jpg" />
        <link rel="canonical" href="https://wahmangroup.com/sustainability" />
      </Helmet>

      <main className="pt-20">
        <ESGSection />
      </main>
    </>
  );
};

export default Sustainability;

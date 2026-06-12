import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import SectorsGrid from '../components/home/SectorsGrid';
import WhyWahman from '../components/home/WhyWahman';
import StatsCounter from '../components/home/StatsCounter';
import NewsTeaser from '../components/home/NewsTeaser';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>WAHMAN Group - Investing in Africa's Future</title>
        <meta name="description" content="A diversified conglomerate investing in Africa's future. Connecting the world through mining, energy, agriculture, real estate, aviation, and trade." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="WAHMAN Group - Investing in Africa's Future" />
        <meta property="og:description" content="A diversified conglomerate investing in Africa's future. Connecting the world through mining, energy, agriculture, real estate, aviation, and trade." />
        <meta property="og:url" content="https://wahmangroup.com/" />
        <meta property="og:image" content="https://wahmangroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WAHMAN Group - Investing in Africa's Future" />
        <meta name="twitter:description" content="A diversified conglomerate investing in Africa's future. Connecting the world through mining, energy, agriculture, real estate, aviation, and trade." />
        <meta name="twitter:image" content="https://wahmangroup.com/og-image.jpg" />
        <link rel="canonical" href="https://wahmangroup.com/" />
      </Helmet>

      <main>
        <HeroSection />
        <SectorsGrid />
        <WhyWahman />
        <StatsCounter />
        <NewsTeaser />
      </main>
    </>
  );
};

export default Home;

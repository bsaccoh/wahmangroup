import { Helmet } from 'react-helmet-async';
import SectorsOverview from '../components/sectors/SectorsOverview';
import SectionTitle from '../components/common/SectionTitle';

const Sectors = () => {
  return (
    <>
      <Helmet>
        <title>Our Sectors | WAHMAN Group</title>
        <meta name="description" content="Explore WAHMAN Group's diverse portfolio spanning mining, oil & gas, agriculture, real estate, aviation, and trade." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Sectors | WAHMAN Group" />
        <meta property="og:description" content="Explore WAHMAN Group's diverse portfolio spanning mining, oil & gas, agriculture, real estate, aviation, and trade." />
        <meta property="og:url" content="https://wahmangroup.com/sectors" />
        <meta property="og:image" content="https://wahmangroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Sectors | WAHMAN Group" />
        <meta name="twitter:description" content="Explore WAHMAN Group's diverse portfolio spanning mining, oil & gas, agriculture, real estate, aviation, and trade." />
        <meta name="twitter:image" content="https://wahmangroup.com/og-image.jpg" />
        <link rel="canonical" href="https://wahmangroup.com/sectors" />
      </Helmet>

      <main className="pt-28 pb-10 bg-white">
        <div className="container-custom mb-10">
          <SectionTitle
            subtitle="Diverse Expertise"
            title="Sectors of Operation"
            description="We leverage our deep regional knowledge and global network to create value across six interconnected industries."
            align="center"
          />
        </div>
        <SectorsOverview />
      </main>
    </>
  );
};

export default Sectors;

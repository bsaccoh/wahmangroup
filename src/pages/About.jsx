import { Helmet } from 'react-helmet-async';
import CompanyOverview from '../components/about/CompanyOverview';
import MissionVision from '../components/about/MissionVision';
import LeadershipTeam from '../components/about/LeadershipTeam';
import Timeline from '../components/about/Timeline';
import PresenceMap from '../components/about/PresenceMap';
import AABSSection from '../components/about/AABSSection';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | WAHMAN Group</title>
        <meta name="description" content="Learn about WAHMAN Group's history, mission, leadership, and our commitment to sustainable growth across Africa." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us | WAHMAN Group" />
        <meta property="og:description" content="Learn about WAHMAN Group's history, mission, leadership, and our commitment to sustainable growth across Africa." />
        <meta property="og:url" content="https://wahmangroup.com/about" />
        <meta property="og:image" content="https://wahmangroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | WAHMAN Group" />
        <meta name="twitter:description" content="Learn about WAHMAN Group's history, mission, leadership, and our commitment to sustainable growth across Africa." />
        <meta name="twitter:image" content="https://wahmangroup.com/og-image.jpg" />
        <link rel="canonical" href="https://wahmangroup.com/about" />
      </Helmet>

      <main className="pt-20">
        <CompanyOverview />
        <MissionVision />
        <Timeline />
        <LeadershipTeam />
        <AABSSection />
        <PresenceMap />
      </main>
    </>
  );
};

export default About;

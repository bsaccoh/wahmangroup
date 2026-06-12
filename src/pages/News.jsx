import { Helmet } from 'react-helmet-async';
import NewsGrid from '../components/news/NewsGrid';

const News = () => {
  return (
    <>
      <Helmet>
        <title>News &amp; Media | WAHMAN Group</title>
        <meta name="description" content="Latest news, press releases, and updates from WAHMAN Group across all our business sectors." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="News & Media | WAHMAN Group" />
        <meta property="og:description" content="Latest news, press releases, and updates from WAHMAN Group across all our business sectors." />
        <meta property="og:url" content="https://wahmangroup.com/news" />
        <meta property="og:image" content="https://wahmangroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="News & Media | WAHMAN Group" />
        <meta name="twitter:description" content="Latest news, press releases, and updates from WAHMAN Group across all our business sectors." />
        <meta name="twitter:image" content="https://wahmangroup.com/og-image.jpg" />
        <link rel="canonical" href="https://wahmangroup.com/news" />
      </Helmet>

      <main className="pt-20">
        <NewsGrid />
      </main>
    </>
  );
};

export default News;

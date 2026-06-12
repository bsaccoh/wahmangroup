import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MdChevronRight, MdCalendarToday, MdLabel } from 'react-icons/md';
import { newsArticles } from '../data/news';
import { formatDate } from '../utils/helpers';
import Button from '../components/common/Button';

const NewsDetail = () => {
  const { slug } = useParams();
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/news" replace />;

  const otherArticles = newsArticles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{article.title} | WAHMAN Group</title>
        <meta name="description" content={article.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${article.title} | WAHMAN Group`} />
        <meta property="og:description" content={article.summary} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={`https://wahmangroup.com/news/${article.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.summary} />
        <meta name="twitter:image" content={article.image} />
        <link rel="canonical" href={`https://wahmangroup.com/news/${article.slug}`} />
      </Helmet>

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover"
              style={{ backgroundImage: `url('${article.image}')`, backgroundPosition: article.imagePosition || 'center' }}
            />
            <div className="absolute inset-0 bg-navy-dark/68" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 to-transparent" />
          </div>

          <div className="container-custom relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-1.5 text-white/50 text-sm flex-wrap">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><MdChevronRight className="text-white/30" /></li>
                <li><Link to="/news" className="hover:text-white transition-colors">News</Link></li>
                <li><MdChevronRight className="text-white/30" /></li>
                <li className="text-white/80 line-clamp-1" aria-current="page">{article.title}</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1.5 bg-gold text-navy-dark text-xs font-bold rounded-full uppercase tracking-wider mb-5">
                {article.category}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>
              <div className="flex items-center gap-6 text-white/50 text-sm">
                <span className="flex items-center gap-2">
                  <MdCalendarToday />
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                </span>
                <span className="flex items-center gap-2">
                  <MdLabel />
                  {article.category}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Body */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <p className="text-xl text-navy font-medium leading-relaxed mb-8 border-l-4 border-gold pl-6">
                  {article.summary}
                </p>

                <div className="prose prose-lg max-w-none space-y-6">
                  {article.content.map((paragraph, i) => (
                    <p key={i} className="text-grey-medium leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-grey-light flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <Button to="/news" variant="secondary-gold">
                    ← Back to News
                  </Button>
                  <Button to="/contact" variant="primary">
                    Contact Us
                  </Button>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                {/* More Articles */}
                <div className="bg-grey-light rounded-2xl p-6">
                  <h3 className="font-heading text-lg font-bold text-navy-dark mb-5">More Articles</h3>
                  <ul className="space-y-4">
                    {otherArticles.map((other) => (
                      <li key={other.id}>
                        <Link
                          to={`/news/${other.slug}`}
                          className="group flex gap-3 items-start"
                        >
                          <div
                            className="w-14 h-14 rounded-lg bg-cover bg-center shrink-0"
                            style={{ backgroundImage: `url('${other.image}')` }}
                          />
                          <div>
                            <p className="text-navy-dark text-sm font-semibold line-clamp-2 group-hover:text-gold transition-colors">
                              {other.title}
                            </p>
                            <time dateTime={other.date} className="text-grey-medium text-xs mt-1 block">
                              {formatDate(other.date)}
                            </time>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-navy-dark rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/10 rounded-full blur-[40px]" />
                  <h3 className="font-heading text-lg font-bold text-white mb-3 relative z-10">
                    Stay Connected
                  </h3>
                  <p className="text-white/60 text-sm mb-5 relative z-10">
                    Interested in partnerships or investment opportunities?
                  </p>
                  <Button to="/contact" variant="primary" className="w-full relative z-10">
                    Get In Touch
                  </Button>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NewsDetail;

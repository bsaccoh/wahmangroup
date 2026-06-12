import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { newsArticles } from '../../data/news';
import { formatDate } from '../../utils/helpers';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const NewsTeaser = () => {
  const [ref, isVisible] = useScrollAnimation();
  const latestNews = newsArticles.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          subtitle="Latest Updates"
          title="News & Insights"
          description="Stay informed about WAHMAN Group's latest developments, partnerships, and achievements."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {latestNews.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-grey-light/50 hover:shadow-xl hover:border-gold/20 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-navy/10">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${article.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-navy-dark text-xs font-bold rounded-full uppercase">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <time dateTime={article.date} className="text-grey-medium text-xs mb-2 block">
                  {formatDate(article.date)}
                </time>
                <h3 className="font-heading text-lg font-bold text-navy-dark mb-3 line-clamp-2 group-hover:text-gold-dark transition-colors duration-300">
                  <Link to={`/news/${article.slug}`}>{article.title}</Link>
                </h3>
                <p className="text-grey-medium text-sm leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Button to="/news" variant="secondary-gold">
            View All News →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsTeaser;

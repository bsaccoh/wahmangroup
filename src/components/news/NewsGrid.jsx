import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { newsArticles } from '../../data/news';
import NewsCard from './NewsCard';
import SectionTitle from '../common/SectionTitle';

const categories = ['All', ...Array.from(new Set(newsArticles.map((a) => a.category)))];

const NewsGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? newsArticles
      : newsArticles.filter((a) => a.category === activeCategory);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          subtitle="Media Center"
          title="Latest News & Updates"
          description="Stay up to date with WAHMAN Group's latest developments, partnerships, and industry insights."
        />

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-10" role="group" aria-label="Filter news by category">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-navy-dark shadow-md'
                  : 'bg-grey-light text-grey-medium hover:bg-gold/10 hover:text-navy'
              }`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filtered.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-grey-medium py-12">No articles found in this category.</p>
        )}
      </div>
    </section>
  );
};

export default NewsGrid;

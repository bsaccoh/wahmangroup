import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/helpers';

const NewsCard = ({ article }) => {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-grey-light/50 hover:shadow-xl hover:border-gold/20 transition-all duration-500 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-navy/10 shrink-0">
        <div
          className="absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${article.image}')`, backgroundPosition: article.imagePosition || 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-navy-dark text-xs font-bold rounded-full uppercase tracking-wide">
          {article.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <time dateTime={article.date} className="text-grey-medium text-xs mb-3 block font-medium">
          {formatDate(article.date)}
        </time>
        <h3 className="font-heading text-lg font-bold text-navy-dark mb-3 line-clamp-2 group-hover:text-gold-dark transition-colors duration-300 flex-1">
          <Link to={`/news/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="text-grey-medium text-sm leading-relaxed line-clamp-3 mb-4">
          {article.summary}
        </p>
        <Link
          to={`/news/${article.slug}`}
          className="text-gold font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto"
        >
          Read More
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;

import { Calendar, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  author?: string;
  views?: number;
  category?: string;
}

export function NewsCard({ id, title, excerpt, thumbnail, date, author, views, category }: NewsCardProps) {
  return (
    <Link to={`/news/${id}`}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all cursor-pointer h-full flex flex-col"
      >
        {/* Thumbnail */}
        <div className="relative aspect-video bg-muted overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {category && (
            <div className="absolute top-2 left-2">
              <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded uppercase tracking-wide">
                {category}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="mb-2 line-clamp-2 hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
            {excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground pt-3 border-t border-border">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{date}</span>
            </div>
            {author && (
              <>
                <span>•</span>
                <span>{author}</span>
              </>
            )}
            {views && (
              <>
                <span className="ml-auto">•</span>
                <div className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  <span className="font-mono">{views.toLocaleString()}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

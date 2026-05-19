import { Link } from 'react-router';
import { Search, Globe } from 'lucide-react';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded flex items-center justify-center">
              <span className="font-mono">MD</span>
            </div>
            <div className="hidden sm:block">
              <div className="leading-tight">MoreDota</div>
              <div className="text-xs text-muted-foreground">moredota.com</div>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex-1 flex justify-center">
            <Navigation />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Change language"
            >
              <Globe className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

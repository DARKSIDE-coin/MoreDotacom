import { Trophy, DollarSign, Calendar } from 'lucide-react';
import { Link } from 'react-router';

interface TournamentBadgeProps {
  id: string;
  name: string;
  prizePool?: string;
  dates?: string;
  tier?: 'S' | 'A' | 'B' | 'C';
  status?: 'ongoing' | 'upcoming' | 'completed';
  logo?: string;
  compact?: boolean;
}

export function TournamentBadge({
  id,
  name,
  prizePool,
  dates,
  tier = 'A',
  status = 'ongoing',
  logo,
  compact = false
}: TournamentBadgeProps) {
  const tierColors = {
    S: 'bg-primary text-primary-foreground',
    A: 'bg-accent text-accent-foreground',
    B: 'bg-secondary text-secondary-foreground',
    C: 'bg-muted text-muted-foreground'
  };

  const statusColors = {
    ongoing: 'border-accent',
    upcoming: 'border-primary',
    completed: 'border-muted'
  };

  if (compact) {
    return (
      <Link to={`/tournament/${id}`}>
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-card border border-border rounded hover:border-primary/50 transition-colors cursor-pointer">
          <Trophy className="w-3.5 h-3.5 text-primary" />
          <span className="text-sm truncate">{name}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/tournament/${id}`}>
      <div className={`bg-card border ${statusColors[status]} rounded-lg p-4 hover:border-primary/50 transition-all cursor-pointer`}>
        <div className="flex items-start gap-3">
          {/* Logo */}
          {logo && (
            <div className="w-12 h-12 bg-muted rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img src={logo} alt={name} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="truncate">{name}</h3>
              <span className={`${tierColors[tier]} text-xs px-2 py-0.5 rounded font-mono flex-shrink-0`}>
                Tier {tier}
              </span>
            </div>

            {/* Info */}
            <div className="space-y-1.5 text-sm text-muted-foreground">
              {prizePool && (
                <div className="flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5" />
                  <span className="font-mono">{prizePool}</span>
                </div>
              )}
              {dates && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{dates}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

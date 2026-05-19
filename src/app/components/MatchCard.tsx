import { Trophy, Clock, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

type MatchStatus = 'live' | 'upcoming' | 'finished';

interface MatchCardProps {
  id: string;
  team1: {
    name: string;
    logo: string;
    score?: number;
  };
  team2: {
    name: string;
    logo: string;
    score?: number;
  };
  status: MatchStatus;
  tournament?: string;
  time?: string;
  viewers?: number;
  format?: string;
}

export function MatchCard({ id, team1, team2, status, tournament, time, viewers, format = 'BO3' }: MatchCardProps) {
  const statusStyles = {
    live: 'bg-accent/20 border-accent text-accent',
    upcoming: 'bg-muted border-border text-muted-foreground',
    finished: 'bg-card border-border text-foreground'
  };

  return (
    <Link to={`/match/${id}`}>
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ duration: 0.2 }}
        className={`bg-card border ${statusStyles[status]} rounded-lg p-4 hover:border-primary/50 transition-all cursor-pointer`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3 gap-2">
          <div className="flex items-center gap-2">
            {status === 'live' && (
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="uppercase tracking-wide">LIVE</span>
              </div>
            )}
            {status === 'upcoming' && time && (
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                <span>{time}</span>
              </div>
            )}
            {status === 'finished' && (
              <span className="text-muted-foreground uppercase tracking-wide">Finished</span>
            )}
          </div>
          <span className="text-xs px-2 py-0.5 bg-muted rounded font-mono">{format}</span>
        </div>

        {/* Teams */}
        <div className="space-y-2">
          {/* Team 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img src={team1.logo} alt={team1.name} className="w-full h-full object-cover" />
              </div>
              <span className="truncate">{team1.name}</span>
            </div>
            {team1.score !== undefined && (
              <span className="font-mono ml-2 min-w-[2ch] text-right">{team1.score}</span>
            )}
          </div>

          {/* VS Divider */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="flex-1 h-px bg-border"></div>
            <span>VS</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Team 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img src={team2.logo} alt={team2.name} className="w-full h-full object-cover" />
              </div>
              <span className="truncate">{team2.name}</span>
            </div>
            {team2.score !== undefined && (
              <span className="font-mono ml-2 min-w-[2ch] text-right">{team2.score}</span>
            )}
          </div>
        </div>

        {/* Footer */}
        {(tournament || viewers) && (
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-border text-xs text-muted-foreground">
            {tournament && (
              <div className="flex items-center gap-1.5 truncate">
                <Trophy className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{tournament}</span>
              </div>
            )}
            {viewers && (
              <div className="flex items-center gap-1.5 ml-auto">
                <Eye className="w-3.5 h-3.5" />
                <span className="font-mono">{viewers.toLocaleString()}</span>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </Link>
  );
}

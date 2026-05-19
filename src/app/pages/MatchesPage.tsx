import { useState } from 'react';
import { MatchCard } from '../components/MatchCard';
import { Flame, Clock, CheckCircle, Filter } from 'lucide-react';

export function MatchesPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'live' | 'upcoming' | 'finished'>('all');
  const [activeTournament, setActiveTournament] = useState<string>('all');

  const allMatches = [
    {
      id: '1',
      team1: { name: 'Team Spirit', logo: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=100&h=100&fit=crop', score: 1 },
      team2: { name: 'OG', logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop', score: 0 },
      status: 'live' as const,
      tournament: 'The International 2026',
      viewers: 125430,
      format: 'BO3'
    },
    {
      id: '2',
      team1: { name: 'PSG.LGD', logo: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=100&h=100&fit=crop', score: 2 },
      team2: { name: 'Team Liquid', logo: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop', score: 1 },
      status: 'live' as const,
      tournament: 'DreamLeague S21',
      viewers: 45200,
      format: 'BO3'
    },
    {
      id: '3',
      team1: { name: 'Tundra Esports', logo: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=100&h=100&fit=crop' },
      team2: { name: 'Evil Geniuses', logo: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=100&h=100&fit=crop' },
      status: 'upcoming' as const,
      tournament: 'ESL One Birmingham',
      time: 'через 2ч 30м',
      format: 'BO5'
    },
    {
      id: '4',
      team1: { name: 'Gaimin Gladiators', logo: 'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=100&h=100&fit=crop' },
      team2: { name: 'BetBoom Team', logo: 'https://images.unsplash.com/photo-1580234820596-0876d99f6ecf?w=100&h=100&fit=crop' },
      status: 'upcoming' as const,
      tournament: 'The International 2026',
      time: 'через 5ч 15м',
      format: 'BO3'
    },
    {
      id: '5',
      team1: { name: 'Team Secret', logo: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop', score: 2 },
      team2: { name: 'Alliance', logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop', score: 0 },
      status: 'finished' as const,
      tournament: 'DreamLeague S21',
      format: 'BO3'
    },
    {
      id: '6',
      team1: { name: 'Virtus.pro', logo: 'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=100&h=100&fit=crop', score: 1 },
      team2: { name: 'Nigma Galaxy', logo: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=100&h=100&fit=crop', score: 2 },
      status: 'finished' as const,
      tournament: 'ESL One Birmingham',
      format: 'BO3'
    },
    {
      id: '7',
      team1: { name: 'Fnatic', logo: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=100&h=100&fit=crop' },
      team2: { name: 'BOOM Esports', logo: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=100&h=100&fit=crop' },
      status: 'upcoming' as const,
      tournament: 'DreamLeague S21',
      time: 'завтра, 14:00',
      format: 'BO3'
    },
    {
      id: '8',
      team1: { name: 'Team Aster', logo: 'https://images.unsplash.com/photo-1580234820596-0876d99f6ecf?w=100&h=100&fit=crop' },
      team2: { name: 'Cloud9', logo: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=100&h=100&fit=crop' },
      status: 'upcoming' as const,
      tournament: 'The International 2026',
      time: 'завтра, 18:00',
      format: 'BO3'
    },
  ];

  const tournaments = ['all', 'The International 2026', 'DreamLeague S21', 'ESL One Birmingham'];

  const filteredMatches = allMatches.filter(match => {
    const statusMatch = activeFilter === 'all' || match.status === activeFilter;
    const tournamentMatch = activeTournament === 'all' || match.tournament === activeTournament;
    return statusMatch && tournamentMatch;
  });

  const liveCount = allMatches.filter(m => m.status === 'live').length;
  const upcomingCount = allMatches.filter(m => m.status === 'upcoming').length;
  const finishedCount = allMatches.filter(m => m.status === 'finished').length;

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="mb-2">Матчи</h1>
        <p className="text-muted-foreground">Следите за всеми матчами профессиональных команд Dota 2</p>
      </div>

      {/* Filters */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Status Filters */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Статус матчей</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeFilter === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                Все ({allMatches.length})
              </button>
              <button
                onClick={() => setActiveFilter('live')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeFilter === 'live'
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                <Flame className="w-4 h-4" />
                Прямые ({liveCount})
              </button>
              <button
                onClick={() => setActiveFilter('upcoming')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeFilter === 'upcoming'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                <Clock className="w-4 h-4" />
                Предстоящие ({upcomingCount})
              </button>
              <button
                onClick={() => setActiveFilter('finished')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeFilter === 'finished'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                <CheckCircle className="w-4 h-4" />
                Завершённые ({finishedCount})
              </button>
            </div>
          </div>

          {/* Tournament Filter */}
          <div className="lg:w-64">
            <label className="text-sm text-muted-foreground mb-3 block">Турнир</label>
            <select
              value={activeTournament}
              onChange={(e) => setActiveTournament(e.target.value)}
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {tournaments.map((tournament) => (
                <option key={tournament} value={tournament}>
                  {tournament === 'all' ? 'Все турниры' : tournament}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Matches Grid */}
      {filteredMatches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMatches.map((match) => (
            <MatchCard key={match.id} {...match} />
          ))}
        </div>
      ) : (
        <div className="bg-card border border-border rounded-lg p-12 text-center">
          <p className="text-muted-foreground">Матчи не найдены</p>
          <button
            onClick={() => {
              setActiveFilter('all');
              setActiveTournament('all');
            }}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Сбросить фильтры
          </button>
        </div>
      )}
    </div>
  );
}

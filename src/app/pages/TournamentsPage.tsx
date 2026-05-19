import { useState } from 'react';
import { TournamentBadge } from '../components/TournamentBadge';
import { Filter, Calendar } from 'lucide-react';

export function TournamentsPage() {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [tierFilter, setTierFilter] = useState<string>('all');

  const tournaments = [
    {
      id: 'ti2026',
      name: 'The International 2026',
      prizePool: '$40,000,000',
      dates: '1-15 мая 2026',
      tier: 'S' as const,
      status: 'ongoing' as const,
      logo: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=100&h=100&fit=crop'
    },
    {
      id: 'esl-birmingham',
      name: 'ESL One Birmingham 2026',
      prizePool: '$500,000',
      dates: '20-25 мая 2026',
      tier: 'A' as const,
      status: 'upcoming' as const,
      logo: 'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=100&h=100&fit=crop'
    },
    {
      id: 'dreamleague-s21',
      name: 'DreamLeague Season 21',
      prizePool: '$300,000',
      dates: '1-10 мая 2026',
      tier: 'A' as const,
      status: 'ongoing' as const,
      logo: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=100&h=100&fit=crop'
    },
    {
      id: 'berlin-major',
      name: 'Berlin Major 2026',
      prizePool: '$750,000',
      dates: '15-20 апр 2026',
      tier: 'S' as const,
      status: 'completed' as const,
      logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop'
    },
    {
      id: 'riyadh-masters',
      name: 'Riyadh Masters 2026',
      prizePool: '$5,000,000',
      dates: '10-20 июн 2026',
      tier: 'S' as const,
      status: 'upcoming' as const,
      logo: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=100&h=100&fit=crop'
    },
    {
      id: 'dpc-weu-div1',
      name: 'DPC WEU Division I Tour 2',
      prizePool: '$205,000',
      dates: '5-25 апр 2026',
      tier: 'B' as const,
      status: 'completed' as const,
      logo: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop'
    },
    {
      id: 'dpc-eeu-div1',
      name: 'DPC EEU Division I Tour 2',
      prizePool: '$205,000',
      dates: '5-25 апр 2026',
      tier: 'B' as const,
      status: 'completed' as const,
      logo: 'https://images.unsplash.com/photo-1580234820596-0876d99f6ecf?w=100&h=100&fit=crop'
    },
    {
      id: 'dpc-cn-div1',
      name: 'DPC China Division I Tour 2',
      prizePool: '$205,000',
      dates: '5-25 апр 2026',
      tier: 'B' as const,
      status: 'completed' as const,
      logo: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=100&h=100&fit=crop'
    },
  ];

  const tiers = ['all', 'S', 'A', 'B', 'C'];
  const statuses = [
    { value: 'all', label: 'Все турниры' },
    { value: 'ongoing', label: 'Идут' },
    { value: 'upcoming', label: 'Предстоящие' },
    { value: 'completed', label: 'Завершённые' }
  ];

  const filteredTournaments = tournaments.filter(tournament => {
    const statusMatch = statusFilter === 'all' || tournament.status === statusFilter;
    const tierMatch = tierFilter === 'all' || tournament.tier === tierFilter;
    return statusMatch && tierMatch;
  });

  const ongoingCount = tournaments.filter(t => t.status === 'ongoing').length;
  const upcomingCount = tournaments.filter(t => t.status === 'upcoming').length;
  const completedCount = tournaments.filter(t => t.status === 'completed').length;

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="mb-2">Турниры</h1>
        <p className="text-muted-foreground">Профессиональные турниры и соревнования Dota 2</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card border border-accent rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Идут сейчас</span>
            <Calendar className="w-5 h-5 text-accent" />
          </div>
          <p className="text-3xl font-mono">{ongoingCount}</p>
        </div>
        <div className="bg-card border border-primary rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Предстоящие</span>
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <p className="text-3xl font-mono">{upcomingCount}</p>
        </div>
        <div className="bg-card border border-muted rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Завершённые</span>
            <Calendar className="w-5 h-5 text-muted-foreground" />
          </div>
          <p className="text-3xl font-mono">{completedCount}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Status Filter */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Статус</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={status.value}
                  onClick={() => setStatusFilter(status.value)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    statusFilter === status.value
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {status.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tier Filter */}
          <div className="lg:w-48">
            <label className="text-sm text-muted-foreground mb-3 block">Уровень</label>
            <div className="flex flex-wrap gap-2">
              {tiers.map((tier) => (
                <button
                  key={tier}
                  onClick={() => setTierFilter(tier)}
                  className={`px-3 py-2 rounded-lg transition-all font-mono ${
                    tierFilter === tier
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {tier === 'all' ? 'Все' : `Tier ${tier}`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tournaments Grid */}
      {filteredTournaments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTournaments.map((tournament) => (
            <TournamentBadge key={tournament.id} {...tournament} />
          ))}
        </div>
      ) : (
        <div className="bg-card border border-border rounded-lg p-12 text-center">
          <p className="text-muted-foreground">Турниры не найдены</p>
          <button
            onClick={() => {
              setStatusFilter('all');
              setTierFilter('all');
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

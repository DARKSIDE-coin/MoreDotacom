import { useState } from 'react';
import { Link } from 'react-router';
import { Trophy, TrendingUp, MapPin, Search } from 'lucide-react';

interface Team {
  id: string;
  name: string;
  logo: string;
  region: string;
  rank: number;
  winRate: number;
  recentForm: ('W' | 'L')[];
  totalPrize: string;
}

export function TeamsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState<string>('all');

  const teams: Team[] = [
    {
      id: 'team-spirit',
      name: 'Team Spirit',
      logo: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=100&h=100&fit=crop',
      region: 'EEU',
      rank: 2,
      winRate: 78,
      recentForm: ['W', 'W', 'W', 'L', 'W'],
      totalPrize: '$12.5M'
    },
    {
      id: 'psg-lgd',
      name: 'PSG.LGD',
      logo: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=100&h=100&fit=crop',
      region: 'China',
      rank: 1,
      winRate: 82,
      recentForm: ['W', 'W', 'W', 'W', 'W'],
      totalPrize: '$18.2M'
    },
    {
      id: 'og',
      name: 'OG',
      logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop',
      region: 'WEU',
      rank: 5,
      winRate: 71,
      recentForm: ['W', 'L', 'W', 'W', 'L'],
      totalPrize: '$22.8M'
    },
    {
      id: 'tundra',
      name: 'Tundra Esports',
      logo: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=100&h=100&fit=crop',
      region: 'WEU',
      rank: 3,
      winRate: 75,
      recentForm: ['W', 'W', 'L', 'W', 'W'],
      totalPrize: '$8.4M'
    },
    {
      id: 'liquid',
      name: 'Team Liquid',
      logo: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop',
      region: 'WEU',
      rank: 7,
      winRate: 68,
      recentForm: ['L', 'W', 'W', 'L', 'W'],
      totalPrize: '$15.3M'
    },
    {
      id: 'eg',
      name: 'Evil Geniuses',
      logo: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=100&h=100&fit=crop',
      region: 'NA',
      rank: 4,
      winRate: 73,
      recentForm: ['W', 'W', 'W', 'L', 'L'],
      totalPrize: '$20.1M'
    },
    {
      id: 'gg',
      name: 'Gaimin Gladiators',
      logo: 'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=100&h=100&fit=crop',
      region: 'WEU',
      rank: 6,
      winRate: 69,
      recentForm: ['W', 'L', 'W', 'W', 'W'],
      totalPrize: '$6.2M'
    },
    {
      id: 'betboom',
      name: 'BetBoom Team',
      logo: 'https://images.unsplash.com/photo-1580234820596-0876d99f6ecf?w=100&h=100&fit=crop',
      region: 'EEU',
      rank: 8,
      winRate: 65,
      recentForm: ['L', 'W', 'L', 'W', 'W'],
      totalPrize: '$4.8M'
    },
  ];

  const regions = ['all', 'WEU', 'EEU', 'China', 'SEA', 'NA', 'SA'];

  const filteredTeams = teams
    .filter(team => {
      const matchesSearch = team.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = regionFilter === 'all' || team.region === regionFilter;
      return matchesSearch && matchesRegion;
    })
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="mb-2">Команды</h1>
        <p className="text-muted-foreground">Рейтинг и статистика профессиональных команд Dota 2</p>
      </div>

      {/* Filters */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Поиск команды..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Region Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setRegionFilter(region)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  regionFilter === region
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {region === 'all' ? 'Все регионы' : region}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Teams Table */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-4 px-4 font-mono text-sm">#</th>
                <th className="text-left py-4 px-4">Команда</th>
                <th className="text-left py-4 px-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Регион
                  </div>
                </th>
                <th className="text-center py-4 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Win Rate
                  </div>
                </th>
                <th className="text-center py-4 px-4">Форма (5 матчей)</th>
                <th className="text-right py-4 px-4">
                  <div className="flex items-center justify-end gap-2">
                    <Trophy className="w-4 h-4" />
                    Призовые
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTeams.map((team, index) => (
                <tr
                  key={team.id}
                  className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-muted-foreground">#{team.rank}</span>
                      {index < 3 && (
                        <Trophy className={`w-4 h-4 ${index === 0 ? 'text-primary' : index === 1 ? 'text-muted-foreground' : 'text-accent'}`} />
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Link to={`/team/${team.id}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                      <div className="w-12 h-12 bg-muted rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img src={team.logo} alt={team.name} className="w-full h-full object-cover" />
                      </div>
                      <span>{team.name}</span>
                    </Link>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 bg-muted rounded text-sm">{team.region}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-mono text-green-400">{team.winRate}%</span>
                      <div className="w-full max-w-[80px] h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-green-400"
                          style={{ width: `${team.winRate}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center gap-1">
                      {team.recentForm.map((result, i) => (
                        <div
                          key={i}
                          className={`w-6 h-6 rounded flex items-center justify-center text-xs font-mono ${
                            result === 'W' ? 'bg-green-400/20 text-green-400' : 'bg-accent/20 text-accent'
                          }`}
                        >
                          {result}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right font-mono text-primary">{team.totalPrize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredTeams.length === 0 && (
        <div className="bg-card border border-border rounded-lg p-12 text-center">
          <p className="text-muted-foreground">Команды не найдены</p>
        </div>
      )}
    </div>
  );
}

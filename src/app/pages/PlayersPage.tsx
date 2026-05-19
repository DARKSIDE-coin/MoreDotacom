import { useState } from 'react';
import { Link } from 'react-router';
import { Trophy, Target, Search, Users } from 'lucide-react';

interface Player {
  id: string;
  ign: string;
  name: string;
  team: string;
  teamLogo: string;
  role: string;
  country: string;
  rank: number;
  avgKDA: number;
  winRate: number;
  gpm: number;
  totalPrize: string;
}

export function PlayersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');

  const players: Player[] = [
    {
      id: 'yatoro',
      ign: 'Yatoro',
      name: 'Ilya Mulyarchuk',
      team: 'Team Spirit',
      teamLogo: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=50&h=50&fit=crop',
      role: 'Carry',
      country: 'Украина',
      rank: 3,
      avgKDA: 4.8,
      winRate: 76,
      gpm: 712,
      totalPrize: '$8.2M'
    },
    {
      id: 'torontotokyo',
      ign: 'TORONTOTOKYO',
      name: 'Alexander Khertek',
      team: 'Team Spirit',
      teamLogo: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=50&h=50&fit=crop',
      role: 'Mid',
      country: 'Россия',
      rank: 8,
      avgKDA: 4.3,
      winRate: 72,
      gpm: 645,
      totalPrize: '$7.8M'
    },
    {
      id: 'collapse',
      ign: 'Collapse',
      name: 'Magomed Khalilov',
      team: 'Team Spirit',
      teamLogo: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=50&h=50&fit=crop',
      role: 'Offlane',
      country: 'Россия',
      rank: 12,
      avgKDA: 3.9,
      winRate: 74,
      gpm: 521,
      totalPrize: '$7.5M'
    },
    {
      id: 'ame',
      ign: 'Ame',
      name: 'Wang Chunyu',
      team: 'PSG.LGD',
      teamLogo: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=50&h=50&fit=crop',
      role: 'Carry',
      country: 'Китай',
      rank: 1,
      avgKDA: 5.2,
      winRate: 81,
      gpm: 748,
      totalPrize: '$12.4M'
    },
    {
      id: 'nts',
      ign: 'NothingToSay',
      name: 'Cheng Jin Xiang',
      team: 'PSG.LGD',
      teamLogo: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=50&h=50&fit=crop',
      role: 'Mid',
      country: 'Малайзия',
      rank: 5,
      avgKDA: 4.6,
      winRate: 79,
      gpm: 672,
      totalPrize: '$6.8M'
    },
    {
      id: 'topson',
      ign: 'Topson',
      name: 'Topias Taavitsainen',
      team: 'OG',
      teamLogo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=50&h=50&fit=crop',
      role: 'Mid',
      country: 'Финляндия',
      rank: 15,
      avgKDA: 4.1,
      winRate: 68,
      gpm: 623,
      totalPrize: '$10.2M'
    },
    {
      id: 'ceb',
      ign: 'Ceb',
      name: 'Sébastien Debs',
      team: 'OG',
      teamLogo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=50&h=50&fit=crop',
      role: 'Offlane',
      country: 'Франция',
      rank: 18,
      avgKDA: 3.7,
      winRate: 67,
      gpm: 498,
      totalPrize: '$9.8M'
    },
    {
      id: 'puppey',
      ign: 'Puppey',
      name: 'Clement Ivanov',
      team: 'Team Secret',
      teamLogo: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=50&h=50&fit=crop',
      role: 'Support',
      country: 'Эстония',
      rank: 22,
      avgKDA: 3.2,
      winRate: 65,
      gpm: 342,
      totalPrize: '$8.5M'
    },
  ];

  const roles = ['all', 'Carry', 'Mid', 'Offlane', 'Support'];

  const filteredPlayers = players
    .filter(player => {
      const matchesSearch =
        player.ign.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.team.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRole = roleFilter === 'all' || player.role === roleFilter;
      return matchesSearch && matchesRole;
    })
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="mb-2">Игроки</h1>
        <p className="text-muted-foreground">Рейтинг и статистика профессиональных игроков Dota 2</p>
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
                placeholder="Поиск игрока или команды..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Role Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setRoleFilter(role)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  roleFilter === role
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {role === 'all' ? 'Все роли' : role}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Players Table */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-4 px-4 font-mono text-sm">#</th>
                <th className="text-left py-4 px-4">Игрок</th>
                <th className="text-left py-4 px-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Команда
                  </div>
                </th>
                <th className="text-center py-4 px-4">Роль</th>
                <th className="text-center py-4 px-4 font-mono">KDA</th>
                <th className="text-center py-4 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <Target className="w-4 h-4" />
                    Win Rate
                  </div>
                </th>
                <th className="text-center py-4 px-4 font-mono">GPM</th>
                <th className="text-right py-4 px-4">
                  <div className="flex items-center justify-end gap-2">
                    <Trophy className="w-4 h-4" />
                    Призовые
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPlayers.map((player, index) => (
                <tr
                  key={player.id}
                  className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-muted-foreground">#{player.rank}</span>
                      {index < 3 && (
                        <Trophy className={`w-4 h-4 ${index === 0 ? 'text-primary' : index === 1 ? 'text-muted-foreground' : 'text-accent'}`} />
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Link to={`/player/${player.id}`} className="hover:text-primary transition-colors">
                      <div>
                        <div className="mb-0.5">{player.ign}</div>
                        <div className="text-xs text-muted-foreground">{player.name}</div>
                      </div>
                    </Link>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-muted rounded overflow-hidden flex-shrink-0">
                        <img src={player.teamLogo} alt={player.team} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-sm">{player.team}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="px-2 py-1 bg-muted rounded text-sm">{player.role}</span>
                  </td>
                  <td className="py-4 px-4 text-center font-mono text-primary">{player.avgKDA.toFixed(1)}</td>
                  <td className="py-4 px-4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-mono text-green-400">{player.winRate}%</span>
                      <div className="w-full max-w-[60px] h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-green-400"
                          style={{ width: `${player.winRate}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center font-mono">{player.gpm}</td>
                  <td className="py-4 px-4 text-right font-mono text-primary">{player.totalPrize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredPlayers.length === 0 && (
        <div className="bg-card border border-border rounded-lg p-12 text-center">
          <p className="text-muted-foreground">Игроки не найдены</p>
        </div>
      )}
    </div>
  );
}

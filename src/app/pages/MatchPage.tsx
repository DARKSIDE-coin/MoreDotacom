import { useParams } from 'react-router';
import { PlayerStatBadge } from '../components/PlayerStatBadge';
import { TournamentBadge } from '../components/TournamentBadge';
import { Clock, Eye, Trophy, Play, MessageSquare } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

export function MatchPage() {
  const { id } = useParams();

  const draftData = [
    { phase: 'Ban 1', team: 'radiant', hero: 'Invoker', time: '0:15' },
    { phase: 'Ban 1', team: 'dire', hero: 'Phantom Assassin', time: '0:30' },
    { phase: 'Pick 1', team: 'radiant', hero: 'Crystal Maiden', time: '0:45' },
    { phase: 'Pick 1', team: 'dire', hero: 'Anti-Mage', time: '1:00' },
  ];

  const playerStats = [
    { name: 'TORONTOTOKYO', hero: 'Razor', kills: 12, deaths: 2, assists: 18, gpm: 645, xpm: 712, netWorth: 23400, role: 'Mid' },
    { name: 'Yatoro', hero: 'Terrorblade', kills: 15, deaths: 1, assists: 14, gpm: 712, xpm: 689, netWorth: 28900, role: 'Carry' },
    { name: 'Collapse', hero: 'Mars', kills: 6, deaths: 4, assists: 22, gpm: 421, xpm: 512, netWorth: 15200, role: 'Offlane' },
    { name: 'Mira', hero: 'Rubick', kills: 2, deaths: 3, assists: 28, gpm: 312, xpm: 398, netWorth: 9800, role: 'Support' },
    { name: 'Miposhka', hero: 'Chen', kills: 1, deaths: 2, assists: 29, gpm: 298, xpm: 356, netWorth: 8500, role: 'Support' },
  ];

  const teamComparisonData = [
    { metric: 'Kills', radiant: 36, dire: 12 },
    { metric: 'Gold', radiant: 75, dire: 52 },
    { metric: 'XP', radiant: 68, dire: 48 },
    { metric: 'Towers', radiant: 9, dire: 2 },
    { metric: 'Rosh', radiant: 3, dire: 0 },
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Match Header */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Teams */}
          <div className="flex items-center gap-6 flex-1">
            {/* Team Spirit */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=200&h=200&fit=crop" alt="Team Spirit" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-center">Team Spirit</h2>
              <span className="text-xs text-muted-foreground">RADIANT</span>
            </div>

            {/* Score */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-4">
                <span className="font-mono text-4xl text-green-400">2</span>
                <span className="text-2xl text-muted-foreground">-</span>
                <span className="font-mono text-4xl text-accent">1</span>
              </div>
              <span className="text-xs text-green-400 uppercase tracking-wide px-3 py-1 bg-green-400/20 rounded">Victory</span>
            </div>

            {/* OG */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=200&fit=crop" alt="OG" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-center">OG</h2>
              <span className="text-xs text-muted-foreground">DIRE</span>
            </div>
          </div>

          {/* Match Info */}
          <div className="flex flex-col gap-3 text-sm min-w-[200px]">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="font-mono">42:35</span>
              <span>Duration</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Eye className="w-4 h-4" />
              <span className="font-mono">125,430</span>
              <span>Viewers</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Trophy className="w-4 h-4" />
              <span>The International 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Draft Timeline */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h3 className="mb-4">Draft Timeline</h3>
            <div className="space-y-2">
              {draftData.map((pick, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-muted/30 rounded">
                  <span className="text-xs text-muted-foreground font-mono w-12">{pick.time}</span>
                  <span className={`w-2 h-2 rounded-full ${pick.team === 'radiant' ? 'bg-green-400' : 'bg-accent'}`}></span>
                  <span className="text-sm">{pick.phase}</span>
                  <span className="ml-auto">{pick.hero}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Player Statistics */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h3 className="mb-4">Player Performance - Team Spirit</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2">Player</th>
                    <th className="text-left py-3 px-2">Hero</th>
                    <th className="text-left py-3 px-2">Role</th>
                    <th className="text-center py-3 px-2">KDA</th>
                    <th className="text-center py-3 px-2 font-mono">GPM</th>
                    <th className="text-center py-3 px-2 font-mono">XPM</th>
                    <th className="text-right py-3 px-2 font-mono">Net Worth</th>
                  </tr>
                </thead>
                <tbody>
                  {playerStats.map((player, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-3 px-2">{player.name}</td>
                      <td className="py-3 px-2">{player.hero}</td>
                      <td className="py-3 px-2 text-muted-foreground">{player.role}</td>
                      <td className="py-3 px-2">
                        <div className="flex justify-center">
                          <PlayerStatBadge kills={player.kills} deaths={player.deaths} assists={player.assists} />
                        </div>
                      </td>
                      <td className="text-center py-3 px-2 font-mono">{player.gpm}</td>
                      <td className="text-center py-3 px-2 font-mono">{player.xpm}</td>
                      <td className="text-right py-3 px-2 font-mono text-primary">{player.netWorth.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* VOD Section */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h3 className="mb-4">Watch VOD</h3>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <Play className="w-5 h-5" />
                <span>Watch Full Match</span>
              </button>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Team Comparison Chart */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h3 className="mb-4">Team Comparison</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={teamComparisonData}>
                  <PolarGrid stroke="rgba(212, 175, 55, 0.2)" />
                  <PolarAngleAxis dataKey="metric" tick={{ fill: '#9999aa', fontSize: 12 }} />
                  <Radar name="Radiant" dataKey="radiant" stroke="#50c878" fill="#50c878" fillOpacity={0.3} />
                  <Radar name="Dire" dataKey="dire" stroke="#c41e3a" fill="#c41e3a" fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Tournament Info */}
          <TournamentBadge
            id="1"
            name="The International 2026"
            prizePool="$40,000,000"
            dates="May 1-15, 2026"
            tier="S"
            status="ongoing"
            logo="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=100&h=100&fit=crop"
          />

          {/* Comments Preview */}
          <section className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5" />
              <h3>Comments</h3>
              <span className="text-sm text-muted-foreground ml-auto">342</span>
            </div>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-3 bg-muted/30 rounded text-sm">
                  <p className="text-muted-foreground mb-1">User{i}</p>
                  <p>Great performance from Team Spirit!</p>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

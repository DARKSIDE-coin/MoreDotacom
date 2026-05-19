import { useParams } from 'react-router';
import { PlayerStatBadge } from '../components/PlayerStatBadge';
import { Trophy, Target, TrendingUp, Award } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

export function PlayerPage() {
  const { id } = useParams();

  const heroPool = [
    { hero: 'Razor', games: 45, winrate: 68, avgKDA: 4.2, color: '#4a90e2' },
    { hero: 'Queen of Pain', games: 38, winrate: 72, avgKDA: 4.8, color: '#c41e3a' },
    { hero: 'Invoker', games: 32, winrate: 65, avgKDA: 3.9, color: '#d4af37' },
    { hero: 'Puck', games: 28, winrate: 71, avgKDA: 4.5, color: '#6a3d9a' },
    { hero: 'Storm Spirit', games: 25, winrate: 64, avgKDA: 4.1, color: '#50c878' },
  ];

  const performanceMetrics = [
    { metric: 'Mechanics', value: 95 },
    { metric: 'Game Sense', value: 92 },
    { metric: 'Teamfight', value: 88 },
    { metric: 'Laning', value: 90 },
    { metric: 'Versatility', value: 85 },
    { metric: 'Consistency', value: 87 },
  ];

  const careerTimeline = [
    { year: '2019', team: 'FlyToMoon', achievement: 'Regional Champion' },
    { year: '2020', team: 'Team Spirit', achievement: 'DPC Points Leader' },
    { year: '2021', team: 'Team Spirit', achievement: 'TI10 Champion' },
    { year: '2022', team: 'Team Spirit', achievement: 'Multiple Major Wins' },
    { year: '2023', team: 'Team Spirit', achievement: 'TI12 Champion' },
    { year: '2024', team: 'Team Spirit', achievement: 'DPC Circuit Winner' },
    { year: '2025', team: 'Team Spirit', achievement: 'Berlin Major Champion' },
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Player Header */}
      <div className="bg-card border border-border rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop" alt="TORONTOTOKYO" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-1">TORONTOTOKYO</h1>
            <p className="text-muted-foreground mb-1">Alexander Khertek</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded text-sm">Mid Lane</span>
              <span className="px-3 py-1 bg-muted rounded text-sm">Team Spirit</span>
              <span className="px-3 py-1 bg-muted rounded text-sm">Russia</span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">World Rank:</span>
                <span className="font-mono text-primary">#8</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-green-400" />
                <span className="text-muted-foreground">Win Rate:</span>
                <span className="font-mono text-green-400">72%</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Avg KDA:</span>
                <span className="font-mono text-primary">4.3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
          <div className="text-center">
            <p className="text-3xl font-mono text-primary mb-1">645</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Avg GPM</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-mono text-primary mb-1">712</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Avg XPM</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-mono text-green-400 mb-1">8.2</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Avg Kills</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-mono text-accent mb-1">2.1</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Avg Deaths</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero Pool */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h2 className="mb-4">Hero Pool</h2>
            <div className="space-y-3">
              {heroPool.map((hero, i) => (
                <div key={i} className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-muted to-card rounded flex items-center justify-center">
                        <span className="text-lg">{i + 1}</span>
                      </div>
                      <div>
                        <h4>{hero.hero}</h4>
                        <p className="text-xs text-muted-foreground font-mono">{hero.games} games</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <PlayerStatBadge kda={hero.avgKDA.toFixed(1)} compact />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Win Rate</span>
                        <span className="font-mono">{hero.winrate}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-primary transition-all"
                          style={{ width: `${hero.winrate}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Graph */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h2 className="mb-4">Hero Win Rates</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={heroPool}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(212, 175, 55, 0.1)" />
                  <XAxis dataKey="hero" tick={{ fill: '#9999aa', fontSize: 11 }} />
                  <YAxis tick={{ fill: '#9999aa' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#252540', border: '1px solid rgba(212, 175, 55, 0.15)', borderRadius: '6px' }}
                  />
                  <Bar dataKey="winrate" radius={[4, 4, 0, 0]}>
                    {heroPool.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Career Timeline */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h2 className="mb-4">Career Timeline</h2>
            <div className="space-y-4">
              {careerTimeline.map((event, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    {i < careerTimeline.length - 1 && <div className="w-px flex-1 bg-border mt-1"></div>}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-mono text-primary">{event.year}</span>
                      <span className="text-muted-foreground">{event.team}</span>
                    </div>
                    <p className="text-sm">{event.achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Performance Radar */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h3 className="mb-4">Performance Metrics</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={performanceMetrics}>
                  <PolarGrid stroke="rgba(212, 175, 55, 0.2)" />
                  <PolarAngleAxis dataKey="metric" tick={{ fill: '#9999aa', fontSize: 10 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#9999aa' }} />
                  <Radar dataKey="value" stroke="#d4af37" fill="#d4af37" fillOpacity={0.5} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Recent Achievements */}
          <section className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-primary" />
              <h3>Achievements</h3>
            </div>
            <div className="space-y-3">
              {[
                { title: 'TI12 Champion', date: '2023' },
                { title: 'MVP - Berlin Major', date: '2025' },
                { title: 'Most Kills - DPC EEU', date: '2024' },
                { title: 'TI10 Champion', date: '2021' },
              ].map((achievement, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded">
                  <Trophy className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm mb-0.5">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Social Stats */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h3 className="mb-4">Social</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Followers</span>
                <span className="font-mono">248K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Fan Clips</span>
                <span className="font-mono">1.2K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Profile Views</span>
                <span className="font-mono">890K</span>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

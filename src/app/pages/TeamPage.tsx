import { useParams } from 'react-router';
import { MatchCard } from '../components/MatchCard';
import { Trophy, Users, TrendingUp, Calendar } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export function TeamPage() {
  const { id } = useParams();

  const roster = [
    { ign: 'Yatoro', name: 'Ilya Mulyarchuk', role: 'Carry', country: 'Ukraine', joinDate: 'Jan 2021' },
    { ign: 'TORONTOTOKYO', name: 'Alexander Khertek', role: 'Mid', country: 'Russia', joinDate: 'Jan 2021' },
    { ign: 'Collapse', name: 'Magomed Khalilov', role: 'Offlane', country: 'Russia', joinDate: 'Jan 2021' },
    { ign: 'Mira', name: 'Miroslaw Kolpakov', role: 'Soft Support', country: 'Ukraine', joinDate: 'Jan 2021' },
    { ign: 'Miposhka', name: 'Yaroslav Naidenov', role: 'Hard Support', country: 'Russia', joinDate: 'Jan 2021' },
  ];

  const recentMatches = [
    {
      id: '1',
      team1: { name: 'Team Spirit', logo: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=100&h=100&fit=crop', score: 2 },
      team2: { name: 'OG', logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop', score: 1 },
      status: 'finished' as const,
      tournament: 'The International 2026',
      format: 'BO3'
    },
    {
      id: '2',
      team1: { name: 'Team Spirit', logo: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=100&h=100&fit=crop', score: 2 },
      team2: { name: 'PSG.LGD', logo: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=100&h=100&fit=crop', score: 0 },
      status: 'finished' as const,
      tournament: 'The International 2026',
      format: 'BO3'
    },
  ];

  const upcomingMatches = [
    {
      id: '3',
      team1: { name: 'Team Spirit', logo: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=100&h=100&fit=crop' },
      team2: { name: 'Tundra Esports', logo: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=100&h=100&fit=crop' },
      status: 'upcoming' as const,
      tournament: 'The International 2026',
      time: 'Tomorrow, 18:00',
      format: 'BO3'
    },
  ];

  const teamStatsRadar = [
    { stat: 'Aggression', value: 85 },
    { stat: 'Teamfight', value: 92 },
    { stat: 'Objective', value: 88 },
    { stat: 'Vision', value: 76 },
    { stat: 'Draft', value: 90 },
    { stat: 'Laning', value: 82 },
  ];

  const performanceTimeline = [
    { month: 'Jan', winrate: 62 },
    { month: 'Feb', winrate: 68 },
    { month: 'Mar', winrate: 71 },
    { month: 'Apr', winrate: 75 },
    { month: 'May', winrate: 78 },
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Team Header */}
      <div className="bg-card border border-border rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=300&h=300&fit=crop" alt="Team Spirit" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-2">Team Spirit</h1>
            <p className="text-muted-foreground mb-4">Professional Dota 2 Team • Russia</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">World Rank:</span>
                <span className="font-mono text-primary">#2</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-muted-foreground">Win Rate:</span>
                <span className="font-mono text-green-400">78%</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Founded:</span>
                <span>2015</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Follow
            </button>
            <button className="px-6 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors">
              Share
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Roster */}
          <section className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <h2>Roster</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2">IGN</th>
                    <th className="text-left py-3 px-2">Name</th>
                    <th className="text-left py-3 px-2">Role</th>
                    <th className="text-left py-3 px-2">Country</th>
                    <th className="text-left py-3 px-2">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {roster.map((player, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors cursor-pointer">
                      <td className="py-3 px-2">{player.ign}</td>
                      <td className="py-3 px-2 text-muted-foreground">{player.name}</td>
                      <td className="py-3 px-2">
                        <span className="px-2 py-1 bg-muted rounded text-xs">{player.role}</span>
                      </td>
                      <td className="py-3 px-2 text-muted-foreground">{player.country}</td>
                      <td className="py-3 px-2 text-muted-foreground">{player.joinDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Recent Results */}
          <section>
            <h2 className="mb-4">Recent Results</h2>
            <div className="space-y-3">
              {recentMatches.map((match) => (
                <MatchCard key={match.id} {...match} />
              ))}
            </div>
          </section>

          {/* Performance Timeline */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h2 className="mb-4">Performance Timeline</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceTimeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(212, 175, 55, 0.1)" />
                  <XAxis dataKey="month" tick={{ fill: '#9999aa' }} />
                  <YAxis tick={{ fill: '#9999aa' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#252540', border: '1px solid rgba(212, 175, 55, 0.15)', borderRadius: '6px' }}
                  />
                  <Line type="monotone" dataKey="winrate" stroke="#d4af37" strokeWidth={2} dot={{ fill: '#d4af37', r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Team Stats Radar */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h3 className="mb-4">Team Stats</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={teamStatsRadar}>
                  <PolarGrid stroke="rgba(212, 175, 55, 0.2)" />
                  <PolarAngleAxis dataKey="stat" tick={{ fill: '#9999aa', fontSize: 11 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#9999aa' }} />
                  <Radar dataKey="value" stroke="#d4af37" fill="#d4af37" fillOpacity={0.5} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Upcoming Matches */}
          <section>
            <h3 className="mb-4">Upcoming Matches</h3>
            <div className="space-y-3">
              {upcomingMatches.map((match) => (
                <MatchCard key={match.id} {...match} />
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-primary" />
              <h3>Recent Achievements</h3>
            </div>
            <div className="space-y-3">
              {[
                { tournament: 'The International 2023', place: '1st', prize: '$8,000,000' },
                { tournament: 'DreamLeague S20', place: '2nd', prize: '$200,000' },
                { tournament: 'ESL One Berlin', place: '1st', prize: '$300,000' },
              ].map((achievement, i) => (
                <div key={i} className="p-3 bg-muted/30 rounded">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">{achievement.tournament}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${i === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      {achievement.place}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{achievement.prize}</span>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

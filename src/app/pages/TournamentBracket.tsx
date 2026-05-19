import { useParams } from 'react-router';
import { Trophy, DollarSign, Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface BracketMatch {
  id: string;
  team1?: { name: string; score?: number };
  team2?: { name: string; score?: number };
  winner?: 'team1' | 'team2';
  status: 'upcoming' | 'live' | 'finished';
}

export function TournamentBracket() {
  const { id } = useParams();

  const upperBracket: BracketMatch[][] = [
    [
      {
        id: 'ub-r1-1',
        team1: { name: 'Team Spirit', score: 2 },
        team2: { name: 'OG', score: 1 },
        winner: 'team1',
        status: 'finished'
      },
      {
        id: 'ub-r1-2',
        team1: { name: 'PSG.LGD', score: 2 },
        team2: { name: 'Team Liquid', score: 0 },
        winner: 'team1',
        status: 'finished'
      },
      {
        id: 'ub-r1-3',
        team1: { name: 'Tundra Esports', score: 1 },
        team2: { name: 'Evil Geniuses', score: 2 },
        winner: 'team2',
        status: 'finished'
      },
      {
        id: 'ub-r1-4',
        team1: { name: 'Gaimin Gladiators', score: 2 },
        team2: { name: 'BetBoom Team', score: 1 },
        winner: 'team1',
        status: 'finished'
      },
    ],
    [
      {
        id: 'ub-r2-1',
        team1: { name: 'Team Spirit', score: 1 },
        team2: { name: 'PSG.LGD', score: 0 },
        winner: 'team1',
        status: 'live'
      },
      {
        id: 'ub-r2-2',
        team1: { name: 'Evil Geniuses' },
        team2: { name: 'Gaimin Gladiators' },
        status: 'upcoming'
      },
    ],
    [
      {
        id: 'ub-final',
        team1: { name: 'TBD' },
        team2: { name: 'TBD' },
        status: 'upcoming'
      },
    ],
  ];

  const lowerBracket: BracketMatch[][] = [
    [
      {
        id: 'lb-r1-1',
        team1: { name: 'OG', score: 2 },
        team2: { name: 'Team Liquid', score: 1 },
        winner: 'team1',
        status: 'finished'
      },
      {
        id: 'lb-r1-2',
        team1: { name: 'Tundra Esports' },
        team2: { name: 'BetBoom Team' },
        status: 'upcoming'
      },
    ],
    [
      {
        id: 'lb-r2-1',
        team1: { name: 'TBD' },
        team2: { name: 'TBD' },
        status: 'upcoming'
      },
    ],
  ];

  const MatchBox = ({ match }: { match: BracketMatch }) => {
    const statusColors = {
      live: 'border-accent',
      upcoming: 'border-border',
      finished: 'border-muted'
    };

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`bg-card border ${statusColors[match.status]} rounded-lg p-3 min-w-[180px] cursor-pointer hover:border-primary/50 transition-all`}
      >
        {match.status === 'live' && (
          <div className="flex items-center gap-1.5 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs text-accent uppercase tracking-wide">Live</span>
          </div>
        )}

        <div className="space-y-1">
          <div className={`flex items-center justify-between p-2 rounded ${match.winner === 'team1' ? 'bg-green-400/10' : 'bg-muted/30'}`}>
            <span className="text-sm truncate">{match.team1?.name}</span>
            {match.team1?.score !== undefined && (
              <span className="font-mono ml-2">{match.team1.score}</span>
            )}
          </div>
          <div className={`flex items-center justify-between p-2 rounded ${match.winner === 'team2' ? 'bg-green-400/10' : 'bg-muted/30'}`}>
            <span className="text-sm truncate">{match.team2?.name}</span>
            {match.team2?.score !== undefined && (
              <span className="font-mono ml-2">{match.team2.score}</span>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Tournament Header */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=200&h=200&fit=crop" alt="TI2026" className="w-full h-full object-cover" />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded font-mono">Tier S</span>
              <span className="text-xs px-2 py-0.5 bg-accent text-accent-foreground rounded uppercase tracking-wide">Ongoing</span>
            </div>
            <h1 className="mb-2">The International 2026</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4" />
                <span className="font-mono">$40,000,000</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>May 1-15, 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Seattle, USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bracket Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg whitespace-nowrap">
          Playoffs
        </button>
        <button className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors whitespace-nowrap">
          Groups
        </button>
        <button className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors whitespace-nowrap">
          Schedule
        </button>
        <button className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors whitespace-nowrap">
          Results
        </button>
      </div>

      {/* Upper Bracket */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-5 h-5 text-primary" />
          <h2>Upper Bracket</h2>
        </div>

        <div className="overflow-x-auto">
          <div className="inline-flex gap-8 min-w-max p-4">
            {upperBracket.map((round, roundIndex) => (
              <div key={roundIndex} className="flex flex-col justify-around min-h-[400px]">
                <div className="text-sm text-muted-foreground mb-4 text-center">
                  {roundIndex === upperBracket.length - 1 ? 'UB Final' : `Round ${roundIndex + 1}`}
                </div>
                <div className="space-y-8">
                  {round.map((match) => (
                    <MatchBox key={match.id} match={match} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lower Bracket */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-5 h-5 text-accent" />
          <h2>Lower Bracket</h2>
        </div>

        <div className="overflow-x-auto">
          <div className="inline-flex gap-8 min-w-max p-4">
            {lowerBracket.map((round, roundIndex) => (
              <div key={roundIndex} className="flex flex-col justify-around min-h-[300px]">
                <div className="text-sm text-muted-foreground mb-4 text-center">
                  LB Round {roundIndex + 1}
                </div>
                <div className="space-y-8">
                  {round.map((match) => (
                    <MatchBox key={match.id} match={match} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grand Finals */}
      <section className="bg-card border border-primary/50 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-6 h-6 text-primary" />
          <h2>Grand Finals</h2>
        </div>
        <div className="flex justify-center">
          <MatchBox
            match={{
              id: 'gf',
              team1: { name: 'TBD' },
              team2: { name: 'TBD' },
              status: 'upcoming'
            }}
          />
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Best of 5 • May 15, 2026
        </p>
      </section>

      {/* Prize Pool Distribution */}
      <section className="bg-card border border-border rounded-lg p-6">
        <h2 className="mb-4">Prize Pool Distribution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { place: '1st', prize: '$15,000,000', percentage: '37.5%' },
            { place: '2nd', prize: '$6,500,000', percentage: '16.25%' },
            { place: '3rd', prize: '$4,000,000', percentage: '10%' },
            { place: '4th', prize: '$2,500,000', percentage: '6.25%' },
          ].map((item) => (
            <div key={item.place} className="p-4 bg-muted/30 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">{item.place} Place</p>
              <p className="text-2xl font-mono text-primary mb-1">{item.prize}</p>
              <p className="text-xs text-muted-foreground">{item.percentage}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

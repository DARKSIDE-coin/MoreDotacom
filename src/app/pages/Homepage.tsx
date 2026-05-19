import { MatchCard } from '../components/MatchCard';
import { NewsCard } from '../components/NewsCard';
import { TournamentBadge } from '../components/TournamentBadge';
import { Flame, TrendingUp } from 'lucide-react';

export function Homepage() {
  const liveMatches = [
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
  ];

  const upcomingMatches = [
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
  ];

  const featuredNews = [
    {
      id: '1',
      title: 'Team Spirit доминирует в группе на The International 2026',
      excerpt: 'Действующие чемпионы не показывают признаков слабости с идеальным счётом 7-0 в групповой стадии.',
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop',
      date: '10 мая 2026',
      author: 'Александр Петров',
      views: 15420,
      category: 'Турнир'
    },
    {
      id: '2',
      title: 'Новый патч 7.36: Раскрыты мета-определяющие изменения',
      excerpt: 'IceFrog представляет масштабные изменения роли кэрри со значительными переработками предметов и баффами героев.',
      thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=450&fit=crop',
      date: '9 мая 2026',
      author: 'Елена Сидорова',
      views: 28300,
      category: 'Патч'
    },
    {
      id: '3',
      title: 'Интервью: Puppey о лидерстве Team Secret к победе',
      excerpt: 'Легендарный капитан обсуждает стратегию, командную динамику и что нужно для достижения топа.',
      thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop',
      date: '8 мая 2026',
      author: 'Михаил Иванов',
      views: 12100,
      category: 'Интервью'
    },
  ];

  const topTournaments = [
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
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-accent/20 to-primary/20 border border-primary/30 rounded-lg p-8 md:p-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl mb-4">Добро пожаловать на MoreDota</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Ваш главный источник новостей, статистики и аналитики профессионального Dota 2 киберспорта
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/matches" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Смотреть матчи
            </a>
            <a href="/tournaments" className="px-6 py-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
              Турниры
            </a>
          </div>
        </div>
      </div>

      {/* Live Matches Ticker */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Flame className="w-5 h-5 text-accent" />
          <h2>Прямые трансляции</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {liveMatches.map((match) => (
            <MatchCard key={match.id} {...match} />
          ))}
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured News */}
        <section className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2>Главные новости</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredNews.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </section>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Top Tournaments */}
          <section>
            <h3 className="mb-4">Топовые турниры</h3>
            <div className="space-y-3">
              {topTournaments.map((tournament) => (
                <TournamentBadge key={tournament.id} {...tournament} />
              ))}
            </div>
          </section>

          {/* Upcoming Matches */}
          <section>
            <h3 className="mb-4">Предстоящие матчи</h3>
            <div className="space-y-3">
              {upcomingMatches.map((match) => (
                <MatchCard key={match.id} {...match} />
              ))}
            </div>
          </section>
        </aside>
      </div>

      {/* Community Highlights */}
      <section>
        <h2 className="mb-4">Лучшее от сообщества</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Невероятная Black Hole на 5 героев', views: '150K' },
            { title: 'Камбэк Team Spirit: от -20K до победы', views: '280K' },
            { title: 'Yatoro: Рампейдж на Terrorblade', views: '420K' },
            { title: 'Лучшие моменты TI2026 - День 3', views: '890K' }
          ].map((highlight, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer">
              <div className="aspect-video bg-muted rounded mb-3 flex items-center justify-center">
                <Flame className="w-8 h-8 text-muted-foreground" />
              </div>
              <h4 className="mb-1 line-clamp-2">{highlight.title}</h4>
              <p className="text-sm text-muted-foreground">{highlight.views} просмотров • 2 часа назад</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

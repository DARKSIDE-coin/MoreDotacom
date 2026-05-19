import { useState } from 'react';
import { NewsCard } from '../components/NewsCard';
import { Filter } from 'lucide-react';

export function NewsPage() {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const allNews = [
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
    {
      id: '4',
      title: 'PSG.LGD объявляет о новом составе на 2026 год',
      excerpt: 'Китайские гиганты проводят масштабную перестановку состава перед началом нового DPC сезона.',
      thumbnail: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&h=450&fit=crop',
      date: '7 мая 2026',
      author: 'Дмитрий Соколов',
      views: 18500,
      category: 'Трансферы'
    },
    {
      id: '5',
      title: 'Лучшие моменты недели: Невероятные камбэки и выдающиеся игры',
      excerpt: 'Подборка самых захватывающих моментов профессиональной сцены Dota 2 за последние 7 дней.',
      thumbnail: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=450&fit=crop',
      date: '6 мая 2026',
      author: 'Анна Кузнецова',
      views: 9800,
      category: 'Обзор'
    },
    {
      id: '6',
      title: 'Анализ: Почему мета агрессивных лесных стала доминирующей',
      excerpt: 'Глубокий разбор текущей мета-игры и почему профессиональные команды выбирают стратегии раннего давления.',
      thumbnail: 'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&h=450&fit=crop',
      date: '5 мая 2026',
      author: 'Сергей Волков',
      views: 14200,
      category: 'Аналитика'
    },
    {
      id: '7',
      title: 'OG возвращается: Легенды киберспорта объявляют о возвращении',
      excerpt: 'После краткого перерыва, двукратные чемпионы TI объявляют о своём возвращении на соревновательную сцену.',
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop',
      date: '4 мая 2026',
      author: 'Александр Петров',
      views: 32100,
      category: 'Новости'
    },
    {
      id: '8',
      title: 'ESL One Birmingham 2026: Превью и прогнозы',
      excerpt: 'Всё, что нужно знать о предстоящем мажоре, включая анализ команд и ключевые матчи.',
      thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop',
      date: '3 мая 2026',
      author: 'Елена Сидорова',
      views: 11300,
      category: 'Превью'
    },
  ];

  const categories = ['all', 'Турнир', 'Патч', 'Интервью', 'Трансферы', 'Обзор', 'Аналитика', 'Новости', 'Превью'];

  const filteredNews = categoryFilter === 'all'
    ? allNews
    : allNews.filter(news => news.category === categoryFilter);

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="mb-2">Новости</h1>
        <p className="text-muted-foreground">Последние новости и аналитика Dota 2 киберспорта</p>
      </div>

      {/* Category Filters */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Категории</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`px-4 py-2 rounded-lg transition-all ${
                categoryFilter === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {category === 'all' ? 'Все новости' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured News */}
      {categoryFilter === 'all' && filteredNews.length > 0 && (
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-video md:aspect-auto">
              <img
                src={filteredNews[0].thumbnail}
                alt={filteredNews[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-accent text-accent-foreground text-xs px-3 py-1.5 rounded uppercase tracking-wide">
                  Главное
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded text-sm mb-3 w-fit">
                {filteredNews[0].category}
              </span>
              <h2 className="mb-3">{filteredNews[0].title}</h2>
              <p className="text-muted-foreground mb-4">{filteredNews[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{filteredNews[0].date}</span>
                <span>•</span>
                <span>{filteredNews[0].author}</span>
                <span>•</span>
                <span className="font-mono">{filteredNews[0].views.toLocaleString()} просмотров</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* News Grid */}
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(categoryFilter === 'all' ? filteredNews.slice(1) : filteredNews).map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      ) : (
        <div className="bg-card border border-border rounded-lg p-12 text-center">
          <p className="text-muted-foreground">Новости не найдены</p>
          <button
            onClick={() => setCategoryFilter('all')}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Показать все новости
          </button>
        </div>
      )}

      {/* Load More */}
      {filteredNews.length > 0 && (
        <div className="flex justify-center pt-4">
          <button className="px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors">
            Загрузить ещё
          </button>
        </div>
      )}
    </div>
  );
}

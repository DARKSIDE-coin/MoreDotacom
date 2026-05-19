import { Link } from 'react-router';
import { Mail, Twitter, Youtube, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    matches: [
      { name: 'Живые матчи', href: '/matches?filter=live' },
      { name: 'Предстоящие', href: '/matches?filter=upcoming' },
      { name: 'Результаты', href: '/matches?filter=results' },
      { name: 'Избранное', href: '/matches/favorites' },
    ],
    stats: [
      { name: 'Команды', href: '/teams' },
      { name: 'Игроки', href: '/players' },
      { name: 'Турниры', href: '/tournaments' },
      { name: 'Рейтинги', href: '/rankings' },
    ],
    content: [
      { name: 'Новости', href: '/news' },
      { name: 'Статьи', href: '/articles' },
      { name: 'Интервью', href: '/interviews' },
      { name: 'VOD', href: '/vods' },
    ],
    community: [
      { name: 'Форум', href: '/forum' },
      { name: 'Прогнозы', href: '/predictions' },
      { name: 'Фэнтези', href: '/fantasy' },
      { name: 'Галерея', href: '/gallery' },
    ],
    info: [
      { name: 'О нас', href: '/about' },
      { name: 'Контакты', href: '/contact' },
      { name: 'Реклама', href: '/advertising' },
      { name: 'Правила', href: '/terms' },
      { name: 'Конфиденциальность', href: '/privacy' },
    ],
  };

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded flex items-center justify-center">
                <span className="font-mono text-lg">MD</span>
              </div>
              <div>
                <div className="text-lg">MoreDota</div>
                <div className="text-xs text-muted-foreground">moredota.com</div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Лучший источник новостей, статистики и аналитики по Dota 2 киберспорту
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Discord">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Matches */}
          <div>
            <h4 className="mb-4 uppercase tracking-wide text-sm">Матчи</h4>
            <ul className="space-y-2">
              {navigation.matches.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4 className="mb-4 uppercase tracking-wide text-sm">Статистика</h4>
            <ul className="space-y-2">
              {navigation.stats.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div>
            <h4 className="mb-4 uppercase tracking-wide text-sm">Контент</h4>
            <ul className="space-y-2">
              {navigation.content.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="mb-4 uppercase tracking-wide text-sm">Сообщество</h4>
            <ul className="space-y-2">
              {navigation.community.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="mb-4 uppercase tracking-wide text-sm">Информация</h4>
            <ul className="space-y-2">
              {navigation.info.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} MoreDota.com. Все права защищены.</p>
            <div className="flex items-center gap-6">
              <Link to="/terms" className="hover:text-foreground transition-colors">
                Пользовательское соглашение
              </Link>
              <Link to="/privacy" className="hover:text-foreground transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/admin" className="hover:text-primary transition-colors">
                Админ-панель
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

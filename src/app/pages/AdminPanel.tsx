import { useState } from 'react';
import { Plus, Edit2, Trash2, Save, X, Users, Swords, Trophy, Newspaper, BarChart3 } from 'lucide-react';

type ContentType = 'matches' | 'teams' | 'players' | 'news' | 'tournaments';

interface FormData {
  [key: string]: string | number;
}

export function AdminPanel() {
  const [activeTab, setActiveTab] = useState<ContentType>('matches');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({});

  const tabs = [
    { id: 'matches' as ContentType, label: 'Матчи', icon: Swords },
    { id: 'teams' as ContentType, label: 'Команды', icon: Users },
    { id: 'players' as ContentType, label: 'Игроки', icon: BarChart3 },
    { id: 'news' as ContentType, label: 'Новости', icon: Newspaper },
    { id: 'tournaments' as ContentType, label: 'Турниры', icon: Trophy },
  ];

  const handleAdd = () => {
    setIsFormOpen(true);
    setEditingId(null);
    setFormData({});
  };

  const handleEdit = (id: string, data: FormData) => {
    setIsFormOpen(true);
    setEditingId(id);
    setFormData(data);
  };

  const handleSave = () => {
    console.log('Saving:', activeTab, formData);
    setIsFormOpen(false);
    setFormData({});
    setEditingId(null);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
    setFormData({});
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Вы уверены, что хотите удалить этот элемент?')) {
      console.log('Deleting:', activeTab, id);
    }
  };

  const renderMatchForm = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-2">Команда 1</label>
          <input
            type="text"
            value={formData.team1 || ''}
            onChange={(e) => setFormData({ ...formData, team1: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Название команды"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Счёт команды 1</label>
          <input
            type="number"
            value={formData.score1 || ''}
            onChange={(e) => setFormData({ ...formData, score1: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Команда 2</label>
          <input
            type="text"
            value={formData.team2 || ''}
            onChange={(e) => setFormData({ ...formData, team2: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Название команды"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Счёт команды 2</label>
          <input
            type="number"
            value={formData.score2 || ''}
            onChange={(e) => setFormData({ ...formData, score2: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Статус</label>
          <select
            value={formData.status || 'upcoming'}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="upcoming">Предстоящий</option>
            <option value="live">В эфире</option>
            <option value="finished">Завершён</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-2">Формат</label>
          <select
            value={formData.format || 'BO3'}
            onChange={(e) => setFormData({ ...formData, format: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="BO1">BO1</option>
            <option value="BO3">BO3</option>
            <option value="BO5">BO5</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm mb-2">Турнир</label>
          <input
            type="text"
            value={formData.tournament || ''}
            onChange={(e) => setFormData({ ...formData, tournament: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Название турнира"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Дата/Время</label>
          <input
            type="datetime-local"
            value={formData.datetime || ''}
            onChange={(e) => setFormData({ ...formData, datetime: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Зрители</label>
          <input
            type="number"
            value={formData.viewers || ''}
            onChange={(e) => setFormData({ ...formData, viewers: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="0"
          />
        </div>
      </div>
    </div>
  );

  const renderTeamForm = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-2">Название команды</label>
          <input
            type="text"
            value={formData.name || ''}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Team Spirit"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Регион</label>
          <select
            value={formData.region || 'WEU'}
            onChange={(e) => setFormData({ ...formData, region: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="WEU">Западная Европа</option>
            <option value="EEU">Восточная Европа</option>
            <option value="China">Китай</option>
            <option value="SEA">Юго-Восточная Азия</option>
            <option value="NA">Северная Америка</option>
            <option value="SA">Южная Америка</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-2">Мировой рейтинг</label>
          <input
            type="number"
            value={formData.rank || ''}
            onChange={(e) => setFormData({ ...formData, rank: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="1"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Процент побед (%)</label>
          <input
            type="number"
            value={formData.winRate || ''}
            onChange={(e) => setFormData({ ...formData, winRate: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="75"
            min="0"
            max="100"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Общие призовые</label>
          <input
            type="text"
            value={formData.totalPrize || ''}
            onChange={(e) => setFormData({ ...formData, totalPrize: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="$10.5M"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">URL логотипа</label>
          <input
            type="url"
            value={formData.logo || ''}
            onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="https://..."
          />
        </div>
      </div>
    </div>
  );

  const renderPlayerForm = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-2">Игровой ник</label>
          <input
            type="text"
            value={formData.ign || ''}
            onChange={(e) => setFormData({ ...formData, ign: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="TORONTOTOKYO"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Настоящее имя</label>
          <input
            type="text"
            value={formData.realName || ''}
            onChange={(e) => setFormData({ ...formData, realName: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Александр Хертек"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Команда</label>
          <input
            type="text"
            value={formData.team || ''}
            onChange={(e) => setFormData({ ...formData, team: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Team Spirit"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Роль</label>
          <select
            value={formData.role || 'Mid'}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Carry">Carry</option>
            <option value="Mid">Mid</option>
            <option value="Offlane">Offlane</option>
            <option value="Support">Support</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-2">Страна</label>
          <input
            type="text"
            value={formData.country || ''}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Россия"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Рейтинг</label>
          <input
            type="number"
            value={formData.rank || ''}
            onChange={(e) => setFormData({ ...formData, rank: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="1"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Средний KDA</label>
          <input
            type="number"
            step="0.1"
            value={formData.avgKDA || ''}
            onChange={(e) => setFormData({ ...formData, avgKDA: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="4.3"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Процент побед (%)</label>
          <input
            type="number"
            value={formData.winRate || ''}
            onChange={(e) => setFormData({ ...formData, winRate: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="72"
            min="0"
            max="100"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Средний GPM</label>
          <input
            type="number"
            value={formData.gpm || ''}
            onChange={(e) => setFormData({ ...formData, gpm: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="645"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Общие призовые</label>
          <input
            type="text"
            value={formData.totalPrize || ''}
            onChange={(e) => setFormData({ ...formData, totalPrize: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="$7.8M"
          />
        </div>
      </div>
    </div>
  );

  const renderNewsForm = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm mb-2">Заголовок</label>
        <input
          type="text"
          value={formData.title || ''}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Заголовок новости"
        />
      </div>
      <div>
        <label className="block text-sm mb-2">Краткое описание</label>
        <textarea
          value={formData.excerpt || ''}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          rows={3}
          placeholder="Краткое описание новости"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm mb-2">Полный текст</label>
        <textarea
          value={formData.content || ''}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          rows={10}
          placeholder="Полный текст новости"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-2">Категория</label>
          <select
            value={formData.category || 'Новости'}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Новости">Новости</option>
            <option value="Турнир">Турнир</option>
            <option value="Патч">Патч</option>
            <option value="Интервью">Интервью</option>
            <option value="Трансферы">Трансферы</option>
            <option value="Обзор">Обзор</option>
            <option value="Аналитика">Аналитика</option>
            <option value="Превью">Превью</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-2">Автор</label>
          <input
            type="text"
            value={formData.author || ''}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Имя автора"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">URL изображения</label>
          <input
            type="url"
            value={formData.thumbnail || ''}
            onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="https://..."
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Дата публикации</label>
          <input
            type="date"
            value={formData.date || ''}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
    </div>
  );

  const renderTournamentForm = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-2">Название турнира</label>
          <input
            type="text"
            value={formData.name || ''}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="The International 2026"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Призовой фонд</label>
          <input
            type="text"
            value={formData.prizePool || ''}
            onChange={(e) => setFormData({ ...formData, prizePool: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="$40,000,000"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Дата начала</label>
          <input
            type="date"
            value={formData.startDate || ''}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Дата окончания</label>
          <input
            type="date"
            value={formData.endDate || ''}
            onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Локация</label>
          <input
            type="text"
            value={formData.location || ''}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Seattle, USA"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Уровень</label>
          <select
            value={formData.tier || 'S'}
            onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="S">Tier S</option>
            <option value="A">Tier A</option>
            <option value="B">Tier B</option>
            <option value="C">Tier C</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-2">Статус</label>
          <select
            value={formData.status || 'ongoing'}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="upcoming">Предстоящий</option>
            <option value="ongoing">Идёт</option>
            <option value="completed">Завершён</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-2">URL логотипа</label>
          <input
            type="url"
            value={formData.logo || ''}
            onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
            className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="https://..."
          />
        </div>
      </div>
    </div>
  );

  const renderForm = () => {
    switch (activeTab) {
      case 'matches':
        return renderMatchForm();
      case 'teams':
        return renderTeamForm();
      case 'players':
        return renderPlayerForm();
      case 'news':
        return renderNewsForm();
      case 'tournaments':
        return renderTournamentForm();
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent to-primary rounded-lg p-6 text-white">
        <h1 className="mb-2">Панель администратора</h1>
        <p>Управление контентом сайта MoreDota.com</p>
      </div>

      {/* Tabs */}
      <div className="bg-card border border-border rounded-lg p-2">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-card border border-border rounded-lg">
        {/* Toolbar */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h2 className="capitalize">{tabs.find(t => t.id === activeTab)?.label}</h2>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Добавить
          </button>
        </div>

        {/* Form Modal */}
        {isFormOpen && (
          <div className="p-6 border-b border-border bg-muted/30">
            <div className="flex items-center justify-between mb-4">
              <h3>{editingId ? 'Редактирование' : 'Добавление'}</h3>
              <button
                onClick={handleCancel}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {renderForm()}
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Save className="w-4 h-4" />
                Сохранить
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
              >
                Отмена
              </button>
            </div>
          </div>
        )}

        {/* List/Table */}
        <div className="p-6">
          <div className="bg-muted/30 rounded-lg p-8 text-center text-muted-foreground">
            <p className="mb-2">Здесь будет отображаться список {tabs.find(t => t.id === activeTab)?.label.toLowerCase()}</p>
            <p className="text-sm">После подключения базы данных вы сможете видеть и редактировать все записи</p>
            <div className="mt-6 flex gap-3 justify-center flex-wrap">
              <button
                onClick={() => handleEdit('demo-1', { name: 'Пример 1' })}
                className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded hover:border-primary/50 transition-colors"
              >
                <Edit2 className="w-3.5 h-3.5" />
                Редактировать пример
              </button>
              <button
                onClick={() => handleDelete('demo-1')}
                className="flex items-center gap-2 px-3 py-1.5 bg-accent/20 text-accent border border-accent/30 rounded hover:bg-accent/30 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Удалить пример
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Help Card */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="mb-3">Как использовать админ-панель</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• <strong>Добавить</strong> - создать новую запись (матч, команду, игрока и т.д.)</p>
          <p>• <strong>Редактировать</strong> - изменить существующую запись</p>
          <p>• <strong>Удалить</strong> - удалить запись (с подтверждением)</p>
          <p>• Все изменения сохраняются автоматически</p>
          <p>• Для подключения базы данных используйте Supabase (интеграция доступна в настройках)</p>
        </div>
      </div>
    </div>
  );
}

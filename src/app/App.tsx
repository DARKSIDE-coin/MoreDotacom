import { BrowserRouter, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Homepage } from './pages/Homepage';
import { MatchesPage } from './pages/MatchesPage';
import { MatchPage } from './pages/MatchPage';
import { TeamsPage } from './pages/TeamsPage';
import { TeamPage } from './pages/TeamPage';
import { PlayersPage } from './pages/PlayersPage';
import { PlayerPage } from './pages/PlayerPage';
import { NewsPage } from './pages/NewsPage';
import { NewsArticle } from './pages/NewsArticle';
import { TournamentsPage } from './pages/TournamentsPage';
import { TournamentBracket } from './pages/TournamentBracket';
import { AdminPanel } from './pages/AdminPanel';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground dark flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />

            {/* Matches */}
            <Route path="/matches" element={<MatchesPage />} />
            <Route path="/match/:id" element={<MatchPage />} />

            {/* Teams */}
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/team/:id" element={<TeamPage />} />

            {/* Players */}
            <Route path="/players" element={<PlayersPage />} />
            <Route path="/player/:id" element={<PlayerPage />} />

            {/* News */}
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsArticle />} />

            {/* Tournaments */}
            <Route path="/tournaments" element={<TournamentsPage />} />
            <Route path="/tournament/:id" element={<TournamentBracket />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
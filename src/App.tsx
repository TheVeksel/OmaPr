import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeaderAside from './components/Header/HeaderAside/HeaderAside';
import NewsPage from './components/MainNewsPage';

export default function App() {
  return (
    <Router>
      <Header />
      <HeaderAside />
      <Routes>
        <Route path="/" element={<NewsPage />} /> {/* Главная страница с новостями */}
        <Route path="/news/:id" element={<NewsPage />} /> {/* Страница новостей по ID */}
      </Routes>
    </Router>
  );
}

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import CentredContent from './components/MainNewsPage/CentredContent/CentredContent';
import DetailedNew1 from './components/DetailedNews/DetailedNew1';
import HeaderAside from './components/Header/HeaderAside/HeaderAside';
import Header from './components/Header/Header';

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  return (
    <div>
      <Header />
      {/* Показывать Aside только на главной странице */}
      {location.pathname === '/' && <HeaderAside />}
      
      <Routes>
        <Route path="/" element={<CentredContent />} />
        <Route path="/news/:id" element={<DetailedNew1 />} />
      </Routes>
    </div>
  );
}

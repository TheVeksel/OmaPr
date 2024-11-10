import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import MainNewsPage from "./components/MainNewsPage/MainNewsPage";
import DetailedNews from "./components/DetailedNews/DetailedNews";
import HeaderAside from "./components/Header/HeaderAside/HeaderAside";
import ThematicNews from "./components/ThematicNews/ThematicNews";

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
    <>
      <Header />
      {location.pathname === '/' && <HeaderAside />} 
      
      <Routes>
        <Route path="/" element={<MainNewsPage />} />
        <Route path="/news/:id" element={<DetailedNews />} />
        <Route path="/headerMainThemes/:id" element={<ThematicNews/>}/>
      </Routes>
    </>
  );
}

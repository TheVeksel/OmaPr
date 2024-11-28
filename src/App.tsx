import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import { closeLogin } from "./store/features/loginSlice";
import Header from "./components/Header/Header";
import MainNewsPage from "./components/MainNewsPage/MainNewsPage";
import DetailedNews from "./components/DetailedNews/DetailedNews";
import HeaderAside from "./components/Header/HeaderAside/HeaderAside";
import ThematicNews from "./components/ThematicNews/ThematicNews";
import SearchPage from "./components/SearchPage/SearchPage";
import LoginModal from "./components/LoginModal/LoginModal";
import { useEffect } from "react";

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const isLoginOpen = useSelector((state: RootState) => state.login.isLoginOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoginOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoginOpen]);

  return (
    <>
      <Header />
      {location.pathname === "/" && <HeaderAside />}
      {isLoginOpen && (
        <>
          <div
            className="overlay"
            onClick={() => dispatch(closeLogin())}
          />
          <LoginModal onClose={() => dispatch(closeLogin())} />
        </>
      )}
      <Routes>
        <Route path="/" element={<MainNewsPage />} />
        <Route path="/news/:id" element={<DetailedNews />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/headerMainThemes/:id" element={<ThematicNews />} />
      </Routes>
    </>
  );
}

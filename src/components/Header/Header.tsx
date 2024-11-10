import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderMainNews from "./HeaderMainNews";
import ThirdHeaderPart from "./ThirdHeaderPart";
import { HeaderMainNewsItem, fetchHeaderMainNews } from "../../services/thematicNewsService";

export default function Header(): JSX.Element {
  const [headerNews, setHeaderNews] = useState<HeaderMainNewsItem[]>([]);

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchHeaderMainNews(); 
      if (data) {
        setHeaderNews(data);  
      }
    };

    loadNews();  
  }, []);

  return (
    <div className="header__wraper">
      <header>
        <div className="main">
          <Link to="/">
            <img className="logo" src="/photo/1024x1024.jpg" alt="img" />
            <h3 className="logo__text">Etusivu</h3>
            <div className="bar"></div>
          </Link>
        </div>
        <div className="wrapper">
          <HeaderMainNews news={headerNews} />
          <ThirdHeaderPart />
        </div>
      </header>
    </div>
  );
}

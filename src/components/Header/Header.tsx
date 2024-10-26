import { Link } from "react-router-dom";
import MainNews from "./MainNews";
import ThirdHeaderPart from "./ThirdHeaderPart";
import { useEffect, useState } from "react";
import axios from "axios";

export interface HeaderMainNewsItem {
  id: number;
  title: string;
}

export default function Header(): JSX.Element {
  const [headerNews, setHeaderNews] = useState<HeaderMainNewsItem[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/headerMainNews")
      .then((response) => {
        setHeaderNews(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <>
      <header>
        <div className="main">
          <Link to="/">
            <img className="logo" src="/photo/1024x1024.jpg" alt="img" />
            <h3 className="logo__text">Etusivu</h3>
            <div className="bar"></div>
          </Link>
        </div>
        <div className="wrapper">
          <MainNews news={headerNews} />
          <ThirdHeaderPart />
        </div>
      </header>
    </>
  );
}

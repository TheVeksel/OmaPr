import { Link } from "react-router-dom";
import MainNews from "./MainNews";
import ThirdHeaderPart from "./ThirdHeaderPart";
import axios from "axios";
import { useEffect, useState } from "react";

interface NewsItem {
  id: number;
  title: string;
}

export default function Header(): JSX.Element {
  const [headerNews, setHeaderNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/headerMainNews')
      .then((response) => {
        setHeaderNews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <header>
        <div className="main">
          <Link to="/">
            <a href="#">
              <img className="logo" src="/photo/1024x1024.jpg" alt="img" />
              <h3 className="logo__text">Etusivu</h3>
              <div className="bar"></div>
            </a>
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

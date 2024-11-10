import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllNews, NewsContent } from "../../../services/newsService";
import MiniNews from "./MiniNews/MiniNews";

export default function MainPageCenterNews(): JSX.Element | null {
  const [news, setNews] = useState<NewsContent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allNews = await fetchAllNews();
        setNews(allNews);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const filteredNews = news.filter((newsItem) => newsItem.id !== 0);

  return (
    <div className="centred__contentnews">
      {filteredNews.map((newsItem, index) => {
        const isMiniNews = index % 3 === 2;

        if (isMiniNews) {
          return <MiniNews key={`mini-news-${newsItem.id}`} id={newsItem.id} />;
        }

        return (
          <Link key={newsItem.id} to={`/news/${newsItem.id}`}>
            <div className="centred__contentnews-el">
              <div className="imgbox">
                <img className="imgbox" src={newsItem.imgURL} alt="img" />
              </div>
              <div className="element__content">
                <p>{newsItem.newsGivenBy}</p>
                <h1 className="el__news-header">{newsItem.title}</h1>
                <p className="news__text">{newsItem.subTitle}</p>
              </div>
              <div className="dopinfo">{newsItem.timestamp}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

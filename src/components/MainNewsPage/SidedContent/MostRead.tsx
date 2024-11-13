import { useCallback, useEffect, useState } from "react";
import { fetchAllNews } from "../../../services/newsService";
import { Link } from "react-router-dom";

interface MostRead {
  id: number;
  theme: string;
  title: string;
}

export default function MostRead(): JSX.Element {
  const [mostReadNews, setMostReadNews] = useState<MostRead[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const allNews = await fetchAllNews();
      const randomNews = allNews.sort(() => 0.5 - Math.random()).slice(0, 5);
      setMostReadNews(randomNews);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="mostread">
      <h1 className="sided__content-header">Luetuimmat</h1>
      <div className="sided__content-content">
        {mostReadNews.map((news, index) => (
          <Link to={`/news/${news.id}`} key={news.id} className="message">
            <div className="message__number-wrap">
              <p className="number">{index + 1}</p>
              <div className="decoration"></div>
            </div>
            <div className="sided__content-headerwrap">
              <h4 className="message__header">{news.theme}</h4>
              <p className="message__content">{news.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

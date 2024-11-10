import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllNews, NewsContent } from "../../../../services/newsService";

interface MiniNewsProps {
  id: number;
}

export default function MiniNews({ id }: MiniNewsProps): JSX.Element | null {
  const [news, setMiniNews] = useState<NewsContent | null>(null);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allNews = await fetchAllNews();  
        const selectedNews = allNews.find((newsItem) => newsItem.id === id);  
        setMiniNews(selectedNews || null);  
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [id]);

  if (!news) {
    return null;  
  }

  return (
    <Link to={`/news/${news.id}`}>
      <div className="mininews">
        <div className="mininews__text">
          <p className="mininews__about">{news.about}</p>
          <h1 className="mininews__title">{news.title}</h1>
          <div className="mininews__dopinfo">{news.timestamp}</div>
        </div>
        <div className="mininews__img-box">
          <img className="mininews__img" src={news.imgURL} alt="img" />
        </div>
      </div>
    </Link>
  );
}

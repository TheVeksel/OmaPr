import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

interface RightNow {
  id: number;
  title: string;
  subTitle: string;
  newsText: string;
  timestamp: string;
  newsGivenBy: string;
}

interface RightNowProps {
  id: number; 
}

export default function RightNowSection({ id }: RightNowProps): JSX.Element | null {
  const [news, setNews] = useState<RightNow | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://yle-react-default-rtdb.europe-west1.firebasedatabase.app/news/allNews/${id}.json`);
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [id]);

  if (!news) return null

  return (
    <Link to={`/news/${news.id}`}>
      <div className="rightnow">
        <div className="rightnow__header">
          <h2 className="redtext">JUURI NYT</h2>
          <h3>{news.newsGivenBy}</h3>
        </div>
        <div className="rightnow__content">{news.subTitle}</div>
        <p className="time">{news.timestamp}</p>
      </div>
    </Link>
  );
}

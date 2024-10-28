import RightNowSection from "./RightNowSection";
import { useState, useEffect } from "react";
import axios from "axios";

export interface RightNow {
  id: number;
  newsGivenBy: string;
  newsText: string;
  timeStamp: string;
  title: string;
  subTitle: string;
}

export default function CentredContent(): JSX.Element {
  const [mainNews, setRightNowNews] = useState<RightNow[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://yle-react-default-rtdb.europe-west1.firebasedatabase.app/news/News.json");
        const newsArray = Object.values(response.data) as RightNow[];
        setRightNowNews(newsArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="centred__content">
      {/* Передаем только первую новость в RightNowSection */}
      {mainNews.length > 0 && <RightNowSection news={mainNews[2]} />}
    </div>
  );
}

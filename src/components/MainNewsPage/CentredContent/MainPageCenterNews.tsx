import axios from "axios";
import { useEffect, useState } from "react";

interface MainPage {
  id: number;
  title: string;
  subTitle: string;
  newsText: string;
  timestamp: string;
  imgURL: string;
  newsGivenBy: string;
}

interface MainPageNewsProps {
  id: number;
}

export default function MainPageCenterNews({ id }: MainPageNewsProps): JSX.Element {
  const [news, setMainPageNews] = useState<MainPage | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://yle-react-default-rtdb.europe-west1.firebasedatabase.app/news/allNews/${id}.json`);
        setMainPageNews(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [id]);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div className="centred__contentnews">
      <div className="centred__contentnews-el">
        <div className="imgbox"><img className="imgbox" src={news.imgURL} alt="img" /></div>
        <div className="element__content">
          <h1 className="el__news-header">{news.title}</h1>
          <p className="news__text">{news.subTitle}</p>
        </div>
        <div className="dopinfo">{news.timestamp}</div>
      </div>
    </div>
  );
}

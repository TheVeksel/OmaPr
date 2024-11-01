import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SidedContent from "../MainNewsPage/SidedContent/SidedContent";

export interface DetailedNewsContent {
  id: number;
  title: string;
  subTitle: string;
  newsText: string;
  timestamp: string;
  imgURL: string;
  newsGivenBy: string;
}

export default function DetailedNews(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<DetailedNewsContent | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://yle-react-default-rtdb.europe-west1.firebasedatabase.app/news/allNews.json"
        );
        const newsArray = Object.values(response.data) as DetailedNewsContent[];
        const selectedNews = newsArray.find((item) => item.id === Number(id));
        setNews(selectedNews || null);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchNews();
  }, [id]);

  const formatText = (text: string) => {
    const paragraphs = text.split(/\n+/);
    return paragraphs.map((para, index) => (
      <p key={index} className="detailed__news-text">{para.trim()}</p>
    ));
  };
  

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <section className="all__news">
      <div className="centred__detailed-news">
        <div className="detailed__news-header">
          <h1>{news.title}</h1>
          <h3>{news.subTitle}</h3>
        </div>
        <img className="detailed__news-img" src={news.imgURL} alt="img" />
        <p className="newsgivenby">{news.newsGivenBy}</p>
        <p className="detailed__news-timeago">{news.timestamp}</p>
        <div>{formatText(news.newsText)}</div>
      </div>
      <SidedContent />
    </section>
  );
}

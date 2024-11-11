import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchNewsById, NewsContent } from "../../services/newsService";
import SidedContent from "../MainNewsPage/SidedContent/SidedContent";
import { Link } from "react-router-dom";

export default function DetailedNews(): JSX.Element | null {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<NewsContent | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const selectedNews = await fetchNewsById(Number(id));
        setNews(selectedNews);
      } catch (error) {
        console.error("Error loading news:", error);
      }
    };
    loadNews();
  }, [id]);

  const formatText = (text: string) => {
    const paragraphs = text.split(/\n+/);
    return paragraphs.map((para, index) => (
      <p key={index} className="detailed__news-text">
        {para.trim()}
      </p>
    ));
  };
  if (!news) {
    return null;
  }
  return (
    <section className="all__news">
      <div className="centred__detailed-news">
          <p className="newsgivenby">{news.theme}</p>
        <div className="detailed__news-header">
          <h1>{news.title}</h1>
          <h3>{news.subTitle}</h3>
        </div>
        <img className="detailed__news-img" src={news.imgURL} alt="img" />
        <p className="newsgivenby">{news.newsGivenBy}</p>
        <p className="detailed__news-timeago">{news.timestamp}</p>
        <div>{formatText(news.newsText)}</div>
      </div>
      <div className="center__bar"></div>
      <SidedContent />
    </section>
  );
}

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ThematicHeaderMainNewsItem,
  fetchThematicHeaderMainNewsNewsById,
} from "../../services/thematicNewsService";
import { fetchAllNews, NewsContent } from "../../services/newsService";
import "./ThematicNews.scss";
import SidedContent from "../MainNewsPage/SidedContent/SidedContent";

export default function ThematicNews(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [thematicHeaderNews, setThematicHeaderNews] =
    useState<ThematicHeaderMainNewsItem | null>(null);
  const [thematicNews, setThematicNews] = useState<NewsContent[]>([]);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const selectedNews = await fetchThematicHeaderMainNewsNewsById(
          Number(id)
        );
        setThematicHeaderNews(selectedNews);
      } catch (error) {
        console.error("Error loading news:", error);
      }
    };
    loadNews();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      if (thematicHeaderNews?.theme) {
        try {
          const response = await fetchAllNews();
          const filtredNews = response?.filter(
            (news: NewsContent) => news.theme === thematicHeaderNews.theme
          );
          setThematicNews(filtredNews);
        } catch (error) {
          console.error("Error fetching data", error);
        }
      }
    };

    fetchData();
  }, [thematicHeaderNews?.theme, id]);

  return (
    <>
      <div className="thematicnews__heading">
        <aside className="thematicnews__aside">
          <div className="img-box">
            <img src={thematicHeaderNews?.headerPicture} alt="Header" />
          </div>
        </aside>
      </div>
      <section className="all__news">
        <div className="centred__news">
        <p className="img__text">{thematicHeaderNews?.theme}</p>
          {thematicNews.map((newsItem) => (
            <Link key={newsItem.id} to={`/news/${newsItem.id}`}>
              <div className="centred__contentnews-el">
                <div className="imgbox">
                  <img className="imgbox" src={newsItem.imgURL} alt="img" />
                </div>
                <div className="element__content">
                  <p>{newsItem.theme}</p>
                  <h1 className="el__news-header">{newsItem.title}</h1>
                  <p className="news__text">{newsItem.subTitle}</p>
                </div>
                <div className="dopinfo">{newsItem.timestamp}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="center__bar"></div>
        <SidedContent />
      </section>
    </>
  );
}

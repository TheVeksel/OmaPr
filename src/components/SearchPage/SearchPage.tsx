import { useCallback, useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import { fetchAllNews } from "../../services/newsService";
import "./searchpage.scss";
import { Link } from "react-router-dom";

interface SearchedNews {
  id: number;
  title: string;
  subTitle: string;
  newsGivenBy: string;
}

export default function SearchPage(): JSX.Element {
  const [searchedNews, setSearchedNews] = useState<SearchedNews[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [filteredNews, setFilteredNews] = useState<SearchedNews[]>([]);
  const input = useInput();

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const filtered = searchedNews.filter((news) =>
        news.title.toLowerCase().includes(input.value.toLowerCase())
      );
      setFilteredNews(filtered);
      setShowResults(true);
    }
  };

  const fetchData = useCallback(async () => {
    try {
      const allNews = await fetchAllNews();
      setSearchedNews(allNews);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <aside className="searchaside">
        <div
          className="input__container"
          style={{ textAlign: "center", marginBottom: "15px" }}
        >
          <input
            className="searchaside__input"
            type="text"
            {...input}
            placeholder="Hae"
            onKeyDown={handleEnterPress}
          />
          <p
            className="searchaside__article"
            style={{
              textAlign: "start",
              paddingTop: "40px",
              paddingBottom: "40px",
              fontSize: "22px",
            }}
          >
            Artikkelit
          </p>
        </div>
      </aside>
      <section className="all__news" style={{ display: "block" }}>
        <h1 style={{ fontSize: "26px", marginBottom: "20px" }}>Artikkelit</h1>
        <ul>
          {showResults &&
            filteredNews.map((news) => (
              <Link to={`/news/${news.id}`} key={news.id}>
                <li className="searched__element" key={news.id}>
                  <h1>{news.title}</h1>
                  <h2>{news.subTitle}</h2>
                  <p>{news.newsGivenBy}</p>
                </li>
              </Link>
            ))}
        </ul>
      </section>
    </>
  );
}

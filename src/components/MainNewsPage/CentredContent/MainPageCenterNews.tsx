import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOpenNewsId } from "../../../store/features/newsOpenSlice";
import axios from "axios";

interface MainPage {
  id: number;
  title: string;
  subTitle: string;
  timestamp: string;
  imgURL: string;
  newsGivenBy: string;
}

interface MainPageNewsProps {
  id: number;
}

export default function MainPageCenterNews({ id }: MainPageNewsProps): JSX.Element | null {
  const [news, setMainPageNews] = useState<MainPage | null>(null);
  const dispatch = useDispatch();

  const handleOpenNews = () => {
    dispatch(setOpenNewsId(id));
  };

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
    return null;
  }

  return (
    <Link to={`/news/${news.id}`} onClick={handleOpenNews}>
      <div className="centred__contentnews">
        <div className="centred__contentnews-el">
          <div className="imgbox"><img className="imgbox" src={news.imgURL} alt="img" /></div>
          <div className="element__content">
            <p>{news.newsGivenBy}</p>
            <h1 className="el__news-header">{news.title}</h1>
            <p className="news__text">{news.subTitle}</p>
          </div>
          <div className="dopinfo">{news.timestamp}</div>
        </div>
      </div>
    </Link>
  );
}

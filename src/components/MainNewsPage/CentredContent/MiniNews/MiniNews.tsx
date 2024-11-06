import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOpenNewsId } from "../../../../store/features/newsOpenSlice";
import axios from "axios";

interface MiniNews {
  id: number;
  title: string;
  subTitle: string;
  timestamp: string;
  imgURL: string;
  newsGivenBy: string;
  about: string;
}

interface MiniNewsProps {
  id: number;
}

export default function MiniNews({ id }: MiniNewsProps): JSX.Element | null {
  const [news, setMiniNews] = useState<MiniNews | null>(null);
  const dispatch = useDispatch();

  const handleOpenNews = () => {
    dispatch(setOpenNewsId(id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://yle-react-default-rtdb.europe-west1.firebasedatabase.app/news/allNews/${id}.json`
        );
        setMiniNews(response.data);
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

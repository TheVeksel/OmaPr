import { RightNow } from "./CentredContent";
import { Link } from "react-router-dom";

interface RightNowProps {
  news: RightNow;
}

export default function RightNowSection({ news }: RightNowProps): JSX.Element {
  return (
    <div className="rightnow">
      <div className="rightnow__item" key={news.id}>
        <div className="rightnow__header">
          <Link to={`/news/${news.id}`}>
            <h2 className="redtext">{news.title}</h2>
          </Link>
          <h3>{news.newsGivenBy}</h3>
        </div>
        <div className="rightnow__content">{news.subTitle}</div>
        <p className="time">{news.timeStamp}</p>
      </div>
    </div>
  );
}

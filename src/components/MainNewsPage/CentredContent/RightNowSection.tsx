import { RightNow } from "./CentredContent";

interface RightNowProps {
  news: RightNow[];
}
export default function RightNowSection({ news }: RightNowProps): JSX.Element {

  return (
    <div className="rightnow">
      {news.map((item) => (
        <div className="rightnow__item" key={item.id}>
          <div className="rightnow__header">
            <h2 className="redtext">{item.title}</h2>
            <h3>{item.newsGivenBy}</h3>
          </div>
          <div className="rightnow__content">{item.newsText}</div>
          <p className="time">{item.timeStamp}</p>
        </div>
      ))}
    </div>
  );
}

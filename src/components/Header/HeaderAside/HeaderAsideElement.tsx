import { AsideMainNewsItem } from "./HeaderAside";

interface AsideMainNewsProps {
  news: AsideMainNewsItem[];
}

export default function HeaderAsideElement({ news }: AsideMainNewsProps): JSX.Element {
  return (
    <ul className="news-header">
      {news.map((item) => (
        <li className="aside__list-element" key={item.id}>
          <div className="decoration"></div>
          <p className="time-ago">{item.timestamp}</p>
          <h3 className="main__text">{item.title}</h3>
        </li>
      ))}
    </ul>
  );
}

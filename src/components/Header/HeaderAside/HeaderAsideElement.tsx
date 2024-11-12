import { AsideMainNewsItem } from "./HeaderAside";

interface AsideMainNewsProps {
  news: AsideMainNewsItem;
  onClick: (id: number) => void;
  isFirst: boolean;  
}

export default function HeaderAsideElement({ news, onClick, isFirst }: AsideMainNewsProps): JSX.Element {
  return (
    <li className={`aside__list-element ${isFirst ? "first-element" : ""}`} onClick={() => onClick(news.id)}>
      <div className="aside__list-wrapper">
        <p className="time-ago">{news.timestamp}</p>
        <div className="decoration"></div>
      </div>
      <h3 className="main__text">{news.title}</h3>
    </li>
  );
}

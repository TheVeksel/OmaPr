import { AsideMainNewsItem } from "./HeaderAside";

interface AsideMainNewsProps {
  news: AsideMainNewsItem;
  onClick: (id: number) => void;
}

export default function HeaderAsideElement({ news }: AsideMainNewsProps): JSX.Element {

  return (
    <li className="aside__list-element" >
      <div className="decoration"></div>
      <p className="time-ago">{news.timestamp}</p>
      <h3 className="main__text">{news.title}</h3>
    </li>
  );
}
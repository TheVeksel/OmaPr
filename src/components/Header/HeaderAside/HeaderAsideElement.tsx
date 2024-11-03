import { AsideMainNewsItem } from "./HeaderAside";
import { useDispatch } from "react-redux";
import { setOpenNewsId } from "../../../store/features/newsOpenSlice";

interface AsideMainNewsProps {
  news: AsideMainNewsItem;
  onClick: (id: number) => void;
}

export default function HeaderAsideElement({ news }: AsideMainNewsProps): JSX.Element {
  const dispatch = useDispatch();

  const handleOpenNews = () => {
    dispatch(setOpenNewsId(news.id));
  };

  return (
    <li className="aside__list-element" onClick={handleOpenNews}>
      <div className="decoration"></div>
      <p className="time-ago">{news.timestamp}</p>
      <h3 className="main__text">{news.title}</h3>
    </li>
  );
}
import { Link } from "react-router-dom";
import { HeaderMainNewsItem } from "../../services/thematicNewsService";

interface HeaderMainNewsProps {
  news: HeaderMainNewsItem[]; 
}

export default function HeaderMainNews({ news }: HeaderMainNewsProps): JSX.Element {
  return (
    <nav className="header__main-news">
      <ul>
        {news.map((item) => (
          <Link key={item.id} to={`/headerMainThemes/${item.id}`}>
            <li key={item.id}>
              {item.theme}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

import { HeaderMainNewsItem } from "./Header";

interface HeaderMainNewsProps {
  news: HeaderMainNewsItem[]; 
}

export default function HeaderMainNews({ news }: HeaderMainNewsProps): JSX.Element {
  return (
    <nav className="header__main-news">
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            {item.theme}
          </li>
        ))}
      </ul>
    </nav>
  );
}

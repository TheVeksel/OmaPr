import { HeaderMainNewsItem } from "./Header";

interface HeaderMainNewsProps {
  news: HeaderMainNewsItem[]; 
}

export default function MainNews({ news }: HeaderMainNewsProps): JSX.Element {
  return (
    <nav className="header__main-news">
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}

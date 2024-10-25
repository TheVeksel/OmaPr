interface NewsItem {
  id: number;
  title: string;
}

interface MainNewsProps {
  news: NewsItem[]; 
}

export default function MainNews({ news }: MainNewsProps): JSX.Element {
  return (
    <nav className="header__main-news">
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <a href="#">{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

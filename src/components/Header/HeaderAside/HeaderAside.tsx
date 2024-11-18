import { useEffect, useState, useRef } from "react";
import HeaderAsideElement from "./HeaderAsideElement";
import { Link} from "react-router-dom";
import { fetchAllNews } from "../../../services/newsService";

export interface AsideMainNewsItem {
  id: number;
  title: string;
  timestamp: string;
}

export default function HeaderAside(): JSX.Element {
  const [asideNews, setAsideNews] = useState<AsideMainNewsItem[]>([]);
  const asideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allNews = await fetchAllNews();
        setAsideNews(allNews);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);


  const smoothScroll = (distance: number) => {
    let scrolled = 0;
    const step = () => {
      if (asideRef.current && scrolled < Math.abs(distance)) {
        asideRef.current.scrollBy({ left: distance / 100 });
        scrolled += Math.abs(distance) / 100;
        requestAnimationFrame(step);
      }
    };
    step();
  };

  const scrollLeft = () => smoothScroll(-window.innerWidth);
  const scrollRight = () => smoothScroll(window.innerWidth);

  const handleWheel = (event: WheelEvent) => {
    if (asideRef.current) {
      event.preventDefault();
      const scrollAmount = event.deltaY * 3;
      requestAnimationFrame(() => {
        asideRef.current!.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    }
  };

  useEffect(() => {;
    asideRef.current?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      asideRef.current?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <aside className="header__aside">
      <div ref={asideRef} className="header__aside-swiper">
        {asideNews.map((newsItem, index) => (
          <Link key={newsItem.id} to={`/news/${newsItem.id}`}>
            <HeaderAsideElement
              news={newsItem}
              isFirst={index === 0}
            />
          </Link>
        ))}
      </div>
      <div className="button-box" style={{ position: "relative" }}>
        <button className="scroll-button left" onClick={scrollLeft}>
          ←
        </button>
        <button className="scroll-button right" onClick={scrollRight}>
          →
        </button>
      </div>
    </aside>
  );
}

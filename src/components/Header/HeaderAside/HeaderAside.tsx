import { useEffect, useState, useRef } from "react";
import axios from "axios";
import HeaderAsideElement from "./HeaderAsideElement";

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
        const response = await axios.get("https://yle-react-default-rtdb.europe-west1.firebasedatabase.app/news/News.json");
        const newsArray = Object.values(response.data) as AsideMainNewsItem[];
        setAsideNews(newsArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const smoothScroll = (distance: number) => {
    let scrolled = 0;
    const step = () => {
      if (asideRef.current && scrolled < Math.abs(distance)) {
        asideRef.current.scrollBy({ left: distance /30 });
        scrolled += Math.abs(distance) / 30;
        requestAnimationFrame(step);
      }
    };
    step();
  };
  
  const scrollLeft = () => smoothScroll(-300);
  const scrollRight = () => smoothScroll(300);
  

  const handleWheel = (event: WheelEvent) => {
    if (asideRef.current) {
      event.preventDefault();
      const scrollAmount = event.deltaY * 3;
      requestAnimationFrame(() => {
        asideRef.current!.scrollBy({ left: scrollAmount, behavior: "smooth" });

      });
    }
  };
  

  useEffect(() => {
    const aside = asideRef.current;
    aside?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      aside?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <button className="scroll-button left" onClick={scrollLeft}>
        ←
      </button>
      <button className="scroll-button right" onClick={scrollRight}>
        →
      </button>

      <aside ref={asideRef} className="aside__list">
        <HeaderAsideElement news={asideNews} />
      </aside>
    </div>
  );
}

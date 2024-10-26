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
    axios
      .get("http://localhost:5000/asideMainNews")
      .then((response) => {
        setAsideNews(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const scrollLeft = () => {
    asideRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    asideRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleWheel = (event: WheelEvent) => {
    if (asideRef.current) {
      event.preventDefault(); 
      const scrollAmount = event.deltaY * 4; 
      asideRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
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
      <button className="scroll-button left" onClick={scrollLeft}>←</button>
      <button className="scroll-button right" onClick={scrollRight}>→</button>

      <aside ref={asideRef} className="aside__list">
        <HeaderAsideElement news={asideNews} />
      </aside>
    </div>
  );
}

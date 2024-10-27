import RightNowSection from "./RightNowSection"
import { useState, useEffect } from "react";
import axios from "axios";

export interface RightNow {
  id: number;
  newsGivenBy: string;
  newsText: string;
  timeStamp: string;
  title: string;
}

export default function CentredContent():JSX.Element {
  const [mainNews, setRightNowNews] = useState<RightNow[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/centerRightNowNews");
        setRightNowNews(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  });
return (
  <div className="centred__content">
          <RightNowSection news={mainNews}/>
    </div>
)
}
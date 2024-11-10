import axios from "axios";

export interface NewsContent {
  id: number;
  title: string;
  subTitle: string;
  newsText: string;
  timestamp: string;
  imgURL: string;
  newsGivenBy: string;
  about: string;
  theme: string;
}

const DataBase =
  "https://yle-react-default-rtdb.europe-west1.firebasedatabase.app/news/allNews";

export const fetchAllNews = async (): Promise<NewsContent[]> => {
  try {
    const response = await axios.get(`${DataBase}.json`);
    const newsArray = Object.values(response.data || []) as NewsContent[];
    return newsArray;
  } catch (error) {
    console.error("Error fetching all news", error);
    throw error;
  }
};

export const fetchNewsById = async (
  id: number
): Promise<NewsContent | null> => {
  try {
    const response = await axios.get(`${DataBase}/${id}.json`);
    return response.data ? response.data : null;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

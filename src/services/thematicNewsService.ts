import axios from "axios";

export interface HeaderMainNewsItem {
  id: number;
  theme: string;
}

const DataBase =
  "https://yle-react-default-rtdb.europe-west1.firebasedatabase.app/news/headerMainThemes";

export const fetchHeaderMainNews = async (): Promise<ThematicHeaderMainNewsItem[] | null> => {
  try {
    const response = await axios.get(`${DataBase}.json`);
    return response.data ? Object.values(response.data) : null;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

export interface ThematicHeaderMainNewsItem {
  id: number;
  theme: string;
  headerPicture: string;
  text: string;
  year: string;
}

export const fetchThematicHeaderMainNewsNewsById = async (
  id: number
): Promise<ThematicHeaderMainNewsItem | null> => {
  try {
    const response = await axios.get(`${DataBase}/${id}.json`);
    return response.data ? response.data : null;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

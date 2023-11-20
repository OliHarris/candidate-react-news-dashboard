// getNewsData.tsx
import axios from "axios";

const getNewsData = async (setDataLoaded: (value: boolean) => void) => {
  try {
    const response = await axios.get(
      "https://api-news.prd.shows.itv.com/discovery/national/top-stories"
    );
    console.log(response);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    setDataLoaded(true);
  }
};
export default getNewsData;

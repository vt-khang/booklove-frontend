import { useQuery } from "react-query"
import { API_URL } from "./constants";

export const useFetchCarouselPromotions = () => {
  return useQuery('carousel-promotions', async () => {
    try {
      const response = await fetch(`${API_URL}/api/v1/carousel-promotion`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  })
}
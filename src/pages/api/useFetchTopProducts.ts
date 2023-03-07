import { useQuery } from "react-query"
import { API_URL } from "./constants";

export const useFetchTopProducts = () => {
  return useQuery('products', async () => {
    try {
      const response = await fetch(`${API_URL}/api/v1/products/rank/top`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  })
}
import { useQuery } from "react-query"
import { API_URL } from "./constants";

export const useFetchCategories = () => {
  return useQuery('categories', async () => {
    try {
      const response = await fetch(`${API_URL}/api/v1/categories`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  })
}
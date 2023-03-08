import { useQuery } from "react-query"
import { API_URL } from "./constants";

export const useFetchCategoryByKeyword = (keyword?: string | string[]) => {
  return useQuery('category', async () => {
    try {
      const response = await fetch(`${API_URL}/api/v1/categories/${keyword}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  })
}
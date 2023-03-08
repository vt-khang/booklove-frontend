import { useQuery } from "react-query"
import { API_URL } from "./constants";

export const useFetchProductByKeyword = (keyword?: string | string[]) => {
  return useQuery('product', async () => {
    try {
      const response = await fetch(`${API_URL}/api/v1/products/${keyword}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  })
}
import { useQuery } from "react-query"
import { API_URL } from "./constants";

export const useFetchLanguages = () => {
  return useQuery('languages', async () => {
    try {
      const response = await fetch(`${API_URL}/api/v1/languages`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  })
}
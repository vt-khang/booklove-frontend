import { useQuery } from "react-query";
import { API_URL } from "./constants";
import { QueryProps } from "@/types/query";

function convertToQueryString(s: string | string[]) {
  if (typeof s === 'string') {
    return s;
  } else {
    return s.join(';');
  }
}

export const useFetchProducts = ({
  page = 0,
  limit = 12,
  q = '',
  lang,
  genre,
  sort,
}: QueryProps) => {
  return useQuery('products', async () => {
    try {
      let response;
      if (lang) {
        if (genre) {
          response = await fetch(`${API_URL}/api/v1/products?page=${page}&limit=${limit}&q=${q}&sort=${sort}&lang=${convertToQueryString(lang)}&genre=${convertToQueryString(genre)}`);
        } else {
          response = await fetch(`${API_URL}/api/v1/products?page=${page}&limit=${limit}&q=${q}&sort=${sort}&lang=${convertToQueryString(lang)}`);
        }
      } else {
        if (genre) {
          response = await fetch(`${API_URL}/api/v1/products?page=${page}&limit=${limit}&q=${q}&sort=${sort}&genre=${convertToQueryString(genre)}`);
        } else {
          response = await fetch(`${API_URL}/api/v1/products?page=${page}&limit=${limit}&q=${q}&sort=${sort}`);
        }
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  })
}
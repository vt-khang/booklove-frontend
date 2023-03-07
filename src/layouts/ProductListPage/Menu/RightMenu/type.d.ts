export type ProductProps = {
  name: string;
  keyword: string;
  image: string;
  arthur: string;
  price: number;
  genres: string[];
  language: string;
  description: string;
}

export type ProductsProps = {
  total: number;
  page: number;
  limit: number;
  q: string;
  data: ProductProps[];
}
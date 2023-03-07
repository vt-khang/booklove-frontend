export type LanguageProps = {
  name: string;
  keyword: string;
}

export type GenreProps = {
  name: string;
  keyword: string;
}

export type TextInfoProps = {
  name: string;
  arthur: string;
  price: number;
  href?: string;
  language: LanguageProps;
  genres: GenreProps[];
}
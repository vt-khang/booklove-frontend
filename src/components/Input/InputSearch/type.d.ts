import { InputProps } from "../type";

export type InputSearchProps = {
  searchClass?: string;
} & Omit<InputProps, 'type'>;
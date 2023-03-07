import { InputProps } from "../type";

export type InputTextareaProps = {
  autoSize?: boolean | { cols?: number, rows?: number };
  maxLength?: number;
  showCount?: boolean;
} & Omit<InputProps, 'type'>;
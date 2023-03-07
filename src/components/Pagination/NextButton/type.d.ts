import { ButtonProps } from "@/components/Button/type";

export type NextButtonProps = {
  page: {
    current: number;
    total: number;
    onChangePage: ((prevPage: number) => void);
  }
} & ButtonProps;
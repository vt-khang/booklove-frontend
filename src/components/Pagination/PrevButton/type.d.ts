import { ButtonProps } from "@/components/Button/type";

export type PrevButtonProps = {
  page: {
    current: number;
    total: number;
    onChangePage: ((prevPage: number) => void);
  }
} & ButtonProps;
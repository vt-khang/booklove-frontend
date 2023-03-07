import { ButtonProps } from "@/components/Button/type";

export type PrevButtonProps = {
  slide: {
    current: number;
    total: number;
    onChangeSlide: ((prevSlide: number) => void);
  };
} & ButtonProps;
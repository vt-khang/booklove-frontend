import { ButtonProps } from "@/components/Button/type";

export type NextButtonProps = {
  slide: {
    current: number;
    total: number;
    onChangeSlide: ((prevSlide: number) => void);
  };
} & ButtonProps;
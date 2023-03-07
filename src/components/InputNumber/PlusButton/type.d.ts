import { ButtonProps } from "@/components/Button/type";

export type PlusButtonProps = {
  number: number;
  onChangeNumber: ((prevNum: number) => void)
} & ButtonProps;
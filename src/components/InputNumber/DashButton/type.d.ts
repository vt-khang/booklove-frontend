import { ButtonProps } from "@/components/Button/type";

export type DashButtonProps = {
  number: number;
  onChangeNumber: ((prevNum: number) => void)
} & ButtonProps;
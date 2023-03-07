import { CheckboxProps } from "../Checkbox/type";

export type CheckAllStates = 'all' | 'partial' | 'none';

export type CheckedProps = {
  name: string;
  isChecked: boolean;
};

export type CheckboxGroupProps = {
  label?: string;
} & CheckboxProps;
export type CheckboxProps = {
  name: string;
  isChecked?: boolean;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
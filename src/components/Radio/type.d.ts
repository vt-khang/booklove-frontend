export type RadioProps = {
  name: string;
  isChecked?: boolean;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
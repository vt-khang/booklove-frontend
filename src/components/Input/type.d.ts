export type InputTypes = 'input' | 'number' | 'search' | 'password' | 'textarea';

export type InputProps = {
  type?: InputTypes;
  name: string;
  label?: string;
  labelClass?: string;
  allowClear?: boolean;
  errorClass?: string;
  innerRef?: React.RefObject<HTMLInputElement>;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>
  & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement, 'type'>>;
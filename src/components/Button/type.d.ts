export type ButtonTypes = 'solid' | 'outline' | 'text' | 'link';
export type ButtonShapes = 'border' | 'round' | 'circle';
export type ButtonHTMLTypes = 'button' | 'submit' | 'reset';

export type ButtonProps = {
  type?: ButtonTypes;
  htmlType?: ButtonHTMLTypes;
  shape?: ButtonShapes;
  disabled?: boolean;
  loading?: boolean | { delay?: number };
  href?: string;
  target?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>
  & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>, 'type' | 'onClick'>;
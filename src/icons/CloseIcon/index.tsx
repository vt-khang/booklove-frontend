import { CloseIconProps } from './type';

function CloseIcon({ size = 16, color, className }: CloseIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      width={size}
      height={size}
      strokeWidth={3}
      stroke={color}
      className={className}
    >
      <path d="m6 6 20 20"></path>
      <path d="m26 6-20 20"></path>
    </svg>
  );
}

export default CloseIcon;

import { ArrowIconProps } from './type';

function ArrowIcon({ size = 16, color, className }: ArrowIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      fill="none"
      width={size}
      height={size}
      stroke={color}
      strokeWidth="4"
      className={className}
    >
      <g fill="none">
        <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path>
      </g>
    </svg>
  );
}

export default ArrowIcon;

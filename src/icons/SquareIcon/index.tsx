import { SquareIconProps } from './type';

function SquareIcon({ size = 16, color, className }: SquareIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      fill={color}
      xmlSpace="preserve"
      className={className}
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.002,0h96.878c7.15,0,13.002,5.851,13.002,13.002v96.877 c0,7.151-5.852,13.002-13.002,13.002H13.002C5.851,122.882,0,117.031,0,109.88V13.002C0,5.851,5.851,0,13.002,0L13.002,0z"
        />
      </g>
    </svg>
  );
}

export default SquareIcon;

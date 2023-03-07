import { CircleIconProps } from './type';

function CircleIcon({ size = 16, color, className }: CircleIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      version="1.1"
      viewBox="0 0 451.827 451.827"
      xmlSpace="preserve"
      className={className}
    >
      <g>
        <g>
          <path fill={color} d="M225.922,0C101.351,0,0.004,101.347,0.004,225.917s101.347,225.909,225.917,225.909    c124.554,0,225.901-101.347,225.901-225.909C451.823,101.347,350.476,0,225.922,0z" />
        </g>
      </g>
    </svg>
  );
}

export default CircleIcon;

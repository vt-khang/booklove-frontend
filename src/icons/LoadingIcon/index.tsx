import { LoadingIconProps } from './type';

function LoadingIcon({ size = 16, color, className }: LoadingIconProps) {
  return (
    <svg
      version="1.1"
      id="L4"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={4 * size}
      height={size}
      viewBox="0 0 80 20"
      enableBackground="new 0 0 0 0"
      xmlSpace="preserve"
      className={className}
    >
      <circle
        fill={color}
        stroke="none"
        cx="10"
        cy="10"
        r="10"
      >
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        ></animate>
      </circle>
      <circle
        fill={color}
        stroke="none"
        cx="40"
        cy="10"
        r="10"
      >
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        ></animate>
      </circle>
      <circle
        fill={color}
        stroke="none"
        cx="70"
        cy="10"
        r="10"
      >
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"
        ></animate>
      </circle>
    </svg>
  );
}

export default LoadingIcon;

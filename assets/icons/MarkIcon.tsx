interface markIconProps {
  color?: string;
  className?: string;
  width?: number;
  height?: number;
}

export const MarkIcon = ({
  color,
  className,
  width,
  height,
}: markIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
      <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
    </svg>
  );
};
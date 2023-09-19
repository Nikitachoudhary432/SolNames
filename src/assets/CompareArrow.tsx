export const CompareArrow = ({
  color = 'currentColor',
}: {
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="30"
    viewBox="0 0 24 36"
    fill="none"
  >
    <mask
      id="mask0_488_43735"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="12"
      width="24"
      height="24"
    >
      <rect y="12" width="24" height="24" fill={color} />
    </mask>
    <g mask="url(#mask0_488_43735)">
      <path
        d="M14 30L12.6 28.55L16.15 25H4V23H16.15L12.6 19.45L14 18L20 24L14 30Z"
        fill="white"
      />
    </g>
    <mask
      id="mask1_488_43735"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect
        width="24"
        height="24"
        transform="matrix(-1 0 0 1 24 0)"
        fill={color}
      />
    </mask>
    <g mask="url(#mask1_488_43735)">
      <path
        d="M10 18L11.4 16.55L7.85 13H20V11H7.85L11.4 7.45L10 6L4 12L10 18Z"
        fill="white"
      />
    </g>
  </svg>
);

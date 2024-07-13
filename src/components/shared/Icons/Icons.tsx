const ArrowIconRight = ({
  width = 40,
  height = 40,
  fillCircle = "#FAFAFA",
  fillPath = "#1C1C1C",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 1">
      <circle id="Ellipse 4" cx="20" cy="20" r="20" fill={fillCircle} />
      <path
        id="Vector"
        d="M22.6136 19.9433L17.1591 14.4887C16.657 13.9866 16.657 13.1726 17.1591 12.6706C17.6612 12.1685 18.4752 12.1685 18.9772 12.6706L26.25 19.9433L18.9773 27.2159C18.4752 27.718 17.6612 27.718 17.1591 27.2159C16.657 26.7138 16.657 25.8998 17.1591 25.3977L22.6136 19.9433Z"
        fill={fillPath}
      />
    </g>
  </svg>
);

const ArrowIconLeft = ({
  width = 40,
  height = 40,
  fillCircle = "#FAFAFA",
  fillPath = "#1C1C1C",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="20"
      cy="20"
      r="20"
      transform="rotate(-180 20 20)"
      fill="#FAFAFA"
    />
    <path
      d="M17.3864 20.0567L22.8409 25.5113C23.343 26.0134 23.343 26.8274 22.8409 27.3294C22.3388 27.8315 21.5248 27.8315 21.0228 27.3294L13.75 20.0567L21.0227 12.7841C21.5248 12.282 22.3388 12.282 22.8409 12.7841C23.343 13.2862 23.343 14.1002 22.8409 14.6023L17.3864 20.0567Z"
      fill="#1C1C1C"
    />
  </svg>
);
const ButtonRightArrow = ({
  width = 40,
  height = 40,
  fillCircle = "#FAFAFA",
  fillPath = "#1C1C1C",
}) => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // className="hidden group-hover:block  top-0 left-0 transition-all duration-1000"
  >
    <path
      d="M15.6716 7.00005L11.0147 2.34314C10.6242 1.95262 10.6242 1.31946
       11.0147 0.928941C11.4052 0.538417 12.0384 0.538416 12.4289 0.92894L19.5 8.00005L12.4289 15.0711C12.0384 15.4616 11.4052 15.4616 11.0147 15.0711C10.6242 14.6805 10.6242 14.0474 11.0147 13.6569L15.6716 9.00005H1.5C0.947715 9.00005 0.5 8.55234 0.5 8.00005C0.5 7.44777 0.947715 7.00005 1.5 7.00005H15.6716Z"
      fill="url(#paint0_linear_17_451)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_17_451"
        x1="10"
        y1="-9.82076"
        x2="10"
        y2="15.3639"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD700" />
        <stop offset="1" stopColor="#AC7C00" />
      </linearGradient>
    </defs>
  </svg>
);

const PriceIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-7 text-[gray] smooth-transition !duration-300 hover:text-white z-20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};
const ResetIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  );
};
const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-7 text-[gray] cursor-pointer !duration-300 hover:text-green-500 z-20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
};

const SortIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-7 text-[gray] cursor-pointer !duration-300 hover:text-green-500 z-20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
      />
    </svg>
  );
};
const LoveIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
  );
};

const ShopingCartIcon = () =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-bag-plus"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
      />
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
    </svg>
  );
}

export {
  ArrowIconRight,
  ArrowIconLeft,
  ButtonRightArrow,
  PriceIcon,
  ResetIcon,
  SearchIcon,
  SortIcon,
  LoveIcon,
  ShopingCartIcon
};

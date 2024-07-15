import { Link } from "react-router-dom";
import NavProfile from "./NavProfile";

const NavAction = () => {
  return (
    <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
      <NavProfile />
      <Link
        to="/cart"
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-lg text-emerald-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#FFDA16"
          strokeWidth="1.5"
          aria-labelledby="title description"
          role="graphics-symbol"
        >
          <title id="title">Cart Icon</title>
          <desc id="description">Cart icon with items</desc>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <span className="absolute -right-1.5 -top-1.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 px-1.5 text-sm text-white">
          2<span className="sr-only"> new emails </span>
        </span>
      </Link>
    </div>
  );
};
export default NavAction
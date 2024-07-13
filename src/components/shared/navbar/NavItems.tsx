import React from "react";
import { NavLink } from "react-router-dom";
import { homePaths } from "../../../routes/home.routes";

interface NavItemsProps {
  isToggleOpen: boolean;
}

const NavItems: React.FC<NavItemsProps> = ({ isToggleOpen }) => {
  return (
    <ul
      role="menubar"
      aria-label="Select page"
      className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
        isToggleOpen
          ? "visible opacity-100 backdrop-blur-sm"
          : "invisible opacity-0"
      }`}
    >
      {homePaths.map((route, index) => (
        <li key={index} role="none" className="flex items-stretch">
          <NavLink
            to={route.path}
            className={({ isActive }) =>
              `flex items-center gap-2 py-4 transition-colors duration-300 ${
                isActive ? "text-brandSecondary" : "hover:text-brandSecondary"
              } focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8`
            }
          >
            <span>{route.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;

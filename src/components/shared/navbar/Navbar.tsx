import NavLogo from "./NavLogo";
import NavItems from "./NavItems";
import Container from "../Container";
import NavAction from "./NavAction";

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-brandPrimary dark:bg-gray-900 sticky w-full z-20 top-0 left-0  shadow-md">
      <Container>
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLogo />
          <div className="flex md:order-2">
            <NavAction />
            <button
              id="navbar-toggle"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
              onClick={handleToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <NavItems isToggleOpen={isMenuOpen} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;



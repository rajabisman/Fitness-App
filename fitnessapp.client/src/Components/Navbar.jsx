import { useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar({ webname }) {
  const [isOpen, setOpen] = useState(false);
  const linkClasses =
    "text-white bg-transparent font-bold text-sm px-4 py-2 border border-white hover:bg-white hover:text-gray-900 rounded transition duration-300";

  const buttons = (
    <>
      <NavLink to="/" className={linkClasses}>
        About Us
      </NavLink>
      <NavLink to="/register" className={linkClasses}>
        Signup
      </NavLink>
      <NavLink to="/login" className={linkClasses}>
        Login
      </NavLink>
    </>
  );
  return (
    <nav className="bg-gray-800 fixed top-0 left-0 w-full h-16 z-30 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-row w-full justify-between">
            <div className="text-xl font-bold">
              <NavLink to="/">{webname}</NavLink>
            </div>
            <div className="hidden md:block">
              <div className="flex ml-10 items-baseline space-x-2">
                {buttons}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!isOpen)}
              type="button"
              className="fill-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2">
          {buttons}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

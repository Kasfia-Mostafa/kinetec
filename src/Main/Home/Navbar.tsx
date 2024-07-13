import { useState, useRef, useEffect } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";

export const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeDropDown = (e: MouseEvent) => {
      if (
        dropDownMenuRef.current &&
        !dropDownMenuRef.current.contains(e.target as Node)
      ) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "py-3 ps-px sm:px-3 font-medium text-yellow-600"
                : "py-3 ps-px sm:px-3 font-medium text-gray-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "py-3 ps-px sm:px-3 font-medium text-yellow-600"
                : "py-3 ps-px sm:px-3 font-medium text-gray-500"
          }
        >
          Equipment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "py-3 ps-px sm:px-3 font-medium text-yellow-600"
                : "py-3 ps-px sm:px-3 font-medium text-gray-500"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart" // Ensure this path correctly points to your cart page
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "py-3 ps-px sm:px-3 font-medium text-yellow-600"
                : "py-3 ps-px sm:px-3 font-medium text-gray-500"
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="flex items-center justify-between px-4 py-2 text-gray-500 mb-24">
      <div>
        <NavLink to="/">
          <p className="flex gap-2 bg-gradient-to-tr from-yellow-600 to-amber-300 mt-2 py-2 px-3 rounded font-kinetec text-slate-100 w-48">
            <img src="/src/assets/dumbell.ico" className="size-5" alt="Logo" />
            Kinetec
          </p>
        </NavLink>
      </div>
      <ul className="hidden items-center justify-between gap-10 md:flex">
        {navLink}
      </ul>
      <div
        ref={dropDownMenuRef}
        onClick={() => setDropDownState(!dropDownState)}
        className="relative flex transition-transform md:hidden"
      >
        <RiMenu3Line className="cursor-pointer text-xl font-semibold" />
        {dropDownState && (
          <ul className="z-10 p-5 rounded-3xl gap-2 bg-yellow-100 absolute right-0 top-11 flex w-[200px] flex-col text-base">
            {navLink}
          </ul>
        )}
      </div>
    </nav>
  );
};

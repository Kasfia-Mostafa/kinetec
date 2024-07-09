import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
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
              ? "py-3 ps-px sm:px-3 font-medium text-emerald-600"
              : "py-3 ps-px sm:px-3 font-medium text-gray-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/equipment"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "py-3 ps-px sm:px-3 font-medium text-emerald-600"
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
              ? "py-3 ps-px sm:px-3 font-medium text-emerald-600"
              : "py-3 ps-px sm:px-3 font-medium text-gray-500"
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="flex items-center justify-between px-4 py-2 text-gray-500 mb-24">
      <div>
        <p className="bg-gradient-to-tr from-emerald-900 to-emerald-200 py-2 px-3 rounded-full font-kinetec text-slate-100 w-40">
          Kinetec
        </p>
      </div>
      <ul className="hidden items-center justify-between gap-10 md:flex">
        {navLink}
      </ul>
      <div
        ref={dropDownMenuRef}
        onClick={() => setDropDownState(!dropDownState)}
        className="relative flex transition-transform md:hidden"
      >
        <RiMenu3Line className="cursor-pointer text-xl font-semibold"></RiMenu3Line>
        {dropDownState && (
          <ul className=" z-10 p-5 rounded-3xl gap-2  bg-green-50  absolute right-0 top-11 flex w-[200px] flex-col  text-base ">
            {navLink}
          </ul>
        )}
      </div>
    </nav>
  );
};

import React from "react";
import { useState } from "react";
import { Images } from "../assets/Images";
import '../assets/css/styles.css'
import { Link } from "react-router-dom";
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
export default function Header() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <>
      <nav className="nav flex flex-wrap items-center justify-between px-4 mt-2 mx-auto max-container-width">
        <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest ">

          <span className="font-semibold text-xl tracking-tight">E-Commerce Store
          </span>
        </div>

        <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
          <span className="navicon bg-grey-darkest flex items-center relative"></span>
        </label>

        <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
          <li className="border-t md:border-none">
            <Link to="/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Home</Link>
          </li>

          <li className="border-t md:border-none ">
            <Link to="/admin" className="block  md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker ">Admin</Link>
          </li>
          <li className="border-t md:border-none ">
            <Link to="/cart" className="block relative md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker cart-toggle ">carts <span className="pos-absulate">2</span></Link>
          </li>
          <li className="border-t md:border-none">
            <Link to="/login" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Login</Link>
          </li>
          <li className="border-t md:border-none">
            <Link to="/signup" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">SignUp</Link>
          </li>
          <li>
            <form>
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50" placeholder="Search..." required />
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
            </form>

          </li>
        </ul>
      </nav>
    </>
  );
}

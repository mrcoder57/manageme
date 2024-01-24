// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.svg";
import menu from "../assets/menu.svg";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex lg:p-4 p-2 overflow-x-hidden">
      <div className="flex flex-row justify-between items-center shrink-0 overflow-x-hidden">
      <div className="lg:hidden mt-2 ">
            <button
              onClick={toggleMobileMenu}
              className=" flex h-11 w-12 md:block"
            >
              <img src={menu} alt="menu" className="h-5 w-5 flex" />
            </button>
            {isMobileMenuOpen && (
              <ul className="absolute border shadow-md rounded-lg p-4 w-40 bg-white gap-2">
                <li>
                  <Link to="/" className="border-b ">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/working" className="border-b ">
                    Working
                  </Link>
                </li>
                <li>
                  <Link to="/finished" className="border-b ">
                    Finished
                  </Link>
                </li>
              </ul>
            )}
          </div>
        <div className="flex lg:mx-6 lg:ml-0 mt-[-10px]">
          <Link to='/'>
          <h2 className="lg:text-3xl text-xl font-semibold text-bold">
            Manageme
          </h2>
          </Link>
        </div>
        <div className="flex flex-row items-center ml-[380px]">
          <ul className="hidden lg:flex ml-90 gap-6">
            <li>
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link to="/working" className="">
                Working
              </Link>
            </li>
            <li>
              <Link to="/finished" className="">
                Finished
              </Link>
            </li>
          </ul>
          <div className="h-14 w-14 lg:ml-[400px] ml-[100px] rounded-full shadow-md border-2 flex lg:flex md:flex">
            <img src={avatar} alt="" />
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./NavbarCss/Navbar.css";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar navbarArea ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <div className="form-control search-input  ">
              <input
                type="text"
                placeholder="Search"
                className="input  input-bordered w-24 md:w-auto"
              />
              <span className="search-bar">
                <BsSearch></BsSearch>
              </span>
            </div>
          </ul>
        </div>
        <div className=" mr-2 rounded-3xl w-[26px] h-[26px] bg-white ">
          <div className="flex  justify-center font-bold items-center">
            <span className="text-blue-500">S</span>
            <span className="ml-[-4px] text-blue-300">S</span>
          </div>
        </div>
        <h1 className="text-black font-bold">
          <span className="text-blue-400">S</span>nip
          <span className="text-blue-300">S</span>hop
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <div className="form-control search-input ">
            <input
              type="text"
              placeholder="Search"
              className="input   input-bordered lg:w-96 w-24 md:w-auto"
            />
            <span className="search-bar">
              <BsSearch></BsSearch>
            </span>
          </div>
        </ul>
      </div>
      <div className="ml-10 text-white">
        <Link to="/" className="mr-5 flex items-center">
          <FaUser className="mr-2"></FaUser>Account
        </Link>
        <Link to="/" className="mr-5 flex items-center">
          <FaHeart className="mr-2"></FaHeart>My items
        </Link>
        <Link to="/orders/24">
          <BiShoppingBag className="font-bold text-lg"></BiShoppingBag>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

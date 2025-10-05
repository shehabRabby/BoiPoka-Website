import React from "react";
import { Link } from "react-router";

const Navbar = () => {

    const links = <>
       <Link to='/' className="m-2">Home</Link>
       <Link to='/about' className="m-2">About</Link>
       <Link to='/readList' className="m-2">Read List</Link>
    </>

  return (
    <div className="navbar bg-[#000000] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">BoiPooka</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {links}
        </ul>
      </div>
      <div className="navbar-end flex">
        <a className="btn bg-gradient-to-r from-green-300 to-[#46eb46] hover:from-green-600 hover:to-[#a1cc04] transition">Sign In</a>
         <a className="ml-3 btn bg-gradient-to-r from-sky-300 to-[#35d8a7] hover:from-sky-600 hover:to-[#3bb4ec] transition">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;

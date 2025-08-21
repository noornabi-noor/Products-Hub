import React from "react";
import ProductsHubLogo from "./ProductsHubLogo";
import Link from "next/link";

const NavBar = () => {
      const navItems = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      {/* {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )} */}
      <li>
        <Link href={"/about"} >About Us</Link>
      </li>
      <li>
        <Link href={"/contact"} >Contact</Link>
      </li>
      <li>
        <Link href={"/add-product"} >AddProduct</Link>
      </li>
      <li>
        <a
          href="https://github.com/noornabi-noor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 border border-indigo-500 px-3 py-1 rounded hover:bg-indigo-50 dark:hover:bg-indigo-900 transition"
        >
          Join as Developer
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" href={"/"}><ProductsHubLogo/></Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;

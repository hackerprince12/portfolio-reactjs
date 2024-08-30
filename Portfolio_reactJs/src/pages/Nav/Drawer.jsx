import React from "react";

import { Link } from "react-scroll";
const Drawer = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <a className=" text-3xl font-bold cursor-pointer">PRINCE</a>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li className="hover:shadow-sm">
              <Link
                activeClass="active"
                // to="test1"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="font-semibold"
                to="hero"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={-170}
                duration={500}
                className="font-semibold"
                to="projects"
              >
                PROJECTS
              </Link>
            </li>
            <li>
              {/* <a>CONTACT</a> */}
              <Link
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className="font-semibold"
                to="contact"
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="font-semibold"
                to="about"
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;

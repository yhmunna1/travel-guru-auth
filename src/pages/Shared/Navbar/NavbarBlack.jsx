import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavbarBlack = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .than((result) => {
        console.log("Sign out Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <Link>News</Link>
      </li>
      <li>
        <Link to="/destination">Destination</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="pt-6">
      <div className="navbar">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <img className="w-36" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 font-medium">
              {navLinks}
            </ul>
          </div>
          {user ? (
            <button onClick={handleSignOut} className="btn btn-warning">
              Sign Out
            </button>
          ) : (
            <Link className="btn btn-warning" to="/login">
              {" "}
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarBlack;

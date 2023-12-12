import React from "react";
import "./NavBar.css";
import logo from "../imgs/logo.PNG";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar bg-light shadow ">
        <div className="container-fluid">
          {/* eslint-disable-next-line */}
          <NavLink to="/" className="navbar-brand ms-5 ">
            <img alt="logo" src={logo} height="45px" />
          </NavLink>
          <form className="d-flex me-md-5 " role="search">
            <input
              className="searchBox form-control me-2 text-muted "
              type="search"
              placeholder="Search"
            />
            <NavLink
              to="/"
              className="searchIcon nav-link fs-5 text-dark mt-1 mx-2 "
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </NavLink>
            <NavLink to="/" className="nav-link fs-5 text-dark mt-1 mx-2 ">
              <i className="fa-solid fa-house"></i>
            </NavLink>
            <NavLink to="/" className="nav-link fs-5 text-dark mt-1 mx-2 ">
              <i className="fa-regular fa-heart"></i>
            </NavLink>
            <NavLink
              to="/myprofile"
              className="nav-link fs-5 text-dark mt-1 mx-2"
            >
              <i className="fa-solid fa-circle"></i>
            </NavLink>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

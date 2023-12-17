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
            {/* <NavLink
              to="/myprofile"
              className="nav-link fs-5 text-dark mt-1 mx-2"
            >
              <i className="fa-solid fa-circle"></i>
            </NavLink> */}

            <div className="dropdown-center ">
            <a
                      className="fs-5 mx-2"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      <img className='navbar-profile-pic' alt='Profile Pic' src='https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D' />
                    </a>

            {/* <button type="button" class="rounded-circle fs-5 text-dark mt-1 mx-2" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa-solid fa-circle">
                      <img className='navbar-profile-pic' alt='Profile Pic' src='https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D' />
                    </i> 
            </button> */}

                    <ul className="dropdown-menu">
                      <li>
                      <NavLink
                        to="/myprofile"
                        className="dropdown-item mt-0"
                      >
                        My Profile
                      </NavLink>
                        {/* <a className="dropdown-item" href="#">
                          My Profile
                        </a> */}
                      </li>
                      <li>
                      <NavLink
                        to="/logout"
                        className="dropdown-item mt-0"
                      >
                        Logout
                      </NavLink>
                        {/* <a className="dropdown-item" href="#">
                        </a> */}
                      </li>
                    </ul>
                  </div>

          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

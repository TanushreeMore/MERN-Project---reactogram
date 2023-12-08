import React from "react";
import './NavBar.css';
import logo from '../imgs/logo.PNG';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar bg-light shadow ">
        <div className="container-fluid">
         {/* eslint-disable-next-line */}
          <a className="navbar-brand ms-5 ">
            <img alt="logo" src={logo} height="45px" />
          </a>
          <form className="d-flex me-5 " role="search">
            <input
              className="searchBox form-control me-2 text-muted "
              type="search"
              placeholder="Search"
            />
            <a className="nav-link fs-5 text-dark mx-3 " href="/"><i class="fa-solid fa-house"></i></a>
            <a className="nav-link fs-5 text-dark mx-2 " href="/"><i class="fa-regular fa-heart"></i></a>
            <a className="nav-link fs-5 text-dark mx-2 " href="/"><i class="fa-solid fa-circle"></i></a>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

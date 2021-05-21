import React from "react";
import {logo,logo1} from "../assets/images";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md  fixed-top maine-menu">
      <div className="container">
        <a className="navbar-brand" href="#"><img className="logo" src={logo} /></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto navbar-style">
            <li className="nav-item active"><a className="nav-link" href="#"> Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about" tabindex="-1" aria-disabled="true">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#recentWorks" tabindex="-1" aria-disabled="true">Activity</a></li>
            <li className="nav-item"><a className="nav-link" href="#portfolio" tabindex="-1" aria-disabled="true">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact" tabindex="-1" aria-disabled="true">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

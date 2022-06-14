import React from 'react';
import { NavLink } from "react-router-dom"
import './NavBar.css';


function NavBar() {
  return (
    <div className="navBar-div">
      <NavLink className="navbar-link" to="/home">HOME</NavLink>
      <NavLink className="navbar-link" to="/about">ABOUT</NavLink>
      <NavLink className="navbar-link" to="/resume">RESUME</NavLink>
      <NavLink className="navbar-link" to="/projects">PROJECTS</NavLink>
      <NavLink className="navbar-link" to="/contact">CONTACT</NavLink>
    </div>
  );
}

export default NavBar;
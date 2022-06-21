import React from 'react';
import { NavLink } from "react-router-dom"
import './NavBar.css';


function NavBar() {
  return (
    <div className="navBar-div">
      <ul className = "navBar-ul"> 
        <li>  <NavLink className="navbar-link" exact to="/">HOME</NavLink> </li>
        <li> <NavLink className="navbar-link" to="/about">ABOUT</NavLink> </li>
        <li> <NavLink className="navbar-link" to="/resume">RESUME</NavLink> </li>
        <li> <NavLink className="navbar-link" to="/projects">PROJECTS</NavLink> </li>
        <li> <NavLink className="navbar-link" to="/contact">CONTACT</NavLink> </li>
      </ul>
    </div>
  );
}

export default NavBar;
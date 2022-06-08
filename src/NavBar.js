import React from 'react';
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div >
      <NavLink to="/home">HOME</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/resume">RESUME</NavLink>
      <NavLink to="/projects">PROJECTS</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
    </div>
  );
}

export default NavBar;
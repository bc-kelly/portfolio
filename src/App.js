import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
// import NavBar from "./NavBar"
import Home from "./Home"
import Projects from "./Projects"
import Contact from "./Contact"

function App() {

  return (
    <div className="App">
      <h1> hello from app </h1> 
      <h2> welcome to my portfolio </h2>
      <Home />
      <Projects />
      <Contact />
      {/* <NavBar /> */}
        {/* <Routes>
          <Route path ="/home" element= { <Home /> } /> 
        </Routes> */}
    </div>
  );
}

export default App;

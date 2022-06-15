import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"
import Resume from "./Resume"
import Projects from "./Projects"
import Contact from "./Contact"

function App() {

  return (
    <div className="container">
      <Router> 
        <div className="App">
          <div className="bridget-header"> 
            <p> Bridget Kelly: Portfolio </p>
          </div> 
          <div className="title-header"> Software Engineer </div>
          <NavBar />
            <div className="content"> 
              <Switch>
                <Route path ="/home" > <Home /> </Route>
                <Route path ="/about" > <About /> </Route>
                <Route path ="/resume" > <Resume /> </Route>
                <Route path ="/contact" > <Contact /> </Route>
                <Route path ="/projects" > <Projects /> </Route>
              </Switch>
            </div>
  
            <div className="footer"> thanks for visiting! </div>
        </div>
      </Router>
      {/* <div className="footer"> thanks for visiting! </div> */}
    </div> 
  );
}

export default App;

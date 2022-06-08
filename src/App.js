import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import Projects from "./Projects"
import Contact from "./Contact"

function App() {

  return (
    <Router> 
      <div className="App">
        <h1> hello from app </h1> 
        <h2> welcome to my portfolio </h2>
        {/* <Home />
        <Projects />
        <Contact /> */}
        <NavBar />
          <div className="content"> 
            <Switch>
              <Route path ="/home" > 
                <Home />
              </Route>
              <Route path ="/contact" > 
                <Contact />
              </Route>
              <Route path ="/projects" > 
                <Projects />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;

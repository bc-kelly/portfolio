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
    <Router> 
      <div className="App">
        <h1 className="bridget-header"> Bridget Kelly: Portfolio </h1> 
        <h2 className="title-header"> Software Engineer </h2>
        {/* <Home />
        <Projects />
        <Contact /> */}
        <NavBar />
          <div className="content"> 
            <Switch>
              <Route path ="/home" > 
                <Home />
              </Route>
              <Route path ="/about" > 
                <About />
              </Route>
              <Route path ="/resume" > 
                <Resume />
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

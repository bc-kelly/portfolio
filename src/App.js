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
          <div className="top-part"> 
            <div className="bridget-header"> 
              <h1> Bridget Kelly: Portfolio </h1>
            </div> 
            <h2 className="title-header"> 
              Software Engineer 
            </h2>
          </div> 
          <div className="bottom-part"> 
            <div className="nav"> 
              <NavBar />
            </div> 
            <div className="content"> 
                <Switch>
                  <Route exact path ="/" > <Home /> </Route>
                  <Route path ="/about" > <About /> </Route>
                  <Route path ="/resume" > <Resume /> </Route>
                  <Route path ="/contact" > <Contact /> </Route>
                  <Route path ="/projects" > <Projects /> </Route>
                </Switch>
            </div>
          </div> 
            {/* <div className="footer"> thanks for visiting! </div> */}
        </div>
      </Router>
      {/* <div className="footer"> thanks for visiting! </div> */}
    </div> 
  );
}

export default App;

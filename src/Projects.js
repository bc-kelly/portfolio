import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className = "projects-div">
      <div className="indiv-proj"> 
        <h1 className = "project-title">Vacation Pro </h1>
        <div className="details"> 
          <h4> Vacation Pro is a group travel planning website to help users plan trips with their family and friends, designed to keep everyone in the loop. Users have the ability to create an account, add multiple profiles to their account, browse hotels, plan and save trips, and invite friends to join their account.
          </h4>
          link to project
          demo
        </div>
      </div>
      <div className="indiv-proj"> 
        <h1 className = "project-title"> Star Wars: Battle of the Known Universe </h1>
        <div className="details"> 
          <h4> This project</h4>
          link to project
          demo
        </div>
      </div>
      <div className="indiv-proj"> 
        <h1 className = "project-title"> Retro BnB</h1>
        <div className="details"> 
          description
          link to project
          demo
        </div>
      </div>
    </div>
  );
}

export default Projects;
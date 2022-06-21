import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className = "projects-div">
      <div className="indiv-proj"> 
        <div className = "project-title">Vacation Pro </div>
        <div className="details"> 
          description
          link to project
          demo
        </div>
      </div>
      <div className="indiv-proj"> 
        <div className = "project-title"> Star Wars: Battle of the Known Universe</div>
        <div className="details"> 
          description
          link to project
          demo
        </div>
      </div>
      <div className="indiv-proj"> 
        <div className = "project-title"> Retro BnB</div>
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
import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className = "projects-div">
      <div className="indiv-proj"> 
        <h2 className = "project-title">Vacation Pro </h2>
        <div className="details"> 
          <h4 className="description"> Vacation Pro is a group travel planning website to help users plan trips with their family and friends, designed to keep everyone in the loop. Users have the ability to create an account, add multiple profiles to their account, browse hotels, plan and save trips, and invite friends to join their account.
          </h4>
          <h5 className="description-two"> Used JSON Web Tokens and localStorage to store encrypted account and profile information client-side, as well as sessions to store saved trips to individual profiles.
          Implemented an “Invite a friend” button and used EmailJS to send out an invitation containing a link to the site.
          Hotel data stored using postgres database, mnaually seeded.  
          </h5>
          <a className="website-link" href="https://vacation-pro.herokuapp.com/"> Website Link </a>
          <a className="website-link" href="https://www.loom.com/share/732285ba255a44a28f6215824b67173c"> Demo Video </a>
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
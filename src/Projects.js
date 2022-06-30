import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className = "projects-div">
      <div className="indiv-proj"> 
        <h3 className = "project-title">Vacation Pro </h3>
        <div className="details"> 
          <h4 className="description"> Vacation Pro is a group travel planning website to help users plan trips with their family and friends, designed to keep everyone in the loop. Users have the ability to create an account, add multiple profiles to their account, browse hotels, plan and save trips, and invite friends to join their account.
          </h4>
          <h5 className="description-two"> Built using JavaScript, React.js, Ruby, and Ruby on Rails. Deployed on Heroku. Used JSON Web Tokens and localStorage to store encrypted account and profile information client-side, as well as sessions to store saved trips to individual profiles.
          Implemented an “Invite a friend” button and used EmailJS to send out an invitation containing a link to the site.
          Hotel data stored using postgres database, mnaually seeded. 
          Deployed using Heroku. 
          </h5>
          <a className="website-link" href="https://vacation-pro.herokuapp.com/"> Website Link </a>
          <a className="website-link" href="https://www.loom.com/share/732285ba255a44a28f6215824b67173c"> Demo Video </a>
          <a className="website-link" href="https://github.com/bc-kelly/my-vacay-pro"> GitHub Repository </a>
        </div>
      </div>
      <div className="indiv-proj"> 
        <h1 className = "project-title"> Star Wars: Battle of the Known Universe </h1>
        <div className="details"> 
          <h4 className="description"> This website is a Star Wars themed game of Rock, Paper, Scissors. Users have the ability to create an account and log in, view all of the listed characters and planets, add their own character, and choose characters to participate in their battle. </h4>
          <h5 className="description-two"> Built using JavaScript, React.js, Ruby, and Ruby on Rails. Incorporated various CSS techniques in order to recreate several iconic Star Wars features, such as the scrolling intro and the logo rotating and shooting into space.
          Included validations in Rails to ensure users create a full profile and new characters have all necessary attributes.
          </h5>
          <a className="website-link" href="https://www.loom.com/share/3112d27983ef43c3b5e341d1cf303e0b"> Demo Video </a>
          <a className="website-link" href="https://github.com/bc-kelly/phase-4-project-starwarsbattle"> GitHub Repository </a>
        </div>
      </div>
      <div className="indiv-proj"> 
        <h1 className = "project-title"> Retro BnB</h1>
        <div className="details"> 
          <h4 className="description"> Retro BnB is a vacation home rental website. Users have the ability to browse luxury vacation homes offered on the site, as well as add new homes, and leave and edit reviews and ratings.
          </h4>
          <h5 className="description-two"> Built using Javascript, React.js, and Ruby. Frontend deployed on Netlify, backend deployed on Heroku. Utilized Active Record Migrations and seed data to seed the database, containing vacation home images and locations. 
          Incorporated CSS animations to allow for a more interactive user experience. 
          </h5>
          <a className="website-link" href="https://hotelproject-react.netlify.app/"> Website Link </a>
          <a className="website-link" href="https://github.com/bc-kelly/phase-3-project-front-end"> GitHub Repository</a>
        </div>
      </div>
      <div className="indiv-proj"> 
        <h1 className = "project-title"> Personal Trainer Website </h1>
        <div className="details"> 
          <h4 className="description"> This website was created for a personal trainer. This individual was new to personal training and needed to have a website where potential clients could read about her style of personal training as well as previous reviews.
          </h4>
          <h5 className="description-two"> I created this website using Webflow. This was my first time using this tool and I wanted to focus on CSS to sharpen my styling skills. This client needed a visually appealing and easy to navigate website. This tool was easy to learn and both myself and the client were pleased with the outcome. 
          </h5>
          <a className="website-link" href=""> Website Link - not yet published </a>
        </div>
      </div>

      {/* <div className="indiv-proj"> 
        <h1 className = "project-title"> Portfolio</h1>
        <div className="details"> 
          <h4 className="description"> This website was created for a personal trainer. This individual was new to personal training and needed to have a website where potential clients could read about her style of personal training as well as previous reviews.
          </h4>
          <h5 className="description-two"> Built using Javascript and React.js. Deployed on Netlify.  
          </h5>
          <a className="website-link" href=""> Website Link </a>
        </div>
      </div> */}
    </div>
  );
}

export default Projects;
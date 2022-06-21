import React from 'react';
import './Contact.css'

function Contact() {
  return (
    <div className="contact-div">
      
      <h3 >Please feel free to contact me at: </h3>
      <div> 
        <a className="links" href="https://www.linkedin.com/in/bridget-kelly-594009127/" target="_blank"> LinkedIn </a>
        <a className="links" href="https://github.com/bc-kelly" target="_blank"> GitHub </a>
        <a className="links" href="https://dev.to/bc_kelly" target="_blank"> Dev Blog </a>
      </div>
      <h4> (516) 668-0424 </h4>
      <h4> bckelly197@gmail.com </h4>

    </div>
  );
}

export default Contact;
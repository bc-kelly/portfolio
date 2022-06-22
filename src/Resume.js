import React from 'react';
import './Resume.css'

function Resume() {
  return (
    <div className="resume-div">
      <h2 className="work-title"> Work Experience </h2>  
        <div className="work-experience"> 
          <div className="kyndryl">
            <h3> Kyndryl </h3> 
            <h4> Financial Analyst </h4>
              <h5>Consolidated monthly reporting, financial analysis, and forecasting of labor, revenue, and new contract signings. Collaborated with the delivery team to ensure proper labor rates and claim activity, and produce reports to provide visibility into trends across various offerings. 
              </h5>
          </div>

          <div className="ibm">
            <h3> IBM </h3> 
            <h4 className="role"> Financial Analyst </h4>
              <h5> Worked as the first labor focal on the finance team supporting the WW Consolidation of the Digital Workplace Services business and implemented monthly processes to report labor actuals. Instituted monthly cadences to provide insight on headcount, offerings, comparisons by geography, the composition of our labor cost, and provided recommendations for weaker contracts and offerings.
              </h5>
          </div>
        </div>

      <h2 className="work-title"> Education </h2>
        <div className="education"> 
          <div className="marist"> 
            <h3> Marist College</h3>
              <h4> Bachelor of Science in Business Administration, concentration in Finance, minor in Accounting</h4>
              <h5> August 2015 - May 2019 </h5>

          </div>
          <div className="flatiron"> 
            <h3> Flatiron School</h3>
              <h4> Certificate of Completion - Software Engineering </h4>
              <h5> January 2022 - May 2022</h5>
          </div>
        </div>

      <h2 className="work-title"> Technical Skills </h2>
        <div className="skills">
          <h3> HTML, CSS, JavaScript, React, Ruby, Ruby on Rails </h3>
        </div> 
    </div>
  );
}

export default Resume;
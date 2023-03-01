import React from "react";

import cv from "./Tech-CV-Copy.pdf";

export default function Resume() {
  return (
    <div>

      <div className="resume-container">
        <h1>Resume Page</h1>
      </div>




      <div className="cv-container">
      
      <h3>Download CV</h3>
      
      </div>


      <div className="cv-container">
        <a href={cv} download title="download">
    
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-file-earmark-person-fill download-icon" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z"/>
</svg>
        </a>
      </div>

      


      <div className="proficiency-container">


      <div className="resume-page">

      <div className="frontend-container">
        <h4>Front-End Proficiencies</h4>
      </div>
          <div>

            
            <ul className="resume-ul">

              
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          <div>
            
            <div className="backend-container">
            <h4>Back-End Proficiencies</h4>
            </div>

            <ul className="resume-ul">
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
  );
}

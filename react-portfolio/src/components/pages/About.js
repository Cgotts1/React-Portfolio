import React from "react";

import image7 from "./image7.png"
import image8 from "./image8.png"
import image9 from "./image9.png"
import image10 from "./image10.png"
import cloud1 from "./cloud1.png"
import cloud2 from "./cloud2.png"






const styles = {
  headingStyle: {
    fontSize: '100px',
  },
  paragraphStyle: {  
    boxShadow: '10px 5px 5px black',
    padding: '20px',

  },
};

export default function About() {
  return (
    <div className="aboutContent">

      <div className="first-section">
        
      <img className="image-one"src={image7} alt="website owner"/>
      {/* <img className="cloud1"src={cloud1}/> */}
      <img className="cloud1"src={cloud1} alt="first cloud"/>
      <img className="cloud2"src={cloud2} alt="second cloud"/>
      {/* <img className="cgotts1"src={cgotts1logo}/> */}
      
      <div>
      <h1 className="name">Cobi Gottschalk</h1>
      
      <h2 className="position">Junior Software Developer</h2>
      {/* <p style={styles.paragraphStyle}>
        Currently a UCSD bootcamp student working towards becoming a fullstack
        developer. I have a B.A. in Anthropology as well as a MSc in Forensic
        Anthropology. My goals after completing this course is to find a job
        within the tech industry as a software engineer and then later
        transition into UX research in order to utilize my anthropological
        background. In addition to my passion for learning new skills, I have
        developed a passion for teaching new skills through my work experience
        in the United States K-12 public school system. While teaching can be
        very rewarding, it can also be mentally taxing, so classroom management
        has become an essential tool I rely on daily in order to maintain
        sanity. Below are portfolio's of work that I have accumulated over the
        past few years that share a brief look into my teaching experience,
        anthropological research done in college, and various web applications I
        have developed.
      </p> */}
      </div>
      


      </div>
      
      {/* <p className="introduction">Full Stack <br></br>Developer</p> */}
      <p style={styles.paragraphStyle}>
        Currently a UCSD bootcamp student working towards becoming a fullstack
        developer. I have a B.A. in Anthropology as well as a MSc in Forensic
        Anthropology. My goals after completing this course is to find a job
        within the tech industry as a software engineer and then later
        transition into UX research in order to utilize my anthropological
        background. In addition to my passion for learning new skills, I have
        developed a passion for teaching new skills through my work experience
        in the United States K-12 public school system. While teaching can be
        very rewarding, it can also be mentally taxing, so classroom management
        has become an essential tool I rely on daily in order to maintain
        sanity. Below are portfolio's of work that I have accumulated over the
        past few years that share a brief look into my teaching experience,
        anthropological research done in college, and various web applications I
        have developed.
      </p>
      <img className="csun-logo"src={image8} alt="of csun logo"/>
      <img className="ljmu-logo"src={image9} alt="ljmu logo"/>
      <img className="ucsd-logo"src={image10} alt="ucsd logo"/>
     
    </div>
  );
}



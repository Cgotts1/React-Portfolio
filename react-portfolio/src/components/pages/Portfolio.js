import React from "react";
import image13 from "./image13.png";
import { useState } from 'react';


export default function Portfolio() {

  const [isVisible1, setIsVisible1] = useState(false);

  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };

  const [isVisible2, setIsVisible2] = useState(false);

  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };

  const [isVisible3, setIsVisible3] = useState(false);

  const toggleVisibility3 = () => {
    setIsVisible3(!isVisible3);
  };

  const [isVisible4, setIsVisible4] = useState(false);

  const toggleVisibility4 = () => {
    setIsVisible4(!isVisible4);
  };

  const [isVisible5, setIsVisible5] = useState(false);

  const toggleVisibility5 = () => {
    setIsVisible5(!isVisible5);
  };

  const [isVisible6, setIsVisible6] = useState(false);

  const toggleVisibility6 = () => {
    setIsVisible6(!isVisible6);
  };

  const [isVisible7, setIsVisible7] = useState(false);

  const toggleVisibility7 = () => {
    setIsVisible7(!isVisible7);
  };

  const [isVisible8, setIsVisible8] = useState(false);

  const toggleVisibility8 = () => {
    setIsVisible8(!isVisible8);
  };

  const [isVisible9, setIsVisible9] = useState(false);

  const toggleVisibility9 = () => {
    setIsVisible9(!isVisible9);
  };

  const [isVisible10, setIsVisible10] = useState(false);

  const toggleVisibility10 = () => {
    setIsVisible10(!isVisible10);
  };

  const [isVisible11, setIsVisible11] = useState(false);

  const toggleVisibility11 = () => {
    setIsVisible11(!isVisible11);
  };

  const [isVisible12, setIsVisible12] = useState(false);

  const toggleVisibility12 = () => {
    setIsVisible12(!isVisible12);
  };

  return (
    <div>
      <div className="recent-work-container">
        <h1>Recent Work</h1>
      </div>

      <div id="full-stack-works" className="works">
        <article className="work1">
          <p id="full-stack-overlay" className="overlay">
            Film Finder
          </p>

          <a href="https://github.com/Cgotts1/API-Project" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-github overlay overlay-logo"
              viewBox="0 0 16 16"
              href="https://github.com/Cgotts1"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          {/* ---------------------------------------------------------- */}
          <svg xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            className="bi bi-github overlay overlay-logo tech-used"
            viewBox="0 0 16 16">
            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github overlay overlay-logo tech-used"
            viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github overlay overlay-logo tech-used"
            onClick={toggleVisibility1}            
            viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>

          {isVisible1 && <div className="project-summary">A movie search web application that utilizes two APIs to render a movie's information and its respective poster.</div>}

          {/* ---------------------------------------------------------- */}
          <h6 className="description-and-tech">🛠 HTML | CSS | JS <br></br>Bootstrap | APIs: OMDB & TMDB</h6>

          <a href="https://cgotts1.github.io/Film-Finder/" target="_blank">
            <img
              src="https://cgotts1.github.io/V4-Portfolio/images/film-finder.jpg"
              alt=" Film Finder"
              id="full-stack-work"
              className="work"
              title="Film Finder"
            />
          </a>
        </article>

        <article className="work2">
          <p id="full-stack-overlay" className="overlay">
            Quote Generator
          </p>

          <a href="https://github.com/Cgotts1/Quote-Generator" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-github overlay overlay-logo"
              viewBox="0 0 16 16"
              href="https://github.com/Cgotts1"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>

          {/* ---------------------------------------------------------- */}
          

          <svg xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github overlay overlay-logo tech-used"
            onClick={toggleVisibility2}            
            viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>

          {isVisible2 && <div className="project-summary">The Ron Swanson quote generator offers a selection of over 50 quotes, randomly generating one at a time.</div>}

          {/* ---------------------------------------------------------- */}
          <h6 className="description-and-tech">🛠 <br></br> HTML | CSS | JS <br></br></h6>


          <a href="https://cgotts1.github.io/Quote-Generator/" target="_blank">
            <img
              src="https://cgotts1.github.io/V4-Portfolio/images/quote-generator.jpg"
              alt=" 'Quote-Generator"
              id="full-stack-work"
              className="work"
              title="Quote-Generator"
            />
          </a>
        </article>

        <article className="work2">
          <p id="full-stack-overlay" className="overlay">
            Weather Dashboard
          </p>

          <a
            href="https://github.com/Cgotts1/Weather-Dashboard"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-github overlay overlay-logo"
              viewBox="0 0 16 16"
              href="https://github.com/Cgotts1"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>

          {/* ---------------------------------------------------------- */}
          <svg xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github overlay overlay-logo tech-used"
            onClick={toggleVisibility3}            
            viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>     
          

          {isVisible3 && <div className="project-summary">A weather dashboard that utilizes Openweathermap's API to retrieve weather information for a five day forecast.</div>}

          {/* ---------------------------------------------------------- */}
          <h6 className="description-and-tech">🛠 HTML | CSS | JS <br></br>Bootstrap | API: Openweathermap</h6>



          <a
            href="https://cgotts1.github.io/Weather-Dashboard/"
            target="_blank"
          >
            <img
              src="https://cgotts1.github.io/V4-Portfolio/images/weather-dashboard.jpg"
              alt=" Weather-Dashboard"
              id="full-stack-work"
              className="work"
              title="Weather-Dashboard"
            />
          </a>
        </article>

        <article className="work2">
          <p id="full-stack-overlay" className="overlay">
            Work Day Scheduler
          </p>

          <a
            href="https://github.com/Cgotts1/Work-Day-Scheduler"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-github overlay overlay-logo"
              viewBox="0 0 16 16"
              href="https://github.com/Cgotts1"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>

          {/* ---------------------------------------------------------- */}
          <svg xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github overlay overlay-logo tech-used"
            onClick={toggleVisibility4}            
            viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg> 

          {isVisible4 && <div className="project-summary">A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.</div>}

          {/* ---------------------------------------------------------- */}
          <h6 className="description-and-tech">🛠 HTML | CSS | JS <br></br>Bootstrap | Moment.js</h6>

          <a
            href="https://cgotts1.github.io/Work-Day-Scheduler/"
            target="_blank"
          >
            <img
              src="https://cgotts1.github.io/V4-Portfolio/images/work-day-scheduler.jpg"
              alt=" Work-Day-Scheduler"
              id="full-stack-work"
              className="work"
              title="Work-Day-Scheduler"
            />
          </a>
        </article>

        <article className="work2">
          <p id="full-stack-overlay" className="overlay">
            Password Generator
          </p>

          <a
            href="https://github.com/Cgotts1/Password-Generator"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-github overlay overlay-logo"
              viewBox="0 0 16 16"
              href="https://github.com/Cgotts1"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>

          {/* ---------------------------------------------------------- */}
          <svg xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github overlay overlay-logo tech-used"
            onClick={toggleVisibility5}            
            viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg> 

          {isVisible5 && <div className="project-summary">Generate a random password based on criteria a user has selected.</div>}

          {/* ---------------------------------------------------------- */}
          <h6 className="description-and-tech">🛠 <br></br>HTML | CSS | JS</h6>

          <a
            href="https://cgotts1.github.io/Password-Generator/"
            target="_blank"
          >
            <img
              src="https://cgotts1.github.io/V4-Portfolio/images/password-generator.jpg"
              alt=" Password-Generator"
              id="full-stack-work"
              className="work"
              title="Password-Generator"
            />
          </a>
        </article>

        <article className="work2">
          <p id="full-stack-overlay" className="overlay">
            Anthropology Quiz
          </p>

          <a
            href="https://github.com/Cgotts1/Anthropology-Quiz"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-github overlay overlay-logo"
              viewBox="0 0 16 16"
              href="https://github.com/Cgotts1"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>

          {/* ---------------------------------------------------------- */}
          <svg xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github overlay overlay-logo tech-used"
            onClick={toggleVisibility6}            
            viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg> 

          {isVisible6 && <div className="project-summary">A timed coding quiz consisting of multiple-choice questions and user highscores.</div>}

          {/* ---------------------------------------------------------- */}
          <h6 className="description-and-tech">🛠 <br></br> HTML | CSS | JS</h6>

          <a
            href="https://cgotts1.github.io/Anthropology-Quiz/"
            target="_blank"
          >
            <img
              src="https://cgotts1.github.io/V4-Portfolio/images/anthropology-quiz.jpg"
              alt=" Anthropology-Quiz"
              id="full-stack-work"
              className="work"
              title="Anthropology-Quiz"
            />
          </a>
        </article>

        <article className="work2">
          <p id="full-stack-overlay" className="overlay">
            Color Changer
          </p>

          <a href="https://github.com/Cgotts1/color-changer" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-github overlay overlay-logo"
              viewBox="0 0 16 16"
              href="https://github.com/Cgotts1"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>

          {/* ---------------------------------------------------------- */}
          <svg xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github overlay overlay-logo tech-used"
            onClick={toggleVisibility7}            
            viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg> 

          {isVisible7 && <div className="project-summary">This JavaScript application comprises of 100 squares that are designed to change their color randomly when a specific square is clicked.</div>}


          {/* ---------------------------------------------------------- */}
          <h6 className="description-and-tech">🛠 <br></br> HTML | CSS | JS</h6>

          <a href="https://cgotts1.github.io/Color-Changer/" target="_blank">
            <img
              src="https://cgotts1.github.io/V4-Portfolio/images/color-changer.jpg"
              alt=" Color-Changer"
              id="full-stack-work"
              className="work"
              title="Color-Changer"
            />
          </a>
        </article>

        <article className="work2">
          <p id="full-stack-overlay" className="overlay">
            Flash Cards
          </p>

          <a href="https://github.com/Cgotts1/JS-Flash-Cards" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-github overlay overlay-logo"
              viewBox="0 0 16 16"
              href="https://github.com/Cgotts1"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>

          {/* ---------------------------------------------------------- */}
          <svg xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github overlay overlay-logo tech-used"
            onClick={toggleVisibility8}            
            viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg> 

          {isVisible8 && <div className="project-summary">An application that allows users to create and delete flash cards. Upon returning to the application, the users previusly created cards will populate through use of local storage. <br/> Tutorial by: Web Dev Tutorials <br/>https://youtu.be/wtqbOFYivxw </div>}

          {/* ---------------------------------------------------------- */}
          <h6 className="description-and-tech">🛠 <br></br> HTML | CSS | JS</h6>

          <a href="https://cgotts1.github.io/JS-Flash-Cards/" target="_blank">
            <img
              src="https://cgotts1.github.io/V4-Portfolio/images/flash-cards.jpg"
              alt=" Flash-Cards"
              id="full-stack-work"
              className="work"
              title="Flash-Cards"
            />
          </a>
        </article>

        <article className="work2">
          <p id="full-stack-overlay" className="overlay">
            Readme Generator
          </p>

          <a href="https://github.com/Cgotts1/readme-generator" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-github overlay overlay-logo"
              viewBox="0 0 16 16"
              href="https://github.com/Cgotts1"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>

          {/* ---------------------------------------------------------- */}
          <svg xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github overlay overlay-logo tech-used"
            onClick={toggleVisibility9}            
            viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg> 

          {isVisible9 && <div className="project-summary">Quickly and easily generate a README file by using a command-line application. This allows the user to devote more time working on the project.</div>}

          {/* ---------------------------------------------------------- */}
          <h6 className="description-and-tech">🛠 HTML | CSS | JS <br></br>Node.js | Inquirer</h6>

          <a
            href="https://drive.google.com/file/d/1nTql6j8v9ov0MurceNV8lzc9ybklxvvY/view"
            target="_blank"
          >
            <img
              src="https://github.com/Cgotts1/readme-generator/raw/main/image/nodequestions.png"
              alt=" Readme-Generator"
              id="full-stack-work"
              className="work"
              title="Readme-Generator"
            />
          </a>
        </article>

        <article className="work2">
          <p id="full-stack-overlay" className="overlay">
            Team Profile Generator
          </p>

          <a
            href="https://github.com/Cgotts1/Team-Profile-Generator"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-github overlay overlay-logo"
              viewBox="0 0 16 16"
              href="https://github.com/Cgotts1"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>

          {/* ---------------------------------------------------------- */}
          <svg xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github overlay overlay-logo tech-used"
            onClick={toggleVisibility10}            
            viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg> 

          {isVisible10 && <div className="project-summary">A Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.</div>}

          {/* ---------------------------------------------------------- */}
          <h6 className="description-and-tech">🛠 HTML | CSS | JS <br></br>Node.js | Inquirer</h6>

          <a
            href="https://drive.google.com/file/d/1h6JLU5_bIjOT5hWXo3d54XxKFUUBkfhP/view"
            target="_blank"
          >
            <img
              src="https://github.com/Cgotts1/Team-Profile-Generator/raw/main/image/image1.png"
              alt=" Team-Profile-Generator"
              id="full-stack-work"
              className="work"
              title="Team-Profile-Generator"
            />
          </a>
        </article>

        <article className="work2">
          <p id="full-stack-overlay" className="overlay">
            Fitness Planner
          </p>

          <a href="https://github.com/Cgotts1/Fitness-App" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-github overlay overlay-logo"
              viewBox="0 0 16 16"
              href="https://github.com/Cgotts1"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>

          {/* ---------------------------------------------------------- */}
          <svg xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github overlay overlay-logo tech-used"
            onClick={toggleVisibility11}            
            viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg> 

          {isVisible11 && <div className="project-summary">A fitness application allowing users to make an account and create a weekly workout routine that tracks their physical activities and time spent exercizing.</div>}

          {/* ---------------------------------------------------------- */}
          <h6 className="description-and-tech">🛠 HTML | CSS | JS | Chart.js<br></br>Bootstrap | MySQL | Express |HB.js</h6>

          <a
            href="https://protected-woodland-15218.herokuapp.com/"
            target="_blank"
          >
            <img
              src="https://cgotts1.github.io/V4-Portfolio/images/fitness-planner.png"
              alt="Fitness-Planner"
              id="full-stack-work"
              className="work"
              title="Fitness-Planner"
            />
          </a>
        </article>


        <article className="work2">
          <p id="full-stack-overlay" className="overlay">
            Gamer Match
          </p>

          <a
            href="https://github.com/Ryan-M-Taylor/Gamer-Match"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-github overlay overlay-logo"
              viewBox="0 0 16 16"
              href="https://github.com/Cgotts1"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>

          {/* ---------------------------------------------------------- */}
          <svg xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github overlay overlay-logo tech-used"
            onClick={toggleVisibility12}            
            viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg> 

          {isVisible12 && <div className="project-summary">A gaming social media application where users can go to connect with fellow gamers with similar interests. Users can toggle between different console forums, add friends, and post comments. </div>}

          {/* ---------------------------------------------------------- */}
          <h6 className="description-and-tech">🛠 HTML | CSS | JS | MongoDB<br></br> Express | React.js | Node.js</h6>

          <a href="https://peaceful-brook-99319.herokuapp.com/" target="_blank">
            <img
              src={image13}
              alt=" Gamer Match"
              id="full-stack-work"
              className="work"
              title="Gamer Match"
            />
          </a>
        </article>
      </div>
    </div>
  );
}

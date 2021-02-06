import React from "react";

const VertNav = () => {
  return (
    <nav id="cd-vertical-nav">
      <ul>
        <li>
          <a
            data-number="1"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("home").scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }}
          >
            <span className="cd-dot" />
            <span className="cd-label">Home</span>
          </a>
        </li>
        <li>
          <a
            data-number="2"
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("services").scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }}
          >
            <span className="cd-dot" />
            <span className="cd-label">Services</span>
          </a>
        </li>
        <li>
          <a
            data-number="3"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }}
          >
            <span className="cd-dot" />
            <span className="cd-label">Projects</span>
          </a>
        </li>
        <li>
          <a
            data-number="4"
            href="#news"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("news").scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }}
          >
            <span className="cd-dot" />
            <span className="cd-label">News</span>
          </a>
        </li>
        <li>
          <a
            data-number="5"
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about").scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }}
          >
            <span className="cd-dot" />
            <span className="cd-label">About</span>
          </a>
        </li>
        <li>
          <a
            data-number="6"
            href="#resume"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("resume").scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }}
          >
            <span className="cd-dot" />
            <span className="cd-label">Resume</span>
          </a>
        </li>

        {/* <li>
          <a
            data-number="6"
            href="#strava"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("strava").scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }}
          >
            <span className="cd-dot" />
            <span className="cd-label">Strava</span>
          </a>
        </li>
        <li>
          <a
            data-number="7"
            href="#github"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("github").scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }}
          >
            <span className="cd-dot" />
            <span className="cd-label">Github</span>
          </a>
        </li> */}
        <li>
          <a
            data-number="7"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }}
          >
            <span className="cd-dot" />
            <span className="cd-label">Contact Me</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default VertNav;

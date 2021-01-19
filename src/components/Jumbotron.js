import React from "react";
// reactstrap components
import { Button } from "reactstrap";
import Typewriter from "typewriter-effect";

// reactstrap components

// core components

function Jumbotron() {
  return (
    <div
      className="page-header cd-section"
      id="home"
      style={{
        backgroundImage:
          "url(" + require("assets/img/Owen/hero-p-3200.jpeg") + ")",
      }}
    >
      <div className="filter" />
      <div className="content-center">
        <div className="motto">
          <h1 className="text-center">
            <strong id="main-title">I'm Owen Roth</strong>
          </h1>
          <h2 id="job-desc">
            <Typewriter
              options={{
                strings: ["NAVY VETERAN", "WEB DEVELOPER", "SALESFORCE ADMIN"],
                autoStart: true,
                loop: true,
                pauseFor: 2500,
              }}
            />
          </h2>
          {/* <h2 id="job-desc">
              NAVY VETERAN | WEB DEVELOPER | SALESFORCE ADMIN
            </h2> */}
          <h3 className="text-center mx-5">
            Let me help you engineer your vision. Whether it's a personal
            portfolio, restaurant application, or database creation I can help
            you technically build out your goals. I create custom, tailored
            solutions for your personal or business needs.{" "}
          </h3>
        </div>

        <div className="mt-2">
          <Button
            className="btn-just-icon mx-2"
            color="linkedin"
            href="https://www.linkedin.com/in/owen-roth-86ba1ba4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin" />
          </Button>
          <Button
            className="btn-just-icon mx-2"
            color="github"
            href="https://github.com/oroth8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github-alt"></i>
          </Button>
          <Button
            className="btn-just-icon mx-2"
            color="instagram"
            href="https://www.instagram.com/rothnaldo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;

/*eslint-disable*/
import React from "react";
import logo from "../assets/img/logos/ColorlogoNB.png";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components

function Footer() {
  return (
    <>
      <footer className="footer footer-black footer-white">
        <Container>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="#home" className="mr-1">
                    <img src={logo} alt="logo" style={{ height: "18px" }} />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
                © {new Date().getFullYear()}
                , made with <i className="fa fa-heart heart" /> by Owen Roth
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;

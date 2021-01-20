import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
} from "reactstrap";
// logo
import logo from "../assets/img/logos/whiteNB.png";

function NavbarHeader() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={classnames("fixed-top", navbarColor)}
        expand="lg"
        id="navbar-main"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/" tag={Link}>
              <img src={logo} alt="logo" style={{ height: "30px" }} />
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="mr-2" color="default" caret nav>
                  Explore
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="#home" tag={Link}>
                    <i className="nc-icon nc-tile-56" />
                    Home
                  </DropdownItem>
                  <DropdownItem to="#services" tag={Link}>
                    <i className="nc-icon nc-settings" />
                    Services
                  </DropdownItem>
                  <DropdownItem to="#projects" tag={Link}>
                    <i className="nc-icon nc-bullet-list-67" />
                    Projects
                  </DropdownItem>
                  <DropdownItem to="#about" tag={Link}>
                    <i className="nc-icon nc-single-02" />
                    About Me
                  </DropdownItem>
                  <DropdownItem to="#resume" tag={Link}>
                    <i className="nc-icon nc-paper" />
                    Resume
                  </DropdownItem>
                  {/* <DropdownItem to="/sections#pricing" tag={Link}>
                    <i className="nc-icon nc-money-coins" />
                    Pricing
                  </DropdownItem>
                  <DropdownItem to="/sections#testimonials" tag={Link}>
                    <i className="nc-icon nc-badge" />
                    Testimonials
                  </DropdownItem> */}
                  <DropdownItem to="#contact" tag={Link}>
                    <i className="nc-icon nc-mobile" />
                    Contact Me
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button
                  className="btn-round"
                  color="danger"
                  to="#contact"
                  tag={Link}
                >
                  <i className="nc-icon nc-email-85" /> Contact Me
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHeader;

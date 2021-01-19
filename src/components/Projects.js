import React from "react";
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  CardTitle,
  CardImg,
  Button,
} from "reactstrap";

const Projects = () => {
  return (
    <div className="projects section section-dark cd-section" id="projects">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h6 className="text-muted">My Work</h6>
            <h2 className="title">Past Projects</h2>
            <h5 className="description">
              I am a MERN stack specilized developer. MERN is an acronym for the
              technologies I specilize in (MongoDB, Express, ReactJS, and
              NodeJS). Although, I focus on the MERN stack I am constantly
              teaching myself new technologies and languages.
            </h5>
          </Col>
        </Row>
        <div className="space-top" />
        <Row>
          <Col md="4">
            <Card className="card-plain">
              <CardImg top tag="div">
                <a
                  href="https://github.com/oroth8/estore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="..."
                    className="img"
                    src={require("assets/img/logos/E-Store.jpg")}
                  />
                </a>
              </CardImg>
              <CardBody>
                <CardTitle tag="h4">
                  E-Store{" "}
                  <Button
                    className="btn-just-icon btn-link"
                    color="danger"
                    href="https://github.com/oroth8/estore"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github-alt"></i>
                  </Button>
                </CardTitle>
                <br />

                <h6 className="card-category text-muted">Ecommerce Website</h6>
                <p className="card-description">
                  A small buisness e-commerce solution. Users can browse
                  products, see the trending products, leave a review, and
                  checkout easily with paypal. Admins can see orders, mark
                  orders for delivery, edit users, and upload new products. I
                  wanted to build this application to focus on my back-end
                  server development and Redux state managment abilities.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-plain">
              <CardImg top tag="div">
                <a
                  href="https://agile-plains-50917.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="..."
                    className="img"
                    src={require("assets/img/logos/devC.jpg")}
                  />
                </a>
              </CardImg>
              <CardBody>
                <CardTitle tag="h4">
                  Developer Connector{" "}
                  <Button
                    className="btn-just-icon btn-link"
                    color="danger"
                    href="https://github.com/oroth8/dev_connector"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github-alt"></i>
                  </Button>
                </CardTitle>
                <br />

                <h6 className="card-category text-muted">
                  Social Media Web Application
                </h6>
                <p className="card-description">
                  The idea of Dev Connect was to build a social media like
                  website. Skills I wanted to focus on were my css and Sass
                  themeing. Also I wanted to work more on my back-end server
                  organization. Users can create an account, create a job or
                  education profile, share social media, like, comment, and
                  post.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-plain">
              <CardImg top tag="div">
                <a
                  href="https://gentle-atoll-92825.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="..."
                    className="img"
                    src={require("assets/img/logos/Explorer.jpg")}
                  />
                </a>
              </CardImg>
              <CardBody>
                <CardTitle tag="h4">
                  Explorer{" "}
                  <Button
                    className="btn-just-icon btn-link"
                    color="danger"
                    href="https://github.com/oroth8/explorer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github-alt"></i>
                  </Button>
                </CardTitle>

                <h6 className="card-category text-muted">
                  Informative NASA Game
                </h6>
                <p className="card-description">
                  This was a team oriented fun project. Myself and three others
                  wanted to build a fun education game using the NASA api and to
                  practice collaborating. We created a team structure, reviewed
                  each other's code, and established a clear tasking/issue list.
                  Users can create a character to buy space ships and travel the
                  unvierse. Earn money by answering NASA API questions.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;

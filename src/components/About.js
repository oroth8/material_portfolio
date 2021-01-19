import React from "react";
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  CardTitle,
  Button,
} from "reactstrap";
import pdf from "../assets/resume/OWEN_ROTH_RESUME.pdf";

const About = () => {
  return (
    <div className="blog section cd-section" id="about">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="10">
            <h2 className="title">About Me</h2>
            <br />
            <Card className="card-plain card-blog">
              <Row>
                <Col md="5">
                  <div className="card-image">
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/logos/profile.jpeg")}
                    />
                  </div>
                </Col>
                <Col md="7">
                  <CardBody>
                    <h6 className="card-category text-info">Bio</h6>
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        I Don't Stop Working
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Selected as one of 72 candidates from a class 300+ people
                      for the prestigious Navy SEAL training program. Spent 2
                      years in the Navy after being medically discharged due to
                      injuries resulting from training. Attended Northwestern
                      University Full-Stack Web Development Program. Became a
                      Certified Salesforce Administrator working towards
                      Platform App Builder and Developer Salesforce
                      Certifications. Created system to streamline server pay at
                      Trifecta Bar and Grill, resulting in time saved, and
                      increased employee satisfaction. Helped generate 6.8% YOY
                      growth in restaurant revenue by recalculating menu price
                      points, cultivating positive relationships with clients
                      and colleagues, leveraging user-generated content.{" "}
                    </p>
                    <Button
                      className="btn-round"
                      color="danger"
                      type="button"
                      href={pdf}
                      download
                    >
                      <i className="nc-icon nc-paper"></i> Download Resume
                    </Button>
                  </CardBody>
                </Col>
              </Row>
            </Card>
            <Card className="card-plain card-blog">
              <Row>
                <Col md="7">
                  <CardBody>
                    <h6 className="card-category text-danger">
                      <i className="fa fa-free-code-camp mr-1" />
                      Current Activities
                    </h6>
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        "Relish in the pain that would break normal men..."
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      I am a firm beliver of constantly evaluating goals and
                      accomplishing them. Non-work goals that I have set for
                      2021: Run 2 marathons, run 1 full iron-man, qualify for
                      the Boston marathon, reach sub 10% body fat, study
                      Spanish, and live uncomfortably.
                    </p>
                  </CardBody>
                </Col>
                <Col md="5">
                  <div className="card-image">
                    <img
                      alt="hellweek"
                      className="img"
                      src={require("assets/img/logos/hellweek.png")}
                    />
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

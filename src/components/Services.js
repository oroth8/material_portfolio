import React from "react";
import { Container, Row, Col } from "reactstrap";

const Services = () => {
  return (
    <div className=" section-dark cd-section" id="services">
      <Container>
        <Row>
          <div className="ml-auto mr-auto">
            <h2 className="title text-center">My Services</h2>
            <h6 className="text-muted text-center">
              Contact me to request a quote today!
            </h6>
          </div>
        </Row>
        <Row>
          <Col className="ml-auto" sm="5">
            <div className="info">
              <div className="icon">
                <i aria-hidden={true} className="nc-icon nc-atom" />
              </div>
              <h4 className="title">Integrated Web and Mobile Applications</h4>
              <p>
                I will create the best deliverable for your needs. Whether it is
                a simple website, or a complex verticle solution. Every step of
                the way I will be communicating and providing transparent
                updates. You will have complete oversight throughout the process
                and satisfication is guaranteed or money back.
              </p>
            </div>
          </Col>
          <Col className="mr-auto" sm="5">
            <div className="info">
              <div className="icon">
                <i aria-hidden={true} className="nc-icon nc-cloud-upload-94" />
              </div>
              <h4 className="title">Database Creating and Cloud Management</h4>
              <p>
                Need help collecting data from your user? I build fully scalable
                cloud databases. Cloud databases offer safe, easy, and efficient
                data access. Create custom analytics and visuals on the fly. I
                can integrate your users across any digital platform.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="bottom-line">
          <Col className="ml-auto" sm="5">
            <div className="info">
              <div className="icon">
                <i aria-hidden={true} className="nc-icon nc-settings" />
              </div>
              <h4 className="title">Hosting and Management</h4>
              <p>
                Don't know how to opperate or publish a website? I can maintain
                your website making sure it is up-to-date, bug free, and
                accesible. Already have a website? No problem. I will bring your
                website up to speed with the latest technologies and making sure
                it has great SEO (Search Engine Optimization).
              </p>
            </div>
          </Col>
          <Col className="mr-auto" sm="5">
            <div className="info">
              <div className="icon">
                <i aria-hidden={true} className="nc-icon nc-time-alarm" />
              </div>
              <h4 className="title">Effecient Process</h4>
              <p>
                Email me to request a quote. I will get back to you in less than
                24 hours. We will have a quick discussion on project expecations
                and timelines. I offer fixed rate and per hour service fees.
                Recieve a digital, itemized invoice. Moneyback guaranteed if you
                are not satisified with my services.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;

import React from "react";
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  CardTitle,
  Button,
  CardFooter,
} from "reactstrap";

const Reddit = () => {
  return (
    <>
      <div className="project-4 section section-dark cd-section" id="news">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Viral Project: Wall Street Bets Tickers</h2>
              <h5 className="description">50,000+ Unique Page Views</h5>
              <h5 className="description">6,000,000+ API requests</h5>
            </Col>
          </Row>
          <div className="space-top" />
          <Row>
            <Col className="ml-auto" md="5">
              <Card
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/logos/reddit.jpg") + ")",
                }}
              ></Card>
            </Col>
            <Col className="mr-auto" md="5">
              <Card className="card-plain">
                <CardBody>
                  <h6 className="card-category">/r/ReactJS</h6>
                  <a
                    href="https://www.wallstreetbetstickers.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardTitle tag="h3">Project of the Week</CardTitle>
                  </a>
                  <p className="card-description">
                    While attempting to follow the Reddit meme stock craze, I
                    grew frusterated trying to find a comprehensive dashboard
                    for all the "viral" stocks. So, in one weekend, I made my
                    own. My site blew up overnight trending on Reddit, Facebook,
                    and Twitter.
                  </p>
                  <CardFooter>
                    <Button
                      className="btn-neutral mr-1"
                      color="link"
                      href="https://www.wallstreetbetstickers.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-pager"></i> wallstreetbetstickers.com
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral mr-1"
                      color="link"
                      href="https://www.reddit.com/r/reactjs/comments/la62if/wall_street_bets_ticker_dashboard_with_realtime/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-reddit" />
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br />
          <hr />
          <br />
          <Row>
            <Col className="ml-auto" md="5">
              <Card className="card-plain">
                <CardBody>
                  <h6 className="card-category">Process</h6>
                  <a
                    href="https://github.com/oroth8/wsb_tickers"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardTitle tag="h3">
                      Beating Google in Market Data Speeds
                    </CardTitle>
                  </a>
                  <p className="card-description">
                    Using ReactJS and{" "}
                    <a
                      href="https://polygon.io/"
                      className="polygon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Polygon API
                    </a>
                    , I developed a way to render market data information every
                    3 seconds with the flexibility to do it every second. The
                    website also displays news and brokerage information. The
                    project has 37 stars, and 6 forks on Github.
                  </p>
                  <CardFooter>
                    <Button
                      className="btn-neutral mr-1"
                      color="link"
                      href="https://github.com/oroth8/wsb_tickers"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-book mr-1" />
                      Read More
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral mr-1"
                      color="link"
                      href="https://github.com/oroth8/wsb_tickers"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col className="mr-auto" md="5">
              <Card
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/logos/reddit.gif") + ")",
                }}
              ></Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Reddit;

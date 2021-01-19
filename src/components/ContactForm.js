import React, { useState } from "react";
import emailjs from "emailjs-com";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  UncontrolledAlert,
} from "reactstrap";

const serviceID = process.env.REACT_APP_EMAILJS_SERVICEID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATEID;
const userID = process.env.REACT_APP_EMAILJS_USERID;

function ContactForm() {
  const [checked, setChecked] = useState(true);
  const [alert, setAlert] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });
  const { first_name, last_name, email, message } = formData;

  const onDismiss = () => setAlert(false);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function sendEmail(e) {
    e.preventDefault();
    if (
      first_name === "" ||
      last_name === "" ||
      email === "" ||
      message === "" ||
      checked === true
    ) {
      setAlert(true);
    } else {
      emailjs.sendForm(serviceID, templateID, e.target, userID).then(
        (result) => {
          setEmailSent(true);
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setAlert(true);
        }
      );
    }
  }

  return (
    <div
      className="contactus-1 section-image cd-section"
      id="contact"
      style={{
        backgroundImage:
          "url(" + require("assets/img/Owen/hero-p-3200.jpeg") + ")",
      }}
    >
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="10">
            <Card className="card-contact no-transition">
              <CardTitle className="text-center" tag="h3">
                Contact Me
              </CardTitle>
              <Row>
                <Col className="ml-auto" md="5">
                  <CardBody>
                    <div className="info info-horizontal">
                      <div className="icon icon-info">
                        <i className="nc-icon nc-pin-3" />
                      </div>
                      <div className="description">
                        <h4
                          // className="info-title"
                          style={{ color: "#6c757d" }}
                        >
                          Location
                        </h4>
                        <p style={{ color: "#6c757d " }}>
                          Chicago, IL
                          <br />
                          River North <br />
                          United States
                        </p>
                      </div>
                    </div>
                    <div className="info info-horizontal">
                      <div className="icon icon-danger">
                        <i className="nc-icon nc-badge" />
                      </div>
                      <div className="description">
                        <h4
                          // className="info-title"
                          style={{ color: "#6c757d" }}
                        >
                          Give me a call
                        </h4>
                        <p style={{ color: "#6c757d " }}>
                          Owen Roth <br />
                          (847)-800-5666 <br />
                          rothowen27@gmail.com
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Col>
                <Col className="mr-auto" md="5">
                  <Form id="contact-form" onSubmit={sendEmail} role="form">
                    <CardBody>
                      <Row>
                        <Col md="6">
                          <FormGroup className="label-floating">
                            <label className="control-label">First name</label>
                            <Input
                              name="first_name"
                              placeholder="First Name"
                              type="text"
                              required
                              value={first_name}
                              onChange={onChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup className="label-floating">
                            <label className="control-label">Last name</label>
                            <Input
                              name="last_name"
                              placeholder="Last Name"
                              type="text"
                              required
                              value={last_name}
                              onChange={onChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup className="label-floating">
                        <label className="control-label">Email address</label>
                        <Input
                          name="email"
                          placeholder="Email"
                          type="email"
                          required
                          value={email}
                          onChange={onChange}
                        />
                      </FormGroup>
                      <FormGroup className="label-floating">
                        <label className="control-label">Your message</label>
                        <Input
                          id="message"
                          name="message"
                          placeholder="Message"
                          type="textarea"
                          rows="6"
                          required
                          value={message}
                          onChange={onChange}
                        />
                      </FormGroup>
                      <Row>
                        <Col md="6">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultValue=""
                                type="checkbox"
                                onChange={() => {
                                  setChecked(!checked);
                                }}
                              />
                              I'm not a robot !{" "}
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <Button
                            className="pull-right"
                            color="info"
                            type="submit"
                          >
                            Send Message
                          </Button>
                          {alert === true ? (
                            <UncontrolledAlert
                              color="warning"
                              toggle={onDismiss}
                            >
                              <b>Messaged Failed</b> Please make sure all form
                              inputs are filled out and prove you are not a
                              robot.
                            </UncontrolledAlert>
                          ) : null}
                          {emailSent === true && (
                            <UncontrolledAlert color="danger">
                              <b>Message Sent!</b> Owen will be in contact
                              shortly. Thank you!
                            </UncontrolledAlert>
                          )}
                        </Col>
                      </Row>
                    </CardBody>
                  </Form>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactForm;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a software engineer with a strong interest in designing and
              developing reliable, scalable, and maintainable applications. I
              enjoy translating ideas into well-structured solutions while
              focusing on code quality and system performance.
              <br />
              <br />
              My primary programming experience includes
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Java, and C{" "}
                </b>
              </i>
              , which I use to build applications across different layers of the
              software stack.
              <br />
              <br />
              I have hands-on experience in full-stack web development using
              technologies such as
              <i>
                <b className="purple">
                  {" "}
                  React, Node.js, Express, and Spring Boot{" "}
                </b>
              </i>
              for building user interfaces and backend services.
              <br />
              <br />
              I have worked with both relational and NoSQL databases, including
              <i>
                <b className="purple">
                  {" "}
                  MySQL, PostgreSQL, and MongoDB{" "}
                </b>
              </i>
              <br />
              <br />
              I enjoy developing modern web applications, collaborating across
              the stack, and continuously improving my skills by working on
              real-world projects.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

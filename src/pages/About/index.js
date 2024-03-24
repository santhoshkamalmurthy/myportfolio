import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../atoms/Particle";
import AboutCard from "../../molecules/AboutCard"
import Techstack from "../../molecules/Techstack"
import Toolstack from "../../molecules/Toolstack"
import Github from "../../molecules/Github"

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Get to Know <strong className="purple">Me</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src="about.png" alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <Github />
        
      </Container>
    </Container>
  );
}

export default About;

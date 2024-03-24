import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../../molecules/ProjectCards";
import json from "../../utils";

function Projects() {
  return (
    <Container fluid className="project-section">

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {
            json.projects.map((project)=> {
              return (
                <Col md={4} className="project-card">
                <ProjectCard
                  image={project.image}
                  isBlog={project.isBlog}
                  title={project.title}
                  description={project.description}
                  ghLink={project.githubLink}
                  demoLink={project.demoLink}
                />
              </Col> 
              )
            })
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

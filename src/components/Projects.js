import React from "react";
import Tab from "react-bootstrap/Tab";
import { Button } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import pro1 from "../assets/img/pro1.jpeg";
import pro2 from "../assets/img/pro2.png";
import pro4 from "../assets/img/pro4.png";
import pro5 from "../assets/img/1.png"
import pro6 from '../assets/img/2.png'
import pro7 from '../assets/img/pro7.png'
import pro8 from '../assets/img/thumb.jpg'
import "react-multi-carousel/lib/styles.css";

export const Projects = () => {
  const dev=()=>{
    return URL("https://github.com/Parsanta");
  }
  const des=()=>{
    return URL("https://www.behance.net/parsantarajpal")
  }
  const projects = [
    {
      title: "Dis-patch",
      description: "Using React and Firebase",
      img:pro8,
      projectUrl: "https://dis-patch.vercel.app/"
    },
    {
      title: "NotesMemo",
      description: "Using Reactjs",
      img: pro6,
      projectUrl: "https://parsanta.github.io/NotesMemo/",
    },
    {
      title: "Nawab Dynasty Portfolio Website",
      description: "Pure HTML,CSS,JS",
      img: pro1,
      projectUrl: "https://github.com/Parsanta/Restaurant-Portfolio-Website",
    },
    {
      title: "Recipe_manager",
      description: "Using Rust",
      img:pro7,
      projectUrl: "https://github.com/Parsanta/recipe_manager"
    },
    {
      title: "Recipe_manager",
      description: "Using Rust",
      img:pro7,
      projectUrl: "https://github.com/Parsanta/compression_rust_project"
    },
    {
      title: "Cafe Management System",
      description: "using JAVA",
      img: pro5,
      projectUrl: "https://github.com/Parsanta/Cafe-Management-system",
    }
  ];
  const projectsdesigns = [
    {
      title: "Nawab Dynasty Portfolio Website Design",
      description: "USING FIGMA",
      img: pro1,
      projectUrl: "https://www.behance.net/gallery/149929079/WEB-DESIGN",
    },
    {
      title: "DIS_PATCH DELEVERY E-COMMERECE WEBSITE",
      description: "using FIGMA",
      img: pro2,
      projectUrl: "https://www.behance.net/gallery/149832389/WEBSITE-DESIGN",
    },
    {
      title: "DEVELOPMENT AND RESEARCH E-COMMERECE WEBSITE",
      description: "USING FIGMA",
      img: pro4,
      projectUrl: "https://www.behance.net/gallery/156777115/Website-design",
    },
  ];

  return (
    <div data-aos="fade-in" data-aos-duration="20000">
      <section className="project" id="project">
        <Row>
          <Col>
            <h2>PROJECTS</h2>
            <p>Check out some of my recent projects:</p>
            <Tabs defaultActiveKey="development" id="uncontrolled-tab-example">
              <Tab eventKey="development" title="Development">
                <Row>
                  {projects.map((project, index) => (
                    <Col md={6} lg={4} key={index}>
                      <Card className="project-card">
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Card.Img
                            variant="top"
                            src={project.img}
                            className="project-card-image"
                          />
                          <Card.ImgOverlay className="project-card-overlay">
                            <div className="project-card-title">
                              {project.title}
                              <br />
                              {project.description}
                            </div>
                          </Card.ImgOverlay>
                        </a>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Tab>
              <Tab eventKey="design" title="Design">
                <Row>
                  {projectsdesigns.map((project, index) => (
                    <Col md={6} lg={4} key={index}>
                      <Card className="project-card">
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Card.Img
                            variant="top"
                            src={project.img}
                            className="project-card-image"
                          />
                          <Card.ImgOverlay className="project-card-overlay">
                            <div className="project-card-title">
                              {project.title}
                              <br/>
                              {project.description}
                            </div>
                          </Card.ImgOverlay>
                        </a>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
        <Button variant="outline-light" size="lg" >
        <a href="https://github.com/Parsanta" target="_blank"> FRONTEND </a>
        </Button>
        <Button variant="outline-light" size="lg" >
          <a href="https://www.behance.net/parsantarajpal" target="_blank"> DESIGNS </a>   
        </Button>
        <br/>
      </section>
    </div>
  );
};

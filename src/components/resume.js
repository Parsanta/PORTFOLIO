import { Row, Col } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "react-bootstrap/Button";
import AOS from "aos";
import "aos/dist/aos.css";

export const Resume = () => {
  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/file/d/1PKEfPS3M9i6Wu1g0LjepqhRrLkWr6WZo/view?usp=drive_link";
  };
  return (
    <Router>
      <div data-aos="fade-in" data-aos-duration="20000">
        <section className="resume" id="resume">
          <Row>
            <Col className="reume_text">
              <h2>More About me</h2>
              <div className="about_text">
                <h3>Hi, I'm Parsanta Lal</h3>
                <p>
                  I'm a student of Computer Science Department at DHA Suffa
                  University. I'm passionate about web development and design,
                  and I've been honing my skills in this area for some time now.
                  I specialize in tools like Figma to create visually stunning
                  designs, and I'm proficient in front-end web development
                  languages like HTML, CSS, and Reactjs.
                  <br /> In addition to my design and development skills, I'm
                  also well-versed in programming languages like C and Java. I'm
                  always eager to learn and grow, and I'm excited to explore new
                  opportunities in the field of web development and design.
                  <br /> Thank you for visiting my profile, and please don't
                  hesitate to connect with me to discuss any potential
                  collaborations or opportunities!
                  <br />
                </p>
                <Button variant="outline-light" onClick={handleDownload}>
                  Download My Resume <Download />
                </Button>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </Router>
  );
};

import { Row, Col } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "aos/dist/aos.css";

export const Resume = () => {
  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/file/d/1Tsabqk3iZ-l9x-KxFOfYiSBPy-dz8Q2B/view?usp=sharing";
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
                  I'm a Computer Science student at DHA Suffa University with a
                  broad interest in technology. While I have experience in web
                  development and design, where I've specialized in tools like
                  Figma for creating visually stunning designs and honed my
                  skills in front-end web development languages such as HTML,
                  CSS, and React.js, I'm also actively exploring other domains
                  such as AI and ML.
                  <br />
                  Currently, I'm engaged in learning Node.js to deepen my
                  understanding of full-stack development. Additionally, I'm
                  exploring AI and ML, eager to apply my programming skills to
                  this exciting field. Proficient in languages like C, Rust, and
                  Java, I have a strong appetite for learning and am
                  enthusiastic about embracing new challenges.
                  <br />
                  Thank you for visiting my profile! Feel free to connect with
                  me to discuss potential collaborations or opportunities.
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

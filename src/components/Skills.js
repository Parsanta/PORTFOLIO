import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html5 from "../assets/img/html5.svg";
import css from "../assets/img/css.svg";
import react from "../assets/img/react.svg";
import java from "../assets/img/java.svg";
import c from "../assets/img/c.svg";
import figma from "../assets/img/figma.svg";
import rust from "../assets/img/rust.png";
import tailwind from "../assets/img/tailwindcss.svg";
import bootstrap from "../assets/img/bootstrap-5-1.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div data-aos="fade-in" data-aos-duration="2000">
      <section className="skill" id="skills">
        <Container className="skill-container">
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Skills</h2>
                <p>Discover the Range of my Skills:</p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={1000}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={html5} alt="Image" />
                    <h5>HTML</h5>
                  </div>
                  <div className="item">
                    <img src={css} alt="Image" />
                    <h5>CSS</h5>
                  </div>
                  <div className="item">
                    <img src={tailwind} alt="Image" />
                    <h5>Tailwind css</h5>
                  </div>
                  <div className="item">
                    <img src={bootstrap} alt="Image" />
                    <h5>Bootstrap 5</h5>
                  </div>
                  <div className="item">
                    <img src={react} alt="Image" />
                    <h5>Reactjs</h5>
                  </div>
                  <div className="item">
                    <img src={java} alt="Image" />
                    <h5>Java</h5>
                  </div>
                  <div className="item">
                    <img src={c} alt="Image" />
                    <h5>C</h5>
                  </div>
                  <div className="item">
                    <img src={rust} alt="Image" />
                    <h5>Rust</h5>
                  </div>
                  <div className="item">
                    <img src={figma} alt="Image" />
                    <h5>Figma</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

import { Container, Row, Col } from "react-bootstrap";
import linkedin from '../assets/img/linkedin.svg';
import behance from '../assets/img/behance.svg';
import git from '../assets/img/git.svg';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-left" >
          <Col size={12} sm={6} id="footerContainer">
            <p>EMAIL : parsantarajpal123@gmail.com </p>
            <p>Designed and Developed by Parsanta Lal</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" id="footerContainer">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/parsanta-rajpal/"><img src={linkedin} alt="Icon" /></a>
              <a href="https://www.behance.net/parsantarajpal"><img src={behance} alt="Icon" /></a>
              <a href="https://github.com/Parsanta"><img src={git} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contact_img from "../assets/img/contact-img.svg";
import { Container, Row, Col } from "react-bootstrap";

export const Form = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.user_name) {
      isValid = false;
      errors.user_name = "Name is required";
    }

    if (!formData.user_email) {
      isValid = false;
      errors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      isValid = false;
      errors.user_email = "Email is invalid";
    }

    if (!formData.message) {
      isValid = false;
      errors.message = "Message is required";
    }

    setFormErrors(errors);

    return isValid;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm(
          "service_dm6d8ej",
          "template_031clel",
          form.current,
          "uMCK_yq94QeoFZlNK"
        )
        .then(
          (result) => {
            console.log(result.text);
            setFormSubmitted(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div data-aos="fade-in" data-aos-duration="2000">
    <Container className="formContainer" id="form">
      <Row className="align-items-center">
        <Col size={12} md={6}>
          <h1>CONTACT ME</h1>
          <img src={contact_img}/>
        </Col>
        <Col>
          <form ref={form} onSubmit={handleSubmit}>
            <label placeholder="Name">Name</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
            />
            {formErrors.user_name && <div>{formErrors.user_name}</div>}
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
            />
            {formErrors.user_email && <div>{formErrors.user_email}</div>}
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
            {formErrors.message && <div>{formErrors.message}</div>}
            <input type="submit" value="Send" className="send" />
            {formSubmitted && <div>Form submitted successfully!</div>}
          </form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

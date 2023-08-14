import React, { useState } from "react";
import Link from "next/link";
import emailjs from "emailjs-com";
import { Radio, RadioGroup } from "@chakra-ui/react";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

//FORM VALIDATE
// const validateEmailRegex = /^\S+@\S+\.\S+$/;
// const validatePhoneNumberRegex = /^\+?[1-9][0-9]{7,14}$/;
// const dateRegex = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;

const Quotes = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const [second, setSecond] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkbox: false,
    FirstDate: "",
    secondDate: "",
    amount: "",
  });

  // HANDLE CHANGE FUNCTION
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  // HANDLE SUMMIT FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bk8yeji",
        "template_i85dg7c",
        e.target,
        "96iqhJ7BekdwKq5HK"
      )
      .then((result) => {
        setMessage(result.message);
        setError("");
      })
      .catch(
        (err) => setMessage(""),
        setError("An error occurred while sensing form.")
      );

    // CLEAR THE FORM AFTER SUBMITTING.
    e.target.reset();
  };

  return (
    <>
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                Get a <span className="sub_heading_span">Quote</span>
              </h1>
              <p>
                Let's have your project budget and unlock the power of software
                in your business or career path to finacial stability.
              </p>
              <ul className="project-link">
                <li className="project-nav-items">
                  <Link href="/" className="project-nav-link">
                    Home
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">Quotes</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* contact form */}
      <Box className="contact-form-section wf-section">
        <Box className="section-gap-130">
          <Box className="container w-container">
            <Box className="quote-form-wrapper contact-form-wrapper">
              <Box className="quote-upper-text contact-upper-text">
                Get a Quote
              </Box>
              <Box className="quote-form-block w-form">
                <form
                  onSubmit={handleSubmit}
                  // action="HtmlForm"
                  className="quote-form"
                  data-name="Quote Form"
                  name="wf-form-quote-form"
                  method="post"
                >
                  <Box className="contact-input-group">
                    <FormControl isRequired>
                      <FormLabel>Full Name</FormLabel>
                      <Input
                        style={{ border: "1px solid #77b6d8", height: "48px" }}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        id="Contact-Name"
                        maxLength="256"
                        className="default-input-field w-input"
                        placeholder="Full Name*"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email Address</FormLabel>
                      <Input
                        style={{ border: "1px solid #77b6d8", height: "48px" }}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        id="email"
                        maxLength="256"
                        className="default-input-field w-input"
                        placeholder="Email Address*"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Phone Number</FormLabel>
                      <Input
                        style={{ border: "1px solid #77b6d8", height: "48px" }}
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        id="phone"
                        maxLength="18"
                        placeholder="Phone Number*"
                        className="default-input-field w-input"
                      />
                    </FormControl>
                  </Box>
                  <Box className="quote-input-group">
                    <Box
                      className="quote-input-left-block"
                      id="w-node-bde85bbb-254f-6ba9-3d7e-cc5d3fb19536-a714e7e7"
                    >
                      <Box className="quote-input-group-item">
                        <Box className="quote-subtitle">
                          What kind of project?
                        </Box>
                        <ul className="quote-project-list" role="list">
                          <RadioGroup onChange={setSecond} value={second}>
                            <Stack direction="row" flexWrap="wrap">
                              <Radio
                                value="1"
                                m="10px"
                                type="checkbox"
                                name="checkbox"
                                checked={formData.checkbox}
                                onChange={handleChange}
                              >
                                Website
                              </Radio>
                              <Radio
                                value="2"
                                m="10px"
                                type="checkbox"
                                name="checkbox"
                                checked={formData.checkbox}
                                onChange={handleChange}
                              >
                                APP Development
                              </Radio>
                              <Radio
                                value="3"
                                m="10px"
                                type="checkbox"
                                name="checkbox"
                                checked={formData.checkbox}
                                onChange={handleChange}
                              >
                                Graphic Design
                              </Radio>
                              <Radio
                                value="4"
                                m="10px"
                                type="checkbox"
                                name="checkbox"
                                checked={formData.checkbox}
                                onChange={handleChange}
                              >
                                IT Trianing
                              </Radio>
                              <Radio
                                value="5"
                                m="10px"
                                type="checkbox"
                                name="checkbox"
                                checked={formData.checkbox}
                                onChange={handleChange}
                              >
                                Kids Coding
                              </Radio>
                            </Stack>
                          </RadioGroup>
                        </ul>
                      </Box>
                      <Box className="quote-input-group-item">
                        <Box className="quote-subtitle">
                          What would you like us to do for you?
                        </Box>
                        <ul className="quote-project-list" role="list">
                          <RadioGroup onChange={setValue} value={value}>
                            <Stack direction="row" flexWrap="wrap">
                              <Radio
                                value="1"
                                m="10px"
                                type="checkbox"
                                name="checkbox"
                                checked={formData.checkbox}
                                onChange={handleChange}
                              >
                                Web Development
                              </Radio>
                              <Radio
                                value="2"
                                m="10px"
                                type="checkbox"
                                name="checkbox"
                                checked={formData.checkbox}
                                onChange={handleChange}
                              >
                                Business Website
                              </Radio>
                              <Radio
                                value="3"
                                m="10px"
                                type="checkbox"
                                name="checkbox"
                                checked={formData.checkbox}
                                onChange={handleChange}
                              >
                                Web Maintenance
                              </Radio>
                              <Radio
                                value="4"
                                m="10px"
                                type="checkbox"
                                name="checkbox"
                                checked={formData.checkbox}
                                onChange={handleChange}
                              >
                                API works
                              </Radio>
                              <Radio
                                value="5"
                                m="10px"
                                type="checkbox"
                                name="checkbox"
                                checked={formData.checkbox}
                                onChange={handleChange}
                              >
                                E-commerce
                              </Radio>
                              <Radio
                                value="6"
                                m="10px"
                                type="checkbox"
                                name="checkbox"
                                checked={formData.checkbox}
                                onChange={handleChange}
                              >
                                UI'UX Design
                              </Radio>
                              <Radio
                                value="7"
                                m="10px"
                                type="checkbox"
                                name="checkbox"
                                checked={formData.checkbox}
                                onChange={handleChange}
                              >
                                Custom Website
                              </Radio>
                              <Radio
                                value="8"
                                m="10px"
                                type="checkbox"
                                name="checkbox"
                                checked={formData.checkbox}
                                onChange={handleChange}
                              >
                                Front-End Dev.
                              </Radio>
                              <Radio
                                value="9"
                                m="10px"
                                type="checkbox"
                                name="checkbox"
                                checked={formData.checkbox}
                                onChange={handleChange}
                              >
                                Back-End Dev.
                              </Radio>
                            </Stack>
                          </RadioGroup>
                        </ul>
                      </Box>
                    </Box>
                    {/* quote right */}
                    <Box
                      className="quote-input-right-block"
                      id="w-node-_80973ae5-dee8-7587-fcb1-9ff3f51629c1-a714e7e7"
                    >
                      <Box className="quote-input-group-item">
                        <FormControl isRequired>
                          <FormLabel className="quote-subtitle">
                            When should we start?
                          </FormLabel>
                          <Input
                            style={{
                              border: "1px solid #77b6d8",
                              height: "48px",
                            }}
                            type="date"
                            name="start_date"
                            value={formData.date}
                            onChange={handleChange}
                            id="field"
                            maxLength="256"
                            className="default-input-field "
                            placeholder="dd/mm/yyyy*"
                          />
                        </FormControl>
                      </Box>
                      <Box className="quote-input-group-item">
                        <FormControl isRequired>
                          <FormLabel className="quote-subtitle">
                            When should we end?
                          </FormLabel>
                          <Input
                            style={{
                              border: "1px solid #77b6d8",
                              height: "48px",
                              width: "100%",
                            }}
                            type="date"
                            name="end_date"
                            value={formData.date}
                            onChange={handleChange}
                            id="field-2"
                            maxLength="256"
                            className="default-input-field "
                            placeholder="dd/mm/yyyy*"
                          />
                        </FormControl>
                      </Box>
                    </Box>
                  </Box>
                  <FormControl
                    isRequired
                    style={{ width: "100%" }}
                    className="contact-input-group"
                    id="w-node-_39389747-c504-b3cd-cb6d-5870509bdd13-a714e7e7"
                  >
                    <FormLabel className="quote-subtitle">
                      What's your budget?
                    </FormLabel>
                    <Input
                      style={{ border: "1px solid #77b6d8", height: "48px" }}
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      id="Product-Budget-2"
                      placeholder="Type your budget*"
                      maxLength="10"
                      required={true}
                      className="default-input-field w-node-_52673db7-a4af-976a-31bc-fd4d7d3fb9d6-a714e7e7 w-input inputs-bold"
                    />
                  </FormControl>
                  <Button
                    colorScheme="facebook"
                    type="submit"
                    className="primary-button margin-top-50 w-button"
                    value="Send Now"
                    data-wait="please wait..."
                    // onSubmit={handleSubmit}
                  >
                    Send Now
                  </Button>
                </form>
                {message && <p style={{ color: "green" }}>{message}</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Quotes;

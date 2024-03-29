import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import emailjs from "emailjs-com";
import { FormControl, FormLabel, Textarea, Input } from "@chakra-ui/react";


const templateUrl = process.env.TEMPLATE_ID;
const serviceUrl = process.env.SERVICE_ID;
const identifierUrl = process.env.IDENTIFIER_ID;

// FUNCTIONAL ..
const Form = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // HANDLE CONTACT FORM
  const handleContactForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceUrl, templateUrl, e.target, identifierUrl)
      .then((result) => {
        setMessage(result.message);
        setError("");
      })
      .catch((error) => {
        setMessage("");
        setError("An error occurred while sending email.");
      });

    // CLEAR THE FORM AFTER SUBMITTING.
    e.target.reset();
  };
  return (
    <>
      <Box className="contact-form-section wf-section">
        <Box className="section-gap-bottom-130">
          <Box className="container w-container">
            <Box className="contact-form-wrapper">
              <Box className="contact-upper-text">Leave a Reply</Box>
              <Box id="w-form contact-form-block">
                <form
                  onSubmit={handleContactForm}
                  action="value"
                  id="wf-form-contact-form"
                  className="contact-form"
                  name="wf-form-Contact-form"
                  method="post"
                  data-name="Contact form"
                >
                  <Box className="contact-input-group">
                    <FormControl isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        style={{ border: "1px solid #77b6d8", height: "52px" }}
                        type="text"
                        name="user_name"
                        id="Contact-Name"
                        data-name="Contact-Name"
                        maxLength="256"
                        className="default-input-field w-input"
                        placeholder="First name*"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Email Address</FormLabel>
                      <Input
                        style={{ border: "1px solid #77b6d8", height: "52px" }}
                        type="email"
                        name="user_email"
                        id="email"
                        data-name="email"
                        maxLength="256"
                        className="default-input-field w-input"
                        placeholder="Email Address*"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Phone Number</FormLabel>
                      <Input
                        style={{ border: "1px solid #77b6d8", height: "52px" }}
                        type="tel"
                        name="user_number"
                        id="phone"
                        data-name="phone"
                        maxLength="256"
                        placeholder="Phone Number*"
                        className="default-input-field w-input"
                      />
                    </FormControl>
                  </Box>
                  <FormControl isRequired>
                    <FormLabel>Write Message</FormLabel>
                    <Box className="contact-input-group">
                      <Textarea
                        name="message"
                        type="message"
                        maxLength="5000"
                        data-name="field"
                        style={{ border: "1px solid #77b6d8" }}
                        placeholder="Write Message...*"
                        className="default-input-field contact-text-area w-node-_0433b0ec-3f89-81ce-9f2e-3b04ff192a61-84d9bf7c w-input"
                        id="Contact-Message"
                      />
                    </Box>
                  </FormControl>
                  <Button
                    colorScheme="facebook"
                    type="submit"
                    value="Send Now"
                    className="primary-button margin-top-50 w-button"
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

export default Form;

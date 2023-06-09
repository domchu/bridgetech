import React, { useRef } from "react";
import { Box } from "@chakra-ui/react";
import emailjs from "emailjs-com";

const Form = () => {
  const form = useRef();
  // HANDLE CONTACT FORM
  const handleContactForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bk8yeji",
        "template_i85dg7c",
        e.target,
        "96iqhJ7BekdwKq5HK"
      )
      .then((result) => {
        console.log("Successfully submitted, we will be in touch soon", result);
      })
      .catch((err) =>
        console.log("Failed! This might be due to error in networt", err)
      );

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
                  ref={form}
                  onSubmit={handleContactForm}
                  action="value"
                  id="wf-form-contact-form"
                  className="contact-form"
                  name="wf-form-Contact-form"
                  method="post"
                  data-name="Contact form"
                >
                  <Box className="contact-input-group">
                    <input
                      type="text"
                      name="user_name"
                      id="Contact-Name"
                      data-name="Contact-Name"
                      placeholder="Name*"
                      maxLength="256"
                      // pattern="[a-zA-z]{3}"
                      required={true}
                      className="default-input-field w-input"
                    />
                    <input
                      type="email"
                      name="user_email"
                      id="email"
                      data-name="email"
                      placeholder="*Email"
                      maxLength="256"
                      required={true}
                      className="default-input-field w-input"
                    />
                    <input
                      type="tel"
                      name="user_number"
                      id="phone"
                      data-name="phone"
                      placeholder="Phone*"
                      maxLength="256"
                      required={true}
                      className="default-input-field w-input"
                    />
                  </Box>
                  <Box className="contact-input-group">
                    <textarea
                      name="message"
                      id="Contact-Message"
                      maxLength="5000"
                      data-name="field"
                      placeholder="Write here..."
                      className="default-input-field contact-text-area w-node-_0433b0ec-3f89-81ce-9f2e-3b04ff192a61-84d9bf7c w-input"
                    ></textarea>
                  </Box>
                  <Box>
                    <input
                      type="submit"
                      className="primary-button margin-top-50 w-button"
                      value="Send Now"
                      data-wait="please wait..."
                    />
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Form;

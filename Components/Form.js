import React from "react";
import { Box } from "@chakra-ui/react";

const Form = () => {
  return (
    <>
      <Box className="contact-form-section wf-section">
        <Box className="section-gap-bottom-130">
          <Box className="container w-container">
            <Box className="contact-form-wrapper">
              <Box className="contact-upper-text">Leave a Reply</Box>
              <Box id="w-form contact-form-block">
                <form
                  action=""
                  id="wf-form-contact-form"
                  className="contact-form"
                  name="wf-form-Contact-form"
                  method="post"
                  data-name="Contact form"
                >
                  <Box className="contact-input-group">
                    <input
                      type="text"
                      name="Contact-Name"
                      id="Contact-Name"
                      data-name="Contact-Name"
                      placeholder="Name*"
                      maxLength="256"
                      required={true}
                      className="default-input-field w-input"
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      data-name="email"
                      placeholder="*Email"
                      maxLength="256"
                      required={true}
                      className="default-input-field w-input"
                    />
                    <input
                      type="tel"
                      name="phone"
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
                      name="Contact-Message"
                      id="Contact-Message"
                      maxLength="5000"
                      data-name="field"
                      placeholder="Write here..."
                      className="default-input-field contact-text-area w-node-_0433b0ec-3f89-81ce-9f2e-3b04ff192a61-84d9bf7c w-input"
                    ></textarea>
                  </Box>
                  <input
                    type="submit"
                    className="primary-button margin-top-50 w-button"
                    value="Send Now"
                    data-wait="please wait..."
                  />
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

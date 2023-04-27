import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import NewsLetter from "./../NewsLetter";

const Quotes = () => {
  return (
    <>
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                Get a <span className="sub_heading_span">Quotes</span>
              </h1>
              <p>
                Neque porro quisquam est, qui quia lorem some golor sit amet,
                are more consectetur sed
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
            <Box className="quote-form-wrapper">
              <Box className="quote-upper-text">Get a Quote</Box>
              <Box className="quote-form-block w-form">
                <form
                  action=""
                  className="quote-form"
                  data-name="Quote Form"
                  name="wf-form-quote-form"
                  method="post"
                >
                  <Box className="contact-input-group">
                    <input
                      type="text"
                      name="Contact-Name"
                      id="Contact-Name"
                      data-name="Contact-Name"
                      placeholder="Name*"
                      maxLength="256"
                      pattern="[a-zA-z]{3}"
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
                  <Box className="quote-input-group">
                    <Box className="quote-input-left-block"></Box>
                    <Box className="quote-input-right-block">
                      <Box className="quote-input-group-item">
                        <Box className="quote-subtitle">
                          When should we start?
                        </Box>
                        <input
                          type="text"
                          name="Field"
                          id="field"
                          data-name="field"
                          placeholder="Type  Date*"
                          maxLength="256"
                          required={true}
                          className="default-input-field w-node-_0433b0ec-3f89-81ce-9f2e-3b04ff192a61-84d9bf7c w-input"
                        />
                      </Box>
                      <Box className="quote-input-group-item">
                        <Box className="quote-subtitle">
                          When would you like it done?
                        </Box>
                        <input
                          type="text"
                          name="Field 2"
                          id="field-2"
                          data-name="field-2"
                          placeholder="Type  Date*"
                          maxLength="256"
                          required={true}
                          className="default-input-field w-node-_0433b0ec-3f89-81ce-9f2e-3b04ff192a61-84d9bf7c w-input"
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box className="contact-input-group">
                    <Box className="quote-subtitle">What's your budget?</Box>
                    <input
                      type="number"
                      name="Product-Budget"
                      id="Product-Budget-2"
                      data-name="Product-Budget"
                      placeholder="Type your budget*"
                      maxLength="256"
                      required={true}
                      className="default-input-field w-node-_0433b0ec-3f89-81ce-9f2e-3b04ff192a61-84d9bf7c w-input"
                    />
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

      {/* Newsletter part */}
      <NewsLetter />
    </>
  );
};

export default Quotes;

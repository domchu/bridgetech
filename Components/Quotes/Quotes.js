import React from "react";
import {
  Checkbox,
  Box,
  Button,
  FormControl,
  FormLabel,
  
  Input,
} from "@chakra-ui/react";

import Link from "next/link";

const Quotes = () => {
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
                  action="HtmlForm"
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
                        name="user_name"
                        id="Contact-Name"
                        data-name="Contact-Name"
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
                        style={{ border: "1px solid #77b6d8", height: "48px" }}
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
                          <li className="quote-project-item">
                            <Checkbox
                              size="md"
                              style={{ fontWeight: "normal" }}
                            >
                              Website
                            </Checkbox>
                          </li>
                          <li className="quote-project-item">
                            <Checkbox
                              size="md"
                              style={{ fontWeight: "normal" }}
                            >
                              APP Development
                            </Checkbox>
                          </li>
                          <li className="quote-project-item">
                            <Checkbox
                              size="md"
                              style={{ fontWeight: "normal" }}
                            >
                              Graphic Design
                            </Checkbox>
                          </li>
                          <li className="quote-project-item">
                            <Checkbox
                              size="md"
                              style={{ fontWeight: "normal" }}
                            >
                              IT Trianing
                            </Checkbox>
                          </li>
                          <li>
                            <Checkbox
                              size="md"
                              style={{ fontWeight: "normal" }}
                            >
                              Kids Coding
                            </Checkbox>
                          </li>
                        </ul>
                      </Box>
                      <Box className="quote-input-group-item">
                        <Box className="quote-subtitle">
                          What would you like us to?
                        </Box>
                        <ul className="quote-project-list" role="list">
                          <li className="quote-project-item">
                            <Checkbox
                              size="md"
                              style={{ fontWeight: "normal" }}
                            >
                              Web Development
                            </Checkbox>
                          </li>

                          <li className="quote-project-item">
                            <Checkbox
                              size="md"
                              style={{ fontWeight: "normal" }}
                            >
                              Business Website
                            </Checkbox>
                          </li>
                          <li className="quote-project-item">
                            <Checkbox
                              size="md"
                              style={{ fontWeight: "normal" }}
                            >
                              Web Maintenance
                            </Checkbox>
                          </li>
                          <li className="quote-project-item">
                            <Checkbox
                              size="md"
                              style={{ fontWeight: "normal" }}
                            >
                              API works
                            </Checkbox>
                          </li>
                          <li className="quote-project-item">
                            <Checkbox
                              size="md"
                              style={{ fontWeight: "normal" }}
                            >
                              E-commerce
                            </Checkbox>
                          </li>
                          <li className="quote-project-item">
                            <Checkbox
                              size="md"
                              style={{ fontWeight: "normal" }}
                            >
                              UI / UX
                            </Checkbox>
                          </li>
                          <li className="quote-project-item">
                            <Checkbox
                              size="md"
                              style={{ fontWeight: "normal" }}
                            >
                              Web Training
                            </Checkbox>
                          </li>
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
                            type="text"
                            name="field"
                            id="field"
                            data-name="field"
                            maxLength="256"
                            className="default-input-field "
                            placeholder="Type Date*"
                          />
                        </FormControl>
                      </Box>
                      <Box className="quote-input-group-item">
                        <FormControl isRequired>
                          <FormLabel className="quote-subtitle">
                            When should we start?
                          </FormLabel>
                          <Input
                            style={{
                              border: "1px solid #77b6d8",
                              height: "48px",
                              width: "100%",
                            }}
                            type="text"
                            name="field 2"
                            id="field-2"
                            data-name="field 2"
                            maxLength="256"
                            className="default-input-field "
                            placeholder="Type End Date*"
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
                      name="Product-Budget"
                      id="Product-Budget-2"
                      placeholder="Type your budget*"
                      maxLength="256"
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
                  >
                    Send Now
                  </Button>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Quotes;

import React from "react";
import { Box } from "@chakra-ui/react";
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
                            <label
                              className="w-checkbox checkbox-field"
                              htmlFor=""
                            >
                              <input
                                type="checkbox"
                                name="Website"
                                id="Website"
                                data-name="Website"
                                className="checkbox w--redirected-checked w--redirected-focus"
                              />
                              <span className="w-form-label" for="website">
                                Website
                              </span>
                            </label>
                            {/* <label htmlFor=""></label> */}
                          </li>
                          <li className="quote-project-item">
                            <label
                              className="w-checkbox checkbox-field"
                              htmlFor=""
                            >
                              <input
                                type="checkbox"
                                name="App "
                                id="App "
                                data-name="App "
                                className="checkbox w--redirected-checked w--redirected-focus"
                              />
                              <span className="w-form-label" for="website">
                                APP Development
                              </span>
                            </label>
                          </li>
                          <li className="quote-project-item">
                            <label
                              className="w-checkbox checkbox-field"
                              htmlFor=""
                            >
                              <input
                                type="checkbox"
                                name="checkbox-2"
                                id="checkbox-2"
                                data-name="checkbox-2"
                                className="checkbox w--redirected-checked w--redirected-focus"
                              />
                              <span className="w-form-label" for="website">
                                Graphic Design
                              </span>
                            </label>
                          </li>
                        </ul>
                      </Box>
                      <Box className="quote-input-group-item">
                        <Box className="quote-subtitle">
                          What would you like us to?
                        </Box>
                        <ul className="quote-project-list" role="list">
                          <li className="quote-project-item">
                            <label
                              className="w-checkbox checkbox-field"
                              htmlFor="form-group"
                            >
                              <input
                                type="checkbox"
                                name="Website"
                                id="Website"
                                data-name="Website"
                                className="checkbox w--redirected-checked w--redirected-focus"
                              />
                              <span className="w-form-label" for="website">
                                Web Development
                              </span>
                            </label>
                          </li>
                          <li className="quote-project-item">
                            <label
                              className="w-checkbox checkbox-field"
                              htmlFor="form-control"
                            >
                              <input
                                type="checkbox"
                                name="Website"
                                id="Website"
                                data-name="Website"
                                className="checkbox w--redirected-checked w--redirected-focus"
                              />
                              <span className="w-form-label" for="website">
                                Web Design
                              </span>
                            </label>
                            <label htmlFor="form-control"></label>
                          </li>
                          <li className="quote-project-item">
                            <label
                              className="w-checkbox checkbox-field"
                              htmlFor=""
                            >
                              <input
                                type="checkbox"
                                name="Website"
                                id="Website"
                                data-name="Website"
                                className="checkbox w--redirected-checked w--redirected-focus"
                              />
                              <span className="w-form-label" for="website">
                                Web Management
                              </span>
                            </label>
                          </li>
                          <li className="quote-project-item">
                            <label
                              className="w-checkbox checkbox-field"
                              htmlFor="form-control"
                            >
                              <input
                                type="checkbox"
                                name="Website"
                                id="Website"
                                data-name="Website"
                                className="checkbox w--redirected-checked w--redirected-focus"
                              />
                              <span className="w-form-label" for="website">
                                API
                              </span>
                            </label>
                          </li>
                          <li className="quote-project-item">
                            <label
                              className="w-checkbox checkbox-field"
                              htmlFor="form-control"
                            >
                              <input
                                type="checkbox"
                                name="Website"
                                id="Website"
                                data-name="Website"
                                className="checkbox w--redirected-checked w--redirected-focus"
                              />
                              <span className="w-form-label" for="website">
                                E-commerce
                              </span>
                            </label>
                          </li>
                          <li className="quote-project-item">
                            <label
                              className="w-checkbox checkbox-field"
                              htmlFor="form-control"
                            >
                              <input
                                type="checkbox"
                                name="Website"
                                id="Website"
                                data-name="Website"
                                className="checkbox w--redirected-checked w--redirected-focus"
                              />
                              <span className="w-form-label" for="website">
                                UI / UX
                              </span>
                            </label>
                          </li>
                          <li className="quote-project-item">
                            <label
                              className="w-checkbox checkbox-field"
                              htmlFor="form-control"
                            >
                              <input
                                type="checkbox"
                                name="Website"
                                id="Website"
                                data-name="Website"
                                className="checkbox w--redirected-checked w--redirected-focus"
                              />
                              <span className="w-form-label" for="website">
                                Web Training
                              </span>
                            </label>
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
                      className="default-input-field w-node-_52673db7-a4af-976a-31bc-fd4d7d3fb9d6-a714e7e7 w-input inputs-bold"
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
    </>
  );
};

export default Quotes;

import React from "react";
import { Box } from "@chakra-ui/react";

const NewsLetter = ({}) => {
  const handleFormSubmit = () => {};

  const handleInputKeyEvent = (event) => {};

  return (
    <>
      <Box className=" newsletter-section wf-section">
        <Box className="section-gap-bottom-130">
          <Box className="container w-container">
            <Box className="newsletter-grid">
              <Box className="newsletter-content">
                <h2 className="section-title">
                  Subscribe to our
                  <span className="section-title-inner-style">NewsLetter</span>
                </h2>
                <Box className="section-text">
                  Subscribe to our newsletter for get laset update of
                  <span className="newsletter-text-span">
                    news, offers, promotions, blog post
                  </span>
                  in which toil and pain can procure him some great pleasure.
                </Box>
              </Box>
              <Box className="newsletter-form">
                <Box className="newsletter-form-block w-form">
                  <form
                    action=""
                    id="email-form"
                    className="newsletter-form"
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                  >
                    <input
                      type="email"
                      name="email-form"
                      id="newsletter-email"
                      className="newsletter-input-form w-input"
                      data-name="Email Form"
                      maxLength="256"
                      placeholder="Enter your email here ..."
                      required={true}
                      onChange={(event) => setEmail(event?.target?.value ?? "")}
                      onKeyUp={(event) => handleInputKeyEvent(event)}
                    />
                    <input
                      type="submit"
                      value="Subscribe"
                      data-wait="please wait..."
                      className="primary-button newsletter-button w-button"
                      onClick={handleFormSubmit}
                    />
                  </form>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewsLetter;

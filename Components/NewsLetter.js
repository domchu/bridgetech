import React from "react";
import { Box } from "@chakra-ui/react";

const NewsLetter = () => {
  return (
    <>
      <Box className="news-container newsletter-section">
        <Box className="newsletter-container">
          <Box className="newsletter-contents">
            <h2>
              Subscribe to our <span className="section-span">NewsLetter</span>
            </h2>
            <Box className="section-text">
              Subscribe to our newsletter for get laset update of
              <span className="section-span newsletter-text">
                news, offers, promotions, blog post
              </span>
              in which toil and pain can procure him some great pleasure.
            </Box>
          </Box>
          <Box className="newsletter-form">
            <Box className="w-form">
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
                />
                <input
                  type="submit"
                  value="Send Now"
                  data-wait="please wait..."
                  className="primary-button newsletter-button w-button"
                />
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewsLetter;

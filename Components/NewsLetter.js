import React from "react";
import { Box } from "@chakra-ui/react";
import NewsLetterSubscribe from "./NewsLetterSubscribe";

const NewsLetter = ({}) => {
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
                  in which toil and pain can procure you some great pleasure.
                </Box>
              </Box>
              <Box className="newsletter-form">
                <Box className="newsletter-form-block w-form">
                  <NewsLetterSubscribe />
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

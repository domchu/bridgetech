import React from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import Expert from "../public/images/team.png";
import Action from "../public/images/action.png";
import Tech from "../public/images/tech.png";
import ManImage from "../public/images/male-img.png";

const WhyBridgetech = () => {
  return (
    <>
      <Box className="choose-section wf-section">
        <Box className="section-gap-bottom-130">
          <Box className="container w-container">
            <Box className="choose-grid-layout">
              <Box className="choose-gridbox-left">
                <Box className="section-block">
                  <h2 className="section-title">
                    Why should people
                    <span className="section-title-inner-style">
                      Choose Bridgekode,
                    </span>
                    Because...
                  </h2>
                  <Box className="section-text">
                    There are several reasons why people should choose
                    Bridgekode for their web development training or services.
                    It's important for individuals to carefully evaluate their
                    specific needs and compare different options before choosing
                    any training provider or service. Conducting thorough
                    research, reviewing testimonials, and considering personal
                    goals can help determine if Bridgekode aligns with their
                    requirements for web development training or services.
                  </Box>
                </Box>
                <ul className="choose-list w-list-unstyled" role="list">
                  <li className="choose-list-item">
                    <Box className="choose-list-image-icon-block">
                      <Image
                        src={Expert}
                        alt="Choose Icon"
                        loading="lazy"
                        className="choose-image-icon img"
                      />
                    </Box>
                    <Box className="choose-content">
                      <Box className="choose-title">Expert Team</Box>
                      <p className="choose-text">
                        At Bridgekode, we take great pride in our expert team of
                        professionals who are at the forefront of software
                        development. Our team is comprised of highly skilled and
                        experienced individuals with diverse expertise in
                        various technologies and domains.
                      </p>
                    </Box>
                  </li>
                  <li className="choose-list-item">
                    <Box className="choose-list-image-icon-block">
                      <Image
                        src={Action}
                        alt="Choose Icon"
                        loading="lazy"
                        className="choose-image-icon img"
                      />
                    </Box>
                    <Box className="choose-content">
                      <Box className="choose-title">Quick Action</Box>
                      <p className="choose-text">
                        At Bridgekode, we understand the importance of quick
                        action and responsiveness in the fast-paced world of
                        software development. Our team is committed to prompt
                        and efficient execution to meet your project needs.
                      </p>
                    </Box>
                  </li>
                  <li className="choose-list-item">
                    <Box className="choose-list-image-icon-block">
                      <Image
                        src={Tech}
                        alt="Choose Icon"
                        loading="lazy"
                        className="choose-image-icon img"
                      />
                    </Box>
                    <Box className="choose-content">
                      <Box className="choose-title">Latest Technology</Box>
                      <p className="choose-text">
                        These are just a few of the many emerging technologies
                        that are shaping our world. It's important to stay
                        updated with the latest trends and assess how they can
                        potentially impact your industry or business to stay
                        competitive and leverage technological advancements to
                        your advantage.
                      </p>
                    </Box>
                  </li>
                </ul>
              </Box>

              {/*WHY CHOOSE BRIDGETECH RIGHT PART  */}
              <Box className="choose-gridbox-right">
                <Box className="choose-image-box">
                  <Image
                    src={ManImage}
                    alt="Choose Image"
                    className="choose-image img"
                  />
                  <Box className="choose-inner-text-box-1">
                    <Box className="text-block">100% Clients Satisfaction</Box>
                  </Box>
                  <Box className="choose-inner-text-box-2">
                    <Box className="text-block">
                      Get Perfect Solution for your Business
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default WhyBridgetech;

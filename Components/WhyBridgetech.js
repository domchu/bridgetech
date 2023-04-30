import React from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import Expert from "../public/images/team.png";

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
                      Choose Optitech,
                    </span>
                    Because...
                  </h2>
                  <Box className="section-text">
                    Neque porro quisquam est, qui dolorem ipsum quia golor sit
                    amet, conse ctetur, adipisci velit, sed eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus mentioned technology
                  </Box>
                </Box>
                <ul className="choose-list w-list-unstyled" role="list">
                  <li className="choose-list-item">
                    <Box className="choose-list-image-icon-block">
                      <Image
                        src={Expert}
                        alt="Choose Icon"
                        loading="lazy"
                        className="choose-image-icon"
                      />
                    </Box>
                    <Box className="choose-content">
                      <Box className="section-title">Expert Team</Box>
                      <p className="choose-text">
                        Neque porro quisquam est, qui dolorem quia enough
                        impedit quo minus quod maxime
                      </p>
                    </Box>
                  </li>
                </ul>
              </Box>
              <Box className="choose-gridbox-right"></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default WhyBridgetech;

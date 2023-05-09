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
                      Choose BridgeTech,
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
                        className="choose-image-icon img"
                      />
                    </Box>
                    <Box className="choose-content">
                      <Box className="choose-title">Expert Team</Box>
                      <p className="choose-text">
                        Neque porro quisquam est, qui dolorem quia enough
                        impedit quo minus quod maxime
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
                        Neque porro quisquam est, qui dolorem quia enough
                        impedit quo minus quod maxime
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
                        Neque porro quisquam est, qui dolorem quia enough
                        impedit quo minus quod maxime
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
                      Get Perfect Solution for your Problems
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

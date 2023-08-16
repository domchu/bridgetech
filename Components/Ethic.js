import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import MeetPeople from "../public/images/work-proess-1.png";
import Brain from "../public/images/work-proess-2.png";
import Solution from "../public/images/work-proess-3.png";
import Project from "../public/images/work-proess-4.png";

const Ethic = () => {
  return (
    <>
      <Box className="work-progress wf-section">
        <Box className="section-gap-bottom-130">
          <Box className="container justify-center w-container">
            <Box className="section-justify-center">
              <Box className="section-block max-width-475 text-center">
                <h2 className="section-title">
                  How <span className="section-title-inner-style">we</span> work
                </h2>
                <Box className="section-text">
                  The modus operandi in bridgekode makes life easy
                  <br />
                  to all team members
                </Box>
              </Box>
            </Box>
            <Box className="work-progress-block">
              <Box
                className="single-work-progress-item"
                id="w-node-_0e08f737-4d77-aa87-5e85-122aa03eaf97-44adaf1d"
              >
                <Box className="work-progress-icon-block">
                  <Image
                    src={MeetPeople}
                    alt="Group of People Sitting"
                    className="work-progress-icon-image img"
                    loading="lazy"
                  />
                </Box>
                <Box
                  className="work-progress-text"
                  style={{ color: "rgb(2,62.138)" }}
                >
                  Meet the Client
                </Box>
                <Box
                  className="work-progress-number-text"
                  style={{ opacity: "0.3" }}
                >
                  01
                </Box>
                <Box
                  className="work-progress-horizontal-line-bottom"
                  id="special"
                ></Box>
              </Box>
              <Box
                className="single-work-progress-item"
                id="w-node-_0e08f737-4d77-aa87-5e85-122aa03eaf97-44adaf1d"
              >
                <Box className="work-progress-icon-block">
                  <Image
                    src={Brain}
                    alt="Human Brain Image"
                    className="work-progress-icon-image img"
                    loading="lazy"
                  />
                </Box>
                <Box
                  className="work-progress-text"
                  style={{ color: "rgb(2,62.138)" }}
                >
                  Brainstorming
                </Box>
                <Box
                  className="work-progress-number-text"
                  style={{ opacity: "0.3" }}
                >
                  02
                </Box>
                <Box
                  className="work-progress-horizontal-line-bottom"
                  id="special"
                ></Box>
              </Box>
              <Box
                className="single-work-progress-item"
                id="w-node-_0e08f737-4d77-aa87-5e85-122aa03eaf97-44adaf1d"
              >
                <Box className="work-progress-icon-block">
                  <Image
                    src={Solution}
                    alt="Light Bulb Image"
                    className="work-progress-icon-image img"
                    loading="lazy"
                  />
                </Box>
                <Box
                  className="work-progress-text"
                  style={{ color: "rgb(2,62.138)" }}
                >
                  Find the Solution
                </Box>
                <Box
                  className="work-progress-number-text"
                  style={{ opacity: "0.3" }}
                >
                  03
                </Box>
                <Box
                  className="work-progress-horizontal-line-bottom"
                  id="special"
                ></Box>
              </Box>
              <Box
                className="single-work-progress-item"
                id="w-node-_0e08f737-4d77-aa87-5e85-122aa03eaf97-44adaf1d"
              >
                <Box className="work-progress-icon-block">
                  <Image
                    src={Project}
                    alt="Two Hands with Light In-between"
                    className="work-progress-icon-image img"
                    loading="lazy"
                  />
                </Box>
                <Box
                  className="work-progress-text"
                  style={{ color: "rgb(2,62.138)" }}
                >
                  Project Done
                </Box>
                <Box
                  className="work-progress-number-text"
                  style={{ opacity: "0.3" }}
                >
                  04
                </Box>
                <Box
                  className="work-progress-horizontal-line-bottom"
                  id="special"
                ></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Ethic;

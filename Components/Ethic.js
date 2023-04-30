import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import MeetPeople from "../public/images/work-proess-2.png";

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
                  Neque porro quisquam est, qui dolorem ipsum quia golor sit
                  amet
                  <br />
                  ctetur, adipisci velit, sed eligendi optio cumque nihil
                  impedit
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
                    alt="Work Icon Image"
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
                  className="work-progress-horizontal-lin-bottom"
                  style={{}}
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

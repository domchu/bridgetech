import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Man from "../../public/images/digital-head.jpg";

const TeamProfile = () => {
  return (
    <>
      <Box className="team-details-section wf-section">
        <Box className="section-gap-130">
          <Box className="container w-container">
            <Box className="team-details-block">
              <Box className="team-details-image-block">
                <Image src={Man} alt="A man wearing suite" />
              </Box>
              <Box className="team-details-content-block"></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TeamProfile;

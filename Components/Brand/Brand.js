import React from "react";
import { Box } from "@chakra-ui/react";
import LogoBrand from "../../public/images/bridgekode-logo.jpg";

const Brand = () => {
  return (
    <>
      <marquee>
        <Box>
          <img src={LogoBrand} alt="Brand Logo" />
        </Box>
        <h2 style={{ fontSize: "30px" }}>
          Bridgekode Software Development Services
        </h2>
      </marquee>
    </>
  );
};

export default Brand;

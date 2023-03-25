import React from "react";
import { Flex, Box } from "@chakra-ui/react";

const Topnav = () => {
  return (
    <>
      <Flex
        justify="space-betweem"
        margin="auto"
        width="80%"
        align="center"
        textAlign="center"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      >
        <Box></Box>
        <Box></Box>
      </Flex>
      <h1>Topnav</h1>
    </>
  );
};

export default Topnav;

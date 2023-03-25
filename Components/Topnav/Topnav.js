import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Link } from "next/link";

const Topnav = () => {
  return (
    <>
      <Flex
        justifyContent="space-betweem"
        margin="auto"
        width="80%"
        align="center"
        textAlign="center"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      >
        <Box>
          <ul>
            <li>
              <Link href="/" passhref="true">
                info@example.com
              </Link>
            </li>
            <li>
              <Link href="Tel:+234 07034278995" passhref="true">
                +234 (0) 70 3427 8995
              </Link>
            </li>
          </ul>
        </Box>
        <Box>
          <ul>
            <li>
              <Link href="/access/login" passhref="true">
                Login
              </Link>
            </li>
            <li>
              <Link href="/access/signin" passhref="true">
                Register
              </Link>
            </li>
          </ul>
        </Box>
      </Flex>
      <h1>Topnav</h1>
    </>
  );
};

export default Topnav;

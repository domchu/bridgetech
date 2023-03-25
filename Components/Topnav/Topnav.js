import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Link from "next/link";

const Topnav = () => {
  return (
    <>
      <Flex
        className="topnav-container"
        justifyContent="space-between"
        margin="auto"
        width="80%"
        align="center"
        textAlign="center"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      >
        <Box>
          <Flex
            justifyContent="center"
            align="center"
            textAlign="center"
            height="auto"
            margin="auto"
            flexWrap="wrap"
          >
            <Box>
              <li className="topnav-links">
                <Link href="/" passhref="true">
                  info@example.com
                </Link>
              </li>
            </Box>
            <div className="divider" />
            <Box>
              <li className="topnav-links register">
                <Link href="Tel:+234 07034278995" passhref="true">
                  +234 (0) 70 3427 8995
                </Link>
              </li>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex
            justifyContent="center"
            align="center"
            textAlign="center"
            height="auto"
            margin="auto"
          >
            <Box>
              <li className="topnav-links">
                <Link href="/access/login" passhref="true">
                  Login
                </Link>
              </li>
            </Box>
            <div className="divider" />
            <Box>
              <li className="topnav-links register">
                <Link href="/access/signin" passhref="true">
                  Register
                </Link>
              </li>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Topnav;

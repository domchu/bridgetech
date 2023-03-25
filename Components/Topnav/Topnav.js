import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Link from "next/link";

const Topnav = () => {
  return (
    <>
      <Flex
        className="topnav-container"
        justifyContent="space-around"
        margin="auto"
        width="80%"
        align="center"
        textAlign="center"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      >
        <Box>
          <Flex>
            <Box>
              <li>
                <Link href="/" passhref="true">
                  info@example.com
                </Link>
              </li>
            </Box>
            <Box>
              <li>
                <Link href="Tel:+234 07034278995" passhref="true">
                  +234 (0) 70 3427 8995
                </Link>
              </li>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex>
            <Box>
              <li>
                <Link href="/access/login" passhref="true">
                  Login
                </Link>
              </li>
            </Box>
            <Box>
              <li>
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

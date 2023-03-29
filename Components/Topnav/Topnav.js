import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Link from "next/link";
import { FaBars, FaEnvelope, FaPhone, FaPhoneAlt } from "react-icons/fa";

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
                <Flex align="center">
                  <FaEnvelope className="topnav-icons" />
                  <Link href="/" passhref="true">
                    info@example.com
                  </Link>
                </Flex>
              </li>
            </Box>
            <div className="divider" />
            <Box>
              <li className="topnav-links register">
                <Flex align="center">
                  <FaPhoneAlt className="topnav-icons" />
                  <Link href="Tel:+234 07034278995" passhref="true">
                    +234 (0) 70 3427 8995
                  </Link>
                </Flex>
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

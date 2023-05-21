import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Link from "next/link";
import {
  FaBlogger,
  FaEnvelope,
  FaPhoneAlt,
  FaRegAddressBook,
} from "react-icons/fa";

const Topnav = () => {
  return (
    <>
      <Box className="top-nav-container">
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
              width="auto"
              // flexWrap="wrap"
            >
              <Box>
                <li className="topnav-links">
                  <Flex align="center">
                    <FaEnvelope className="topnav-icons" />
                    <Link href="mailto:info@example.com" passhref="true">
                      info@bridgekodetech.com
                    </Link>
                  </Flex>
                </li>
              </Box>
              <div className="divider" />
              <Box>
                <li className="topnav-links regster mobile">
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
                  <Flex align="center">
                    <FaBlogger className="topnav-icons" />
                    <Link href="/access/login" passhref="true">
                      Login
                    </Link>
                  </Flex>
                </li>
              </Box>
              <div className="divider" />
              <Box>
                <li className="topnav-links register">
                  <Flex align="center">
                    <FaRegAddressBook className="topnav-icons" />
                    <Link href="/access/signin" passhref="true">
                      Register
                    </Link>
                  </Flex>
                </li>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Topnav;

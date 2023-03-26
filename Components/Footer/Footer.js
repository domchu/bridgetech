import React from "react";
import Link from "next/link";
import Image from "next/image";
import action from "../../public/images/action.png";
import { Flex, Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Flex>
        <Box>
          <Link href="/">
            <Image src={action} className="brand-logo" alt="brand Logo" />
          </Link>
          <p>
            Neque porro quisquam est qui most dolorem quia enough impedit same
            quo minus quod and maxime
          </p>
        </Box>
        <Box>
          <h2>Links</h2>
          <li>
            <Link href="/" className="nav-link" passhref="true">
              About
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-link" passhref="true">
              Our Service
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-link" passhref="true">
              Company
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-link" passhref="true">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-link" passhref="true">
              Blog Post
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-link" passhref="true">
              Contact
            </Link>
          </li>
        </Box>
      </Flex>
    </>
  );
};

export default Footer;

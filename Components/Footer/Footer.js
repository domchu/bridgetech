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
            <Link href="/aboutus" className="nav-link" passhref="true">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link" passhref="true">
              Our Service
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-link" passhref="true">
              Company
            </Link>
          </li>
          <li>
            <Link href="/projects" className="nav-link" passhref="true">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className="nav-link" passhref="true">
              Blog Post
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link" passhref="true">
              Contact
            </Link>
          </li>
        </Box>
        <Box>
          <h2>Supports</h2>

          <li>
            <Link href="/contact" className="nav-link" passhref="true">
              info@example.com
            </Link>
          </li>
          <li>
            <Link href="Tel:+234 07034278995" passhref="true">
              +234 (0) 70 3427 8995
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link" passhref="true">
              License
            </Link>
          </li>
        </Box>
        <Box>
          {/* <h2>Contact</h2>
                  <Box>
                      <p>298A, First Floor, Colex Building</p>
                  </Box> */}
        </Box>
      </Flex>
    </>
  );
};

export default Footer;

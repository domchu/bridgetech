import React from "react";
import Link from "next/link";
import Image from "next/image";
import action from "../../public/images/action.png";
import { Flex, Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box className="footer-top">
        <Flex className="footer-container">
          <Box className="footer-link">
            <h2>
              Bridge<span>Tech</span>
            </h2>
            <Link href="/">
              <Image src={action} className="footer__brand" alt="brand Logo" />
            </Link>
            <p>
              Neque porro quisquam est qui most dolorem quia enough impedit same
              quo minus quod and maxime
            </p>
          </Box>
          <Box className="footer-link">
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
          <Box className="footer-link">
            <h2>Supports</h2>
            <li>
              <Link href="/login" className="nav-link" passhref="true">
                Login
              </Link>
            </li>
            <li>
              <Link href="/team" className="nav-link" passhref="true">
                Team
              </Link>
            </li>
            <li>
              <Link href="/faq" className="nav-link" passhref="true">
                Faq
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link" passhref="true">
                License
              </Link>
            </li>
          </Box>
          <Box className="footer-link">
            <h2>Contact</h2>
            <Box>
              <p>298A, First Floor, Colex Building</p>
              <p>North City, Main Town, USA</p>
            </Box>
            <Box style={{ marginTop: "10px" }}>
              <li>
                <Link href="Tel:+234 07034278995" passhref="true">
                  +234 (0) 70 3427 8995
                </Link>
              </li>
              <li>
                <Link href="Tel:+234 07034278995" passhref="true">
                  +234 (0) 70 3427 8995
                </Link>
              </li>
            </Box>
            <Box style={{ marginTop: "10px" }}>
              <li className="topnav-linksrrrrr">
                <Link href="/" passhref="true">
                  info@example.com
                </Link>
              </li>
              <li className="topnav-linksrrrr">
                <Link href="/" passhref="true">
                  info@example.com
                </Link>
              </li>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;

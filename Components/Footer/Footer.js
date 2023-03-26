import React from "react";
import Link from "next/link";
import Image from "next/image";
import action from "../../public/images/action.png";
import { Flex, Box } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <Box className="footer-top">
          <Flex
            className="footer-container"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
          >
            <Box className="footer-link">
              <h2>
                Bridge<span className="section-span">Tech</span>
              </h2>
              <Link href="/">
                <Image
                  src={action}
                  className="footer__brand"
                  alt="brand Logo"
                  loading="lazy"
                />
              </Link>
              <p>
                Neque porro quisquam est qui most dolorem quia enough impedit
                same quo minus quod and maxime
              </p>
              <Flex>
                <Link href="/">
                  <FaFacebook className="icons" />
                </Link>
                <Link href="/">
                  <FaInstagram className="icons" />
                </Link>
                <Link href="/">
                  <FaTwitter className="icons" />
                </Link>
                <Link href="/">
                  <FaLinkedin className="icons" />
                </Link>
              </Flex>
            </Box>
            <Box className="footer-link">
              <h2>Links</h2>
              <li>
                <Link
                  href="/aboutus"
                  className="footer-nav-link"
                  passhref="true"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="footer-nav-link"
                  passhref="true"
                >
                  Our Service
                </Link>
              </li>
              <li>
                <Link href="/" className="footer-nav-link" passhref="true">
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="footer-nav-link"
                  passhref="true"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="footer-nav-link" passhref="true">
                  Blog Post
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="footer-nav-link"
                  passhref="true"
                >
                  Contact
                </Link>
              </li>
            </Box>
            <Box className="footer-link">
              <h2>Support</h2>
              <li>
                <Link href="/login" className="footer-nav-link" passhref="true">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/team" className="footer-nav-link" passhref="true">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/faq" className="footer-nav-link" passhref="true">
                  Faq
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="footer-nav-link"
                  passhref="true"
                >
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
              <Box style={{ marginTop: "8px" }}>
                <li>
                  <Link
                    href="Tel:+234 07034278995"
                    className="footer-nav-link"
                    passhref="true"
                  >
                    +234 (0) 70 3427 8995
                  </Link>
                </li>
                <li>
                  <Link
                    href="Tel:+234 07034278995"
                    className="footer-nav-link"
                    passhref="true"
                  >
                    +234 (0) 70 3427 8995
                  </Link>
                </li>
              </Box>
              <Box style={{ marginTop: "8px" }}>
                <li>
                  <Link href="/" className="footer-nav-link" passhref="true">
                    info@example.com
                  </Link>
                </li>
                <li>
                  <Link href="/" className="footer-nav-link" passhref="true">
                    info@example.com
                  </Link>
                </li>
              </Box>
            </Box>
          </Flex>
        </Box>
        <div className="footer-bottom">
          <Box className="copy-right">
            <p>
              © 2022 designed and developed by
              <a href="/" target="_blank">
                Mr Ochu Dominic.
              </a>
              Powered by
              <a href="/" target="_blank">
                Bridge<span className="section-span">Tech</span>
              </a>
            </p>
          </Box>
        </div>
      </footer>
    </>
  );
};

export default Footer;

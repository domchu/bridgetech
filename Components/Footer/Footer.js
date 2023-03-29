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
              <p className="footer-link-p">
                Neque porro quisquam est qui most dolorem quia enough impedit
                same quo minus quod and maxime
              </p>
              <Flex className="icons-container">
                <Link href="/" target="_blank">
                  <FaFacebook className="icons" />
                </Link>
                <Link href="/" target="_blank">
                  <FaInstagram className="icons" />
                </Link>
                <Link href="/" target="_blank">
                  <FaTwitter className="icons" />
                </Link>
                <Link href="/" target="_blank">
                  <FaLinkedin className="icons" />
                </Link>
              </Flex>
            </Box>
            <Box className="footer-link">
              <h2>Links</h2>
              <li>
                <Link
                  href="/pages/aboutus"
                  className="footerlink"
                  passhref="true"
                >
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="footerlink" passhref="true">
                  Our Service
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="footerlink" passhref="true">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/projects" className="footerlink" passhref="true">
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.google.com"
                  target="_blank"
                  className="footerlink"
                  passhref="true"
                >
                  Blog Post
                </Link>
              </li>
              <li>
                <Link href="/contactus" className="footerlink" passhref="true">
                  Contact
                </Link>
              </li>
            </Box>
            <Box className="footer-link">
              <h2>Support</h2>
              <li>
                <Link
                  href="/access/login"
                  className="footerlink"
                  passhref="true"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link href="/pages/team" className="footerlink" passhref="true">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/pages/faq" className="footerlink" passhref="true">
                  Faq
                </Link>
              </li>
              <li>
                <Link href="/contactus" className="footerlink" passhref="true">
                  License
                </Link>
              </li>
              <li>
                <Link href="/register" className="footerlink" passhref="true">
                  Register
                </Link>
              </li>
            </Box>
            <Box className="footer-link">
              <h2>Contact</h2>
              <Box>
                <p>298A, First Floor, Colex Building</p>
                <p>North City, Main Town, USA</p>
              </Box>
              <Box style={{ margin: "10px 0px" }}>
                <li>
                  <Link
                    href="Tel:+234 07034278995"
                    className="footerlink"
                    passhref="true"
                  >
                    +234 (0) 70 3427 8995
                  </Link>
                </li>
                <li>
                  <Link
                    href="Tel:+234 08110998914"
                    className="footerlink"
                    passhref="true"
                  >
                    +234 (0) 81 1099 8914
                  </Link>
                </li>
              </Box>
              <Box>
                <li>
                  <Link
                    href="/"
                    target="_blank"
                    className="footerlink"
                    passhref="true"
                  >
                    info@example.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    target="_blank"
                    className="footerlink"
                    passhref="true"
                  >
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
              © 2023 designed and developed by
              <Link href="/" target="_blank">
                Mr Ochu Dominic.
              </Link>
              Powered by
              <Link href="/" target="_blank">
                Bridge<span className="section-span">Tech</span>
              </Link>
            </p>
          </Box>
        </div>
      </footer>
    </>
  );
};

export default Footer;

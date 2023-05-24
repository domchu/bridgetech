import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Flex, Box } from "@chakra-ui/react";
import BrandWhite from "../../public/images/bridgekode-white.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
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
              <Link href="/">
                <Image
                  src={BrandWhite}
                  className="footer__brand"
                  alt="brand Logo"
                  loading="lazy"
                />
              </Link>
              <p className="footer-link-p">
                Bridgekode is software development services focuses on turning
                ideas into creativities & digital solutions
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
            <Box className="footer-link footer-center">
              <h2>Menu</h2>
              <li>
                <Link
                  href="/pages/aboutus"
                  id="footerlink"
                  passhref="true"
                  className={currentRoute == "/pages/aboutus" ? "active" : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services/service-home"
                  id="footerlink"
                  passhref="true"
                >
                  Our Service
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software-development"
                  id="footerlink"
                  className={
                    currentRoute == "/services/software-development"
                      ? "active"
                      : ""
                  }
                  passhref="true"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  id="footerlink"
                  className={currentRoute == "/projects" ? "active" : ""}
                  passhref="true"
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.google.com"
                  target="_blank"
                  id="footerlink"
                  className={currentRoute == "/blog" ? "active" : ""}
                  passhref="true"
                >
                  Blog Post
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  id="footerlink"
                  className={currentRoute == "/contactus" ? "active" : ""}
                  passhref="true"
                >
                  Contact
                </Link>
              </li>
            </Box>
            <Box className="footer-link footer-center">
              <h2>Support</h2>
              <li>
                <Link
                  href="/access/login"
                  id="footerlink"
                  className={currentRoute == "/access/login" ? "active" : ""}
                  passhref="true"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/team"
                  id="footerlink"
                  className={currentRoute == "/pages/team" ? "active" : ""}
                  passhref="true"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/faq"
                  id="footerlink"
                  className={currentRoute == "/pages/faq" ? "active" : ""}
                  passhref="true"
                >
                  Faq
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  id="footerlink"
                  className={currentRoute == "/contactus" ? "active" : ""}
                  passhref="true"
                >
                  Enquires
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  id="footerlink"
                  className={currentRoute == "/register" ? "active" : ""}
                  passhref="true"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/course"
                  id="footerlink"
                  className={currentRoute == "/courses/course" ? "active" : ""}
                  passhref="true"
                >
                  Courses
                </Link>
              </li>
            </Box>
            <Box className="footer-link">
              <h2>Contact Us</h2>
              <Box>
                <p>Shop H4, First Floor, Wharfedale Building</p>
                <p>Alaba Int'l Mkt, Ojo-Lagos, Nigeria</p>
              </Box>
              <Box style={{ margin: "10px 0px" }}>
                <li>
                  <Link
                    href="Tel:+234 07034278995"
                    id="footerlink"
                    passhref="true"
                  >
                    +234 (0) 70 3427 8995
                  </Link>
                </li>
                <li>
                  <Link
                    href="Tel:+234 08110998914"
                    id="footerlink"
                    passhref="true"
                  >
                    +234 (0) 81 1099 8914
                  </Link>
                </li>
              </Box>
              <Box>
                <li>
                  <Link
                    href="mailto:info@example.com"
                    target="_blank"
                    id="footerlink"
                    passhref="true"
                  >
                    info@bridgekodetech.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:info@example.com"
                    target="_blank"
                    id="footerlink"
                    passhref="true"
                  >
                    bridgekodetech@gmail.com
                  </Link>
                </li>
              </Box>
            </Box>
          </Flex>
        </Box>
        <div className="footer-bottom">
          <Box className="copy-right">
            <p>
              © 2023 BridgeTech, All right reserved. designed and developed by
              <Link
                href="https://www.linkedin/in/dominic-ochu/"
                target="_blank"
              >
                Mr.Dominic
              </Link>
              Powered by
              <Link href="/" target="_blank">
                Bridgekode
              </Link>
            </p>
          </Box>
        </div>
      </footer>
    </>
  );
};

export default Footer;

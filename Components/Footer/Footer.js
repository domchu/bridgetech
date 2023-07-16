import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Flex, Box } from "@chakra-ui/react";
import BrandWhite from "../../public/images/bridgekode-white.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import ScrollToTop from "../ScrollToTop";

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
              md: "column",
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
                Bridgekode is a software development company that focuses on web
                design, students/kids coding, software development, general IT
                training, turning ideas into creativities & provide digital
                solutions to businesses across globe.
              </p>
              <Flex className="icons-container">
                <Link href="https:/www.test.com" target="_blank">
                  <FaFacebook className="icons" />
                </Link>
                <Link
                  href="https://www.instagram.com/bridgekodetech.2023/"
                  target="_blank"
                >
                  <FaInstagram className="icons" />
                </Link>
                <Link href="https://twitter.com/software6767" target="_blank">
                  <FaTwitter className="icons" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/bridgekode-software-development-company-750061282/"
                  target="_blank"
                >
                  <FaLinkedin className="icons" />
                </Link>
                <Link href="https://wa.me/2347034278995" target="_blank">
                  <FaWhatsapp className="icons" />
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
                  Our Services
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
                  Projects
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
                  Blog Posts
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
                <p>
                  <strong style={{ color: "#fff" }}>Head Office :</strong> Shop
                  234, N0.53 Aka Road, Alaba Int'l Market, Ojo-Lagos State.
                  Nigeria
                </p>
              </Box>
              <br />
              <Box>
                <p>
                  <strong style={{ color: "#fff" }}>Branch Office : </strong>
                  N0.53 Aka Road, White House Bus-Stop Okokomaiko, Ojo-Lagos
                  State. Nigeria
                </p>
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
                    href="mailto:info@bridgekodetech.com"
                    target="_blank"
                    id="footerlink"
                    passhref="true"
                    rel="nofollow"
                  >
                    info@bridgekodetech.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:bridgekodetech@gmail.com"
                    target="_blank"
                    id="footerlink"
                    passhref="true"
                    rel="nofollow"
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
              Copyright©2022 Bridgekode. All Rights Reserved. Designed and
              Developed by
              <Link
                href="https://www.linkedin/in/dominic-ochu/"
                target="_blank"
                rel="nofollow"
              >
                Mr.Dominic
              </Link>
              | Powered by
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

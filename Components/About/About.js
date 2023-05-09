import React from 'react'
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../../public/images/about-image.png";
import ServiceQuote from "../../public/images/service-quote.png";
import TextQuote from "../../public/images/text-quote.png";
import WhyBridgetech from "../WhyBridgetech";

const About = () => {
  return (
    <>
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                About <span className="sub_heading_span">Us</span>
              </h1>
              <p>
                Neque porro quisquam est, qui quia lorem some golor sit amet,
                are more consectetur sed
              </p>
              <ul className="project-link">
                <li className="project-nav-items">
                  <Link href="/" className="project-nav-link">
                    Home
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">About</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* HI THERE */}
      <Box className="about-section wf-section">
        <Box className="section-gap-top-130">
          <Box className="container w-container">
            <Box className="about-block">
              <Box className="about-image-block">
                <Image
                  src={AboutImg}
                  alt="About Image"
                  loading="lazy"
                  className="about-section-quote-image img"
                />
                <Image
                  src={ServiceQuote}
                  alt="Service Quote Image"
                  loading="lazy"
                  className="service-section-quote-image img"
                />
              </Box>
              <Box className="about-content">
                <h2 className="section-title">
                  Hi <span className="section-title-inner-style">there!</span>
                </h2>
                <p className="about-subtitle paragraph-medium">
                  Over 3 years working in IT services developing software
                  applications and mobile apps for clients all over the world.
                </p>
                <p>
                  We are <strong>Bridgetech</strong> provide the best quality
                  <Link href="https://www.example.com">IT solution</Link> neque
                  porro quisquam est qui dolorem ipsum quia golor sit amet,
                  conse ctetur, adipisci velit, sed eligendi optio cumque nihil
                  impedit quo minus id quod maxime placeat facere possim us
                  mentioned most effective technology to solve problem
                </p>
                <Box className="about-small-title">
                  <span className="text-span-title">Mission /</span> Vision
                </Box>
                <p>
                  We set our <strong>Mission</strong> quisquam est, qui dolorem
                  ipsum quia more than enough impedit quo minus quod maxime
                  facere possimus pleasure rationally encoun ter consequences
                  that are extremely painful. Nor again is there anyone who
                  loves or pursues or desires to obtain
                </p>
                <Link href="/" className="primary-button margin-top-40">
                  Let's Talk
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* WHY BRIDGETECH  */}
      <WhyBridgetech />
    </>
  );
};

export default About

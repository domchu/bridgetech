import React from 'react'
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../../public/images/about-image.png";
import ServiceQuote from "../../public/images/service-quote.png";
import TeamCard from "./../Team/TeamCard";
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
                Bridgetech is a software development services that is based on
                coding and general IT solutions
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
                  <Link href="https://www.example.com">IT solution.</Link>
                  Bridgetech is a leading software development services company
                  dedicated to providing innovative and tailored solutions to
                  businesses of all sizes. With a strong focus on technology and
                  a team of highly skilled professionals, Bridgetech is
                  committed to delivering high-quality software products and
                  services that drive business growth and efficiency.
                  <br />
                  <li>Our Services:</li>
                  <li>
                    Custom Software Development: Bridgetech specializes in
                    building custom software solutions that are precisely
                    tailored to meet your unique business requirements. Whether
                    you need a web application, mobile app, or enterprise
                    software, our team can create scalable, secure, and
                    user-friendly solutions.
                  </li>
                  <li>
                    Web Development: We offer comprehensive web development
                    services, including front-end and back-end development, CMS
                    (Content Management System) customization, e-commerce
                    platforms, and web portal development. Our experienced
                    developers ensure your website is visually appealing,
                    responsive, and optimized for performance.
                  </li>
                  <li>
                    Mobile App Development: Bridgetech develops mobile
                    applications for iOS and Android platforms that provide
                    seamless user experiences. We leverage the latest
                    technologies, such as native development, cross-platform
                    frameworks, and cloud integration, to deliver feature-rich
                    and intuitive mobile apps.
                  </li>
                </p>
                <Box className="about-small-title">
                  <span className="text-span-title">Mission</span>
                </Box>
                <p>
                  At <strong>Bridgetech</strong>, our <strong>Mission</strong>{" "}
                  is to empower businesses with innovative and tailored software
                  solutions that drive growth, efficiency, and digital
                  transformation. We are committed to delivering high-quality
                  products and services that exceed client expectations,
                  leverage cutting-edge technologies, and create sustainable
                  value for our partners.
                </p>
                <Box className="about-small-title">
                  <span className="text-span-title">Vision </span>
                </Box>
                <p>
                  Our <strong>Vision</strong> is to be a trusted and renowned
                  global leader in software development services, known for our
                  technical excellence, customer-centric approach, and ability
                  to deliver transformative solutions. We aspire to be at the
                  forefront of technological advancements, driving positive
                  change through innovation, and making a meaningful impact in
                  the industries we serve. We envision long-term partnerships
                  built on trust, collaboration, and shared success.
                </p>
                <Link
                  href="/contactus"
                  className="primary-button margin-top-40"
                >
                  Let's Talk
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* WHY BRIDGETECH  */}
      <WhyBridgetech />

      {/* BRIDGETECH TEAM */}
      <Box className="team-section wf-section">
        <Box className="section-gap-130">
          <Box className="container w-container">
            <Box className="team-list-wrapper w-dyn-list">
              <Box className="team-list w-dyn-items" role="list">
                <TeamCard />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About

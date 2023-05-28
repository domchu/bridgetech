import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleProject from "../../Components/Projects/SingleProject";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const training = () => {
  return (
    <>
      <DefaultSeo
        title="Web Tutorals | Bridgekode"
        description="We offers the various IT services such as mobile apps, design websites, HR services, SEO, training,IT setup, IT management etc"
        {...SEO}
      />
      <Topnav />
      <Header />
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                Project <span className="sub_heading_span">Details</span>
              </h1>
              <p>
                The underlisted project was carried out by bridgekode, completed
                and delivered to the client.
              </p>
              <ul className="project-link">
                <li className="project-nav-items">
                  <Link href="/" className="project-nav-link">
                    Home
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li className="project-nav-items">
                  <Link
                    href="/projects/project-home"
                    className="project-nav-link"
                  >
                    Project
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">Web Design Tutorals</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* SINGLE PROJECT DETAILS FOR SOFTWARE DEVELOPMENT */}
      <SingleProject title="Web Development Tutorals" />
      <Testimonial />
      <Footer />
    </>
  );
};

export default training;

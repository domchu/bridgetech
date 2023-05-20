import React from 'react'
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Topnav from "./../../Components/Topnav/Topnav";
import Header from "./../../Components/Header/Header";
import NewsLetter from "./../../Components/NewsLetter";
import Footer from "./../../Components/Footer/Footer";
import Singleservices from "../../Components/Single-Services/Singleservices";

const softwaredevelopment = () => {
  return (
    <>
      {/* TOPNAV COMPONENTS */}
      <Topnav />

      {/* HEADER COMPONENT */}
      <Header />

      {/* SUBHEADING DETAIL */}
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                Service <span className="sub_heading_span">Detail</span>
              </h1>
              <p>
                Software development is the process of designing, coding,
                testing, and deploying computer programs or applications.
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
                    href="/services/service-home"
                    className="project-nav-link"
                  >
                    Service
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">Software Development</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* SOFTWARE DEVELOPMENT CONTENT */}
      <Singleservices />

      {/* NEWSLETTER COMPONENT */}
      <NewsLetter />

      {/* FOOTER COMPONENT */}
      <Footer />
    </>
  );
};

export default softwaredevelopment

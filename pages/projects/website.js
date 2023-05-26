import React from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "./../../Components/Testimonails/Testimonial";

const website = () => {
  return (
    <>

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
                The underlisted projects are carried out by bridgekode,
                completed and delivered to the their respective clients
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
                  <Box className="project-link-text">Web Development</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
     {/* SINGLE PROJECT DETAILS */}
      <Testimonial />
      <Footer />
    </>
  );
};

export default website;

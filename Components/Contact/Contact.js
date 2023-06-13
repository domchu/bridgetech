import React from 'react'
import Link from "next/link";
import { Box } from "@chakra-ui/react";
import Map from "../Map";
import Reveal from "../../Components/Reveal";

const Contact = () => {
  return (
    <>
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                Contact <span className="sub_heading_span">Us</span>
              </h1>
<Reveal>
              <p>
                Here is a list of verious medium or platform to get accross to
                us If you haven't found the one that is confortable with you.
              </p>
              </Reveal>
              <ul className="project-link">
                <li className="project-nav-items">
                  <Link href="/" className="project-nav-link">
                    Home
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">Contact</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Map part of the project */}
      <Map />
    </>
  );
};

export default Contact

import React from 'react'
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                Our <span className="sub_heading_span">About</span>
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
    </>
  );
};

export default About

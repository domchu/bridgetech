import React from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";

const CoursesTab = () => {
  return (
    <>
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                Our <span className="sub_heading_span">Courses</span>
              </h1>
              <p>
                The underlisted courses are offered by bridgekode, convinence,
                affordable and easy to learn within the learners space.
              </p>
              <ul className="project-link">
                <li className="project-nav-items">
                  <Link href="/" className="project-nav-link">
                    Home
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">Coures</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CoursesTab;

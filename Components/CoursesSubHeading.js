import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

const CoursesSubHeading = ({text}) => {
  return (
    <>
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                Course <span className="sub_heading_span">Details</span>
              </h1>
              <p>
                Yes! You are on the right path, one step at a time. Your career
                path to finacial stability begin here and now.
              </p>
              <ul className="project-link">
                <li className="project-nav-items">
                  <Link href="/" className="project-nav-link">
                    Home
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li className="project-nav-items">
                  <Link href="/courses/course" className="project-nav-link">
                    Courses
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">{text}</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CoursesSubHeading;

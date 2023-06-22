import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

const ProjectHeading = ({ title, projectUrl }) => {
  return (
    <>
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
                  <Link href={projectUrl} className="project-nav-link">
                    Projects
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">{title} </Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ProjectHeading;

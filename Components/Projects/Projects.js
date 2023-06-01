import React from 'react'
import { Box } from "@chakra-ui/react";
import SubHeading from "./../SubHeading";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <SubHeading />

      {/* project items */}
      <Box className="container w-container ">
        <Box className="project-collection-list-wrapper">
          <Box className="project-wrapper">
            <ProjectCard />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Projects;

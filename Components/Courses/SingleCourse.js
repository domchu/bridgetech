import React from "react";
import { Box } from "@chakra-ui/react";

const SingleCourse = () => {
  return (
    <>
      <Box classname="course-section wf-section">
        <Box className="section-gap-bottom-130">
          <Box className="container w-container">
            <Box className="course-section-block">
              <Box className="course-block-text-left">
                <Box>
                  <p> For Starters</p>
                  <h2>Frontend Development Bootcamp</h2>
                </Box>
                <Box>
                  Go from zero knowledge to being able to build your technology
                  platforms! Starting with the foundations of software
                  engineering. By the end of this program you would have
                  mastered a specialization and learn the art of effective
                  collaboration to solve real world problems.
                </Box>
              </Box>
              <Box className="course-block-image-right"></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SingleCourse;

import React from "react";
import Link from "next/link";
import { Box  } from "@chakra-ui/react";
import CourseCard from "./CourseCard";

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
                The underlisted courses are
                <b> Offered by Bridgekode</b>, convinence, affordable and easy
                to learn within the learners space.
              </p>
              <ul className="project-link">
                <li className="project-nav-items">
                  <Link href="/" className="project-nav-link">
                    Home
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">Courses</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* COURSES OFFERED  */}
      <Box className="service-section wf-section" id="service-section">
        <Box className="section-gap-bottom-130">
          <Box className="container w-container">
            <Box className="section-justify-center">
              <Box className="section-block max-width-475 text-center">
                <h2 className="section-title">
                  Courses
                  <span className="section-title-inner-style">Offered By</span>
                  Bridgekode
                </h2>
                <Box className="section-text">
                  Your career path to finacial stability begin here and now.
                  bridgekode software development company the only solution.
                </Box>
              </Box>
            </Box>
            <Box className="section-collection-list-wrapper w-dyn-list">
              <Box className="servce-collection-list w-dyn-list" role="list">
                <Box className="course-container">
                  <CourseCard />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CoursesTab;

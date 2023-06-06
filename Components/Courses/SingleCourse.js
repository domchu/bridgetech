import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
// import SubHeading from "../../Components/SubHeading";
import project2 from "../../public/images/project10.jpg";

const SingleCourse = () => {
  return (
    <>
      {/* SUBHEADING */}
      {/* <SubHeading /> */}

      <Box classname="course-section wf-section">
        <Box className="section-gap-bottom-130">
          <Box className="container w-container">
            <Box className="course-section-block">
              <Box className="course-block-text-left">
                <Box className="section-block">
                  <p className="section-title-inner-style" id="starter">
                    For Starters
                  </p>
                  <h2 className="section-title">
                    Frontend Development Bootcamp
                  </h2>
                </Box>
                <Box className="section-text">
                  Go from zero knowledge to being able to build your technology
                  platforms! Starting with the foundations of software
                  engineering. By the end of this program you would have
                  mastered a specialization and learn the art of effective
                  collaboration to solve real world problems.
                </Box>

                <Box>
                  <Link
                    href="/access/form"
                    className="primary-button margin-top-40"
                  >
                    Enrol Now
                  </Link>
                  <Link
                    href="https://wa.me/2347034278995"
                    className="primary-button margin-top-40"
                    id="chat"
                  >
                    Chat with us
                  </Link>
                </Box>
              </Box>
              <Box className="course-block-image-right">
                <Image
                  src={project2}
                  alt="Coding image"
                  width={650}
                  height={450}
                  className="course-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SingleCourse;

import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { FcAlarmClock } from "react-icons/fc";
import project2 from "../../public/images/project10.jpg";

const SingleCourse = () => {
  return (
    <>
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
                  <br />
                  Learn to structure code in a concise, logical, and readable
                  manner, while mastering HTML and CSS, two foundational
                  front-end languages. Create static web pages using HTML and
                  CSS alone, before applying Flexbox (a CSS framework) to
                  increase the complexity and speed in which you create your web
                  pages.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam illum, repellat a aspernatur doloremque aliquid
                  laudantium magni corporis voluptate? Voluptatem itaque nulla
                  consectetur voluptate assumenda eos amet nemo delectus
                  aliquid.
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
                  width={550}
                  height={700}
                  className="course-image"
                />
                <Box>
                  <h1 className="section-title">Requirements</h1>
                </Box>
                <Box>
                  <li className="li">
                    We do not require any previous experience or pre-defined
                    skills to take this course. A great orientation would be
                    enough to master web development.
                  </li>
                  <li className="li">A good computer </li>
                  <li className="li">A good phone </li>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/*COURSE DURATION AND OVERVIEW  */}
      <Box className="duration-section course-section wf-section">
        <Box className="section-gap-bottom-130">
          <Box className="container w-container">
            <Box className="course-section-block">
              <Box className="duration-course-text-left  course-block-text-left"></Box>
              <Box className="duration-course-text-right course-block-image-right">
                <Box className="list-container">
                  <Box className="list-group list-group-flush">
                    <Box>
                      <FcAlarmClock style={{ marginRight: "10px" }} />
                    </Box>
                    <Box className="list-group-item">
                      <li>
                        <h6>Duration</h6>
                      </li>
                      <li>
                        <p>43 weeks</p>
                      </li>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SingleCourse;

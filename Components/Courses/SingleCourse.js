import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { FcAlarmClock } from "react-icons/fc";
import { BsBook } from "react-icons/bs";
import { SiSkillshare } from "react-icons/si";
import { FaAddressBook, FaAward, FaLanguage } from "react-icons/fa";
import project2 from "../../public/images/project10.jpg";

const SingleCourse = ({
  courseTitle,
  courseSummary,
  contents,
  comment,
  duration,
  amount,
  dollars,
  list1,
  list2,
  list3,
  list4,
  list5,
  list6,
  list7,
  list8,
  list9,
  list10,
  list11,
  list12,
  courseImage,
}) => {
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
                  <h2 className="section-title">{courseTitle}</h2>
                </Box>
                <Box className="section-text">
                  {courseSummary}
                  <br />
                  {contents}
                  <br />
                  {comment}
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
                  src={courseImage}
                  alt="Coding image"
                  width={550}
                  height={700}
                  className="course-image"
                />
                <Box>
                  <h1 className="section-title">Requirements</h1>
                </Box>
                <Box>
                  <Box className="li">
                    We do not require any previous experience or pre-defined
                    skills to take this course. A great orientation would be
                    enough to master web development.
                  </Box>
                  <Box className="li">A good computer </Box>
                  <Box className="li">A good phone </Box>
                  <Box className="li">Any medium of payment that is convinence for you is acceptable by us. </Box>
                </Box>
                <Link
                  href="https://wa.me/2347034278995"
                  className="primary-button margin-top-40"
                  id="chat"
                >
                  {amount}
                </Link>
                <Link
                  href="https://wa.me/2347034278995"
                  className="primary-button margin-top-40"
                  id="chat"
                >
                  {dollars}
                </Link>
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
              <Box className="duration-course-text-left  course-block-text-left">
                <Box>
                  <h2 className="section-title">What you'll learn</h2>
                </Box>
                <Box>
                  <li className="li">{list1} </li>
                  <li className="li">{list2}</li>
                  <li className="li">{list3}</li>
                  <li className="li">{list4}</li>
                  <li className="li">{list5}</li>
                  <li className="li">{list6}</li>
                  <li className="li">{list7}</li>
                  <li className="li">{list8}</li>
                  <li className="li">{list9}</li>
                  <li className="li">{list10}</li>
                  <li className="li">{list11}</li>
                  <li className="li">{list12}</li>
                </Box>
              </Box>
              <Box className="duration-course-text-right course-block-image-right">
                <h2 className="section-title center">Key Points</h2>
                <Box className="list-container">
                  <Box className="list-group list-group-flush">
                    <Box>
                      <FcAlarmClock className="course-icons" />
                    </Box>
                    <Box className="list-group-item">
                      <li
                        style={{
                          fontWeight: "600",
                        }}
                        fontSize={{
                          base: "16px",
                          sm: "20px",
                          md: "20px",
                          lg: "20px",
                        }}
                      >
                        <h6>Duration</h6>
                      </li>
                      <Box>
                        <p>{duration}</p>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="list-group list-group-flush">
                    <Box>
                      <SiSkillshare className="course-icons" />
                    </Box>
                    <Box className="list-group-item">
                      <li
                        style={{
                          fontWeight: "600",
                          fontSize: "20px",
                        }}
                      >
                        <h6>Skill level</h6>
                      </li>
                      <Box>
                        <p>Beginner</p>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="list-group list-group-flush">
                    <Box>
                      <FaLanguage className="course-icons" />
                    </Box>
                    <Box className="list-group-item">
                      <li
                        style={{
                          fontWeight: "600",
                          fontSize: "20px",
                        }}
                      >
                        <h6>Language</h6>
                      </li>
                      <Box>
                        <p>English</p>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="list-group list-group-flush">
                    <Box>
                      <BsBook className="course-icons" />
                    </Box>
                    <Box className="list-group-item">
                      <li
                        style={{
                          fontWeight: "600",
                          fontSize: "20px",
                        }}
                      >
                        <h6>Lectures</h6>
                      </li>
                      <Box>
                        <p>Physical</p>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="list-group list-group-flush">
                    <Box>
                      <FaAddressBook className="course-icons" />
                    </Box>
                    <Box className="list-group-item">
                      <li
                        style={{
                          fontWeight: "600",
                          fontSize: "20px",
                        }}
                      >
                        <h6>Deadline</h6>
                      </li>
                      <Box>
                        <p>Depend</p>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="list-group list-group-flush">
                    <Box>
                      <FaAward className="course-icons" />
                    </Box>
                    <Box className="list-group-item">
                      <li
                        style={{
                          fontWeight: "600",
                          fontSize: "20px",
                        }}
                      >
                        <h6>Certificate</h6>
                      </li>
                      <Box>
                        <p>Yes</p>
                      </Box>
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

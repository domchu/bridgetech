import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import WedDesign from "../../public/images/project9.jpg";
import WedDesign7 from "../../public/images/project7.jpg";
import WedDesign3 from "../../public/images/project3.jpg";

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
                  <span className="section-title-inner-style">Offers By</span>
                  Bridgekode
                </h2>
                <Box className="section-text">
                  Your career path to finacial stability begin here and now.
                  bridgekode software development services the only solution.
                </Box>
              </Box>
            </Box>
            <Box className="section-collection-list-wrapper w-dyn-list">
              <Box className="servce-collection-list w-dyn-list" role="list">
                <Box className="course-container ">
                  <Link href="/courses/web-development">
                    <figure className="card">
                      <Image
                        src={WedDesign}
                        alt="People learning web design"
                        className="course-image"
                      />
                      <figcaption>
                        <h2 className="section-text">Web development</h2>
                        <Box className="course-text">
                          Bridgekode is a strategic technology partner for
                          custom software development services and staff
                          augmentation. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Molestiae, expedita!
                        </Box>
                        <Box className="course-content">
                          <Box className="price">
                            <p>Price: #100,000</p>
                          </Box>
                          <Flex className="course-detail">
                            Details
                            <BsArrowRight className="icon-right" />
                          </Flex>
                        </Box>
                      </figcaption>
                    </figure>
                  </Link>
                  <Link href="/courses/uxui">
                    <figure className="card">
                      <Image
                        src={WedDesign7}
                        alt="People learning web design"
                        className="course-image"
                      />
                      <figcaption>
                        <h2 className="section-text">UX/UI Design</h2>
                        <Box className="course-text">
                          Bridgekode is a strategic technology partner for
                          custom software development services and staff
                          augmentation. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Molestiae, expedita!
                        </Box>
                        <Box className="course-content">
                          <Box className="price">
                            <p>Price: #80,000</p>
                          </Box>
                          <Flex className="course-detail">
                            Details
                            <BsArrowRight className="icon-right" />
                          </Flex>
                        </Box>
                      </figcaption>
                    </figure>
                  </Link>
                  <Link href="/courses/graphics">
                    <figure className="card">
                      <Image
                        src={WedDesign3}
                        alt="People learning web design"
                        className="course-image"
                      />
                      <figcaption>
                        <h2 className="section-text">Graphics Design</h2>

                        <Box className="course-text">
                          Bridgekode is a strategic technology partner for
                          custom software development services and staff
                          augmentation. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Molestiae, expedita!
                        </Box>
                        <Box className="course-content">
                          <Box className="price">
                            <p>Price: #60,000</p>
                          </Box>
                          <Flex className="course-detail">
                            Details
                            <BsArrowRight className="icon-right" />
                          </Flex>
                        </Box>
                      </figcaption>
                    </figure>
                  </Link>
                  <Link href="/courses/branding">
                    <figure className="card">
                      <Image
                        src={WedDesign7}
                        alt="People learning web design"
                        className="course-image"
                      />
                      <figcaption>
                        <h2 className="section-text">Branding & SEO</h2>
                        <Box className="course-text">
                          Bridgekode is a strategic technology partner for
                          custom software development services and staff
                          augmentation. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Molestiae, expedita!
                        </Box>
                        <Box className="course-content">
                          <Box className="price">
                            <p>Price: #45,000</p>
                          </Box>
                          <Flex className="course-detail">
                            Details
                            <BsArrowRight className="icon-right" />
                          </Flex>
                        </Box>
                      </figcaption>
                    </figure>
                  </Link>
                  <Link href="/courses/software">
                    <figure className="card">
                      <Image
                        src={WedDesign3}
                        alt="People learning web design"
                        className="course-image"
                      />
                      <figcaption>
                        <h2 className="section-text">Software Development</h2>
                        <Box className="course-text">
                          Bridgekode is a strategic technology partner for
                          custom software development services and staff
                          augmentation. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Molestiae, expedita!
                        </Box>
                        <Box className="course-content">
                          <Box className="price">
                            <p>Price: #150,000</p>
                          </Box>
                          <Flex className="course-detail">
                            Details
                            <BsArrowRight className="icon-right" />
                          </Flex>
                        </Box>
                      </figcaption>
                    </figure>
                  </Link>
                  <Link href="/courses/contents-writing">
                    <figure className="card">
                      <Image
                        src={WedDesign}
                        alt="People learning web design"
                        className="course-image"
                      />
                      <figcaption>
                        <h2 className="section-text">Contents Writing</h2>
                        <Box className="course-text">
                          Bridgekode is a strategic technology partner for
                          custom software development services and staff
                          augmentation. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Molestiae, expedita!
                        </Box>
                        <Box className="course-content">
                          <Box className="price">
                            <p>Price: #50,000</p>
                          </Box>
                          <Flex className="course-detail">
                            Details
                            <BsArrowRight className="icon-right" />
                          </Flex>
                        </Box>
                      </figcaption>
                    </figure>
                  </Link>
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

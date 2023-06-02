import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import project2 from "../public/images/project2.jpg";
import project3 from "../public/images/project3.jpg";
import project1 from "../public/images/project1.jpg";
import arrow from "../public/images/arrow-long-icon.png";
import project5 from "../public/images/project5.jpg";
import project6 from "../public/images/project6.jpg";
import project7 from "../public/images/project7.jpg";

const LatestProject = () => {
  return (
    <>
      <Box className="project-section wf-section">
        <Box className="blue-background-gradient-bottom">
          <Box className="section-gap-bottom-130">
            <Box className="container w-container">
              <Box className="section-block">
                <h2 className="section-title max-width-278">
                  Check our
                  <span className="section-title-inner-style">Latest</span>
                  Project
                </h2>
                <Box className="section-text max-width-370">
                  The underlisted projects are our latest and
                  <br />
                  affordable services completed.
                </Box>
              </Box>

              <Box className="project-collection-list-wrapper">
                <Box className="project-wrapper">
                  <Box className="project-item-wrapper">
                    <Box className="project-collection">
                      <Image
                        src={project2}
                        alt="School Image"
                        height={300}
                        width={300}
                        loading="lazy"
                        className="project__img"
                      />
                      <Box className="project__contents">
                        <Link href="/projects/website">
                          <h3>School Website</h3>
                        </Link>
                        <p className="service-text">
                          Technologies used to developed Keyonaville schools are
                          Javascript, Next.js, React.js, Chakra-Ui, etc.
                        </p>
                        <Link
                          href="https://www.google.com"
                          target="_blank"
                          rel="nofollow"
                        >
                          <Image
                            src={arrow}
                            alt="Pointer"
                            className="pointer-arrow"
                          />
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="project-item-wrapper">
                    <Box className="project-collection">
                      <Image
                        src={project3}
                        alt="Bridgekode Website Image"
                        height={300}
                        width={300}
                        loading="lazy"
                        className="project__img"
                      />
                      <Box className="project__contents">
                        <Link href="/projects/ecommerce">
                          <h3>E-Commerce Website</h3>
                        </Link>
                        <p className="service-text">
                          Technologies used to developed bridgekode are
                          Javascript, Next.js, React.js, Chakra-Ui, etc.
                        </p>
                        <Link
                          href="https://www.google.com"
                          target="_blank"
                          rel="nofollow"
                        >
                          <Image
                            src={arrow}
                            alt="Pointer"
                            className="pointer-arrow"
                          />
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="project-item-wrapper">
                    <Box className="project-collection">
                      <Image
                        src={project1}
                        alt="School Dashboard Image"
                        height={300}
                        width={300}
                        loading="lazy"
                        className="project__img"
                      />
                      <Box className="project__contents">
                        <Link href="/projects/database">
                          <h3>School Portal/Database</h3>
                        </Link>
                        <p className="service-text">
                          Technologies used to developed Keyonaville school
                          portal are PHP, MySQL, laravel, Mantie, etc.
                        </p>
                        <Link
                          href="https://www.google.com"
                          target="_blank"
                          rel="nofollow"
                        >
                          <Image
                            src={arrow}
                            alt="Pointer"
                            className="pointer-arrow"
                          />
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="project-item-wrapper">
                    <Box className="project-collection">
                      <Image
                        src={project6}
                        alt="Blogging Image"
                        height={300}
                        width={300}
                        loading="lazy"
                        className="project__img"
                      />
                      <Box className="project__contents">
                        <Link href="/projects/blog">
                          <h3>Bridgetech Blogging</h3>
                        </Link>
                        <p className="service-text">
                          The technologies used for these project are Contents
                          Management system[CMS], plugins, CSS etc
                        </p>
                        <Link
                          href="https://www.google.com"
                          target="_blank"
                          rel="nofollow"
                        >
                          <Image
                            src={arrow}
                            alt="Pointer"
                            className="pointer-arrow"
                          />
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="project-item-wrapper">
                    <Box className="project-collection">
                      <Image
                        src={project7}
                        alt="Web Design Images"
                        height={300}
                        width={300}
                        loading="lazy"
                        className="project__img"
                      />
                      <Box className="project__contents">
                        <Link href=" /projects/training">
                          <h3>Web Dev Training</h3>
                        </Link>
                        <p className="service-text">
                          Bridgekode train students/kids on web development with
                          HTML, CSS, Bootstrap, WordPress and JavaScript
                        </p>
                        <Link
                          href="https://www.google.com"
                          target="_blank"
                          rel="nofollow"
                        >
                          <Image
                            src={arrow}
                            alt="Pointer"
                            className="pointer-arrow"
                          />
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="project-item-wrapper">
                    <Box className="project-collection">
                      <Image
                        src={project5}
                        alt="UI / UX Design Image"
                        height={300}
                        width={300}
                        loading="lazy"
                        className="project__img"
                      />
                      <Box className="project__contents">
                        <Link href="/projects/ux">
                          <h3>Opay UX/UI Design</h3>
                        </Link>
                        <p className="service-text">
                          The wireframe or template was done by the uses of
                          Figma, Illustrator, etc.
                        </p>
                        <Link
                          href="https://www.google.com"
                          target="_blank"
                          rel="nofollow"
                        >
                          <Image
                            src={arrow}
                            alt="Pointer"
                            className="pointer-arrow"
                          />
                        </Link>
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

export default LatestProject;

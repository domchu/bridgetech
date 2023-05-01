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
                  Neque porro quisquam est, qui dolorem ipsum quia
                  <br />
                  ctetur, adipisci velit, sed eligendi option cumque
                </Box>
              </Box>
              <Box className="project-wrapper">
                <Box className="project-item-wrapper">
                  <Box className="project-collection">
                    <Image
                      src={project2}
                      alt="Digital marketing"
                      loading="lazy"
                      className="project__img"
                    />
                    <Box className="project__contents">
                      <Link href="/">
                        <h3>School Website/Portal</h3>
                      </Link>
                      <p>
                        Neque porro quisquam est qui most dolorem quia enough
                        impedit same quo minus quod and maxime
                      </p>
                      <Link href="/">
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
                      alt="Digital marketing"
                      loading="lazy"
                      className="project__img"
                    />
                    <Box className="project__contents">
                      <Link href="/">
                        <h3>Bridgetech Website</h3>
                      </Link>
                      <p>
                        Neque porro quisquam est qui most dolorem quia enough
                        impedit same quo minus quod and maxime
                      </p>
                      <Link href="/">
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
                      alt="Digital marketing"
                      loading="lazy"
                      className="project__img"
                    />
                    <Box className="project__contents">
                      <Link href="/">
                        <h3>Software Development</h3>
                      </Link>
                      <p>
                        Neque porro quisquam est qui most dolorem quia enough
                        impedit same quo minus quod and maxime
                      </p>
                      <Link href="/">
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
                      alt="Digital marketing"
                      loading="lazy"
                      className="project__img"
                    />
                    <Box className="project__contents">
                      <Link href="/">
                        <h3>Bridgetech Blogging</h3>
                      </Link>
                      <p>
                        Neque porro quisquam est qui most dolorem quia enough
                        impedit same quo minus quod and maxime
                      </p>
                      <Link href="/">
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
                      alt="Digital marketing"
                      loading="lazy"
                      className="project__img"
                    />
                    <Box className="project__contents">
                      <Link href="/">
                        <h3>Web Dev Training</h3>
                      </Link>
                      <p>
                        Neque porro quisquam est qui most dolorem quia enough
                        impedit same quo minus quod and maxime
                      </p>
                      <Link href="/">
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
                      alt="Digital marketing"
                      loading="lazy"
                      className="project__img"
                    />
                    <Box className="project__contents">
                      <Link href="/">
                        <h3>Opay UX/UI Design</h3>
                      </Link>
                      <p>
                        Neque porro quisquam est qui most dolorem quia enough
                        impedit same quo minus quod and maxime
                      </p>
                      <Link href="/">
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
    </>
  );
};

export default LatestProject;

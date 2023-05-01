import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import project2 from "../public/images/project2.jpg";
import arrow from "../public/images/arrow-long-icon.png";

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
                        <h3>Digital Marketing</h3>
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
                      src={project2}
                      alt="Digital marketing"
                      loading="lazy"
                      className="project__img"
                    />
                    <Box className="project__contents">
                      <Link href="/">
                        <h3>Digital Marketing</h3>
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
                      src={project2}
                      alt="Digital marketing"
                      loading="lazy"
                      className="project__img"
                    />
                    <Box className="project__contents">
                      <Link href="/">
                        <h3>Digital Marketing</h3>
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

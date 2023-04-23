import React from 'react'
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
// import { HiArrowLongRight } from "react-icons/hi2";
import SubHeading from "./../SubHeading";
import project2 from "../../public/images/project2.jpg";
import arrow from "../../public/images/arrow-long-icon.png";

const Projects = () => {
  return (
    <>
      <SubHeading />
      <Box className="w-container">
        <Box className="project-wrapper">
          <Box className="project-collection">
            <Image src={project2} alt="Digital marketing" loading="lazy" />
            <Box className="project__contents">
              <h3>Digital Marketing</h3>
              <p>
                Neque porro quisquam est qui most dolorem quia enough impedit
                same quo minus quod and maxime
              </p>
              <Link href="/">
                <Image src={arrow} alt="" />
                {/* <HiArrowLongRight /> */}
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Projects

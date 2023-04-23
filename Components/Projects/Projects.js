import React from 'react'
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import SubHeading from "./../SubHeading";
import project1 from "../../public/images/project1.jpg";
import project2 from "../../public/images/project2.jpg";
import project3 from "../../public/images/project3.jpg";
import project4 from "../../public/images/project4.jpeg";
import project5 from "../../public/images/project5.jpg";
import project6 from "../../public/images/project6.jpg";
import project7 from "../../public/images/project7.jpg";
import project8 from "../../public/images/project8.jpg";
import project9 from "../../public/images/project9.jpg";
import arrow from "../../public/images/arrow-long-icon.png";

const Projects = () => {
  return (
    <>
      <SubHeading />

      {/* project items */}
      <Box className="w-container">
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
                  Neque porro quisquam est qui most dolorem quia enough impedit
                  same quo minus quod and maxime
                </p>
                <Link href="/">
                  <Image src={arrow} alt="Pointer" className="pointer-arrow" />
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
                  <h3>IT Management</h3>
                </Link>
                <p>
                  Neque porro quisquam est qui most dolorem quia enough impedit
                  same quo minus quod and maxime
                </p>
                <Link href="/">
                  <Image src={arrow} alt="Pointer" className="pointer-arrow" />
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
                  Neque porro quisquam est qui most dolorem quia enough impedit
                  same quo minus quod and maxime
                </p>
                <Link href="/">
                  <Image src={arrow} alt="Pointer" className="pointer-arrow" />
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
                  <h3>Graphics Design</h3>
                </Link>
                <p>
                  Neque porro quisquam est qui most dolorem quia enough impedit
                  same quo minus quod and maxime
                </p>
                <Link href="/">
                  <Image src={arrow} alt="Pointer" className="pointer-arrow" />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="project-item-wrapper">
            <Box className="project-collection">
              <Image
                src={project4}
                alt="Digital marketing"
                loading="lazy"
                className="project__img"
              />
              <Box className="project__contents">
                <Link href="/">
                  <h3>Web Development</h3>
                </Link>
                <p>
                  Neque porro quisquam est qui most dolorem quia enough impedit
                  same quo minus quod and maxime
                </p>
                <Link href="/">
                  <Image src={arrow} alt="Pointer" className="pointer-arrow" />
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
                  <h3>Database Security</h3>
                </Link>
                <p>
                  Neque porro quisquam est qui most dolorem quia enough impedit
                  same quo minus quod and maxime
                </p>
                <Link href="/">
                  <Image src={arrow} alt="Pointer" className="pointer-arrow" />
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
                  <h3>School Portal/Database</h3>
                </Link>
                <p>
                  Neque porro quisquam est qui most dolorem quia enough impedit
                  same quo minus quod and maxime
                </p>
                <Link href="/">
                  <Image src={arrow} alt="Pointer" className="pointer-arrow" />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="project-item-wrapper">
            <Box className="project-collection">
              <Image
                src={project8}
                alt="Digital marketing"
                loading="lazy"
                className="project__img"
              />
              <Box className="project__contents">
                <Link href="/">
                  <h3>web Design Training</h3>
                </Link>
                <p>
                  Neque porro quisquam est qui most dolorem quia enough impedit
                  same quo minus quod and maxime
                </p>
                <Link href="/">
                  <Image src={arrow} alt="Pointer" className="pointer-arrow" />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="project-item-wrapper">
            <Box className="project-collection">
              <Image
                src={project9}
                alt="Digital marketing"
                loading="lazy"
                className="project__img"
              />
              <Box className="project__contents">
                <Link href="/">
                  <h3>Microsoft office</h3>
                </Link>
                <p>
                  Neque porro quisquam est qui most dolorem quia enough impedit
                  same quo minus quod and maxime
                </p>
                <Link href="/">
                  <Image src={arrow} alt="Pointer" className="pointer-arrow" />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Projects

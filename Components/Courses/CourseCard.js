import React from "react";
import CourseDetails from "./CourseData";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const CourseCard = () => {
  return (
    <>
      {CourseDetails.map((CourseProps) => {
        const { id, title, courseImage, courseUrl, contents, price } =
          CourseProps;

        return (
          <Box className="items-card">
            <Box key={id}>
              <Link href={courseUrl}>
                <figure className="card">
                  <Image
                    src={courseImage}
                    alt="course image"
                    className="course-image"
                    height={420}
                    width={320}
                  />
                  <figcaption>
                    <h2 className="section-text">{title} </h2>
                    <Box className="course-text">{contents}</Box>
                    <Box className="course-content">
                      <Box className="price">
                        <p>Price: {price}</p>
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
        );
      })}
    </>
  );
};

export default CourseCard;

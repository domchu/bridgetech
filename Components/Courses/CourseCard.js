import React from "react";
import CourseDetails from "./CourseData";
import { Box } from "@chakra-ui/react";

const CourseCard = () => {
  return (
    <>
      {CourseDetails.map((CourseProps) => {
        const { id, title, courseImage, courseUrl, contents, price } =
          CourseProps;

        return (
          <Box key={id}>
            <Link href={courseUrl}>
              <figure className="card">
                <Image
                  src={courseImage}
                  alt="People learning web design"
                  className="course-image"
                />
                <figcaption>
                  <h2 className="section-text">{title} </h2>
                  <Box className="course-text">{contents}</Box>
                  <Box className="course-content">
                    <Box className="price">
                      <p>Price: {price} </p>
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
        );
      })}
    </>
  );
};

export default CourseCard;

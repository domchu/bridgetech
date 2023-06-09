import React from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import ladyImage from "../../public/images/ladyimage.png";

const SingleProject = ({
  title,
  content,
  name,
  date,
  category,
  address,
  number1,
  number2,
  summary,
  result,
  benefits,
  point1,
  point2,
  problemsState,
  problemsSummary,
  solution1,
  solution2,
  solution3,
  image1,
  image2,
}) => {
  return (
    <>
      <Box className="project-section wf-section">
        <Box className="section-gap-130">
          <Box className="container w-container">
            <Box className="project-details-block">
              <Box className="project-block-copy max-width-635">
                <h2 className="project-details-title">{title}</h2>
                <Box className="project-top-rich-text-block w-richtext">
                  {content}
                </Box>
              </Box>
              <Box className="project-details-large-image-block">
                <Image
                  src={image1}
                  alt="Web Image"
                  loading="lazy"
                  width={100}
                  height={100}
                  className="image-responsive img"
                />
              </Box>
              <h2 className="project-details-subtile-title">
                Project Information
              </h2>
              <Box className="project-info-block">
                <Box className="project-info-single-item">
                  <Box className="project-info-title">Client Name</Box>
                  <Box className="project-info-text">{name}</Box>
                </Box>
                <Box className="project-info-single-item">
                  <Box className="project-info-title">Date</Box>
                  <Box className="project-info-text">{date}</Box>
                </Box>
                <Box className="project-info-single-item">
                  <Box className="project-info-title">Category</Box>
                  <Box className="project-info-text">{category}</Box>
                </Box>
                <Box className="project-info-single-item">
                  <Box className="project-info-title">Address</Box>
                  <Box className="project-info-text">{address}</Box>
                </Box>
              </Box>
              <Box className="how-to-block">
                <Box className="how-to-left-block">
                  <h2 className="project-details-subtile-title">
                    How this Project works
                  </h2>
                  <Box className="w-richtext">
                    <p>{summary}</p>
                  </Box>
                  <Box className="inner-quote-block">
                    <Box className="w-richtext">
                      <p className="p">{number1}</p>
                      <p className="p">{number2}</p>
                      <Box className="inner-quote-border-left"></Box>
                    </Box>
                  </Box>
                  <Box className="w-richtext">
                    <p className="p">{point1}</p>
                    <p className="p">{point2}</p>
                  </Box>
                </Box>
                <Box className="how-to-right-block">
                  <Box className="how-to-image-block">
                    <Image
                      src={ladyImage}
                      alt="A lady with computer"
                      loading="lazy"
                      className="image-responive img"
                    />
                  </Box>
                </Box>
              </Box>
              <Box className="project-result-block ">
                <h2 className="project-details-subtile-title section-title ">
                  Project Result & Benefits of Project
                </h2>
                <Box className="w-richtext">
                  <p>{result}</p>
                  <br />
                  <p>{benefits}</p>
                </Box>
              </Box>
              <Box className="project-list-block">
                <Box className="project-list-image-block">
                  <Image
                    src={image2}
                    alt="People Working"
                    loading="lazy"
                    className="image-cover img"
                    width={100}
                    height={100}
                  />
                </Box>
                <Box className="project-list-content">
                  <Box className="project-list-subtitle">{problemsState}</Box>
                  <Box className="w-richtext">
                    <p className="p">{problemsSummary}</p>
                    <Box className="li p">{solution1}</Box>
                    <Box className="li p">{solution2}</Box>
                    <Box className="li p">{solution3}</Box>
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

export default SingleProject;

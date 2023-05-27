import React from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import WebImage from "../../public/images/project2.jpg";
import WebIm from "../../public/images/service-benefit.jpg";
import ladyImage from "../../public/images/ladyimage.png";

const SingleProject = ({ title }) => {
  return (
    <>
      <Box className="project-section wf-section">
        <Box className="section-gap-130">
          <Box className="container w-container">
            <Box className="project-details-block">
              <Box className="project-block-copy max-width-635">
                <h2 className="project-details-title">{title}</h2>
                <Box className="project-top-rich-text-block w-richtext">
                  <strong>IT Consultancy</strong> provide the best quality It
                  solution neque porro quisquam est qui dolore ipsum quia golor
                  sit amet, conse ctetur, adipisci velit, sed eligendi optio
                  cumque nihil take a trivial example, which of us ever
                  undertakes laborious physical exercise, except
                </Box>
              </Box>
              <Box className="project-details-large-image-block">
                <Image
                  src={WebImage}
                  alt="Web Image"
                  loading="lazy"
                  className="image-responsive img"
                />
              </Box>
              <h2 className="project-details-subtile-title">
                Project Information
              </h2>
              <Box className="project-info-block">
                <Box className="project-info-single-item">
                  <Box className="project-info-title">Client Name</Box>
                  <Box className="project-info-text">Flex Corporation</Box>
                </Box>
                <Box className="project-info-single-item">
                  <Box className="project-info-title">Date</Box>
                  <Box className="project-info-text">June 25, 2022</Box>
                </Box>
                <Box className="project-info-single-item">
                  <Box className="project-info-title">Category</Box>
                  <Box className="project-info-text">Consultancy</Box>
                </Box>
                <Box className="project-info-single-item">
                  <Box className="project-info-title">Address</Box>
                  <Box className="project-info-text">
                    25K, North City, New York
                  </Box>
                </Box>
              </Box>
              <Box className="how-to-block">
                <Box className="how-to-left-block">
                  <h2 className="project-details-subtile-title">
                    How this Project works
                  </h2>
                  <Box className="w-richtext">
                    <p>
                      We are <strong>Optitech</strong> provide the best quality
                      It solution neque porro quisquam est qui dolorem ipsum
                      quia golor sit amet, conse ctetur, adipisci velit, sed
                      eligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat
                    </p>
                  </Box>
                  <Box className="inner-quote-block">
                    <Box className="w-richtext">
                      <p>
                        IT Consultancy provide the most service neque porro
                        quisquam est qui dolorem ipsum quia golor sit amet,
                        conse ctetur, adipisci velit
                      </p>
                      <p>
                        IT Consultancy provide the most service neque porro
                        quisquam est qui dolorem ipsum quia golor sit amet,
                        conse ctetur, adipisci velit
                      </p>
                      <Box className="inner-quote-border-left"></Box>
                    </Box>
                  </Box>
                  <Box className="w-richtext">
                    <p>
                      The main way to solve the the best quality It solution
                      neque porro quisquam qui dolorem ipsum quia golor sit
                      amet, conse ctetur, adipisci velit, sed eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat
                    </p>
                    <p>
                      Great deal dolorem ipsum quia golor sit amet, conse
                      ctetur, adipisci velit, sed optio cumque nihil impedit quo
                      minus id quod maxime placeat optio cumque nihil impedit
                      quo minus id quod maxime placeat
                    </p>
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
                  <p>
                    We are <strong>Optitech</strong> provide the best quality It
                    solution neque porro quisquam est qui dolorem ipsum quia
                    golor sit amet, conse ctetur, adipisci velit, sed eligendi
                    optio cumque nihil impedit quo minus id quod maxime placeat
                    pleasure rationally encounter consequences that are
                    extremely painful. Nor again is there anyone who loves or
                    pursues or desires to obtain pain of itself, because it is
                    pain, but because occasionally circumstances occur in which
                    toil and pain can procure him some great pleaser pleasure
                    rationally encounter consequences that are extremely
                    painful. Nor again is there anyone who loves or pursues or
                    desires to obtain pain of itsel because it is pain, but
                    because occasionally circumstances occur in which toil and
                    pain can procure him some great pleaser
                  </p>
                  <br />
                  <p>
                    We are <strong>Optitech</strong> provide the best quality It
                    solution neque porro quisquam est qui dolorem ipsum quia
                    golor sit amet, conse ctetur, adipisci velit, sed eligendi
                    optio cumque nihil impedit quo minus id quod maxime placeat
                    pleasure rationally encounter consequences that are
                    extremely painful. Nor again is there anyone who loves or
                    pursues or desires to obtain pain of itself, because it is
                    pain, but because occasionally circumstances occur in which
                    toil and pain can procure
                  </p>
                </Box>
              </Box>
              <Box className="project-list-block">
                <Box className="project-list-image-block">
                  <Image
                    src={WebIm}
                    alt="People Working"
                    loading="lazy"
                    className="image-cover img"
                    sizes="(max-width:1279px) 334px 544px "
                  />
                </Box>
                <Box className="project-list-content">
                  <Box className="project-list-subtitle">
                    In IT Consultancy Service we cover most of the IT problems
                    that your company faces and we try to solve it.
                  </Box>
                  <Box className="w-richtext">
                    <p>
                      We are <strong>Optitech</strong> provide the best quality
                      It solution neque porro quisquam est qui dolorem ipsum
                      quia golor sit amet, conse ctetur, adipisci velit, sed
                      eligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat
                    </p>
                    <Box className="li">
                      IT Management provide the most service neque porro
                      quisquam est qui dolorem ipsum quia golor sit amet, conse
                      ctetur, adipisci velit
                    </Box>
                    <Box className="li">
                      IT Management provide the most service neque porro
                      quisquam est qui dolorem ipsum quia golor sit amet, conse
                      ctetur, adipisci velit
                    </Box>
                    <Box className="li">
                      IT Management provide the most service neque porro
                      quisquam est qui dolorem ipsum quia golor sit amet, conse
                      ctetur, adipisci velit
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

export default SingleProject;
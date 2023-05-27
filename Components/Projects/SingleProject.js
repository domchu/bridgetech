import React from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import WebImage from "../../public/images/project2.jpg";
import WebIm from "../../public/images/service-benefit.jpg";

const SingleProject = () => {
  return (
    <>
      <Box className="project-section wf-section">
        <Box className="section-gap-130">
          <Box className="container w-container">
            <Box className="project-details-block">
              <Box className="project-block-copy max-width-635">
                <h2 className="project-details-title">Digital Marketing</h2>
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
                  className="image-resposive"
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
                              
              </Box>
              <Box className="project-result-block">
                <h2 className="project-details-subtile-title">
                  Project Information
                </h2>
                <Box className="w-richtext">
                  <p>
                    We are Optitech provide the best quality It solution neque
                    porro quisquam est qui dolorem ipsum quia golor sit amet,
                    conse ctetur, adipisci velit, sed eligendi optio cumque
                    nihil impedit quo minus id quod maxime placeat pleasure
                    rationally encounter consequences that are extremely
                    painful. Nor again is there anyone who loves or pursues or
                    desires to obtain pain of itself, because it is pain, but
                    because occasionally circumstances occur in which toil and
                    pain can procure him some great pleaser pleasure rationally
                    encounter consequences that are extremely painful. Nor again
                    is there anyone who loves or pursues or desires to obtain
                    pain of itsel because it is pain, but because occasionally
                    circumstances occur in which toil and pain can procure him
                    some great pleaser
                  </p>
                  <p>
                    We are Optitech provide the best quality It solution neque
                    porro quisquam est qui dolorem ipsum quia golor sit amet,
                    conse ctetur, adipisci velit, sed eligendi optio cumque
                    nihil impedit quo minus id quod maxime placeat pleasure
                    rationally encounter consequences that are extremely
                    painful. Nor again is there anyone who loves or pursues or
                    desires to obtain pain of itself, because it is pain, but
                    because occasionally circumstances occur in which toil and
                    pain can procure
                  </p>
                </Box>
              </Box>
              <Box className="project-list-block">
                <Box className="project-list-image-block">
                  <Image
                    src={WebIm}
                    alt="People Working"
                    loading="lazy"
                    className="image-cover"
                  />
                </Box>
                <Box className="project-list-content">
                  <Box className="project-list-subtile">
                    In IT Consultancy Service we cover most of the IT problems
                    that your company faces and we try to solve it.
                  </Box>
                  <Box className="w-richtext">
                    <p>
                      We are Optitech provide the best quality It solution neque
                      porro quisquam est qui dolorem ipsum quia golor sit amet,
                      conse ctetur, adipisci velit, sed eligendi optio cumque
                      nihil impedit quo minus id quod maxime placeat
                    </p>
                    <ul role="list">
                      <li>
                        IT Management provide the most service neque porro
                        quisquam est qui dolorem ipsum quia golor sit amet,
                        conse ctetur, adipisci velit
                      </li>
                      <li>
                        IT Management provide the most service neque porro
                        quisquam est qui dolorem ipsum quia golor sit amet,
                        conse ctetur, adipisci velit
                      </li>
                      <li>
                        IT Management provide the most service neque porro
                        quisquam est qui dolorem ipsum quia golor sit amet,
                        conse ctetur, adipisci velit
                      </li>
                    </ul>
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

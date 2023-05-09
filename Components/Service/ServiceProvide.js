import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "../../public/images/arrow-long-icon.png";
import project5 from "../../public/images/project5.jpg";
import project2 from "../../public/images/project2.jpg";
import project10 from "../../public/images/project10.jpg";

const ServiceProvide = () => {
  return (
    <>
      <Box className="service-section wf-section">
        <Box className="blue-background-gradient-bottom">
          <Box className="section-gap-bottom-130">
            <Box className="custom-continer-fliud w-container">
              <Box className="service-grid-lyout">
                <Box className="service-gridbox-right">
                  <Box className="section-up-wrapper">
                    <Box className="section-block">
                      <h2 className="section-title max-width-152">
                        Services
                        <span className="section-title-inner-style">
                          that we
                        </span>
                        provide
                      </h2>
                      <Box className="section-text max-width-370">
                        Neque porro quisquam est, qui dolorem ipsum quia
                        <br />
                        ctetur, adipisci velit, sed eligendi option cumque
                      </Box>
                    </Box>
                    <Link
                      href="/services/service-home"
                      className="section-page-link w-inline-block arrow-right"
                    >
                      <Image src={ArrowIcon} alt="Arrow Icon" loading="lazy" />
                    </Link>
                  </Box>
                  <Box className="service-collection-list-wrapper w-dyn-list">
                    <Box
                      className="service-collection-list w-dyn-item"
                      role="list"
                    >
                      <Box
                        className="section-collection-item w-dyn-item"
                        role="listitem"
                      >
                        <Box className="service-single-item-box">
                          <Link
                            href="/services/web-development"
                            className="service-thumbnail-image-block w-inline-block"
                          >
                            <Image
                              src={project5}
                              alt="Web Development"
                              loading="lazy"
                              className="image-responsive img"
                            />
                          </Link>
                          <Box className="service-content">
                            <Link
                              href="/services/web-development"
                              className="service-title-link"
                            >
                            Frontend Dev
                            </Link>
                            <Box className="section-text">
                              Neque porro quisquam est qui most dolorem quia
                              enough impedit same quo minus quod and maxime
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        className="section-collection-item w-dyn-item"
                        role="listitem"
                      >
                        <Box className="service-single-item-box">
                          <Link
                            href="/services/web-design-training"
                            className="service-thumbnail-image-block w-inline-block"
                          >
                            <Image
                              src={project10}
                              alt="Web Design Training"
                              loading="lazy"
                              className="image-responsive img"
                            />
                          </Link>
                          <Box className="service-content">
                            <Link
                              href="/services/web-design-training"
                              className="service-title-link"
                            >
                              Web Design Training
                            </Link>
                            <Box className="section-text">
                              Neque porro quisquam est qui most dolorem quia
                              enough impedit same quo minus quod and maxime
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        className="section-collection-item w-dyn-item"
                        role="listitem"
                      >
                        <Box className="service-single-item-box">
                          <Link
                            href="/services/graphics-design"
                            className="service-thumbnail-image-block w-inline-block"
                          >
                            <Image
                              src={project2}
                              alt="Graphics Design"
                              loading="lazy"
                              className="image-responsive img"
                            />
                          </Link>
                          <Box className="service-content">
                            <Link
                              href="/services/graphics-design"
                              className="service-title-link"
                            >
                              Graphics Design
                            </Link>
                            <Box className="section-text">
                              Neque porro quisquam est qui most dolorem quia
                              enough impedit same quo minus quod and maxime
                            </Box>
                          </Box>
                        </Box>
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

export default ServiceProvide;

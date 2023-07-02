import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "../../public/images/arrow-long-icon.png";
import webDev from "../../public/images/web2.jpg";
import graphicDev from "../../public/images/graphic.jpg";
import webTrain from "../../public/images/kidcoding2.jpg";

const ServiceProvide = () => {
  return (
    <>
      <Box className="service-section wf-section">
        <Box className="blue-background-gradient-bottom">
          <Box className="section-gap-bottom-130">
            <Box className="custom-continer-fliud w-container container">
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
                        Choose from our wide range of services offers by
                        bridgekode software development services.
                      </Box>
                    </Box>
                    <Link
                      href="/services/service-home"
                      className="section-page-link w-inline-block arrow-right"
                    >
                      <Image
                        src={ArrowIcon}
                        alt="Forward Arrow Icon"
                        loading="lazy"
                        className="forward-service-arrow"
                      />
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
                              src={webDev}
                              alt="Web Development Image"
                              loading="lazy"
                              className="image-responsive img"
                            />
                          </Link>
                          <Box className="service-content">
                            <Link
                              href="/services/web-development"
                              className="service-title-link"
                            >
                              Web Development
                            </Link>
                            <Box className="section-text service-text">
                              Bridgekode's web design services aim to create
                              visually appealing, user-friendly & brand-aligned
                              websites that leave a lasting impression on
                              visitors. By combining aesthetics with usability,
                              strive to deliver designs that effectively
                              communicate the client's ideas.
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
                              src={webTrain}
                              alt="Web Design Training Image"
                              loading="lazy"
                              className="image-responsive img"
                            />
                          </Link>
                          <Box className="service-content">
                            <Link
                              href="/services/web-design-training"
                              className="service-title-link"
                            >
                              Students/kids Coding
                            </Link>
                            <Box className="section-text service-text">
                              web dev. training programs for students/kids
                              interested in learning and acquiring skills in
                              website design. Their training programs are
                              designed to provide comprehensive knowledge and
                              hands-on experience in various aspects of web
                              development.
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
                              src={graphicDev}
                              alt="Graphics Design Image"
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
                            <Box className="section-text service-text">
                              It aim to create visually compelling designs that
                              effectively communicate the client's message and
                              align with their branding. Whether it's for print
                              or digital mediums, they strive to deliver
                              high-quality designs that leave a positive impact
                              on the target audience.
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

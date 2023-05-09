import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import AboutImg from "../../public/images/about-image.png";
import ServiceQuote from "../../public/images/service-quote.png";
import ServiceDotted from "../../public/images/service-dotted.png";

const ServiceProvide = () => {
  return (
    <>
      <Box className="service-section wf-section">
        <Box className="blue-background-gradient-bottom">
          <Box className="section-gap-bottom-130">
            <Box className="custom-container-fliud w-container">
              <Box className="service-layout-grid">
                <Box className="service-gridbox-left" id="w-nod">
                  <Box className="service-section-image-box">
                    <Image
                      src={AboutImg}
                      alt="Service Image"
                      loading="lazy"
                      className=""
                    />
                    <Image
                      src={ServiceDotted}
                      alt="Service Service"
                      loading="lazy"
                      className="service-section-dotted-shape"
                    />
                    <Image
                      src={ServiceQuote}
                      alt="Service Quote Image"
                      loading="lazy"
                      className="service-section-quote-image"
                    />
                  </Box>
                </Box>
                <Box className="service-gridbox-right"></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ServiceProvide;

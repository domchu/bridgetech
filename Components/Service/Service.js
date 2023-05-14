import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import ManImage from "../../public/images/male-img.png";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <>
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                Our <span className="sub_heading_span">Services</span>
              </h1>
              <p>
                Choose from our wide range of services offered by bridgekode
                software development services.
              </p>
              <ul className="project-link">
                <li className="project-nav-items">
                  <Link href="/" className="project-nav-link">
                    Home
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">Services</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* BEST IT SOLUTION FOR YOUR BUSINESS */}
      <Box className="choose-section wf-section">
        <Box className="section-gap-130">
          <Box className="container w-container">
            <Box className="service-hero-grid-layout">
              <Box className="service-hero-gridbox-left">
                <Box className="section-block">
                  <h2 className="section-title max-width-370">
                    We have the
                    <span className="section-title-inner-style">
                      best IT Services
                    </span>
                    to solve your
                    <span className="section-title-inner-style">Problems</span>
                  </h2>
                  <Box className="service-medium-subtitle-text">
                    Over <strong>3 years</strong> working in IT services,
                    developing <br />
                    software, mobile apps for clients all over the world.
                  </Box>
                  <Box className="section-text">
                    We are <strong>Bridgetech</strong> provide the best quality
                    <Link
                      href="https://www.example.com"
                      target="_blank"
                      className="it-solution"
                    >
                      IT solution
                    </Link>
                    neque porro qui dolorem ipsum quia golor sit amet, conse
                    ctetur, adipisci velit, optio cumque nihil impedit quo minus
                    id quod maxime placossim us mentioned most effective
                    technology to solve problem
                  </Box>
                  <Box className="section-text">
                    We set our <strong>Mission</strong> quisquam est, qui
                    dolorem ipsum quia more impedit quo minus quod maxime facere
                    possimus pleasure
                  </Box>
                  <Link href="/" className="section-link margin-top-20">
                    Choose your Desired Services
                  </Link>
                </Box>
              </Box>

              {/* RIGHT PART */}
              <Box className="service-hero-gridbox-right">
                <Box className="choose-image-box">
                  <Image
                    src={ManImage}
                    alt="Choose Image"
                    className="choose-image"
                    loading="lazy"
                  />
                  <Box className="choose-inner-text-box-1">
                    <Box className="text-block">100% Clients Satisfaction</Box>
                  </Box>
                  <Box className="choose-inner-text-box-2">
                    <Box className="text-block">
                      Get Perfect Solution for your Business
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* SERVICES OFFERED IN BRIDGETECH */}
      <Box className="service-section wf-section" id="service-section">
        <Box className="section-gap-bottom-130">
          <Box className="container w-container">
            <Box className="section-justify-center">
              <Box className="section-block max-width-475 text-center">
                <h2 className="section-title">
                  Services
                  <span className="section-title-inner-style">that we</span>
                  Provide
                </h2>
                <Box className="section-text">
                  Choose from our wide range of services offered by
                  <br />
                  bridgekode software development services.
                </Box>
              </Box>
            </Box>
            <Box className="section-collection-list-wrapper w-dyn-list">
              <Box className="service-collection-list w-dyn-list" role="list">
                <ServiceCard />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Service;

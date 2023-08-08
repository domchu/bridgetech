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
                software development services and referrals are highly rewarded.
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
                    <span className="section-title-inner-style"> Problems</span>
                  </h2>
                  <Box className="service-medium-subtitle-text">
                    Over <strong>3 years</strong> working in IT services,
                    developing <br />
                    Software, Custom website, Business website, E-commerce
                    websites, Kids coding training, Blogging, School coding
                    program, School database, School Result portal, E-learning
                    Apps, Tracking website, Ticketing website, Mobile apps for
                    clients all over the world.
                  </Box>
                  <br/>
                  <Box className="section-text">
                    We are <strong>Bridgekode</strong> provide the best quality
                    <Link
                      href="https://www.blog.bridgekode.com"
                      target="_blank"
                      className="it-solution"
                    >
                      IT solution.
                    </Link>
                    At Bridgekode, we take pride in offering the best IT
                    services to solve a wide range of problems. Our team of
                    experienced professionals is dedicated to providing
                    innovative and effective solutions tailored to meet your
                    specific needs.
                  </Box>
                  <Box className="section-text">
                    We set our <strong>key reasons:</strong> expertise,
                    customized solutions, comprehensive Services, client-centric
                    approach, agile and flexible, cutting-edge technology,
                    cost-effective solutions, strong communication, commitment
                    to excellence, proven track record.
                  </Box>
                  <Link
                    href="/courses/course"
                    className="section-link margin-top-20"
                  >
                    Choose Your Desired Courses
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="https://www.blog.bridgekode.com"
                    className="section-link margin-top-20"
                    target="_blank"
                    passhref="true"
                  >
                    Connect To Our Blog
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
                  Choose from our wide range of services offers by bridgekode
                  software development services.
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

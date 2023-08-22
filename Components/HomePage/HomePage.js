import React, { useRef } from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import NewsLetter from "../NewsLetter";
import Ethic from "../Ethic";
import WhyBridgetech from "../WhyBridgetech";
import watch from "../../public/images/video-play-icon.png";
import banner from "../../public/images/banner-image.png";
import arrowIcon from "../../public/images/banner-item.png";
import femaleImage from "../../public/images/female-img.png";
import femaleImage1 from "../../public/images/female-img-1.png";
import femaleBg from "../../public/images/eliminate-2.png";
import LatestProject from "../LatestProject";
import ServiceProvide from "../Service/ServiceProvide";
import { useInView } from "framer-motion";
import Reveal from "../Reveal";

const HomePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      {/* SLIDER */}

      {/* HERO SECTION OF THE HOME PAGE */}
      <Box className="hero-background">
        <Box className="container w-container">
          <Box className="hero-container-wrapper">
            <Box
              className="hero-content"
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <h1 className="hero-title">
                IT <span className="hero-title-span">Solutions</span> for your
                Business
              </h1>
              <p className="hero-text">
                Building the future, one line of code at a time. Turning ideas
                into digital solutions.
              </p>
              <Box className="hero-link-group">
                <Link href="/project" className="primary-button home_btn_link">
                  Learn more
                </Link>
                <Link
                  href="https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G"
                  className="hero-video-link w-inline-block w-lightbox"
                  aria-label="open lightbox"
                  aria-haspopup="dialog"
                  target="_blank"
                >
                  <Image
                    src={watch}
                    alt="Vidio Play Icon"
                    loading="lazy"
                    className="video-play"
                    width={30}
                    height={30}
                  />
                  <Box>Watch Video</Box>
                </Link>
              </Box>
            </Box>
            <Box
              className="hero-image-block"
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <Image
                className="hero-image img"
                width={400}
                height={400}
                src={banner}
                alt="People Learning With Computer"
                loading="lazy"
              />
              <Image
                className="hero-shape hero__shape"
                width={50}
                height={60}
                src={arrowIcon}
                alt="Hero Shape Image"
                loading="lazy"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ELIMINATE SECTION OF THE HOME PAGE */}
      <Box className="eliminate-section wf-section">
        <Box className="section-gap-130-eliminate">
          <Box className="container w-container">
            <Box className="eliminate-grid">
              <Box
                className="eliminate-gridbox-left"
                id="w-node-bb981379-6d5b-d20f-880f-d0a5b9a4085c-44adaf1d"
              >
                <Box className="eliminate-image-box">
                  <Image
                    src={femaleImage}
                    className="eliminate-user-image img"
                    alt="Female Carring Computer In Her Hand"
                    loading="lazy"
                  />
                  <Image
                    src={femaleImage1}
                    className="eliminate-shape-1 img"
                    alt="Eliminate Shape"
                    loading="lazy"
                  />
                  <Image
                    src={femaleBg}
                    className="eliminate-shape-2 img"
                    alt="Eliminate Shape 2"
                    loading="lazy"
                  />
                </Box>
              </Box>
              <Box className="eliminate-gridbox-right" id="">
                <Box className="section-block">
                  <h2 className="section-title max-width-440">
                    Eliminate
                    <span className="section-title-inner-style">
                      IT Challenges
                    </span>
                    for your Business
                  </h2>
                  <Reveal>
                    <Box className="section-text">
                      Bridgekode can help eliminate IT challenges through a
                      combination of expertise, proactive problem-solving skill
                      and effective technology solutions. Here are some ways
                      Bridgekode can address IT challenges:
                    </Box>
                  </Reveal>
                </Box>
                <ul className="eliminate-list w-list-unstyled" role="list">
                  <li className="eliminate-list-item">
                    <Box className="eliminate-list-style"></Box>
                    <Reveal>
                      <Box className="eliminate-list-text">
                        Comprehensive Assessments: Bridgekode can conduct
                        thorough assessments of an organization's IT
                        infrastructure, systems, and processes. This helps
                        identify existing challenges, vulnerabilities, and areas
                        for improvement.
                      </Box>
                    </Reveal>
                  </li>
                  <li className="eliminate-list-item">
                    <Box className="eliminate-list-style"></Box>
                    <Reveal>
                      <Box className="eliminate-list-text">
                        Tailored Solutions: Based on the assessment results,
                        Bridgekode can provide customized solutions to address
                        specific IT challenges. This may involve implementing
                        new technologies, optimizing existing systems, or
                        streamlining workflows to improve efficiency and
                        productivity.
                      </Box>
                    </Reveal>
                  </li>
                  <li className="eliminate-list-item">
                    <Box className="eliminate-list-style"></Box>
                    <Reveal>
                      <Box className="eliminate-list-text">
                        Training and Support: Bridgekode can offer training
                        programs and ongoing support to enhance the IT skills of
                        the organization's staff. This empowers employees to
                        effectively use IT systems, troubleshoot minor issues,
                        and reduce dependence on external IT support.
                      </Box>
                    </Reveal>
                  </li>
                  <li
                    className="eliminate-list-item-dash-progress li"
                    data-w-id=""
                    style={{ willChange: "width", willChange: "height" }}
                  ></li>
                </ul>
                <Link href="/services" className="primary-button">
                  Let's Start
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* WHY BRIDGETECH AT THE HOME PAGE  */}
      <WhyBridgetech />

      {/* SERVICE PROVIDES BY BRIDGETECH */}
      <ServiceProvide />

      {/* MODE OF OPERATION AT THE HOME PAGE */}
      <Ethic />

      {/* NEWSLETTER SECTION AT THE HOME PAGE */}
      <NewsLetter />

      {/* LATEST PROJECT AT THE HOME PAGE */}
      <LatestProject />
    </>
  );
};

export default HomePage;

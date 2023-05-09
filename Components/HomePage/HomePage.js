import React from "react";
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

const HomePage = () => {
  return (
    <>
      {/* HERO SECTION OF THE HOME PAGE */}
      <Box className="hero-background">
        <Box className="container w-container">
          <Box className="hero-container-wrapper">
            <Box className="hero-content">
              <h1 className="hero-title">
                IT <span className="hero-title-span">Solutions</span> for your
                Business
              </h1>
              <p className="hero-text">
                Neque porro quisquam est, qui dolorem ipsum quia golor sit amet,
                consectetur, adipisci velit, sed
              </p>
              <Box className="hero-link-group">
                <Link href="/projects" className="primary-button">
                  Learn more
                </Link>
                <Link
                  href="/"
                  className="hero-video-link w-inline-block w-lightbox"
                  aria-label="open lightbox"
                  aria-haspopup="dialog"
                >
                  <Image
                    src={watch}
                    alt="Play Icon"
                    loading="lazy"
                    className="video-play"
                    width={30}
                    height={30}
                  />
                  <Box>Watch Video</Box>
                </Link>
              </Box>
            </Box>
            <Box className="hero-image-block">
              <Image
                className="hero-image img"
                width={400}
                height={400}
                src={banner}
                alt="hero image"
                loading="lazy"
              />
              <Image
                className="hero-shape hero__shape"
                width={50}
                height={60}
                src={arrowIcon}
                alt="hero shape Image"
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
                    alt="Eliminate Image"
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
                    alt="Eliminate Shape"
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
                  <Box className="section-text">
                    Neque porro quisquam est, qui dolorem ipsum quia golor sit
                    amet, conse ctetur, adipisci velit, sed eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus mentioned technology
                  </Box>
                </Box>
                <ul className="eliminate-list w-list-unstyled" role="list">
                  <li className="eliminate-list-item">
                    <Box className="eliminate-list-style"></Box>
                    <Box className="eliminate-list-text">
                      Neque porro quisquam est, qui dolorem ipsum quia more than
                      enough impedit quo minus quod maxime facere possimus
                    </Box>
                  </li>
                  <li className="eliminate-list-item">
                    <Box className="eliminate-list-style"></Box>
                    <Box className="eliminate-list-text">
                      Neque porro quisquam est, qui dolorem ipsum quia more than
                      enough impedit quo minus quod maxime facere possimus
                    </Box>
                  </li>
                  <li className="eliminate-list-item">
                    <Box className="eliminate-list-style"></Box>
                    <Box className="eliminate-list-text">
                      Neque porro quisquam est, qui dolorem ipsum quia more than
                      enough impedit quo minus quod maxime facere possimus
                    </Box>
                  </li>
                  <li
                    className="eliminate-list-item-dash-progress li"
                    data-w-id=""
                    style={{ willChange: "width", willChange: "height" }}
                  ></li>
                </ul>
                <Link href="/services/service-home" className="primary-button">
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

import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import watch from "../../public/images/video-play-icon.png";
import banner from "../../public/images/banner-image.png";
import arrowIcon from "../../public/images/banner-item.png";
import femaleImage from "../../public/images/female-img.png";
import femaleImage1 from "../../public/images/female-img-1.png";
import femaleBg from "../../public/images/eliminate-2.png";

const HomePage = () => {
  return (
    <>
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
                <Link href="/" className="primary-button">
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
      {/* second section of the home page */}
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
              <Box className="eliminate-gridbox-right" id=""></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;

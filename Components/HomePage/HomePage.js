import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import watch from "../../public/images/video-play-icon.png";

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
                    // src="https://assets.website-files.com/6330105a320e0e0ed5adaf1c/633282f6557e05c596c95559_video-play-icon.png"
                    src={watch}
                    alt="Play Icon"
                    loading="lazy"
                    className="video-play"
                    width={50}
                    height={50}
                  />
                  <Box>Watch Video</Box>
                </Link>
              </Box>
            </Box>
            <Box className="hero-image-block">
              <Image
                className="hero-image"
                width={300}
                height={300}
                // src="https://assets.website-files.com/6330105a320e0e0ed5adaf1c/63536b582cf25003d158f7c8_bannerimage.png"
                alt="hero image"
                loading="lazy"
              />
              <Image
                className="shape-image"
                // width={300}
                // height={300}
                // src="https://assets.website-files.com/6330105a320e0e0ed5adaf1c/63536b582cf25003d158f7c8_bannerimage.png"
                alt="hero shape image"
                loading="lazy"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;

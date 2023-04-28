import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import watch from "../../public/images/video-play-icon.png";
import banner from "../../public/images/banner-image.png";
import arrowIcon from "../../public/images/banner-item.png";

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
    </>
  );
};

export default HomePage;

import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

const Card = ({ renderButtons, img, desc, title }) => {
  return (
    <>
      <Box className="card__wrapper">
        <Box className="img-container">
          <Image src={img} alt="Random Image Slider" width={100} height={100} />
        </Box>

        <Box className="content">
          <h1>{title}</h1>
          <h2>{desc}</h2>
          {renderButtons()}
        </Box>
      </Box>
    </>
  );
};

export default Card;





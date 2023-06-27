import React from "react";
import { Box } from "@chakra-ui/react";


const Card = ({ renderButtons, img, desc }) => {
  return (
    <>
      <Box className="card__wrapper">
        <Box className="img-container">
          <img src={img} alt="random" />
        </Box>

        <Box className="content">
          <h2>{desc}</h2>
          {renderButtons()}
        </Box>
      </Box>
    </>
  );
};

export default Card;





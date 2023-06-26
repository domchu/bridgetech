import React from "react";
import { Box } from "@chakra-ui/react";


const Card = ({ renderButtons, img, desc }) => {
  return (
    <>
      <Box className="card__wrapper">
        <div className="img-container">
          <img src={img} alt="random" />
        </div>

        <div className="content">
          <h2>{desc}</h2>

          {renderButtons()}
        </div>
      </Box>
    </>
  );
};

export default Card;

// For every complex problem, we give you a simple solution.
// A good programmer looks both ways before crossing a one-way street.
// Techs for people to the people.
// Don’t just have a website, have a better website.
// We have all the web tools you need to get ahead of your competition.

// links btns

// team
// about

// 
// facebook
// instagram

// 
// courses
// faq

// 
// contact
// make call

// 
// blog
// whatsapp us

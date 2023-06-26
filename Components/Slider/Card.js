import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import Image__slider1 from "../../public/images/software.jpg";
import Image__slider2 from "../../public/images/graphic.jpg";
import Image__slider3 from "../../public/images/flask.jpg";
import Image__slider4 from "../../public/images/figma.jpg";
import Image__slider5 from "../../public/images/writer3.jpg";
import Image__slider6 from "../../public/images/web.jpg";

const Card = ({ renderButtons, img, desc }) => {
  return (
    <>
      <div className="card__wrapper">
        <div className="img-container">
          <img src={img} alt="random" />
        </div>

        <div className="content">
          <h2>{desc}</h2>

          {renderButtons()}
        </div>
      </div>
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

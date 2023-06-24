import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next-link";
import Image from "next-image";
import Image__slider1 from "../../public/images/software.jpg";
import Image__slider2 from "../../public/images/graphic.jpg";
import Image__slider3 from "../../public/images/flask.jpg";
import Image__slider4 from "../../public/images/figma.jpg";
import Image__slider5 from "../../public/images/writer3.jpg";
import Image__slider6 from "../../public/images/web.jpg";

const Card = ({ renderButtons, img, desc }) => {
  return (
    <>
      <Slider>
        <Card
          img={"https://picsum.photos/350/300"}
          desc="The power of technology unleashed for you and others like you."
          renderButtons={() => (
            <>
              <button>clissdas</button>
              <button>clissdas</button>
            </>
          )}
        />
        <Card
          img={"https://picsum.photos/300/300"}
          desc="We try for the best and we deliver the best."
          renderButtons={() => (
            <>
              <button>REST</button>
              <button>Relax</button>
            </>
          )}
        />
        <Card
          img={"https://picsum.photos/400/400"}
          desc="We inspire from technology to inspire the technology."
          renderButtons={() => (
            <>
              <button>Own the day</button>
              <button>Birthday</button>
            </>
          )}
        />
      </Slider>
      <CardWrapper className="card__wrapper">
        <div className="img-container">
          <img src={img} alt="random" />
        </div>

        <div className="content">
          <h2>{desc}</h2>

          {renderButtons()}
        </div>
      </CardWrapper>
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

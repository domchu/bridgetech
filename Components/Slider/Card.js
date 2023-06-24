import React from "react";
import Image__slider1 from "../../public/images/software.jpg";
import Image__slider2 from "../../public/images/graphic.jpg";
import Image__slider3 from "../../public/images/flask.jpg";
import Image__slider4 from "../../public/images/figma.jpg";
import Image__slider5 from "../../public/images/writer3.jpg";

const Card = ({ renderButtons, img, desc }) => {
  return (
    <>
      <Slider>
        <Card
          img={"https://picsum.photos/350/300"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          renderButtons={() => (
            <>
              <button>clissdas</button>
              <button>clissdas</button>
            </>
          )}
        />
        <Card
          img={"https://picsum.photos/300/300"}
          desc="Lorem ipsum dolor sit amet consect"
          renderButtons={() => (
            <>
              <button>REST</button>
              <button>Relax</button>
            </>
          )}
        />
        <Card
          img={"https://picsum.photos/400/400"}
          desc="Lorem ipsum dolor sit amet consect sdfdsf .jhksd,jas dasd as daghvsd vasd as da"
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

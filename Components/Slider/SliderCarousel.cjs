import React from "react";
import { Slider } from "react-rc-carousel";
import {
  jsxDEV as _jsxDEV,
  Fragment as _Fragment,
} from "react/jsx-dev-runtime";

const SliderCarousel = () => {
  return (
    <>
      <Slider
        nSlidePerView={3}
        animationInterval={3000}
        isPauseOnHover={true}
        isAutoSlide={true}
        isShowDots={{
          position: "bottom-center",
          isOut: true,
        }}
        isShowButtons={{
          position: "bottom-left",
          isOut: false,
          renderNext: (onClick) => <button onClick={onClick}>Next</button>,
          renderPrev: (onClick) => <button onClick={onClick}>Previous</button>,
        }}
        theme={{
          color: "#222",
          backgroundColor: "#aaa",
        }}
        breakpoints={[
          { width: 500, nSlidePerView: 1 },
          { width: 900, nSlidePerView: 2 },
          { width: 1200, nSlidePerView: 3 },
        ]}
        lastSlideAnimation={{
          isFade: true,
          isSlide: false,
        }}
        changeSlideAnimation={{
          isFade: false,
          isSlide: "1s ease",
        }}
      >
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
      </Slider>
    </>
  );
};

export default SliderCarousel;

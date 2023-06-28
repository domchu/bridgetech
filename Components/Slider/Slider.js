import { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";

const Slider = ({ children }) => {
  const sliderContainerRef = useRef(null);
  const intervalId = useRef();
  const [current, setCurrent] = useState(0);

  // HANDLE CURRENT CHANGE AND SLIDES
  const handleCurrentChange = (n) => {
    setCurrent(n);
    window.clearInterval(intervalId.current);

    const container = sliderContainerRef.current;
    if (container) {
      container.querySelectorAll(".slider-slide").forEach((slide) => {
        slide.style.transform = `translateX(-${n * 100}%)`;
      });
    }
  };
  // THE NEXT AND PREV  FUNCTIONS
  const handleNext = () => {
    handleCurrentChange(current === children.length - 1 ? 0 : current + 1);
  };
  const handlePrev = () => {
    handleCurrentChange(current === 0 ? children.length - 1 : current - 1);
  };

  // AUTOMATIC SLIDES
  useEffect(() => {
    intervalId.current = window.setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      window.clearInterval(intervalId.current);
    };
  }, [current]);
  return (
    <>
      <Box className="slider__wrapper">
        <Box className="slider-container" ref={sliderContainerRef}>
          {children.map((item, index) => (
            <div className="slider-slide" key={`slider-slide-${index}`}>
              {item}
            </div>
          ))}
        </Box>
        {/* THE NEXT AND PREV BTNS */}
        <Box className="slider-buttons">
          <button className="prev__btn" onClick={handlePrev}>
            Prev
          </button>
          <button className="next__btn" onClick={handleNext}>
            Next
          </button>
        </Box>
        {/* THE DOTS AT THE SLIDER FOOTER */}
        <Box className="slider-dots">
          {children.map((_, i) => (
            <button
              key={`slider-dot-${i}`}
              onClick={() => handleCurrentChange(i)}
              className={
                i === current ? "slider-dot slider-dot--active" : "slider-dot"
              }
            ></button>
          ))}
        </Box>
      </Box>
    </>
  );
};




export default Slider;

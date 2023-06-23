import { useEffect, useRef, useState } from "react";

const SliderCarousel = ({ children }) => {
  const sliderContainerRef = useRef < HTMLDivElement > null;
  const intervalId = (useRef < number) | (null > null);
  const [current, setCurrent] = useState(0);

  // handle current change.
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
  // the NEXT AND PREV BTN
  const handleNext = () => {
    handleCurrentChange(current === children.length - 1 ? 0 : current + 1);
  };
  const handlePrev = () => {
    handleCurrentChange(current === 0 ? children.length - 1 : current - 1);
  };

  // automatic slides
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
      <SliderWrapper>
        <div className="slider-container" ref={sliderContainerRef}>
          {children.map((item, index) => (
            <div className="slider-slide" key={`slider-slide-${index}`}>
              {item}
            </div>
          ))}
        </div>

        <div className="slider-buttons">
          <button onClick={handlePrev}>prev</button>
          <button onClick={handleNext}>next</button>
        </div>

        <div className="slider-dots">
          {children.map((_, i) => (
            <button
              key={`slider-dot-${i}`}
              onClick={() => handleCurrentChange(i)}
              className={
                i === current ? "slider-dot slider-dot--active" : "slider-dot"
              }
            ></button>
          ))}
        </div>
      </SliderWrapper>
    </>
  );
};
export default SliderCarousel;

import { useEffect, useRef, useState } from "react";

const Slider = ({ children }) => {
  const sliderContainerRef = useRef(null);
  const intervalId = useRef();
  const [current, setCurrent] = useState(0);

  // handle current change and slides.
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
  // THE NEXT AND PREV BTN
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
      <div className="slider__wrapper">
        <div className="slider-container" ref={sliderContainerRef}>
          {children.map((item, index) => (
            <div className="slider-slide" key={`slider-slide-${index}`}>
              {item}
            </div>
          ))}
        </div>

        <div className="slider-buttons">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
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
      </div>
    </>
  );
};

// const SliderWrapper = styled.div`
//   border: 2px solid red;
//   position: relative;

//   .slider-container {
//     border: 2px solid blue;

//     display: flex;
//     overflow: hidden;

//     .slider-slide {
//       border: 2px solid purple;

//       flex: 1 0 100%;
//       transform: translateX(0);
//       transition: transform 0.5s ease-in-out;
//     }
//   }

//   .slider-buttons {
//     border: 2px solid green;
//     position: absolute;
//     width: 100%;
//     top: 50%;
//     transform: translateY(-50%);
//     display: flex;
//     justify-content: space-between;
//   }

//   .slider-dots {
//     border: 2px solid yellow
//     position: absolute;
//     left: 50%;
//     top: 100%;
//     transform: translateX(-50%);

//     .slider-dot {
//       //reset button default styles
//       background: none;
//       outline: none;
//       border: none;
//       cursor: pointer;

//       /* border: 2px solid black; */
//       width: 20px;
//       height: 20px;
//       border-radius: 5rem;
//       background: blue;
//       transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

//       &--active {
//         background: red;
//         width: 30px;
//       }
//     }
//   }
// `;
export default Slider;

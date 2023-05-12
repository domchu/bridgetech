import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import { Box } from "@chakra-ui/react";

const Testimonial = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  //* useEffect function to negative numbers.
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  //* useEffect for the auto slider.
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 7000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <Box className="section testimonial-section testimonial-section wf-section">
      <Box className="section-gap-130">
        <Box className="container w-container">
          <Box className=" section-justify-center">
            <Box className="section-block max-width-475 text-center">
              <h2 className="section-title">
                Client's
                <span className="section-titile-inner-style">Talk</span>
              </h2>
              <Box className="section-text">
                Neque porro quisquam est, qui dolorem ipsum quia golor sit amet
                <br />
                ctetur, adipisci velit, sed eligendi optio cumque nihil impedit
              </Box>
            </Box>
          </Box>
          <Box className="section-center">
            {people.map((person, personIndex) => {
              const { id, image, title, quote, name } = person;

              //* conditions for the slide.
              let position = "nextSlide";
              if (personIndex === index) {
                position = "activeSlide";
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = "lastSlide";
              }
              //* mapping the json/data to the dom.
              return (
                <article className={position} key={id}>
                  <img
                    src={image}
                    alt={name}
                    className="person-img"
                    loading="lazy"
                  />
                  <h4>{name}</h4>
                  <p className="title">{title} </p>
                  <p className="text">{quote} </p>
                  <FaQuoteRight className="icon" />
                </article>
              );
            })}

            {/* the prev and next buttons */}
            <button className="prev" onClick={() => setIndex(index - 1)}>
              <FiChevronLeft />
            </button>
            <button className="next" onClick={() => setIndex(index + 1)}>
              <FiChevronRight />
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;

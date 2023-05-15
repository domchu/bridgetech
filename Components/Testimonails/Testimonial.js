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
      <Box className="sect-gap-130">
        <Box className="section-justify-center ">
          <Box className="section-block max-width-475 text-center ">
            <h2 className="section-title">
              Client's
              <span className="section-title-inner-style">Talk</span>
            </h2>
            <Box className="section-text">
              A short quote or personal anecdote from our clients that describes
              the experienced they've had with bridgekode. We implore you to go
              via the feedbacks carefully.
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
                <Box className="image-container">
                  <img
                    src={image}
                    alt={name}
                    className="person-img img"
                    loading="lazy"
                  />
                </Box>
                <h4>{name}</h4>
                <p className="title">{title} </p>
                <p className="text">'' {quote} '' </p>
                <Box className="image-container">
                  <FaQuoteRight className="icon" />
                </Box>
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
  );
};

export default Testimonial;

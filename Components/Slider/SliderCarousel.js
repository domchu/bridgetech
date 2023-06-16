import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";

import Image1 from "../../public/images/ceo.jpg";
import Image2 from "../../public/images/ceo.jpg";
import Image3 from "../../public/images/ceo.jpg";

const slides = [
  {
    title: "Get Started",
    subtitle: "Start with your Email",
    control: <input type="email" placeholder="Email" />,
    image: Image1,
  },
  {
    title: "Your Password",
    subtitle: "Start with your Email",
    control: <input type="password" placeholder="Password" />,
    image: Image2,
  },
  {
    title: "Let's GO",
    subtitle: "Start with your Email",
    control: <input type="email" placeholder="Email" />,
    image: Image3,
  },
];

const Carousel = () => {
  return <></>;
};
export default Carousel;

      
import React from "react";
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";
import Footer from "../../Components/Footer/Footer";
import About from "../../Components/About/About";
import NewsLetter from "./../../Components/NewsLetter";
import Testimonial from "../../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const aboutus = () => {
  return (
    <>
      <DefaultSeo
        title="About Us | Crafting websites to perfection "
        description="bridgekode software development services aims to provide solutions to businesses & eradicate poverty among youths"
        {...SEO}
      />
      <Topnav />
      <Header />
      <About />
      <NewsLetter />
      <Testimonial />
      <Footer />
    </>
  );
};

export default aboutus;

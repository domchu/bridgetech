import React from "react";
import Header from "../Components/Header/Header";
import Topnav from "../Components/Topnav/Topnav";
import Footer from "../Components/Footer/Footer";
import Projects from "../Components/Projects/Projects";
import NewsLetter from "../Components/NewsLetter";
import Testimonial from "../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const project = () => {
  return (
    <>
      <DefaultSeo
        title="Project | Crafting Websites to Perfection "
        description="Underlisted Projects completed successfully by bridgekode, hosted online & delivered to our various clients respectively"
        {...SEO}
      />
      <Topnav />
      <Header />
      <Projects />
      <NewsLetter />
      <Testimonial />
      <Footer />
    </>
  );
};

export default project;

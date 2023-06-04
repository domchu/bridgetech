import React from "react";
import Header from "../Components/Header/Header";
import Topnav from "../Components/Topnav/Topnav";
import Footer from "../Components/Footer/Footer";
import Projects from "../Components/Projects/Projects";
import NewsLetter from "../Components/NewsLetter";
import Brand from "../Components/Brand/Brand";
import Testimonial from "../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const projects = () => {
  return (
    <>
      <DefaultSeo
        title="Project | Bridgekode Tech"
        description="Projects completed successfully by bridgekode for clients"
        {...SEO}
      />
      <Topnav />
      <Header />
      <Projects />
      <NewsLetter />
      <Testimonial />
      <Brand />
      <Footer />
    </>
  );
};

export default projects;

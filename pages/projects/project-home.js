import React from "react";
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import Projects from "../../Components/Projects/Projects";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const projecthome = () => {
  return (
    <>
      <DefaultSeo
        title="Project | Bridgekode"
        description="We offers the various IT services such as mobile apps, design websites, HR services, SEO, training,IT setup, IT management etc"
        {...SEO}
      />
      <Topnav />
      <Header />
      <Projects />
      <Testimonial />
      <Footer />
    </>
  );
};

export default projecthome;

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
        description="Check carefully the various projects carried out by bridgekode such as websites, UX/UI design, Database, School portal, Blog etc"
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

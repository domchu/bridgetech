import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const web = () => {
  return (
    <>
      <DefaultSeo
        title="Web Development | Bridgekode Tech"
        description="We train kids or students to design websites(coding) using HTML, CSS, and JavaScript, Git/Github, web responsiveness."
        {...SEO}
      />
      <Topnav />
      <Header />
      <h2>Web development course</h2>
      <Testimonial />
      <Footer />
    </>
  );
};

export default web;

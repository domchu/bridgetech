import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import CoursesSubHeading from "../../Components/CoursesSubHeading";

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
      <CoursesSubHeading text="Web development" />
      <h2>Web development course</h2>
      <Testimonial />
      <Footer />
    </>
  );
};

export default web;

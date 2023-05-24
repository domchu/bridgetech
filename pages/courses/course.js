import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import NewsLetter from "../../Components/NewsLetter";
import Testimonial from "./../../Components/Testimonails/Testimonial";
import CoursesTab from "../../Components/Courses/CoursesTab";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const course = () => {
  return (
    <>
      <DefaultSeo
        title="Bridgekode Courses | Bridgekode"
        description="Choose from our wide range of courses to land your dream job"
        {...SEO}
      />
      <Topnav />
      <Header />
      <CoursesTab />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default course;

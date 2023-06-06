import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleCourse from "../../Components/Courses/SingleCourse";
import CoursesSubHeading from "./../../Components/CoursesSubHeading";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const branding = () => {
  return (
    <>
      <DefaultSeo
        title="Branding Website | Bridgekode Tech"
        description="Making businesses look enticing and innovative to clients and increases revenue(income) to the organisation or company"
        {...SEO}
      />
      <Topnav />
      <Header />
      <CoursesSubHeading text="Branding" />
      <SingleCourse />
      <Testimonial />
      <Footer />
    </>
  );
};

export default branding;

import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import SingleCourse from "../../Components/Courses/SingleCourse";

const branding = () => {
  return (
    <>
      <DefaultSeo
        title="Branding | Bridgekode Tech"
        description="Making businesses look enticing and innovative to clients and increases revenue(income) to the organisation or company"
        {...SEO}
      />
      <Topnav />
      <Header />
      <SingleCourse />
      <Testimonial />
      <Footer />
    </>
  );
};

export default branding;

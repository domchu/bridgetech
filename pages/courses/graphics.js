import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import CoursesSubHeading from "../../Components/CoursesSubHeading";

const graphics = () => {
  return (
    <>
      <DefaultSeo
        title="Graphics Design | Bridgekode Tech"
        description="We design logos, complementary cards, flyers, handbills, etc using coraldraw, photoshop, illustrator, adobe Pagemaker etc"
        {...SEO}
      />
      <Topnav />
      <Header />
      <CoursesSubHeading text="Graphics Design" />
      
      <h2>Graphics Course</h2>
      <Testimonial />
      <Footer />
    </>
  );
};

export default graphics;

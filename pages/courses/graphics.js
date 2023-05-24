import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const graphics = () => {
  return (
    <>
      <DefaultSeo
        title="Graphic Design | Bridgekode"
        description="We design logos, complementary cards, flyers, handbills, etc using coraldraw, photoshop, illustrator, adobe etc"
        {...SEO}
      />
      <Topnav />
      <Header />
      <h2>Graphics Course</h2>
      <Testimonial />
      <Footer />
    </>
  );
};

export default graphics;

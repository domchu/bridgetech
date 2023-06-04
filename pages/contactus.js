import React from "react";
import Header from "../Components/Header/Header";
import Topnav from "../Components/Topnav/Topnav";
import Footer from "../Components/Footer/Footer";
import Contact from "../Components/Contact/Contact";
import NewsLetter from "./../Components/NewsLetter";
import Testimonial from "../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const contactus = () => {
  return (
    <>
      <DefaultSeo
        title="Contact Us | Bridgekode Tech"
        description="Contact us at bridgekode, we are open 24/7 hours"
        {...SEO}
      />
      <Topnav />
      <Header />
      <Contact />
      <NewsLetter />
      <Testimonial />
      <Footer />
    </>
  );
};

export default contactus;

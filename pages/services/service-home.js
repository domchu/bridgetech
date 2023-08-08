import React from "react";
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";
import Footer from "../../Components/Footer/Footer";
import Service from "../../Components/Service/Service";
import NewsLetter from "../../Components/NewsLetter";
import Testimonial from "../../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const servicehome = () => {
  return (
    <>
      <DefaultSeo
        title="Services | Crafting websites to perfection "
        description="We offers the various IT services such as mobile apps, design websites, HR services, SEO, training,IT setup, IT management etc"
        {...SEO}
      />
      <Topnav />
      <Header />
      <Service />
      <NewsLetter />
      <Testimonial />
      <Footer />
    </>
  );
};

export default servicehome;

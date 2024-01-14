import React from "react";
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";
import Footer from "../../Components/Footer/Footer";
import Quotes from "../../Components/Quotes/Quotes";
import NewsLetter from "../../Components/NewsLetter";
import Testimonial from "../../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const quotes = () => {
  return (
    <>
      <DefaultSeo
        title="Quote | Crafting Websites to Perfection "
        description="Let's have your project budget and We will get back to you as soon as possible."
        {...SEO}
      />
      <Topnav />
      <Header />
      <Quotes />
      <NewsLetter />
      <Testimonial />
      <Footer />
    </>
  );
};

export default quotes;

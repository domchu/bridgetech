import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";
import Faq from "../../Components/Faq/Faq";
import NewsLetter from "./../../Components/NewsLetter";
import Testimonial from "../../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

export default function faq() {
  return (
    <>
      <DefaultSeo
        title="Faq | Bridgekode"
        description="You have questions to ask and we have the answers."
        {...SEO}
      />
      <Topnav />
      <Header />
      <Faq />
      <NewsLetter />
      <Testimonial />
      <Footer />
    </>
  );
}

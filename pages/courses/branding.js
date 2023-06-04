import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const branding = () => {
  return (
    <>
      <DefaultSeo
        title="Branding | Bridgekode Tech"
        description="Making businesses look enticing and innovative to clients"
        {...SEO}
      />
      <Topnav />
      <Header />
      <h2>Branding & Seo</h2>
      <Testimonial />
      <Footer />
    </>
  );
};

export default branding;

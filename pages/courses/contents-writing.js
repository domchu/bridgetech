import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const contentswriting = () => {
  return (
    <>
      <DefaultSeo
        title="Content Writing | Bridgekode Tech"
        description="A well tutor materials tailored for contents writing for easy understanding by clients"
        {...SEO}
      />
      <Topnav />
      <Header />
      <h2>Contents Writing</h2>
      <Testimonial />
      <Footer />
    </>
  );
};

export default contentswriting;

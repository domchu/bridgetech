import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const software = () => {
  return (
    <>
      <DefaultSeo
        title="Software Engineering | Bridgekode"
        description="Full front-end development training using nextjs, Reactjs, Javscript, Typescript and Css frameworks like chakra-ui etc"
        {...SEO}
      />
      <Topnav />
      <Header />
      <h2>Software development course</h2>
      <Testimonial />
      <Footer />
    </>
  );
};

export default software;

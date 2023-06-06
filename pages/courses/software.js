import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import CoursesSubHeading from "../../Components/CoursesSubHeading";

const software = () => {
  return (
    <>
      <DefaultSeo
        title="Software Engineering | Bridgekode Tech"
        description="Full front-end development training using nextjs, Reactjs, Javscript, Typescript and Css frameworks like chakra-ui etc"
        {...SEO}
      />
      <Topnav />
      <Header />
      <CoursesSubHeading text="Software development" />
      <h2>Software development course</h2>
      <Testimonial />
      <Footer />
    </>
  );
};

export default software;

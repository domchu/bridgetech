import React from "react";
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import Projects from "../../Components/Projects/Projects";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const projecthome = () => {
  return (
    <>
      <DefaultSeo
        title="Projects | Crafting Websites to Perfection "
        description="Check carefully the various projects carried out by bridgekode such as websites, UX/UI design, Database, School portal, Blog, frontend, front-end, software, website, react, nextjs, typescript, graphics,seo, javascript, html, css, wordpress, sass, bootstrap,tailwindcss, semantic-ui, chakra-ui, mantie, web development, wordpress, e-commerce website, coding, bridgekode, ICT, coding, blog, bridgekode, ochu, ochu dominic, computer, mathematics, teaching, tutor, training, mySQL, mongoose, backend, php, etc"
        {...SEO}
      />
      <Topnav />
      <Header />
      <Projects />
      <Testimonial />
      <Footer />
    </>
  );
};

export default projecthome;

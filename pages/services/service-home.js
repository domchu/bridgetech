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
        title="Services | Crafting Websites to Perfection "
        description="We offers the various IT services such as mobile apps, design websites, HR services, SEO, training,IT setup, IT management, custom software, web design, web applications, students coding program, kids coding, custom website, mobile app, tracking website, ticketing website, business website, portfolio website, landing page, e-commerce website, e-learning app/website, school result portal & database, school website, general IT training, and cutting-edge technology to bridge the gap between ideas and reality. Explore our services and empower your digital journey with BridgeKode. frontend, front-end, software, website, react, nextjs, typescript, graphics, seo, javascript, html, css, wordpress, sass, bootstrap, tailwindcss, material-ui, semantic-ui, chakra-ui, mantie, web development, wordpress, e-commerce website, coding, bridgekode, ICT, coding, blog, bridgekode, ochu, ochu dominic, computer, mathematics, teaching, tutor, training, mySQL, mongoose, backend, php, etc"
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

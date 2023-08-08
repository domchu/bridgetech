import React from "react";
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";
import Footer from "../../Components/Footer/Footer";
import Team from "../../Components/Team/Team";
import NewsLetter from "./../../Components/NewsLetter";
import Testimonial from "../../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const team = () => {
  return (
    <div>
      <DefaultSeo
        title="Team Bridgekode | Crafting websites to perfection "
        description="Human resourses of bridgekode, hale & hearty, exparte, knowledgeable & experience "
        {...SEO}
      />
      <Topnav />
      <Header />
      <Team />
      <NewsLetter />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default team;

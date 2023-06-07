import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Testimonial from "../../Components/Testimonails/Testimonial";
import Footer from "../../Components/Footer/Footer";
import TeamSingleHead from "../../Components/TeamProfile/TeamSingleHead";
import TeamProfile from "../../Components/TeamProfile/TeamProfile";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const promanager = () => {
  return (
    <>
      <DefaultSeo
        title="Senior Frontend | Bridgekode Tech"
        description="senior frontend engineer with Typescript,React, next,javascript, unit tests, intergrated testing, etc  "
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead />
      <TeamProfile
        name="Ogada Stanley"
        title="Senior Frontend Engineer."
        biography="A very versatile, confident, Creative and immovable Front-End Engineer with over 5 years of experience building stable eCommerce websites and apps in fast-paced, collaborative environments and software tutor/mentor to younger developers"
        achievement="Best front-end Engineer Tutor/Mentor-2022 "
        linkedinlink="https://linkedin.com/in/"
        facebooklink="https://www.facebook.com/"
        instagramlink="https://instagram.com/"
        twitterlink="https://twitter.com/"
        image="/images/richcode.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default promanager;

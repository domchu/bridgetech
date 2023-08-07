import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Testimonial from "../../Components/Testimonails/Testimonial";
import Footer from "../../Components/Footer/Footer";
import TeamSingleHead from "../../Components/TeamProfile/TeamSingleHead";
import TeamProfile from "../../Components/TeamProfile/TeamProfile";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const software = () => {
  return (
    <>
      <DefaultSeo
        title="Senior Software | Crafting websites to perfection "
        description="senior frontend engineer with Typescript,React, next,javascript, unit tests, intergrated testing, etc  "
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead teamTitle="Front-End Engr." />
      <TeamProfile
        name="Ogada Stanley"
        title="Senior Software Engineer."
        biography="Dedicated front-end developer with over five(5) years of building intuitive, user-friendly websites with a strong emphasis on writing clean, reusable code and renowed for promoting rapid feature development, has practical experience working across time zones with diverse teams."
        achievement="Best front-end Engineer Tutor/Mentor- 2021, 2022 "
        linkedinlink="https://www.linkedin.com/in/stanley-ogada/"
        facebooklink="https://www.facebook.com/"
        instagramlink="https://www.instagram.com/richcode.js/"
        twitterlink="https://www.twitter.com/RichcodeC"
        image="/images/stanley.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default software;

import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Testimonial from "../../Components/Testimonails/Testimonial";
import Footer from "../../Components/Footer/Footer";
import TeamSingleHead from "../../Components/TeamProfile.js/TeamSingleHead";
import TeamProfile from "../../Components/TeamProfile.js/TeamProfile";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const promanager = () => {
  return (
    <>
      <DefaultSeo
        title="Senior Frontend | Bridgekode"
        description="senior frontend engineer with Typescript,React, next,javascript, unit tests, intergrated testing, etc  "
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead />
      <TeamProfile
        name="Ogada Stanley"
        title="Senior Frontend Egnr."
        biography="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laudantium architecto quasi, reprehenderit temporibus accusantium commodi dolorum. Illo, rerum cupiditate."
        achievement="Best front-end Engineer tutor-2022 "
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default promanager;

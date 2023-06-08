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
        title="Project Manager | Bridgekode Tech"
        description="Fullstack engineer with  PHP, Typescript,React, next,javascript, unit tests, intergrated testing, Agile Scrum, SEO expert, Branding, digital marketing skills etc  "
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead />
      <TeamProfile
        name="Olatunde Sleek"
        title="Project Manager"
        biography="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laudantium architecto quasi, reprehenderit temporibus accusantium commodi dolorum. Illo, rerum cupiditate."
        achievement="Best Coding School at Ojo-Lagos "
        linkedinlink="https://linkedin.com/in/"
        facebooklink="https://www.facebook.com/"
        instagramlink="https://instagram.com/"
        twitterlink="https://twitter.com/"
        image="/images/mr-sleek.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default promanager;

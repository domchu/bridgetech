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
        title="Project Manager | Crafting websites to perfection "
        description="Fullstack engineer with  PHP, Typescript,React, next,javascript, unit tests, intergrated testing, Agile Scrum, SEO expert, Branding, digital marketing skills etc  "
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead teamTitle="Project Manager" />
      <TeamProfile
        name="Olatunde Sleek"
        title="Project Manager"
        biography="The Chief Executive Officer of Florintech Computer College, Best coding school in Ojo-Lagos state, with over ten(10) years of versatile experience in IT field such programming, Branding, SEO expert, Microsoft suite, Graphics, to list but a few."
        achievement="Best Coding School at Ojo-Lagos "
        linkedinlink="https://linkedin.com/in/olatundesleek"
        facebooklink="https://www.facebook.com/olatundesleek"
        instagramlink="https://instagram.com/olatundesleek"
        twitterlink="https://twitter.com/olatundesleek"
        image="/images/mr-sleek.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default promanager;

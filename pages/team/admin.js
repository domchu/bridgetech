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
        title="Admin Officer | Crafting Websites to Perfection "
        description="General secretary and admin in bridgekode"
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead teamTitle="Admin Officer" />
      <TeamProfile
        name="Dike Ifeanyi"
        title="Admin Officer + Secretary"
        biography="An experience & self-motivated office administrator/secretary with over 3 years of experience working in companies, overseeing schedules, travelling arrangements,clients & staff meetings,
        answering incoming & outgoing correspondence."
        achievement="Face of SAMRACK Travelling Agency - 2015"
        linkedinlink="https://www.linkedin.com/in/bridgekode-software-development-company-750061282/"
        facebooklink="https://www.facebook.com/nwabudike.ify"
        instagramlink="https://instagram.com/nwabudikeify"
        twitterlink="https://twitter.com/bridgekode_tech"
        image="/images/ify.JPG"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default promanager;

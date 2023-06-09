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
        title="Admin Officer | Bridgekode Tech"
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
        linkedinlink="https://linkedin.com/in/"
        facebooklink="https://www.facebook.com/"
        instagramlink="https://instagram.com/"
        twitterlink="https://twitter.com/"
        image="/images/ify.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default promanager;

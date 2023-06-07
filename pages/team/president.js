import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Testimonial from "../../Components/Testimonails/Testimonial";
import Footer from "../../Components/Footer/Footer";
import TeamSingleHead from "../../Components/TeamProfile/TeamSingleHead";
import TeamProfile from "../../Components/TeamProfile/TeamProfile";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const president = () => {
  return (
    <>
      <DefaultSeo
        title="Team President | Bridgekode Tech"
        description="General overseer and Team Leader of bridgekode development service"
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead />
      <TeamProfile
        name="Ochu Dominic"
        title="CEO-President"
        biography="A Creative and immovable Front-End Engineer with over 3
        years of experience building stable websites and apps in fast-paced, collaborative environments and mathematice/further mathematics tutor for over a decade with track records & awards."
        achievement="Best mathematics tutor - 2013, 2014, 2015"
        linkedinlink="https://linkedin.com/in/"
        facebooklink="https://www.facebook.com/"
        instagramlink="https://instagram.com/"
        twitterlink="https://twitter.com/"
        image="/images/ceo.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default president;

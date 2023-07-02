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
        description="General overseer and Team Lead at bridgekode Software development service"
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead teamTitle="Team Lead/CEO" />
      <TeamProfile
        name="Ochu Dominic"
        title="Team Lead/CEO"
        biography="Team Lead/CEO at Bridgekode Software Development Services. A Creative & immovable Front-End Engineer with over 3
        years of experience building stable websites and apps in fast-paced, collaborative environments & mathematice/further math. tutor for over a decade with track records & awards."
        achievement="Best Mathematics Tutor - 2013, 2014, 2015"
        linkedinlink="https://www.linkedin.com/in/dominic-ochu-470a8418a/"
        facebooklink="https://www.facebook.com/ochu.dominic/"
        instagramlink="https://instagram.com/official_ochudominic"
        twitterlink="https://twitter.com/OchuOnah"
        image="/images/ceo.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default president;

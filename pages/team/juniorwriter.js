import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Testimonial from "../../Components/Testimonails/Testimonial";
import Footer from "../../Components/Footer/Footer";
import TeamSingleHead from "../../Components/TeamProfile/TeamSingleHead";
import TeamProfile from "../../Components/TeamProfile/TeamProfile";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const juniorwriter = () => {
  return (
    <>
      <DefaultSeo
        title=" Copywriter | Crafting Websites to Perfection "
        description="expert in guidance and counselling kids, students, giving advice to clients, initiation of ideas etc  "
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead teamTitle="Junior Copywriter." />
      <TeamProfile
        name="Ochu Oyame"
        title="Junior Copywriter"
        biography="An English language tutor, counselor, a creative writer & an editor of articles on various platforms with over one(1) years of experience."
        achievement="Most Valuable counselor - 2018 "
        linkedinlink="https://www.linkedin.com/in/bridgekode-software-development-company-750061282/"
        facebooklink="https://www.facebook.com/Ochu-Comfort"
        instagramlink="https://instagram.com/ochucomfort/"
        twitterlink="https://twitter.com/bridgekode_tech"
        image="/images/comfort.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default juniorwriter;

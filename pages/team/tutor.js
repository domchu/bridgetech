import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Testimonial from "../../Components/Testimonails/Testimonial";
import Footer from "../../Components/Footer/Footer";
import TeamSingleHead from "../../Components/TeamProfile/TeamSingleHead";
import TeamProfile from "../../Components/TeamProfile/TeamProfile";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const tutor = () => {
  return (
    <>
      <DefaultSeo
        title="Web Design Tutor | Bridgekode Tech"
        description="Dedicated tutor with more than three(3) experience using HTML, CSS, Jest, Javaceript, Git/Github etc etc  "
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead teamTitle="Web Dev. Tutor" />
      <TeamProfile
        name=" JnpRof J."
        title="Web Development Tutor"
        biography="An innovative frontend developer and a web tutor at florintech computer company with over two(2) years of experience leveraging javascript, html, css and general web tools."
        achievement="Best Javascript Tutor - 2022 "
        linkedinlink="https://linkedin.com/in/"
        facebooklink="https://www.facebook.com/"
        instagramlink="https://instagram.com/"
        twitterlink="https://twitter.com/"
        image="/images/johnson.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default tutor;

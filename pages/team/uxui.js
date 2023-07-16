import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Testimonial from "../../Components/Testimonails/Testimonial";
import Footer from "../../Components/Footer/Footer";
import TeamSingleHead from "../../Components/TeamProfile/TeamSingleHead";
import TeamProfile from "../../Components/TeamProfile/TeamProfile";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const uxui = () => {
  return (
    <>
      <DefaultSeo
        title="Ui'Ux Design | Bridgekode Team"
        description="Expert in Designing templates using Figma, illustrator, adobe, coraldraw, photoshop etc"
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead teamTitle="Products Designer" />
      <TeamProfile
        name="Egaji Samuel"
        title="Product Designer (UX/UI)"
        biography="I am a talented and ambitious UI/UX designer with less than 2 years of professional experience in the field. With a passion for creating captivating user experiences and a keen eye for detail,  dedicated to crafting visually appealing and intuitive designs that resonate with users."
        achievement="Best Project Deginger - 2023"
        linkedinlink="https://linkedin.com/in/samuel-egajivwie-14288a273"
        facebooklink="https://www.facebook.com/egajivwie-samuel"
        instagramlink="https://instagram.com/"
        twitterlink="https://twitter.com/akpevwe102"
        image="/images/sammy.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default uxui;

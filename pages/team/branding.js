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
        title="Branding Expert | Bridgekode Tech"
        description="Experte in branding & SEO"
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead />
      <TeamProfile
        name="Owoicho Emma"
        title="Branding/SEO Expert"
        biography="The Chief Executive Officer at The Xclusive Media & also CIT at MFM-R9 with over ten(5) years of versatile experience in IT field especially Content Management System(CMS), Branding, SEO expert, etc."
        achievement="Best ICT personel by MFM-R9 -2020 "
        linkedinlink="https://linkedin.com/in/"
        facebooklink="https://www.facebook.com/"
        instagramlink="https://instagram.com/"
        twitterlink="https://twitter.com/"
        image="/images/emma.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default promanager;

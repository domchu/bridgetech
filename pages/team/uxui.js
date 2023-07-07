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
        title="Ui'Ux Design | Bridgekode Tech"
        description="Expert in Designing templates using Figma, illustrator, adobe, coraldraw, photoshop etc  "
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead teamTitle="Products Designer" />
      <TeamProfile
        name="Egaji Samuel"
        title="Product Designer (UX/UI)"
        biography="Team Lead/Chief Executive Officer at The Xclusive Media & also CIT at MFM-R9 with over ten(5) years of versatile experience in IT field especially Content Management System(CMS), Branding, SEO expert, etc."
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

export default promanager;

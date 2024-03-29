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
        title="Content Writer | Crafting Websites to Perfection "
        description="English and literature tutor with track records over the years & contents writer at bridgekode.  "
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead teamTitle="Content Writer" />
      <TeamProfile
        name="Esther Uchechi"
        title="Senior Content Writer"
        biography="An English language tutor, a creative writer & an editor of articles, brochure, journals and magazines on various platforms with over seven(7) years of experience. "
        achievement="Best English Tutor - 2022 "
        linkedinlink="https://linkedin.com/in/uchechi-ekeh-056b05281/"
        facebooklink="https://www.facebook.com/"
        instagramlink="https://instagram.com/"
        twitterlink="https://twitter.com/"
        image="/images/senwrita.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default promanager;

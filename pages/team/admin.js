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
        title="Admin Officer | Bridgekode"
        description="General secretary and admin in bridgekode"
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead />
      <TeamProfile
        name="Dike Ifeanyi"
        title="Admin Officer + Secretary"
        biography="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laudantium architecto quasi, reprehenderit temporibus accusantium commodi dolorum. Illo, rerum cupiditate."
        achievement="Best Guidance Counselor at Keyonaville - 2022"
        linkedinlink="https://linkedin.com/in/"
        facebooklink="https://www.facebook.com/"
        instagramlink="https://instagram.com/"
        twitterlink="https://twitter.com/"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default promanager;

import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Testimonial from "../../Components/Testimonails/Testimonial";
import Footer from "../../Components/Footer/Footer";
import TeamSingleHead from "../../Components/TeamProfile.js/TeamSingleHead";
import TeamProfile from "../../Components/TeamProfile.js/TeamProfile";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const promanager = () => {
  return (
    <>
      <DefaultSeo
        title="Hardware Engineer | Bridgekode"
        description="Expert in hardware maintainance and networking.  "
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead />
      <TeamProfile
        name="Dim Lawrence"
        title="Hardware/Network Engineer"
        biography="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laudantium architecto quasi, reprehenderit temporibus accusantium commodi dolorum. Illo, rerum cupiditate."
        achievement="Best networker by Betking -2020,2021,2022 "
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default promanager;

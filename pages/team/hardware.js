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
        title="Hardware Engineer | Crafting websites to perfection "
        description="Expert in hardware maintainance and networking.  "
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead teamTitle="Hardware Engr" />
      <TeamProfile
        name="Dim Lawrence"
        title="Hardware/Network Engineer"
        biography="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laudantium architecto quasi, reprehenderit temporibus accusantium commodi dolorum. Illo, rerum cupiditate."
        achievement="Best networker by Betking -2020,2021,2022 "
        linkedinlink="https://linkedin.com/in/emmanuel-lawrence-dimkpa-ebgr-96a161123"
        facebooklink="https://www.facebook.com/dimkpa.lawrence"
        instagramlink="https://instagram.com/engr.lawrence"
        twitterlink="https://twitter.com/cyberdyne_tech"
        image="/images/lawrence.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default promanager;

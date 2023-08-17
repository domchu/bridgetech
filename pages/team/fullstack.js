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
        title="Fullstack Engineer | Crafting Websites to Perfection "
        description="Fullstack engineer with Java, PHP, Python, Mobile & desktop apps development, Typescript,React, next,javascript, unit tests, intergrated testing, etc  "
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead teamTitle="Fullstack Dev." />
      <TeamProfile
        name="Mudashir Tunde"
        title="FullStack Software Engineer."
        biography="Team lead/CEO at Jaflah Software Development Company & also The Chief Technology Officer (CTO) at Manilla with over ten(10) years of versatile experience in IT field especially Mobile apps, Desktop apps, Banks apps, Data-Sci with Python, Full stack Development."
        achievement="Best programmer by LASPOTECH/LASUTECH - 2019, 2020, 2021 "
        linkedinlink="https://linkedin.com/in/mudashir-tunde-899688168/"
        facebooklink="https://www.facebook.com/jaflah03"
        instagramlink="https://instagram.com/teekingtv_"
        twitterlink="https://twitter.com/teekingtv_"
        image="/images/tunde.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default promanager;

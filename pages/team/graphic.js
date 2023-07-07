import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Testimonial from "../../Components/Testimonails/Testimonial";
import Footer from "../../Components/Footer/Footer";
import TeamSingleHead from "../../Components/TeamProfile/TeamSingleHead";
import TeamProfile from "../../Components/TeamProfile/TeamProfile";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const graphic = () => {
  return (
    <>
      <DefaultSeo
        title="Graphics Designer | Bridgekode Tech"
        description="Expert in Designing  using  illustrator, adobe, coraldraw, photoshop etc "
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead teamTitle="Graphics Designer." />
      <TeamProfile
        name="Isaac Oti"
        title="Web/Graphic Designer"
        biography="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laudantium architecto quasi, reprehenderit temporibus accusantium commodi dolorum. Illo, rerum cupiditate."
        achievement="Best graduated student @ florintech comp college-2021  "
        linkedinlink="https://linkedin.com/in/"
        facebooklink="https://www.facebook.com/"
        instagramlink="https://instagram.com/"
        twitterlink="https://twitter.com/"
        image="/images/isaac.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default graphic;

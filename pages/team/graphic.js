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
        title="Graphics Designer | Bridgekode Team"
        description="Expert in Designing  using  illustrator, adobe, coraldraw, photoshop etc "
        {...SEO}
      />
      <Topnav />
      <Header />
      <TeamSingleHead teamTitle="Graphics Designer." />
      <TeamProfile
        name="Isaac Oti"
        title="Web/Graphic Designer"
        biography="Team Lead/Chief Executive Officer at Webby Graphic & also web developer with over ten(2) years of creative and innovative  experience in IT field especially graphics designer, photography, etc."
        achievement="Best graduated student @ florintech comp college-2021  "
        linkedinlink="https://linkedin.com/in/chinaza-oti"
        facebooklink="https://www.facebook.com/profile.php?id=100077366905478"
        instagramlink="https://instagram.com/webby_345"
        twitterlink="https://twitter.com/webby_345"
        image="/images/isaac.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default graphic;

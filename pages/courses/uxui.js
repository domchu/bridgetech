import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const uxui = () => {
  return (
    <>
      <DefaultSeo
        title="Ux / Ui Design | Bridgekode"
        description="We train peoples to design templates for websites, apps, desktop apps, editing images using figma, photoshop, illustrator, adobe etc"
        {...SEO}
      />
      <Topnav />
      <Header />
      <h2>UI / UX Design</h2>
      <Testimonial />
      <Footer />
    </>
  );
};

export default uxui;

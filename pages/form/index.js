import React from "react";
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";
import Footer from "../../Components/Footer/Footer";
import Register from "../../Components/Register/Register";
import RegisterForm from "../../Components/Register/RegisterForm";
import NewsLetter from "../../Components/NewsLetter";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const form = () => {
  return (
    <>
      <DefaultSeo
        title="Register | Crafting Websites to Perfection "
        description="Register with us today by filling out our form."
        {...SEO}
      />
      <Topnav />
      <Header />
      <Register />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default form;

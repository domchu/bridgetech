import React from "react";
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";
import Footer from "../../Components/Footer/Footer";
import Register from "../../Components/Register/Register";
import Nodemailerform from "../../Components/Register/Nodemailerform";
import NewsLetter from "../../Components/NewsLetter";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const form = () => {
  return (
    <>
      <DefaultSeo
        title="Register | Bridgekode Tech"
        description="Register with us today by filling out our form."
        {...SEO}
      />
      <Topnav />
      <Header />
      <Register />
      <Nodemailerform />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default form;

import React from "react";
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";
import Footer from "../../Components/Footer/Footer";
import NewsLetter from "../../Components/NewsLetter";
import Login from "../../Components/Login/Login";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const login = () => {
  return (
    <>
      <DefaultSeo
        title="Log in | Crafting Websites to Perfection "
        description="Please enter your correct password and username"
        {...SEO}
      />
      <Topnav />
      <Header />
      <Login />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default login;

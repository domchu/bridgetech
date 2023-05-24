import React from "react";
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";
import Footer from "../../Components/Footer/Footer";
import Signup from "../../Components/Signup/Signup";
import NewsLetter from "./../../Components/NewsLetter";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const signin = () => {
  return (
    <>
      <DefaultSeo
        title="Sign up | Bridgekode"
        description="Register with us today by filling out our form."
        {...SEO}
      />
      <Topnav />
      <Header />
      <Signup />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default signin;

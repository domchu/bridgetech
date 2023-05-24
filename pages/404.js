import React from "react";
import Header from "../Components/Header/Header";
import Topnav from "../Components/Topnav/Topnav";
import Footer from "../Components/Footer/Footer";
import NotFound from "./../Components/NotFound";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const Error = () => {
  return (
    <>
      <DefaultSeo
        title="404 Page | Bridgekode"
        description="That page is not found in bridgekode website."
        {...SEO}
      />
      <Topnav />
      <Header />
      <NotFound />
      <Footer />
    </>
  );
};

export default Error;

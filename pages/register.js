import React from "react";
import Header from "../Components/Header/Header";
import Topnav from "../Components/Topnav/Topnav";
import Footer from "../Components/Footer/Footer";
import RegisterForm from "../Components/Register/RegisterForm";
import Register from "../Components/Register/Register";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const register = () => {
  return (
    <>
      <DefaultSeo
        title="Register | Bridgekode Tech"
        description="Register for Bridgekode available services, courses & any IT skills you want as a career in life. You are why we are here."
        {...SEO}
      />
      <Topnav />
      <Header />
      <Register />
      <RegisterForm />
      <Footer />
    </>
  );
};

export default register;

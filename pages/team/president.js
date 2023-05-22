import React from "react";
import Head from "next/head";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Testimonial from "../../Components/Testimonails/Testimonial";
import Footer from "../../Components/Footer/Footer";
import TeamSingleHead from "../../Components/TeamProfile.js/TeamSingleHead";
import TeamProfile from "../../Components/TeamProfile.js/TeamProfile";

const president = () => {
  return (
    <>
      <Head>
        <title>Bridgekode | Contact Us</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/logo-blue.png" size="64x64" />
      </Head>
      <Topnav />
      <Header />
      <TeamSingleHead />
      <TeamProfile />
      <Testimonial />
      <Footer />
    </>
  );
};

export default president;

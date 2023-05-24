import React from "react";
import Head from "next/head";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Testimonial from "../../Components/Testimonails/Testimonial";
import Footer from "../../Components/Footer/Footer";
import TeamSingleHead from "../../Components/TeamProfile.js/TeamSingleHead";
import TeamProfile from "../../Components/TeamProfile.js/TeamProfile";

const promanager = () => {
  return (
    <>
      <Head>
        <title>Bridgekode | project Manager</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/logo-blue.png" size="64x64" />
      </Head>
      <Topnav />
      <Header />
      <TeamSingleHead />
      <TeamProfile
        name="Owoicho Emma"
        title="Branding/SEO Expert"
        biography="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laudantium architecto quasi, reprehenderit temporibus accusantium commodi dolorum. Illo, rerum cupiditate."
        achievement="Best ICT personel by MFM-R9 -2020 "
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default promanager;

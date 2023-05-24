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
        <title>Bridgekode | CEO president</title>
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
        name="Ochu Dominic"
        title="CEO-President"
        biography="A Creative and immovable Front-End Engineer with over 3
                    years of experience building stable websites and apps in
                    fast-paced, collaborative environments and mathematice/
                    further math tutor for over a decade."
        achievement="Best mathematics tutor - 2013"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default president;

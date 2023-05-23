import React from "react";
import Head from "next/head";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";

const contentswriting = () => {
  return (
    <>
      <Head>
        <title>Bridgekode | Contents Writing </title>
        <meta
          name="courses"
          content="you can select from our wide range of courses  "
        />
        <link rel="icon" href="/logo-blue.png" size="64x64" />
      </Head>
      <Topnav />
      <Header />
      <h2>Contents Writing</h2>
      <Testimonial />
      <Footer />
    </>
  );
};

export default contentswriting;

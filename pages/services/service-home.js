import React from "react";
import Head from "next/head";
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";
import Footer from "../../Components/Footer/Footer";
import Service from "../../Components/Service/Service";
import NewsLetter from "../../Components/NewsLetter";
import Testimonial from "../../Components/Testimonails/Testimonial";

const servicehome = () => {
  return (
    <div>
      <Head>
        <title>Bridgekode | Services</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/logo-blue.png" size="64x64" />
      </Head>
      <Topnav />
      <Header />
      <Service />
      <NewsLetter />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default servicehome;

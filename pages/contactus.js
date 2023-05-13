import React from 'react'
import Head from "next/head"
import Header from "../Components/Header/Header";
import Topnav from "../Components/Topnav/Topnav";
import Footer from "../Components/Footer/Footer";
import Contact from "../Components/Contact/Contact";
import NewsLetter from "./../Components/NewsLetter";
import Testimonial from "../Components/Testimonails/Testimonial";

const contactus = () => {
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
      <Contact />
      <NewsLetter />
      <Testimonial />
      <Footer />
    </>
  );
};

export default contactus

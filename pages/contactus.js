import React from 'react'
import Head from "next/head"
import Header from "../Components/Header/Header";
import Topnav from "../Components/Topnav/Topnav";
import Footer from "../Components/Footer/Footer";
import Contact from "../Components/Contact/Contact";
import NewsLetter from "./../Components/NewsLetter";

const contactus = () => {
  return (
    <>
      <Head>
        <title>BridgeTech | Contact Us</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Topnav />
      <Header />
      <Contact />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default contactus

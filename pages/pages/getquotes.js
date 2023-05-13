import React from 'react'
import Head from "next/head"
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";
import Footer from "../../Components/Footer/Footer";
import Quotes from "./../../Components/Quotes/Quotes";
import Testimonial from "../../Components/Testimonails/Testimonial";
import NewsLetter from "../../Components/NewsLetter";

const getquotes = () => {
  return (
    <>
      <Head>
        <title>Bridgekode | Get Quotes</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/logo-blue.png" size="64x64" />
      </Head>
      <Topnav />
      <Header />
      <Quotes />
      <NewsLetter />
      <Testimonial />
      <Footer />
    </>
  );
};

export default getquotes

import React from 'react'
import Head from "next/head"
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";
import Footer from "../../Components/Footer/Footer";
import Signup from "../../Components/Signup/Signup";
import NewsLetter from "./../../Components/NewsLetter";

const signin = () => {
  return (
    <>
      <Head>
        <title>BridgeKode | Sign up</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/logo-blue.png" size="64x64" />
      </Head>
      <Topnav />
      <Header />
      <Signup />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default signin

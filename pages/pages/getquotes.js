import React from 'react'
import Head from "next/head"
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";
import Footer from "../../Components/Footer/Footer";

const getquotes = () => {
  return (
    <>
      <Head>
        <title>BridgeTech | Get Quotes</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Topnav />
      <Header />
      <h1>get a quotes</h1>
      <Footer />
    </>
  );
};

export default getquotes

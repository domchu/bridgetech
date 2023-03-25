import React from 'react'
import Head from "next/head"
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";

const aboutus = () => {
  return (
    <>
      <Head>
        <title>BridgeTech | About Us</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Topnav />
      <Header />
      <h1>About us page</h1>
    </>
  );
};

export default aboutus

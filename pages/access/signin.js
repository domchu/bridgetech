import React from 'react'
import Head from "next/head"
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";

const signin = () => {
  return (
    <>
      <Head>
        <title>BridgeTech | Sign up</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Topnav />
      <Header />
      <h1>Sign up page</h1>
    </>
  );
};

export default signin

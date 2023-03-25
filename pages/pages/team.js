import React from 'react'
import Head from "next/head"
import Header from "../../Components/Header/Header";
import Topnav from "./../../Components/Topnav/Topnav";
const team = () => {
  return (
    <div>
      <Head>
        <title>BridgeTech | Team</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Topnav />
      <Header />
    </div>
  );
};

export default team

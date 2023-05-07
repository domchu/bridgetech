import React from "react";
import Head from "next/head";
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";
import Footer from "../../Components/Footer/Footer";
import Team from "../../Components/Team/Team";
import NewsLetter from "./../../Components/NewsLetter";
const team = () => {
  return (
    <div>
      <Head>
        <title>BridgeTech | Team</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/logo-blue.png" size="64x64" />
      </Head>
      <Topnav />
      <Header />
      <Team />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default team;

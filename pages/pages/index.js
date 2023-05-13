import React from "react";
import Head from "next/head";
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";
import Footer from "../../Components/Footer/Footer";

const index = () => {
  return (
    <div>
      <Head>
        <title>BridgeKode | About Us</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/logo-blue.png" size="64x64" />
      </Head>
      <Topnav />
      <Header />
      <h1>passing all dropdown pages here</h1>
      <Footer />
    </div>
  );
};

export default index;

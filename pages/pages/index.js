import React from "react";
import Head from "next/head";
import Header from "../../Components/Header/Header";

const index = () => {
  return (
    <div>
      <Head>
        <title>BridgeTech | About Us</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <h1>passing all dropdown pages here</h1>
    </div>
  );
};

export default index;

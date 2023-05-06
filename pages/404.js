import React from "react";
import Head from "next/head";
import Header from "../Components/Header/Header";
import Topnav from "../Components/Topnav/Topnav";
import Footer from "../Components/Footer/Footer";

const Error = () => {
  return (
    <>
      <Head>
        <title>BridgeTech | Projects</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/logo-blue.png" size="64x64" />
      </Head>
      <Topnav />
      <Header />
      <h1>Error page</h1>
      <Footer />
    </>
  );
};

export default Error;

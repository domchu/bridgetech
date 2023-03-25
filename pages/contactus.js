import React from 'react'
import Head from "next/head"
import Header from "../Components/Header/Header";

const contactus = () => {
  return (
    <>
      <Head>
        <title>BridgeTech | Contact Us</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <h1>Contact</h1>
    </>
  );
};

export default contactus

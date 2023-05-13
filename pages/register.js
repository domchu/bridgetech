import React from 'react'
import Head from "next/head"
import Header from "../Components/Header/Header";
import Topnav from "../Components/Topnav/Topnav";
import Footer from "../Components/Footer/Footer";
import Signup from "../Components/Signup/Signup";
const register = () => {
  return (
    <>
      <Head>
        <title>Bridgekode | Register</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/logo-blue.png" size="64x64" />
      </Head>
      <Topnav />
      <Header />
      <Signup />
      <Footer />
    </>
  );
};

export default register

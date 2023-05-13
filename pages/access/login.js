import React from 'react'
import Head from "next/head"
import Header from "../../Components/Header/Header";
import Topnav from "../../Components/Topnav/Topnav";
import Footer from "../../Components/Footer/Footer";
import NewsLetter from "./../../Components/NewsLetter";
import Login from "../../Components/Login/Login";
const login = () => {
  return (
    <>
      <Head>
        <title>Bridgekode | Log In</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/logo-blue.png" size="64x64" />
      </Head>
      <Topnav />
      <Header />
      <Login />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default login

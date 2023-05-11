import React from 'react'
import Head from "next/head"
import Header from "../Components/Header/Header";
import Topnav from "../Components/Topnav/Topnav";
import Footer from "../Components/Footer/Footer";
import Projects from "../Components/Projects/Projects";
import NewsLetter from "../Components/NewsLetter";
import Brand from "../Components/Logo/Brand";

const projects = () => {
  return (
    <>
      <Head>
        <title>BridgeTech | Projects</title>
        <meta
          name="projects"
          content="you can select from our wide range of projects done"
        />
        <link rel="icon" href="/logo-blue.png" size="64x64" />
      </Head>
      <Topnav />
      <Header />
      <Projects />
      <NewsLetter />
      <Brand />
      <Footer />
    </>
  );
};

export default projects

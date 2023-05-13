import React from 'react'
import Head from "next/head"
import Header from "../Components/Header/Header";
import Topnav from "../Components/Topnav/Topnav";
import Footer from "../Components/Footer/Footer";
import Projects from "../Components/Projects/Projects";
import NewsLetter from "../Components/NewsLetter";
import Brand from "../Components/Brand/Brand";
import Testimonial from "../Components/Testimonails/Testimonial";

const projects = () => {
  return (
    <>
      <Head>
        <title>Bridgekode | Projects</title>
        <meta
          name="projects"
          content="you can explore from our wide range of projects done"
        />
        <link rel="icon" href="/logo-blue.png" size="64x64" />
      </Head>
      <Topnav />
      <Header />
      <Projects />
      <NewsLetter />
      <Testimonial />
      <Brand />
      <Footer />
    </>
  );
};

export default projects

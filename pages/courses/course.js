import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import NewsLetter from "../../Components/NewsLetter";

const course = () => {
  return (
    <>
      <Head>
        <title>Bridgekode | Courses</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/logo-blue.png" size="64x64" />
      </Head>
      <Topnav />
      <Header />
      <h2>Coures</h2>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default course;

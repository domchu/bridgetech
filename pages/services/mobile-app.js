import React from "react";
import Topnav from "./../../Components/Topnav/Topnav";
import Header from "./../../Components/Header/Header";
import NewsLetter from "./../../Components/NewsLetter";
import Footer from "./../../Components/Footer/Footer";

const mobileapp = () => {
  return (
    <>
      <Topnav />
      <Header />
      <h1>Mobile App Development</h1>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default mobileapp;

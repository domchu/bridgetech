import React from 'react'
import Head from "next/head"
import Header from "../Components/Header/Header";
const projects = () => {
  return (
    <>
      <Head>
        <title>BridgeTech | Projects</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <h1>projects</h1>
    </>
  );
};

export default projects

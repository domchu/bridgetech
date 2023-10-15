import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleCourse from "../../Components/Courses/SingleCourse";
import CoursesSubHeading from "./../../Components/CoursesSubHeading";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const backend = () => {
  return (
    <>
      <DefaultSeo
        title="Backend | Crafting Websites to Perfection "
        description="websites design without writing anything codes"
        keywords="wordpress, elementor, theme, woocommerce, template, etc"
        {...SEO}
      />
      <Topnav />
      <Header />
      <CoursesSubHeading text="Back-End Development" />
      <SingleCourse
        courseTitle="Back-End Development(Node/Express)"
        courseSummary="Backend development refers to the server-side of web and software applications, where the logic, databases, and server configurations are managed."
        contents=" Backend developers work on the behind-the-scenes functionalities that enable the user-facing aspects of a website or application to function. They handle tasks such as database management, server operations, application logic, and ensuring seamless communication between the server and the user's device."
        comment="Backend development languages and technologies include Node.js, Python, Ruby, Java, and databases like MySQL, PostgreSQL, and MongoDB. Backend developers collaborate with frontend developers and focus on the server, databases, and application's core functionality to ensure a smooth user experience."
        amount="# 200,000"
        dollars="$ 200.00"
        duration="5 Months"
        list1="Become a Back-end developer."
        list2="JavaScript Fundamentals:Data Types and Variables,
        Functions, Objects and Arrays"
        list3="Asynchronous Programming"
        list4="Callbacks, Promises, and Async/Await, Event Loop"
        list5=" Node.js Basics:Modules, File System Operations, NPM (Node Package Manager)"
        list6=" Express.js Framework:Routing, Middleware, Template Engines, Error Handling, RESTful APIs"
        list7="Database Integration"
        list8="Authentication and Authorization"
        list9="Testing, Security"
        list10="Deployment and Performance Optimization"
        list11="Version Control, Continuous Integration and Deployment (CI/CD), Best Practices and Design Patterns, Real-time Applications (Optional)"
        list12="Documentation and  Security"
        courseImage="/images/node-express.JPEG"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default backend;

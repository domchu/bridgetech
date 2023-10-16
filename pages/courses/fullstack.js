import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleCourse from "../../Components/Courses/SingleCourse";
import CoursesSubHeading from "./../../Components/CoursesSubHeading";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const fullstack = () => {
  return (
    <>
      <DefaultSeo
        title="Fullstack | Crafting Websites to Perfection "
        description="websites design without writing anything codes"
        keywords="wordpress, elementor, theme, woocommerce, template, etc"
        {...SEO}
      />
      <Topnav />
      <Header />
      <CoursesSubHeading text="FullStack Dev.(MERN)" />
      <SingleCourse
        courseTitle="FullStack Development (MERN)"
        courseSummary="Full-stack development refers to the ability to work with both the front-end (user interface) and back-end (server, database, and application) components of web or software applications. A full-stack developer is proficient in a variety of programming languages, frameworks, and technologies that enable them to handle both client-side and server-side development tasks."
        contents="On the front-end, they work with technologies such as HTML, CSS, and JavaScript, along with libraries and frameworks like React.js or Angular.js, to create visually appealing and interactive user interfaces.
        On the back-end, they manage server-side scripting, databases, server configuration, and application logic. Common back-end technologies include Node.js, Express.js, Python, Ruby on Rails, and PHP, along with databases like MySQL, MongoDB, or PostgreSQL."
        comment="Full-stack developers have a comprehensive understanding of the entire development process, allowing them to build and maintain complete web applications independently or collaborate effectively with specialized front-end and back-end developers in larger teams. Their versatility makes them valuable assets in the software development industry."
        amount="# 250,000"
        dollars="$ 250.00"
        duration="12 Months"
        list1="Become a fullstack developer."
        list2="Front-End Development (React.js)."
        list3="Back-End Development (Node.js, Express.js, Mongoose, MySQL)."
        list4="Database Design and Management (MongoDB, MySQL)."
        list5=" Security."
        list6="Deployment and DevOps."
        list7="Version Control and Collaboration."
        list8="Performance Optimization."
        list9="Documentation."
        list10="Real-time Applications (Optional)."
        list11="Testing."
        list12="Real life project"
        courseImage="/images/fullstack_2.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default fullstack;

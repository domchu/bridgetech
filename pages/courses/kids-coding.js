import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleCourse from "../../Components/Courses/SingleCourse";
import CoursesSubHeading from "../../Components/CoursesSubHeading";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const kidscoding = () => {
  return (
    <>
      <DefaultSeo
        title="Kids Coding Website | Bridgekode Tech"
        description="We train kids or students to design websites(coding) using HTML, CSS, and JavaScript, Git/Github, web responsiveness,  make cool cash for themselves. Hence, preparing them for the future at hand"
        keywords=""
        {...SEO}
      />
      <Topnav />
      <Header />
      <CoursesSubHeading text="Kids Coding Website" />
      <SingleCourse
        courseTitle=" Kids Coding Website"
        courseSummary="Go from zero knowledge to being able to build your technology
        platforms! Starting with the foundations of software
        engineering. By the end of this program you would have
        mastered a specialization and learn the art of effective
        collaboration to solve real world problems."
        contents="Learn to structure code in a concise, logical, and readable
        manner, while mastering HTML and CSS, two foundational
        front-end languages. Create static web pages using HTML and
        CSS alone, before applying Flexbox, Grid (a CSS framework) to
        increase the complexity and speed in which you create your web
        pages, then added javascript to it for interactivities."
        comment="Remember, web development is a vast field, and it's not necessary to learn everything at once. Start with the basics and gradually build your knowledge and skills in the areas that interest you the most."
        amount="# 60,000"
        dollars="$ 120.00"
        duration="6 Months"
        list1="Become a Web Developer."
        list2="HTML5: Learn the Hypertext Markup Language (HTML) used for structuring the content of web pages."
        list3=" CSS3: Gain knowledge of Cascading Style Sheets (CSS) to control the presentation and layout of web pages, flexbox, CSS gird."
        list4="JavaScript: Master JavaScript, a scripting language used to add interactivity, dynamic behavior, and functionality to websites."
        list5="Basics of JavaScript (Data types, Loops, Arrays, Objects, Functions, operators, control structures etc)"
        list6="Introduction to Document Object Model(DOM) and Browser Object Model(BOM)"
        list7="Functions, Hoisting, Type Coercion"
        list8="Testing and Debugging: Learn various testing approaches and tools to ensure the reliability and correctness of your web applications. Understand how to debug and fix issues that arise during development"
        list9="Responsive Design: Learn techniques for building websites that adapt and respond to different screen sizes and devices, providing a consistent user experience across platforms."
        list10="JavaScript: Build real life projects to show your prospective clients or recruiters(HR)."
        list11="Version Control: Familiarize yourself with version control systems like Git. Understand how to manage and collaborate on code repositories effectively."
        list12="Keep Learning: The web development field is continually evolving, so it's important to stay updated with the latest technologies and best practices. Follow blogs, participate in online communities, and explore new tools and frameworks."
        courseImage="/images/kidcoding2.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default kidscoding;

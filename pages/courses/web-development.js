import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleCourse from "../../Components/Courses/SingleCourse";
import CoursesSubHeading from "../../Components/CoursesSubHeading";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const webdevelopment = () => {
  return (
    <>
      <DefaultSeo
        title="Web Development | Bridgekode Tech"
        description="We train teenager, youths, and individual to design websites(coding) using HTML, CSS, and JavaScript, Git/Github, web responsiveness, CMS & make cool cash for themselves. Hence, preparing them for the future."
        keywords=""
        {...SEO}
      />
      <Topnav />
      <Header />
      <CoursesSubHeading text="Web development" />
      <SingleCourse
        courseTitle=" Web Development Bootcamp"
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
        amount="# 90,000"
        dollars="$ 170.00"
        duration="5 Months"
        list1="Become a Web Developer."
        list2="HTML5."
        list3="CSS3: CSS flexbox, CSS gird."
        list4=" Master JavaScript and CMS."
        list5="Basics of JavaScript (Data types, Loops, Arrays, Objects, Functions, operators, control structures etc)"
        list6="Introduction to Document Object Model(DOM) and Browser Object Model(BOM)"
        list7="Functions, Hoisting, Type Coercion"
        list8="Testing and Debugging"
        list9="Responsive Design( Media query/ mobile responsiveness.)."
        list10="Build real life projects to show your prospective clients or recruiters(HR)."
        list11="Version Control; Git/GitHub, GitLab, etc"
        list12="Keep Learning: The web development field is continually evolving, so it's important to stay updated with the latest technologies and best practices. Follow blogs, participate in online communities, and explore new tools and frameworks."
        courseImage="/images/web2.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default webdevelopment;

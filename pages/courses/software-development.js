import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleCourse from "../../Components/Courses/SingleCourse";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import CoursesSubHeading from "../../Components/CoursesSubHeading";

const software = () => {
  return (
    <>
      <DefaultSeo
        title="Software Engineering | Bridgekode Tech"
        description="Full front-end development training using nextjs, Reactjs, Javscript, Typescript and Css frameworks like chakra-ui etc"
        keywords=""
        {...SEO}
      />
      <Topnav />
      <Header />
      <CoursesSubHeading text="Software development" />
      <SingleCourse
        courseTitle="Frontend Development Bootcamp "
        courseSummary="Software development refers to the process of creating, designing, coding, testing, and maintaining software applications. It involves a combination of technical skills, problem-solving abilities, and collaboration to produce functional and efficient software solutions."
        contents="Software development is a vast field that involves designing, coding, testing, and maintaining software applications.software development is a continuously evolving field. Stay curious, embrace new technologies, and continuously learn and update your skills to keep up with industry trends and advancements. Practical experience through personal projects, open-source contributions, or internships can also greatly enhance your skills as a software developer."
        comment="Software development involves a combination of technical expertise, creativity, problem-solving, and effective communication. It requires a systematic approach to deliver reliable and high-quality software solutions that meet the needs of users and stakeholders. Iterative development cycles, agile methodologies, and feedback-driven improvement are often employed to ensure successful software development projects."
        amount="# 180,000"
        dollars="$ 200.55"
        duration="6 Months"
        list1="Become a software developer."
        list2="HTML, CSS, JavaScript and CMS . "
        list3=" Media query/ mobile responsiveness."
        list4="CSS frameworks like Bootstrap, Chakra, Semantic, Tailwind etc"
        list5="JavaScript frameworks like React, Nextjs, Vue, Angular, etc"
        list6="Version Control; Git/GitHub, GitLab, etc"
        list7="Testing and Debugging"
        list8="Building real live projects to show your prospectives human Resourses"
        list9="Programming Languages: Gain proficiency in at least one programming language, such as Python, Java, C++, JavaScript, Typescript, or Ruby."
        list10="Data Structures and Algorithms"
        list11="Problem-Solving and Critical Thinking"
        list12="Soft Skills: Enhance your communication, collaboration, and teamwork skills."
        courseImage="/images/software.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default software;

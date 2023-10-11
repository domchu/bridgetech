import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleCourse from "../../Components/Courses/SingleCourse";
import CoursesSubHeading from "./../../Components/CoursesSubHeading";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const contentswriting = () => {
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
        courseSummary="Content writing offers creating written material for various platforms and mediums, such as websites, blogs, social media, marketing materials, and more. It involves crafting engaging, informative, and valuable content that resonates with the target audience and achieves specific goals, such as driving traffic, increasing conversions, or building brand awareness."
        contents="Involves creating high-quality, valuable, and engaging written material tailored to a specific target audience. It requires research, strong writing skills, an understanding of SEO, effective structuring, and continuous learning to produce content that achieves its intended purpose and resonates with readers."
        comment="practice and experience play a significant role in becoming a proficient content writer. Continuously writing, seeking feedback, and staying curious about industry developments will help you refine your content writing abilities over time."
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

export default contentswriting;

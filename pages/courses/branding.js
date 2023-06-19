import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleCourse from "../../Components/Courses/SingleCourse";
import CoursesSubHeading from "./../../Components/CoursesSubHeading";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const branding = () => {
  return (
    <>
      <DefaultSeo
        title="Branding Website | Bridgekode Tech"
        description="Making businesses look enticing and innovative to clients and increases revenue(income) to the organisation or company"
        keywords=""
        {...SEO}
      />
      <Topnav />
      <Header />
      <CoursesSubHeading text="Branding & SEO" />
      <SingleCourse
        courseTitle="Branding & SEO "
        courseSummary="Go from zero knowledge to being able to build your technology
        platforms! Starting with the foundations of software
        engineering. By the end of this program you would have
        mastered a specialization and learn the art of effective
        collaboration to solve real world problems."
        contents="Learn to structure code in a concise, logical, and readable
        manner, while mastering HTML and CSS, two foundational
        front-end languages. Create static web pages using HTML and
        CSS alone, before applying Flexbox (a CSS framework) to
        increase the complexity and speed in which you create your web
        pages."
        comment="Remember, both branding and SEO require continuous learning and adaptation. The field of SEO is constantly evolving, and branding strategies may need to be adjusted over time to align with changing market trends and consumer preferences. It's crucial to stay updated, experiment, and refine your strategies based on the specific goals and needs of your brand or website."
        amount="# 45,000"
        dollars="$ 90.00"
        duration="5 Months"
        list1="Become an SE0 expert"
        list2="Brand Strategy, brand Guidelines"
        list3=" Visual Identity, brand Collateral, brand Communication"
        list4="Keyword Research, On-Page Optimization"
        list5="Technical SEO, website speed optimization, mobile responsiveness, crawlability, and indexability. Learn how to optimize robots.txt files, XML sitemaps, and handle issues like duplicate content, broken links, and canonicalization"
        list6="Link Building"
        list7="Content Optimization"
        list8="Analytics and Reporting"
        list9="Local SEO: If you have a local business, learn about local SEO techniques such as optimizing Google My Business listings, managing online reviews, and targeting location-specific keywords to improve visibility in local search results"
        list10="SEO Best Practices and Updates"
        list11="Understand how to use tools like Google Keyword Planner or SEMrush to find valuable keywords for optimization"
        list12="Learn about incorporating keywords naturally, structuring content, and using headings, bullet points, and other formatting techniques"
        courseImage="/images/branding.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default branding;

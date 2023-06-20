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
        courseSummary=" Search Engine Optimization, entails practice of optimizing a website or content to improve its visibility and ranking in search engine results pages. It involves keyword research to identify relevant and high-ranking keywords, on-page optimization techniques to optimize titles, descriptions, headers, and content, and technical optimization to improve website speed, mobile responsiveness, and crawlability. Link building, content optimization, and local SEO strategies are also important for improving search engine visibility. Regular monitoring and analysis of website traffic and keyword rankings help in making data-driven decisions to improve SEO performance."
        contents="Branding is the process of creating a unique and memorable identity for a business, product, or service. It involves developing a strategy to define the brand's vision, values, target audience, and positioning. Visual identity elements such as logos, colors, typography, and brand guidelines are designed to reflect the brand's personality and create consistency across various touchpoints. Effective branding involves communicating the brand's message and values through storytelling and engaging content."
        comment="In summary, branding focuses on creating a strong and consistent identity for a brand, while SEO aims to increase visibility and traffic through search engine optimization techniques. Both branding and SEO require continuous learning, adaptation, and staying updated with industry trends to effectively reach and engage the target audience."
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

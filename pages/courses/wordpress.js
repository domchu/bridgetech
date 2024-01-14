import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleCourse from "../../Components/Courses/SingleCourse";
import CoursesSubHeading from "./../../Components/CoursesSubHeading";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const wordpress = () => {
  return (
    <>
      <DefaultSeo
        title="Wordpress | Crafting Websites to Perfection "
        description="websites design without writing anything codes"
        keywords="wordpress, elementor, theme, woocommerce, template, etc"
        {...SEO}
      />
      <Topnav />
      <Header />
      <CoursesSubHeading text="Web Design (WordPress)" />
      <SingleCourse
        courseTitle="Web Design (WordPress)"
        courseSummary="Certainly! WordPress is a popular content management system (CMS) that allows you to create and manage a website without extensive technical knowledge. Here's an overview of the key aspects of using WordPress for your website:"
        contents="WordPress themes determine how your site looks. There are thousands of free and premium themes available. Themes can be customized and you can also create child themes to make advanced customizations without affecting the main theme."
        comment="Plugins are like apps for your WordPress site. They add extra features and functionality. For example, SEO plugins can help optimize your site for search engines, while contact form plugins allow you to create forms without coding.
        With plugins like WooCommerce, you can turn your WordPress site into an online store, enabling you to sell products and services.
        WordPress is known for its flexibility, user-friendly interface, and the support of a vast community. Whether you're building a blog, a business website, or an e-commerce platform, WordPress provides a robust foundation for your online presence."
        amount="# 120,000"
        dollars="$ 120.00"
        duration="2 Months"
        list1="Become a Web Designer(WordPress) without writing code."
        list2="Basic Website Setup."
        list3=" Navigating the WordPress Dashboard."
        list4="Content Creation and Management."
        list5=" Themes installation & customisation."
        list6="Plugins installation."
        list7="User Management."
        list8="Search Engine Optimization (SEO)."
        list9="Security."
        list10="Troubleshooting and Maintenance."
        list11="Performance Optimization."
        list12="Adaptability and Continuous Learning."
        courseImage="/images/wordpress..jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default wordpress;

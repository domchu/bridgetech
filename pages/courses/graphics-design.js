import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import CoursesSubHeading from "../../Components/CoursesSubHeading";
import SingleCourse from "../../Components/Courses/SingleCourse";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const graphics = () => {
  return (
    <>
      <DefaultSeo
        title="Graphics Design | Bridgekode Tech"
        description="We design logos, complementary cards, flyers, handbills, letter Heads etc using coraldraw, photoshop, illustrator, adobe Pagemaker etc"
        keywords=""
        {...SEO}
      />
      <Topnav />
      <Header />
      <CoursesSubHeading text="Graphics Design" />

      <SingleCourse
        courseTitle="Graphics Design "
        courseSummary="Go from zero knowledge to being able to design 
        any portfolio print out. Graphic design is a creative discipline that involves visual communication and problem-solving through the use of typography, imagery, color, and layout. It is a versatile field that encompasses various mediums, including print, digital, and multimedia.."
        contents="The primary goal of graphic design is to convey messages, ideas, and information effectively and visually. Graphic designers work on a wide range of projects, including branding and identity design, advertising campaigns, packaging design, web design, user interface (UI) design, and editorial design."
        comment="Graphic design is a creative field, and practice is essential for honing your skills. Create personal projects, build a portfolio, and seek feedback from peers and professionals to continue improving your design abilities."
        amount="# 60,000"
        dollars="$ 100.58"
        duration="5 Months"
        list1="Become a certified graphic professional"
        list2="Design Principles, design Research and Concept Development"
        list3="Graphic Design Software"
        list4="Typography"
        list5="Layout and Composition"
        list6="Color Theory"
        list7="Branding and Identity"
        list8="Image Editing and Manipulation"
        list9="Vector Graphics"
        list10="Communication and Collaboration, digital Design"
        list11="Layout Software, print Design"
        list12="Composition and Visual Communication"
        courseImage="/images/graphic.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default graphics;

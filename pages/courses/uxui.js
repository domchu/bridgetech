import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleCourse from "../../Components/Courses/SingleCourse";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import CoursesSubHeading from "../../Components/CoursesSubHeading";

const uxui = () => {
  return (
    <>
      <DefaultSeo
        title="UI'UX Design | Bridgekode Tech"
        description="We train peoples to design templates for websites, apps, desktop apps, editing images using figma, photoshop, illustrator, adobe etc"
        {...SEO}
      />
      <Topnav />
      <Header />
      <CoursesSubHeading text="UI'UX Design" />
      <SingleCourse
        courseTitle="UI'UX Design Bootcamp"
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
        comment="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aperiam illum, repellat a aspernatur doloremque aliquid
        laudantium magni corporis voluptate? Voluptatem itaque nulla
        consectetur voluptate assumenda eos amet nemo delectus
        aliquid."
        amount="#80,000"
        duration="5 Months"
        list1="Become a UI/UX designer."
        list2="You will be able to start earning money skills."
        list3=" Build a UI project from beginning to end."
        list4="Learn to design mobile apps & websites. quaerat dolore
        numquam odit, quos sunt iusto! Eum velit"
        list5="You will be able to start earning money skills. quaerat
                    dolore numquam odit, quos sunt iusto! Eum velit"
        list6="You will be able to start earning money skills. quaerat
                    dolore numquam odit, quos sunt iusto! Eum velit"
        list7="You will be able to start earning money skills. quaerat
                    dolore numquam odit, quos sunt iusto! Eum velit"
        list8="You will be able to start earning money skills. quaerat
                    dolore numquam odit, quos sunt iusto! Eum velit"
        list9="You will be able to start earning money skills. quaerat
                    dolore numquam odit, quos sunt iusto! Eum velit"
        list10="You will be able to start earning money skills. quaerat
                    dolore numquam odit, quos sunt iusto! Eum velit"
        list11="You will be able to start earning money skills. quaerat
                    dolore numquam odit, quos sunt iusto! Eum velit"
        list12="You will be able to start earning money skills. quaerat
                    dolore numquam odit, quos sunt iusto! Eum velit"
        courseImage="/images/project10.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default uxui;

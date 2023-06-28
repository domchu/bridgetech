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
        title="Content Writing | Bridgekode Tech"
        description="A well tutor materials tailored for contents writing for easy understanding by clients"
        keywords=""
        {...SEO}
      />
      <Topnav />
      <Header />
      <CoursesSubHeading text="Contents Writing" />
      <SingleCourse
        courseTitle="Contents Writing "
        courseSummary="Content writing offers creating written material for various platforms and mediums, such as websites, blogs, social media, marketing materials, and more. It involves crafting engaging, informative, and valuable content that resonates with the target audience and achieves specific goals, such as driving traffic, increasing conversions, or building brand awareness."
        contents="Involves creating high-quality, valuable, and engaging written material tailored to a specific target audience. It requires research, strong writing skills, an understanding of SEO, effective structuring, and continuous learning to produce content that achieves its intended purpose and resonates with readers."
        comment="practice and experience play a significant role in becoming a proficient content writer. Continuously writing, seeking feedback, and staying curious about industry developments will help you refine your content writing abilities over time."
        amount="# 30,000"
        dollars="$ 60.00"
        duration="2 Months"
        list1="Become a content writer or copywriter."
        list2="Develop strong writing skills, including grammar, punctuation, sentence structure, and vocabulary. Practice writing regularly to improve your fluency and clarity of expression."
        list3=" Understanding the Audience"
        list4="Content Planning and Organization"
        list5=" Learn how to find credible sources, fact-check information, and conduct thorough research on your topic to provide valuable and well-informed content"
        list6="SEO Writing"
        list7="Engaging Introductions and Headlines"
        list8="Use of Language and Tone"
        list9="Editing and Proofreading"
        list10="Formatting and Visual Elements"
        list11="Call-to-Action (CTA): subscribing, sharing, or making a purchase. Craft compelling CTAs that align with the content's purpose and engage your audience."
        list12="Adaptability and Continuous Learning"
        courseImage="/images/content.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default contentswriting;

import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleProject from "../../Components/Projects/SingleProject";
import ProjectHeading from "../../Components/ProjectHeading";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const software = () => {
  return (
    <>
      <DefaultSeo
        title="Software Development | Bridgekode Tech"
        description="These projects was carried out by bridgekode, completed and duly delivered to their respective clients."
        {...SEO}
      />
      <Topnav />
      <Header />
      <ProjectHeading
        title="Software Development"
        projectUrl="/projects/project-home"
      />

      {/* SINGLE PROJECT DETAILS FOR SOFTWARE DEVELOPMENT */}
      <SingleProject
        title="Software Development"
        content="An overview of the web development technologies used in designing these Florintech Computer College are JavaScript, Next.js, React, HTML, CSS, Chakra UI, and other React libraries.In web development, these technologies work together to create dynamic and interactive websites. JavaScript powers the behavior and interactivity, React provides a structured approach to building UI components, Next.js enables server-side rendering and routing, HTML defines the website's structure, CSS handles its visual styling, and Chakra UI (along with other React libraries) enhances the development process by providing pre-built and customizable UI components. By leveraging these technologies, you can create a robust, responsive, and visually appealing website like the Florintech Computer College website  developed by Bridgekode Software Development Service."
        name="Florintech Computer College"
        date="March 25, 2023"
        category="ICT"
        address="9 Kembiri Road, Okokomaiko-Ojo, Lagos State"
        summary="We are Optitech provide the best quality
        It solution neque porro quisquam est qui dolorem ipsum
        quia golor sit amet, conse ctetur, adipisci velit, sed
        eligendi optio cumque nihil impedit quo minus id quod
        maxime placeat"
        number1="IT Consultancy provide the most service neque porro
        quisquam est qui dolorem ipsum quia golor sit amet,
        conse ctetur, adipisci velit"
        number2="IT Consultancy provide the most service neque porro
        quisquam est qui dolorem ipsum quia golor sit amet,
        conse ctetur, adipisci velit"
        point1="The main way to solve the the best quality It solution
        neque porro quisquam qui dolorem ipsum quia golor sit
        amet, conse ctetur, adipisci velit, sed eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat"
        point2="Great deal dolorem ipsum quia golor sit amet, conse
        ctetur, adipisci velit, sed optio cumque nihil impedit quo
        minus id quod maxime placeat optio cumque nihil impedit
        quo minus id quod maxime placeat"
        result=" We are Optitech provide the best quality It
        solution neque porro quisquam est qui dolorem ipsum quia
        golor sit amet, conse ctetur, adipisci velit, sed eligendi
        optio cumque nihil impedit quo minus id quod maxime placeat
        pleasure rationally encounter consequences that are
        extremely painful. Nor again is there anyone who loves or
        pursues or desires to obtain pain of itself, because it is
        pain, but because occasionally circumstances occur in which
        toil and pain can procure him some great pleaser pleasure
        rationally encounter consequences that are extremely
        painful. Nor again is there anyone who loves or pursues or
        desires to obtain pain of itsel because it is pain, but
        because occasionally circumstances occur in which toil and
        pain can procure him some great pleaser"
        benefits="We are Optitech provide the best quality It
        solution neque porro quisquam est qui dolorem ipsum quia
        golor sit amet, conse ctetur, adipisci velit, sed eligendi
        optio cumque nihil impedit quo minus id quod maxime placeat
        pleasure rationally encounter consequences that are
        extremely painful. Nor again is there anyone who loves or
        pursues or desires to obtain pain of itself, because it is
        pain, but because occasionally circumstances occur in which
        toil and pain can procure"
        problemsState=" In software development Service we cover most of the IT problems
        that your company faces and we try to solve it."
        problemsSummary="We are Optitech provide the best quality
        It solution neque porro quisquam est qui dolorem ipsum
        quia golor sit amet, conse ctetur, adipisci velit, sed
        eligendi optio cumque nihil impedit quo minus id quod
        maxime placeat"
        solution1=" IT Management provide the most service neque porro quisquam est qui dolorem ipsum quia golor sit amet, consectetur, adipisci velit"
        solution2=" IT Management provide the most service neque porroquisquam est qui dolorem ipsum quia golor sit amet, conse ctetur, adipisci velit"
        solution3=" IT Management provide the most service neque porro
        quisquam est qui dolorem ipsum quia golor sit amet, conse
        ctetur, adipisci velit"
        image1="/images/project2.jpg"
        image2="/images/service-benefit.jpg"
        projectLink="https://www.florintechcomputercollege.com"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default software;

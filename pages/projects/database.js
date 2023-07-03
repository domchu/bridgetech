import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleProject from "../../Components/Projects/SingleProject";
import ProjectHeading from "../../Components/ProjectHeading";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const database = () => {
  return (
    <>
      <DefaultSeo
        title="School Database | Bridgekode Tech"
        description="These projects was carried out by bridgekode, completed and duly delivered to their respective clients"
        {...SEO}
      />
      <Topnav />
      <Header />
      <ProjectHeading
        title="School Database"
        projectUrl="/projects/project-home"
      />

      {/* SINGLE PROJECT DETAILS FOR School Database */}
      <SingleProject
        title="School Database"
        content="An e-commerce website is a platform that enables businesses to sell products or services online. It allows customers to browse through the product catalog, select items of interest, add them to a shopping cart, and complete the purchase using various payment methods. It entailed Online Storefront, Product Catalog, Shopping Cart, Payment Processing, User Accounts, Marketing and Analytics etc. E-commerce websites have revolutionized the way businesses operate and provide a convenient and accessible platform for customers to shop online. They have opened up global markets, enabled small businesses to reach a wider audience, and transformed the retail industry."
        name="Keyonaville Schools"
        date="June 9, 2023"
        category="Education"
        address="8-10 Odinaka Street, Afromedia-Ojo, Lagos state."
        summary="We are <strong>Optitech</strong> provide the best quality
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
        problemsState=" In IT Consultancy Service we cover most of the IT problems
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
        image1="/images/sch-portal.png"
        image2="/images/service-benefit.jpg"
        projectLink="https://www.admin.keyonavilleschools.com.ng"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default database;

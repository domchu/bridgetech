import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleProject from "../../Components/Projects/SingleProject";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const ecommerce = () => {
  return (
    <>
      <DefaultSeo
        title="E-commerce Site | Bridgekode Tech"
        description="We offers the various IT services such as mobile apps, design websites, HR services, SEO, training,IT setup, IT management etc"
        {...SEO}
      />
      <Topnav />
      <Header />
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                Project <span className="sub_heading_span">Details</span>
              </h1>
              <p>
                The underlisted project was carried out by bridgekode, completed
                and delivered to the client.
              </p>
              <ul className="project-link">
                <li className="project-nav-items">
                  <Link href="/" className="project-nav-link">
                    Home
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li className="project-nav-items">
                  <Link
                    href="/projects/project-home"
                    className="project-nav-link"
                  >
                    Project
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">E-commerce Website</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* SINGLE PROJECT DETAILS FOR E=COMMERCE SITE */}
      <SingleProject
        title="E-commerce Website"
        content="An e-commerce website is a platform that enables businesses to sell products or services online. It allows customers to browse through the product catalog, select items of interest, add them to a shopping cart, and complete the purchase using various payment methods. It entailed Online Storefront, Product Catalog, Shopping Cart, Payment Processing, User Accounts, Marketing and Analytics etc. E-commerce websites have revolutionized the way businesses operate and provide a convenient and accessible platform for customers to shop online. They have opened up global markets, enabled small businesses to reach a wider audience, and transformed the retail industry."
        name="Business Organisation"
        date="March 25, 2023"
        category="E-Commerce"
        address="25K, North City, New York"
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
        result=" We are <strong>Optitech</strong> provide the best quality It
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
        benefits="We are <strong>Optitech</strong> provide the best quality It
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
        problemsSummary="We are <strong>Optitech</strong> provide the best quality
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
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default ecommerce;

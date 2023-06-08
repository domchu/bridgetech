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

const network = () => {
  return (
    <>
      <DefaultSeo
        title="Hardware & Networking | Bridgekode"
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
                  <Box className="project-link-text">Hardware & Networking</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* SINGLE PROJECT DETAILS FOR SOFTWARE DEVELOPMENT */}
      <SingleProject title="Hardware & Networking" 
      content="An e-commerce website is a platform that enables businesses to sell products or services online. It allows customers to browse through the product catalog, select items of interest, add them to a shopping cart, and complete the purchase using various payment methods. It entailed Online Storefront, Product Catalog, Shopping Cart, Payment Processing, User Accounts, Marketing and Analytics etc. E-commerce websites have revolutionized the way businesses operate and provide a convenient and accessible platform for customers to shop online. They have opened up global markets, enabled small businesses to reach a wider audience, and transformed the retail industry."
      name=""
      date=""
      category=""
      address=""
      works=""
      number1=""
      number2=""
      Summary=""
      result=""
      benefits=""
      problemsState=""
      solution1=""
      solution2=""
      solution3=""
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default network;

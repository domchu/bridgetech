import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleCourse from "../../Components/Courses/SingleCourse";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const branding = () => {
  return (
    <>
      <DefaultSeo
        title="Branding | Bridgekode Tech"
        description="Making businesses look enticing and innovative to clients and increases revenue(income) to the organisation or company"
        {...SEO}
      />
      <Topnav />
      <Header />
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                Course <span className="sub_heading_span">Details</span>
              </h1>
              <p>
                Yes! You are on the right pathway, one step at a time. Your
                career path to finacial stability begin here and now.
              </p>
              <ul className="project-link">
                <li className="project-nav-items">
                  <Link href="/" className="project-nav-link">
                    Home
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li className="project-nav-items">
                  <Link href="/courses/course" className="project-nav-link">
                    Cousre
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">Branding</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      <SingleCourse />
      <Testimonial />
      <Footer />
    </>
  );
};

export default branding;

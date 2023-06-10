import React from 'react'
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Topnav from "./../../Components/Topnav/Topnav";
import Header from "./../../Components/Header/Header";
import NewsLetter from "./../../Components/NewsLetter";
import Footer from "./../../Components/Footer/Footer";
import Benefit from "../../public/images/service-benefit.jpg";
import ServiceImage from "../../public/images/ceo.jpg";
import ServiceWork from "../../public/images/service-6.jpg";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const python = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <DefaultSeo
        title="Python Data-Sci | Bridgekode"
        description="It provides a robust ecosystem of tools & libraries specifically designed for data manipulation, analysis, visualization, & machine learning. "
        {...SEO}
      />
      <Topnav />
      <Header />
      {/* SUBHEADING DETAIL */}
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                Service <span className="sub_heading_span">Detail</span>
              </h1>
              <p>
                An indepth overview of the services we renders at bridgekode
                development services.
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
                    href="/services/service-home"
                    className="project-nav-link"
                  >
                    Service
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">Python Data-Science</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* PYTHON DATA-SCIENCE CONTENT */}
      <Box className="service-details-section wf-section">
        <Box className="section-gap-130">
          <Box className="container w-container">
            <Box className="service-details-block">
              {/* SERVICE AREA TOP BLOCK */}
              <Box className="service-details-top-block">
                <Box className="service-details-top-right-block">
                  <Box className="service-top-manu-image-block">
                    <Box className="service-top-image-block">
                      <Image
                        src={Benefit}
                        alt="Summary Image"
                        loading="lazy"
                        className="image-cover img"
                      />
                    </Box>
                    <Box className="service-top-menu-block">
                      <Box className="service-link-list-wrapper w-dyn-list">
                        <Box
                          className="service-link-list w-dyn-item"
                          role="list"
                        >
                          <Box
                            className="service-link-item w-dyn-item"
                            role="listitem"
                          >
                            <Link href="/services/mobile-app" id="service-link">
                              Mobile Application
                            </Link>
                            <Box className="service-link-separator"></Box>
                          </Box>
                          <Box
                            className="service-link-item w-dyn-item"
                            role="listitem"
                          >
                            <Link
                              href="/services/web-development"
                              id="service-link"
                            >
                              Web Development
                            </Link>
                            <Box className="service-link-separator"></Box>
                          </Box>
                          <Box
                            className="service-link-item w-dyn-item"
                            role="listitem"
                          >
                            <Link
                              href="/services/web-design-training"
                              id="service-link"
                            >
                              Kids Coding Training
                            </Link>
                            <Box className="service-link-separator"></Box>
                          </Box>
                          <Box
                            className="service-link-item w-dyn-item"
                            role="listitem"
                          >
                            <Link href="/services/ui-ux" id="service-link">
                              UX/UI Design
                            </Link>
                            <Box className="service-link-separator"></Box>
                          </Box>
                          <Box
                            className="service-link-item w-dyn-item"
                            role="listitem"
                          >
                            <Link
                              href="/services/graphics-design"
                              id="service-link"
                            >
                              Graphics Design
                            </Link>
                            <Box className="service-link-separator"></Box>
                          </Box>
                          <Box
                            className="service-link-item w-dyn-item"
                            role="listitem"
                          >
                            <Link
                              href="/services/software-development"
                              className={
                                currentRoute == "/services/software-development"
                                  ? "single-service-link"
                                  : ""
                              }
                              id="service-link"
                            >
                              Software Development
                            </Link>
                            <Box className="service-link-separator"></Box>
                          </Box>
                          <Box
                            className="service-link-item w-dyn-item"
                            role="listitem"
                          >
                            <Link
                              href="/services/it-setup-mgmt"
                              id="service-link"
                            >
                              IT Setup & management
                            </Link>
                            <Box className="service-link-separator"></Box>
                          </Box>
                          <Box
                            className="service-link-item w-dyn-item"
                            role="listitem"
                          >
                            <Link
                              href="/services/social-media"
                              id="service-link"
                            >
                              Digital & Social Media
                            </Link>
                            <Box className="service-link-separator"></Box>
                          </Box>
                          <Box
                            className="service-link-item w-dyn-item"
                            role="listitem"
                          >
                            <Link href="/services/python" id="service-link">
                              Python Data-Science
                            </Link>
                            <Box className="service-link-separator"></Box>
                          </Box>
                          <Box
                            className="service-link-item w-dyn-item"
                            role="listitem"
                          >
                            <Link
                              href="/services/human-resources"
                              id="service-link"
                            >
                              Human Resources(HR)
                            </Link>
                            <Box className="service-link-separator"></Box>
                          </Box>
                          <Box
                            className="service-link-item w-dyn-item"
                            role="listitem"
                          >
                            <Link
                              href="/services/branding-seo"
                              id="service-link"
                            >
                              Branding & SEO
                            </Link>
                            <Box className="service-link-separator"></Box>
                          </Box>
                          <Box
                            className="service-link-item w-dyn-item"
                            role="listitem"
                          >
                            <Link
                              href="/services/hardware-network"
                              id="service-link"
                            >
                              Hradware & Networking
                            </Link>
                            <Box className="service-link-separator"></Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="section-block">
                    <h2 className="section-title">Python Data-Science</h2>
                  </Box>
                  <Box className="service-section-top-text w-richtext">
                    <p>
                      Python data science refers to the use of the Python
                      programming language and its associated libraries, tools,
                      and techniques for analyzing, manipulating, and deriving
                      insights from data. Python has gained popularity in the
                      field of data science due to its simplicity, versatility,
                      and the availability of a rich ecosystem of libraries
                      specifically designed for data analysis, machine learning,
                      and visualization.
                    </p>
                  </Box>
                </Box>
              </Box>

              {/* SERVICE CAREER */}
              <Box className="service-area-block">
                <Box className="service-area-content section-block">
                  <h2 className="section-title">Which area we cover</h2>
                  <Box className="service-subtitle-text">
                    Continuously expanding your knowledge and exploring advanced
                    topics in these areas will help you become a proficient data
                    scientist using Python.
                  </Box>
                  <Box className="w-richtext">
                    <p>
                      When working with Python for data science, there are
                      several key areas that you should cover to effectively
                      analyze and manipulate data. Here are some important areas
                      to focus on:
                    </p>

                    <ul className="ul" role="list">
                      <li className="li">
                        Big Data and Distributed Computing: Understand how to
                        handle large datasets that don't fit into memory using
                        tools like Apache Spark and Dask. Learn about
                        distributed computing concepts, working with clusters,
                        and leveraging cloud services for scalable data
                        processing.
                      </li>
                      <li className="li" role="list">
                        Data Manipulation: Understanding how to work with data
                        is essential in data science. Familiarize yourself with
                        libraries like pandas, which offer powerful data
                        structures and functions for data manipulation,
                        cleaning, and transformation. Learn techniques to handle
                        missing values, outliers, and merge or reshape datasets.
                      </li>
                    </ul>
                  </Box>
                </Box>
                <Box className="service-area-image-block">
                  <Image
                    src={ServiceImage}
                    alt="Software Development"
                    loading="lazy"
                    className="image-cover img"
                  />
                </Box>
              </Box>

              {/* HOW IT WORKS */}
              <Box className="service-how-to-block">
                <Box className="service-how-to-image-block">
                  <Image
                    src={ServiceWork}
                    alt="Software Development"
                    loading="lazy"
                    className="image-cover img"
                  />
                </Box>
                <Box className="service-how-to-content section-block">
                  <h2 className="section-title">How it works</h2>
                  <Box className="w-richtext">
                    <p>
                      Python is a popular programming language for data science
                      due to its rich ecosystem of libraries and tools
                      specifically designed for data manipulation, analysis,
                      visualization, and machine learning. Here's an overview of
                      how Python works in data science:
                    </p>
                  </Box>
                  <Box className="inner-quote-block">
                    <Box className="service-quote w-richtext">
                      <p>
                        Data Acquisition: Python allows you to fetch data from
                        various sources, such as files (CSV, Excel, JSON),
                        databases, APIs, and web scraping. Libraries like
                        pandas, NumPy, and requests facilitate data extraction
                        and loading into Python data structures.
                      </p>
                      <p>
                        Data Exploration and Analysis: Python provides numerous
                        libraries, such as pandas, NumPy, and Matplotlib, that
                        enable exploratory data analysis (EDA). These libraries
                        allow you to perform data summarization, statistical
                        analysis, data visualization, and generate insights
                        about the dataset.
                      </p>
                    </Box>
                    <Box className="inner-quote-border-left"></Box>
                  </Box>
                  <Box className="w-text">
                    <p>
                      Python's flexibility, ease of use, and extensive library
                      support make it a popular choice for data scientists. Its
                      integration capabilities, machine learning libraries, and
                      visualization tools enable data scientists to perform
                      end-to-end data analysis and build robust data-driven
                      applications
                    </p>
                  </Box>
                </Box>
              </Box>

              {/* BENEFITS OF THE SERVICE */}
              <Box className="service-benefit-block">
                <Box className="service-benefit-content section-block">
                  <h2 className="section-title">Benefits</h2>
                  <Box className="w-richtext">
                    <p>
                      Python is widely recognized as one of the most popular
                      programming languages for data science, and it offers
                      several benefits for data scientists. Here are some key
                      benefits of using Python for data science:
                    </p>

                    <ul className="ul" role="list">
                      <li className="li">
                        Rich Ecosystem of Libraries and Packages: Python has a
                        vast ecosystem of libraries and packages specifically
                        designed for data science and machine learning. Popular
                        libraries such as NumPy, pandas, matplotlib, and
                        scikit-learn provide efficient and robust tools for data
                        manipulation, analysis, visualization, and modeling.
                        These libraries significantly simplify complex tasks and
                        allow data scientists to leverage pre-built functions
                        and algorithms.
                      </li>
                      <li className="li" role="list">
                        Easy to Learn and Use: Python has a simple and intuitive
                        syntax that makes it easy to learn, even for beginners.
                        Its readability and straightforward syntax allow data
                        scientists to write clean and concise code, enhancing
                        productivity and reducing development time.
                      </li>
                    </ul>
                  </Box>
                </Box>
                <Box className="service-benefit-image-block">
                  <Image
                    src={Benefit}
                    alt="Benefit Image"
                    loading="lazy"
                    className="image-cover img"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* END PYTHON DATA-SCIENCE CONTENT */}

      <NewsLetter />
      <Footer />
    </>
  );
};

export default python
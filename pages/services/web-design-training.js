import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Topnav from "./../../Components/Topnav/Topnav";
import Header from "./../../Components/Header/Header";
import NewsLetter from "./../../Components/NewsLetter";
import Footer from "./../../Components/Footer/Footer";
import Benefit from "../../public/images/childkode.jpg";
import Benefits from "../../public/images/me.jpg";
import Ceo from "../../public/images/ceo.jpg";
import ServiceWork from "../../public/images/kids.jpg";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const webdesigntraining = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <DefaultSeo
        title="Web Training | Crafting Websites to Perfection "
        description="If you're interested in learning web development, there are several paths you can take to acquire the necessary skills and knowledge."
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
                software development services.
              </p>
              <ul className="project-link">
                <li className="project-nav-items">
                  <Link href="/" className="project-nav-link">
                    Home
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li className="project-nav-items">
                  <Link href="/services" className="project-nav-link">
                    Services
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">Kids Coding Training</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* WEB DEVELOPMENT TRAINING CONTENT */}
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
                    <h2 className="section-title">Kids Coding Training </h2>
                  </Box>
                  <Box className="service-section-top-text w-richtext">
                    <p className="service-paragraph">
                      <strong>Web development training</strong> refers to the
                      process of learning and acquiring the necessary skills,
                      knowledge, and practical experience to become proficient
                      in web development. It involves structured courses,
                      educational/school programs, workshops, tutorials, or
                      online resources designed to teach students, kids,
                      secondary leavers, teenagers, and individuals the
                      fundamentals using HTML, CSS, bootstrap, Javascript(Js)
                      and advanced concepts of building websites and web
                      applications.
                    </p>
                  </Box>
                </Box>
              </Box>

              {/* SERVICE CAREER */}
              <Box className="service-area-block">
                <Box className="service-area-content section-block">
                  <h2 className="section-title">Which area we cover</h2>
                  <Box className="service-subtitle-text">
                    Web development encompasses various areas that you should
                    cover to build robust and effective websites or web
                    applications. Here are some key areas to focus on:
                  </Box>
                  <Box className="w-richtext">
                    <ul className="ul" role="list">
                      <li className="li">
                        Front-End Development:HTML, CSS, JavaScript, Responsive
                        Design
                      </li>
                      <li className="li" role="list">
                        Back-End Development:Server-Side Languages(Ruby, PHP, or
                        JavaScript (Node.js)),Databases( MySQL, PostgreSQL,
                        MongoDB)
                      </li>
                      <li className="li" role="list">
                        Web Frameworks: React, Angular, Vue.js, Django (Python),
                        Ruby on Rails, Laravel (PHP), or Express.js (Node.js)
                      </li>
                      <li className="li" role="list">
                        Version Control: Learn to use Git, a widely-used version
                        control system, to track changes, collaborate with
                        others, and manage code repositories effectively.
                      </li>
                      <li className="li" role="list">
                        SEO Basics: Gain knowledge of Search Engine Optimization
                        (SEO) principles to optimize websites for better
                        visibility and search engine rankings.
                      </li>
                    </ul>
                  </Box>
                </Box>
                <Box className="service-area-image-block">
                  <Image
                    src={Ceo}
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
                      Web development is the process of creating websites or web
                      applications. It involves a combination of coding,
                      designing, and implementing various elements to build
                      functional and visually appealing digital products. Here's
                      a general overview of how web development works:
                    </p>
                  </Box>
                  <Box className="inner-quote-block">
                    <Box className="service-quote w-richtext">
                      <p>
                        Planning and Analysis: The first step in web development
                        is to define the project's goals, requirements, and
                        target audience. This involves understanding the purpose
                        of the website or application, conducting research, and
                        creating a plan for the development process.
                      </p>
                      <p>
                        Front-End Development: Front-end development focuses on
                        the user-facing aspects of a website or application. It
                        involves writing code in languages such as HTML
                        (Hypertext Markup Language), CSS (Cascading Style
                        Sheets), and JavaScript. HTML defines the structure of
                        the web pages, CSS controls the presentation and
                        styling, and JavaScript adds interactivity and
                        functionality.
                      </p>
                    </Box>
                    <Box className="inner-quote-border-left"></Box>
                  </Box>
                  <Box className="w-text">
                    <p>
                      HTML: HTML provides the foundation for creating the
                      structure and content of web pages. It defines the various
                      elements, such as headings, paragraphs, images, links,
                      forms, and more. CSS: CSS is used to control the
                      appearance and styling of the web pages. It allows you to
                      define colors, fonts, layouts, positioning, animations,
                      and other visual aspects of the website.
                    </p>
                    <p>
                      JavaScript: JavaScript is a programming language that adds
                      interactivity and functionality to web pages. It enables
                      you to create dynamic elements, handle user interactions,
                      perform calculations, make API requests, and more.
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
                      There are several benefits to undergoing web development
                      training. Here are some of the key advantages:
                    </p>
                    <ul className="ul" role="list">
                      <li className="li">
                        Career Advancement: Web development training can open
                        doors to new career opportunities or help you advance in
                        your current career. Whether you are seeking a career
                        change or looking to enhance your existing skills, web
                        development training equips you with the knowledge and
                        expertise to take on more challenging roles.
                      </li>
                      <li className="li" role="list">
                        Independence and Freelancing: Web development skills
                        offer the flexibility to work independently or as a
                        freelancer. With the ability to build websites or web
                        applications, you can offer your services to clients or
                        work on personal projects on a freelance basis. This
                        provides freedom and control over your work and
                        schedule.
                      </li>
                    </ul>
                  </Box>
                </Box>
                <Box className="service-benefit-image-block">
                  <Image
                    src={Benefits}
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
      {/*END WEB DEVELOPMENT TRAINING CONTENT */}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default webdesigntraining;

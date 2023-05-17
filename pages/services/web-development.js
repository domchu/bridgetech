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
import ServiceImage from "../../public/images/service-main.jpg";
import ServiceWork from "../../public/images/service-6.jpg";

const webdevelopment = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
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
                Web development services encompass a range of offerings related
                to creating, building, and maintaining websites.
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
                  <Box className="project-link-text">
                    Web Development Service
                  </Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* WEB DEVELOPMENT CONTENT */}
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
                              Web Design Training
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
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="section-block">
                    <h2 className="section-title">
                      Website Development Service
                    </h2>
                  </Box>
                  <Box className="service-section-top-text w-richtext">
                    <p>
                      <strong>Bridgekode's</strong> team of web developers is
                      skilled in front-end technologies such as HTML, CSS, and
                      JavaScript. They focus on creating visually appealing and
                      user-friendly interfaces that provide a seamless user
                      experience across different devices, platforms and general
                      <Link
                        href="https://www.example.com"
                        target="_blank"
                        className="it-solution"
                      >
                        IT solution.
                      </Link>
                      Bridgekode offers web development services to clients.
                      Their web development services typically involve creating
                      and designing websites, building web applications, and
                      implementing various functionalities based on client
                      requirements.
                    </p>
                  </Box>
                </Box>
              </Box>

              {/* SERVICE CAREER */}
              <Box className="service-area-block">
                <Box className="service-area-content section-block">
                  <h2 className="section-title">Which area we cover</h2>
                  <Box className="service-subtitle-text">
                    Bridgekode's web development services aim to provide clients
                    with professional and tailored solutions that help them
                    establish a strong online presence, engage their target
                    audience, and achieve their business objectives through
                    effective web-based solutions.
                  </Box>
                  <Box className="w-richtext">
                    <ul className="ul" role="list">
                      <li className="li">
                        E-commerce Solutions: Bridgekode may offer e-commerce
                        development services, including the creation of online
                        stores and shopping cart functionality. They can
                        integrate secure payment gateways, inventory management
                        systems, and other features required for a successful
                        e-commerce website.
                      </li>
                      <li className="li" role="list">
                        Responsive Design: Bridgekode focuses on responsive web
                        design, ensuring that websites are optimized for various
                        devices, including desktops, laptops, tablets, and
                        smartphones. This enables an optimal viewing experience
                        and usability across different screen sizes.
                      </li>
                      <li className="li" role="list">
                        Content Management Systems (CMS): Bridgekode may provide
                        expertise in implementing and customizing popular
                        content management systems like WordPress, Drupal, or
                        Joomla. This enables clients to easily manage and update
                        their website content without technical knowledge.
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
                      <strong> Web development</strong> involves several steps
                      and processes to create, build, and maintain a website.
                      Here's a general overview of how web development works:
                    </p>
                  </Box>
                  <Box className="inner-quote-block">
                    <Box className="service-quote w-richtext">
                      <p>
                        Web Design: Once the requirements are gathered, the web
                        development process moves into the design phase. Web
                        designers create wireframes or mockups that outline the
                        visual layout, user interface elements, and overall
                        aesthetics of the website. This stage focuses on
                        creating a visually appealing and user-friendly design.
                      </p>
                      <p>
                        Back-End Development: Back-end development focuses on
                        the server-side functionality of the website. Web
                        developers use server-side programming languages (such
                        as PHP, Python, or Ruby) and frameworks to handle data
                        processing, database integration, and server-side logic.
                        This includes managing user authentication, data
                        storage, dynamic content generation, and handling server
                        requests and responses.
                      </p>
                    </Box>
                    <Box className="inner-quote-border-left"></Box>
                  </Box>
                  <Box className="w-text">
                    <p>
                      It's important to note that web development is a
                      collaborative process that involves various professionals,
                      including web designers, front-end developers, back-end
                      developers, database administrators, and quality assurance
                      testers. The specific approach and tools used may vary
                      based on the project requirements and the development
                      team's preferences.
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
                      Benefit of
                      <Link
                        href="https://www.example.com"
                        target="_blank"
                        className="it-solution"
                      >
                        website development.
                      </Link>
                      These are just a few of the many benefits of web
                      development. Whether for individuals or businesses, web
                      development provides a powerful platform to connect,
                      engage, and succeed in the digital age.
                    </p>

                    <ul className="ul" role="list">
                      <li className="li">
                        Online Presence: Having a website allows businesses and
                        individuals to establish an online presence, making it
                        easier for potential customers or clients to find them.
                        It serves as a digital storefront or portfolio
                        accessible to a global audience, expanding reach and
                        visibility.
                      </li>
                      <li className="li" role="list">
                        Increased Customer Engagement: Websites provide an
                        interactive platform for engaging with customers.
                        Features such as contact forms, live chat, feedback
                        forms, and social media integration enable direct
                        communication, feedback collection, and customer
                        support, fostering engagement and building
                        relationships.
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

      {/* END OF THE CONTENTS */}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default webdevelopment

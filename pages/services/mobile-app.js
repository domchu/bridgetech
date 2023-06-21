import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Topnav from "./../../Components/Topnav/Topnav";
import Header from "./../../Components/Header/Header";
import NewsLetter from "./../../Components/NewsLetter";
import Footer from "./../../Components/Footer/Footer";
import Benefit from "../../public/images/appp1.jpg";
import ServiceImage from "../../public/images/appp2.jpg";
import ServiceWork from "../../public/images/appp3.jpg";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const mobileapp = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <DefaultSeo
        title="Mobile Applications | Bridgekode"
        description="Application designed specifically for user on mobile devices such as smartphones & tablets. "
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
                    Mobile App Development
                  </Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Mobile DEVELOPMENT CONTENT */}
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
                    <h2 className="section-title">
                      Mobile Application Development
                    </h2>
                  </Box>
                  <Box className="service-section-top-text w-richtext">
                    <p>
                      Mobile app development refers to the process of creating
                      software applications specifically designed to run on
                      mobile devices, such as smartphones or tablets. It
                      involves a series of steps from conceptualization to
                      deployment, with the goal of developing a functional and
                      user-friendly app that meets the needs of the target
                      audience.
                    </p>
                  </Box>
                </Box>
              </Box>

              {/* SERVICE CAREER */}
              <Box className="service-area-block">
                <Box className="service-area-content section-block">
                  <h2 className="section-title">Which area we cover</h2>
                  <Box className="service-subtitle-text">
                    Remember, these areas may vary depending on the specific
                    requirements and objectives of your app. It's important to
                    prioritize the features and areas that are most relevant and
                    valuable to your target audience and align with your overall
                    app strategy.
                  </Box>
                  <Box className="w-richtext">
                    <p>
                      When developing a mobile app, there are several key areas
                      to consider to ensure a comprehensive and successful
                      application. Here are some important areas to cover:
                    </p>

                    <ul className="ul" role="list">
                      <li className="li">
                        User Interface (UI) Design: Create an intuitive and
                        visually appealing user interface that is optimized for
                        mobile devices. Consider factors such as navigation,
                        layout, colors, typography, and interactive elements to
                        provide a seamless user experience.
                      </li>
                      <li className="li" role="list">
                        Functionality and Features: Define the core
                        functionalities and features that the app will offer.
                        Identify the specific requirements and use cases, and
                        ensure that the app provides a solution that addresses
                        user needs effectively. Prioritize features based on
                        their importance and feasibility within the development
                        timeline and budget.
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
                      Mobile apps are software applications designed to run on
                      mobile devices, such as smartphones or tablets. They are
                      developed using programming languages and frameworks
                      specific to the platform they are intended for, such as
                      iOS (Apple) or Android (Google). Here is a general
                      overview of how mobile apps work:
                    </p>
                  </Box>
                  <Box className="inner-quote-block">
                    <Box className="service-quote w-richtext">
                      <p>
                        Development: Mobile app development involves writing
                        code using programming languages like Swift or
                        Objective-C for iOS apps or Java or Kotlin for Android
                        apps. Developers use software development kits (SDKs)
                        provided by the platform to access device features and
                        functionality.
                      </p>
                      <p>
                        Installation: Mobile apps are typically distributed
                        through app stores or marketplaces specific to each
                        platform. Users can download and install apps from these
                        stores directly onto their mobile devices. The app store
                        handles the installation process, including verifying
                        the app's authenticity and permissions.
                      </p>
                    </Box>
                    <Box className="inner-quote-border-left"></Box>
                  </Box>
                  <Box className="w-text">
                    <p>
                      It's important to note that the specifics of how mobile
                      apps work can vary depending on the platform, programming
                      languages, and development frameworks used. However, the
                      core principles mentioned above provide a general
                      understanding of the functioning of mobile apps.
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
                        mobile apps,
                      </Link>
                      It's important to note that the specific benefits of
                      mobile apps may vary depending on the industry, target
                      audience, and specific goals of the app. Nonetheless,
                      mobile apps offer significant advantages in terms of
                      convenience, personalization, engagement, and business
                      growth.
                    </p>
                    <p>
                      Mobile apps offer a wide range of benefits for both
                      individuals and businesses. Here are some key advantages
                      of mobile apps:
                    </p>
                    <ul className="ul" role="list">
                      <li className="li">
                        Access to Device Features: Mobile apps can leverage
                        device features such as camera, GPS, accelerometer, and
                        microphone, enabling advanced functionalities and
                        enhancing the user experience. For example, apps can
                        offer location-based services, scan QR codes, or use
                        biometric authentication for added security.
                      </li>
                      <li className="li" role="list">
                        Increased Sales and Revenue: Mobile apps can facilitate
                        sales and transactions directly within the app, making
                        it easy for users to make purchases or bookings. With
                        features such as saved payment information and
                        personalized recommendations, apps can encourage impulse
                        buying and drive sales.
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

      {/* END Mobile DEVELOPMENT CONTENT */}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default mobileapp;

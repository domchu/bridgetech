import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Benefit from "../../public/images/service-benefit.jpg";
import ServiceImage from "../../public/images/ceo.jpg";
import ServiceWork from "../../public/images/service-6.jpg";
import Topnav from "./../../Components/Topnav/Topnav";
import Header from "./../../Components/Header/Header";
import NewsLetter from "./../../Components/NewsLetter";
import Footer from "./../../Components/Footer/Footer";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const uiux = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <DefaultSeo
        title="Ux / Ui Design | Bridgekode"
        description="UX/UI design refers to the process of creating user-centric interfaces for digital products, such as websites, mobile apps, or software applications.   "
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
                  <Box className="project-link-text">UI/UX Design</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* UI UX DESIGN CONTENT */}
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
                    <h2 className="section-title">UX / UI Design</h2>
                  </Box>
                  <Box className="service-section-top-text w-richtext">
                    <p>
                      <strong> UI/UX design</strong> refers to the practice of
                      creating user-friendly and visually appealing interfaces
                      for digital products or systems. It involves considering
                      both the User Interface (UI) and User Experience (UX)
                      aspects of design. UI design focuses on the visual
                      elements of the interface, including the layout, colors,
                      typography, icons, and other graphical elements. It aims
                      to create an attractive and consistent visual design that
                      aligns with the brand identity. UI designers strive to
                      make the interface visually appealing, engaging, and easy
                      to navigate.
                    </p>
                  </Box>
                </Box>
              </Box>

              {/* SERVICE CAREER */}
              <Box className="service-area-block">
                <Box className="service-area-content section-block">
                  <h2 className="section-title">Which area we cover</h2>
                  <Box className="service-subtitle-text">
                    By considering these areas, UI/UX designers can create
                    thoughtful and user-centered designs that result in positive
                    user experiences and achieve business objectives.
                  </Box>
                  <Box className="w-richtext">
                    <p>
                      <strong>UI/UX design</strong> covers a broad range of
                      areas to ensure a comprehensive and successful user
                      experience. Here are some key areas that are typically
                      addressed in UI/UX design:
                    </p>

                    <ul className="ul" role="list">
                      <li className="li">
                        User Research: Conducting user research to understand
                        user needs, behaviors, and preferences. This involves
                        gathering insights through methods like interviews,
                        surveys, and user testing.
                      </li>
                      <li className="li" role="list">
                        User Personas: Creating user personas that represent
                        different user types and their characteristics. Personas
                        help designers empathize with users and make design
                        decisions aligned with their goals and motivations.
                      </li>
                      <li className="li" role="list">
                        Responsive Design: Designing interfaces that adapt and
                        function well across different devices and screen sizes.
                        Responsive design ensures a consistent user experience
                        regardless of the device being used.
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
                      UI/UX design involves a systematic and iterative process
                      that focuses on understanding user needs, creating
                      intuitive interfaces, and optimizing the overall user
                      experience. While the specific steps may vary depending on
                      the project and the design team's approach, here is a
                      general overview of how{" "}
                      <strong> UI/UX design works</strong>:
                    </p>
                  </Box>
                  <Box className="inner-quote-block">
                    <Box className="service-quote w-richtext">
                      <p>
                        Wireframing: Wireframing is the initial stage of
                        designing the user interface. It involves creating
                        low-fidelity, simplified layouts that define the
                        structure and placement of key elements on the screen.
                        Wireframes focus on functionality and information
                        hierarchy, rather than visual aesthetics.
                      </p>
                      <p>
                        Visual Design: Once the wireframes are finalized, the
                        visual design stage begins. Designers work on creating a
                        visually appealing interface by selecting appropriate
                        colors, typography, icons, and visual elements.
                      </p>
                    </Box>
                    <Box className="inner-quote-border-left"></Box>
                  </Box>
                  <Box className="w-text">
                    <p>
                      It's important to note that UI/UX design is a
                      collaborative process that involves cross-functional
                      teams, including designers, researchers, developers, and
                      stakeholders. Effective communication, empathy for users,
                      and a user-centered approach are key factors in successful
                      UI/UX design.
                    </p>
                    <p>
                      The UI/UX design process is not a one-time event. After
                      the product or system is launched, designers collect user
                      feedback, monitor analytics, and continuously iterate on
                      the design to improve the user experience based on
                      real-world usage data.
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
                        Ui/Ux design,
                      </Link>
                      Overall, UX/UI design is essential for creating products
                      and services that meet user needs, drive engagement, and
                      deliver a competitive advantage in today's digital
                      landscape.
                    </p>
                    <p>
                      UX/UI design, which stands for User Experience/User
                      Interface design, offers several significant benefits in
                      various domains. Here are some key advantages:
                    </p>
                    <ul className="ul" role="list">
                      <li className="li">
                        Enhanced User Satisfaction: UX/UI design focuses on
                        creating intuitive, user-friendly interfaces that
                        improve overall user satisfaction. By understanding user
                        needs and preferences, designers can create experiences
                        that are easy to navigate, visually appealing, and
                        engaging. This leads to positive user experiences and
                        builds user loyalty.
                      </li>
                      <li className="li" role="list">
                        Streamlined Workflows: UX/UI design involves careful
                        consideration of user tasks and workflows. By
                        understanding how users interact with a system or
                        product, designers can streamline processes, reduce
                        cognitive load, and optimize user flows. This can result
                        in increased productivity, efficiency, and a more
                        pleasant experience for users.
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
      {/* END UI UX DESIGN CONTENT */}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default uiux;

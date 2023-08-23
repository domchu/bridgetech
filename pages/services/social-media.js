import React from 'react'
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Topnav from "./../../Components/Topnav/Topnav";
import Header from "./../../Components/Header/Header";
import NewsLetter from "./../../Components/NewsLetter";
import Footer from "./../../Components/Footer/Footer";
import Benefit from "../../public/images/media.jpg";
import Media from "../../public/images/media2.jpg";
import ServiceImage from "../../public/images/media3.jpg";
import ServiceWork from "../../public/images/media4.jpg";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const socialMedia = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <DefaultSeo
        title="Social Media | Crafting Websites to Perfection "
        description="An online platforms & websites that enable users to create, share & interact with contents, as well as connect & communicate with others.  "
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
                    href="/services"
                    className="project-nav-link"
                  >
                    Services
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">
                    Digital & Social Media
                  </Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* SOCIAL MEDIA DEVELOPMENT CONTENT */}
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
                        src={Media}
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
                      Digital & Social Media Management
                    </h2>
                  </Box>
                  <Box className="service-section-top-text w-richtext">
                    <p>
                      Social media refers to a collection of online platforms
                      and technologies that allow individuals and organizations
                      to create, share, and interact with user-generated
                      content. It is a digital communication channel that
                      enables users to connect, collaborate, and engage with
                      others on the internet. Social media platforms provide
                      various features and tools for communication, content
                      sharing, and networking.
                    </p>
                  </Box>
                </Box>
              </Box>

              {/* SERVICE CAREER */}
              <Box className="service-area-block">
                <Box className="service-area-content section-block">
                  <h2 className="section-title">Which area we cover</h2>
                  <Box className="service-subtitle-text">
                    <p>
                      Remember, each social media platform has its own unique
                      features and best practices. Stay updated with the latest
                      trends and changes in algorithms to optimize your social
                      media presence and achieve your desired outcomes. When it
                      comes to social media, there are several key areas to
                      consider. Here are some important aspects to cover:
                    </p>
                  </Box>
                  <Box className="w-richtext">
                    <ul className="ul" role="list">
                      <li className="li">
                        Influencer Marketing: Collaborate with influencers or
                        thought leaders in your industry to expand your reach
                        and tap into their existing audience. Identify
                        influencers whose values align with your brand and work
                        with them to create sponsored content or partnerships.
                      </li>
                      <li className="li" role="list">
                        Audience Engagement: Actively engage with your audience
                        by responding to comments, messages, and mentions.
                        Encourage discussions, ask questions, and foster a sense
                        of community. Show appreciation for your followers and
                        build relationships with them.
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
                      It's worth noting that each social media platform may have
                      unique features and nuances in their operation. However,
                      the overall aim is to facilitate connection,
                      communication, and content sharing among users while
                      offering opportunities for personal expression,
                      entertainment, and engagement.
                    </p>
                  </Box>
                  <Box className="inner-quote-block">
                    <Box className="service-quote w-richtext">
                      <p>
                        User Registration: To use a social media platform,
                        individuals typically need to create an account by
                        providing their personal information, such as their
                        name, email address, and a chosen username and password.
                        Some platforms may also require phone number
                        verification.
                      </p>
                      <p>
                        Advertising and Monetization: Social media platforms
                        generate revenue through advertising. They offer
                        targeted advertising options to businesses based on user
                        demographics, interests, and behaviors. Advertisers can
                        create campaigns and promote their products or services
                        to reach their desired audience.
                      </p>
                    </Box>
                    <Box className="inner-quote-border-left"></Box>
                  </Box>
                  <Box className="w-text">
                    <p>
                      <strong>Social media</strong> encourages user engagement
                      through likes, comments, shares, and reactions. Users can
                      interact with the content shared by others, expressing
                      their thoughts, opinions, and emotions. Platforms may also
                      offer private messaging features for direct communication
                      between users.
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
                        href="https://www.blog.bridgekode.com"
                        target="_blank"
                        className="it-solution"
                      >
                        social media.
                      </Link>
                      It's important to note that while social media offers
                      numerous benefits, it is essential to use it mindfully and
                      responsibly, considering privacy, online security, and the
                      potential for information overload or negative effects on
                      mental health.
                    </p>
                    <p>
                      Social media platforms have become an integral part of our
                      personal and professional lives, offering numerous
                      benefits. Here are some key advantages of social media:
                    </p>
                    <ul className="ul" role="list">
                      <li className="li">
                        Communication and Connectivity: Social media enables
                        instant and convenient communication, allowing
                        individuals to connect and stay in touch with friends,
                        family, and colleagues across the globe. It facilitates
                        real-time interaction, fostering connections that would
                        otherwise be challenging to maintain.
                      </li>
                      <li className="li" role="list">
                        Brand Building and Marketing: Social media has become a
                        powerful tool for businesses and individuals to build
                        their brand and promote their products or services. It
                        offers a cost-effective way to reach a large audience,
                        engage with customers, and create brand awareness.
                        Social media marketing enables targeted advertising,
                        customer feedback, and analytics to optimize marketing
                        strategies.
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
      {/* END SOCIAL MEDIA DEVELOPMENT CONTENT */}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default socialMedia
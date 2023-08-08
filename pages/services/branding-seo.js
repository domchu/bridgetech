import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Topnav from "./../../Components/Topnav/Topnav";
import Header from "./../../Components/Header/Header";
import NewsLetter from "./../../Components/NewsLetter";
import Footer from "./../../Components/Footer/Footer";
import Benefit from "../../public/images/media4.jpg";
import career from "../../public/images/media5.jpg";
import ServiceImage from "../../public/images/human3.jpg";
import ServiceWork from "../../public/images/content2.jpg";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const brandingSeo = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <DefaultSeo
        title="Branding & SEO | Crafting websites to perfection "
        description="Optimizing website for easy searching by clients, better ranking, sitemap etc"
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
                Am indepth overview of the services we renders at bridgekode
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
                    Services
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">
                    Branding & Content Writing
                  </Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* BRANDING & SEO CONTENT */}
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
                        src={career}
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

                          {/*  */}
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
                          {/*  */}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="section-block">
                    <h2 className="section-title">
                      Branding, Contents Writing & SEO
                    </h2>
                  </Box>
                  <Box className="service-section-top-text w-richtext">
                    <p>
                      Branding refers to the process of creating a unique and
                      memorable identity for a product, service, or company. It
                      involves shaping the perception and image of a brand in
                      the minds of consumers. Branding encompasses various
                      elements, including the brand name, logo, tagline, visual
                      design, messaging, and overall brand personality. SEO is
                      the practice of optimizing a website or online content to
                      improve its visibility and ranking in search engine
                      results pages (SERPs). The aim of SEO is to drive organic
                      (non-paid) traffic to a website by increasing its
                      visibility for relevant search queries.
                    </p>
                  </Box>
                </Box>
              </Box>

              {/* SERVICE CAREER */}
              <Box className="service-area-block">
                <Box className="service-area-content section-block">
                  <h2 className="section-title">Which area we cover</h2>
                  <Box className="service-subtitle-text">
                    When it comes to SEO (Search Engine Optimization), there are
                    several key areas that you should cover to optimize your
                    website and improve its visibility in search engine results
                    pages (SERPs).
                  </Box>
                  <Box className="w-richtext">
                    <p>
                      You can enhance your website's visibility, attract organic
                      traffic, and improve your search engine rankings. Keep in
                      mind that SEO is an ongoing process, and it requires
                      consistent effort and adaptation to stay ahead of the
                      competition and deliver long-term results.
                    </p>

                    <ul className="ul" role="list">
                      <li className="li">
                        Technical SEO: Ensure that your website has a solid
                        technical foundation for search engines to crawl and
                        index effectively. This involves optimizing website
                        speed, implementing proper URL structures, utilizing
                        canonical tags to manage duplicate content, optimizing
                        robots.txt and XML sitemaps, and ensuring
                        mobile-friendliness and responsive design.
                      </li>
                      <li className="li" role="list">
                        Link Building: Build high-quality backlinks from
                        reputable and relevant websites. Focus on acquiring
                        natural and authoritative links through content
                        promotion, guest blogging, influencer outreach, and
                        participating in industry-specific directories. Quality
                        backlinks can boost your website's authority and improve
                        search engine rankings.
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
                      SEO (Search Engine Optimization) involves a combination of
                      strategies, techniques, and best practices aimed at
                      improving a website's visibility and ranking in search
                      engine results pages (SERPs). Here's a general overview of
                      how SEO works:
                    </p>
                  </Box>
                  <Box className="inner-quote-block">
                    <Box className="service-quote w-richtext">
                      <p>
                        Keyword Research: SEO begins with keyword research to
                        identify the search terms and phrases that users
                        commonly use when looking for products, services, or
                        information related to your business. By understanding
                        these keywords, you can optimize your website's content
                        to align with user intent.
                      </p>
                      <p>
                        Content Creation and Optimization: Content plays a
                        crucial role in SEO. Creating high-quality, original,
                        and relevant content that addresses the needs and
                        interests of your target audience is essential.
                        Optimizing your content with targeted keywords, using
                        proper formatting and headings, incorporating multimedia
                        elements, and providing a great user experience are key
                        aspects of content optimization.
                      </p>
                    </Box>
                    <Box className="inner-quote-border-left"></Box>
                  </Box>
                  <Box className="w-text">
                    <p>
                      Remember that SEO is a long-term process, and it takes
                      time to see results. Consistency, patience, and staying
                      updated with SEO practices are key to achieving and
                      maintaining good search engine rankings and organic
                      traffic for your website.
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
                      Overall, SEO offers numerous benefits for businesses,
                      including increased website visibility, organic traffic
                      growth, targeted audience reach, cost-effectiveness,
                      improved brand credibility and trust, enhanced user
                      experience, long-term results, and a competitive edge. By
                      investing in SEO, businesses can improve their online
                      presence, attract relevant traffic, and achieve their
                      marketing and business goals.
                    </p>
                    <p>
                      SEO (Search Engine Optimization) offers several benefits
                      for businesses and websites. Here are some key benefits of
                      SEO:
                    </p>
                    <ul className="ul" role="list">
                      <li className="li">
                        Increased Website Visibility: SEO techniques help
                        improve your website's visibility in search engine
                        results pages (SERPs). By optimizing your website for
                        relevant keywords and search queries, you increase the
                        chances of appearing higher in search results, leading
                        to increased visibility and exposure to potential
                        customers.
                      </li>
                      <li className="li" role="list">
                        Organic Traffic Growth: SEO aims to drive organic,
                        non-paid traffic to your website. When your website
                        ranks higher in search results, it attracts more clicks
                        from users looking for relevant information or
                        solutions. Increased organic traffic means more
                        opportunities to engage with potential customers and
                        convert them into leads or sales.
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

      {/* END OF BRANDING AND SEO CONTENT */}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default brandingSeo;

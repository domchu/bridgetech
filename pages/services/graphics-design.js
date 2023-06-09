import React from 'react'
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Topnav from "./../../Components/Topnav/Topnav";
import Header from "./../../Components/Header/Header";
import NewsLetter from "./../../Components/NewsLetter";
import Footer from "./../../Components/Footer/Footer";
import Image from "next/image";
import { useRouter } from "next/router";
import Benefit from "../../public/images/service-benefit.jpg";
import ServiceImage from "../../public/images/ceo.jpg";
import ServiceWork from "../../public/images/service-6.jpg";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const graphicdesign = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <DefaultSeo
        title="Graphics Design | Bridgekode"
        description="The art and practice of creating visual content using typography, images, and other graphical elements "
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
                  <Box className="project-link-text">Graphics Design</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* GRAHICS DESIGN CONTENT */}
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
                    <h2 className="section-title">Graphics Design</h2>
                  </Box>
                  <Box className="service-section-top-text w-richtext">
                    <p>
                      Graphic design encompasses a wide range of mediums and
                      applications, including print materials, digital
                      platforms, branding and identity, advertising, packaging,
                      web design, user interface design, and more. It is a
                      fundamental element of visual communication, helping
                      businesses and individuals convey their messages and
                      establish a visual identity. Graphic design is a dynamic
                      field that combines creativity, visual problem-solving,
                      and technical skills to create visually compelling and
                      effective designs across various mediums and platforms.
                    </p>
                  </Box>
                </Box>
              </Box>

              {/* SERVICE CAREER */}
              <Box className="service-area-block">
                <Box className="service-area-content section-block">
                  <h2 className="section-title">Which area we cover</h2>
                  <Box className="service-subtitle-text">
                    Graphic design encompasses various areas and
                    specializations.
                  </Box>
                  <Box className="w-richtext">
                    <p>
                      These are just some of the areas within graphic design,
                      and many designers specialize in specific fields or work
                      across multiple disciplines. The field of graphic design
                      is broad and diverse, providing numerous opportunities for
                      creative expression and problem-solving.
                    </p>

                    <ul className="ul" role="list">
                      <li className="li">
                        Motion Graphics and Animation: Motion graphics combines
                        graphic design with animation to create engaging visuals
                        for videos, presentations, websites, and user
                        interfaces. It involves using software like Adobe After
                        Effects to bring static designs to life through movement
                        and visual effects.
                      </li>
                      <li className="li" role="list">
                        User Interface (UI) Design: UI design involves creating
                        interfaces for software applications, websites, and
                        interactive experiences. It focuses on designing
                        intuitive and visually appealing user interfaces that
                        enhance user interaction and engagement.
                      </li>
                      <li className="li" role="list">
                        Branding and Identity Design: This area focuses on
                        creating or refreshing a brand's visual identity,
                        including logo design, typography selection, color
                        palette creation, and overall brand guidelines.
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
                      Graphic design is a collaborative and iterative process
                      that involves creativity, research, visual
                      problem-solving, and technical skills. It combines
                      artistic elements with strategic thinking to create
                      visually compelling and effective designs that communicate
                      messages and engage audiences.
                    </p>
                  </Box>
                  <Box className="inner-quote-block">
                    <Box className="service-quote w-richtext">
                      <p>
                        Understanding the Project: The first step in graphic
                        design is to understand the project requirements. This
                        involves gathering information about the client's goals,
                        target audience, message, and any specific guidelines or
                        constraints.
                      </p>
                      <p>
                        Sketching and Wireframing: Designers often start by
                        sketching rough ideas on paper or creating wireframes to
                        outline the layout and structure of the design. This
                        stage focuses on exploring different compositions,
                        arrangement of elements, and overall visual hierarchy.
                      </p>
                    </Box>
                    <Box className="inner-quote-border-left"></Box>
                  </Box>
                  <Box className="w-text">
                    <p>
                      After the initial sketches and concept development,
                      designers move on to digital tools and software. Popular
                      design software includes Adobe Photoshop, Illustrator, and
                      InDesign, among others. These tools allow designers to
                      refine and create the final design digitally.
                    </p>
                    <p>
                      Graphic design involves a creative process that combines
                      art, technology, and communication to visually communicate
                      messages and ideas.
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
                      graphic design offers several benefits, including
                      effective communication, branding, visual appeal,
                      professionalism, consistency, increased engagement,
                      information visualization, and a memorable user
                      experience. These advantages contribute to building a
                      strong brand, attracting customers, and achieving business
                      goals.
                    </p>
                    <p>
                      Graphic design offers numerous benefits across various
                      industries and platforms. Here are some key advantages:
                    </p>
                    <ul className="ul" role="list">
                      <li className="li">
                        Branding and Identity: Graphic design plays a vital role
                        in establishing a strong brand identity. A
                        professionally designed logo, typography, color schemes,
                        and visual elements create a distinct brand image that
                        helps businesses stand out from competitors. Consistent
                        branding across all marketing materials fosters brand
                        recognition and builds trust among customers.
                      </li>
                      <li className="li" role="list">
                        Memorable User Experience: Well-designed interfaces,
                        websites, and applications enhance the user experience
                        by making them intuitive, visually pleasing, and easy to
                        navigate. Effective graphic design considers
                        user-centric principles, ensuring that the visual
                        elements contribute to an enjoyable and memorable
                        interaction with a product or service.
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

      {/*END GRAPHIC DESIGN  */}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default graphicdesign

import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import career from "../../public/images/software.jpg";
import Benefits from "../../public/images/software4.jpg";
import ServiceImage from "../../public/images/software2.jpg";
import ServiceWork from "../../public/images/soft4.jpg";

const Singleservices = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
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
                    <h2 className="section-title">Software Development</h2>
                  </Box>
                  <Box className="service-section-top-text w-richtext">
                    <p>
                      Software development is the process of designing, coding,
                      testing, and deploying computer programs or applications.
                      It involves a systematic approach to building software
                      solutions to meet specific requirements and solve
                      problems. Software development is a dynamic field that
                      requires a combination of technical skills,
                      problem-solving abilities, and creativity. It encompasses
                      various areas such as web development, mobile app
                      development, database development, and more. As technology
                      evolves, new tools, frameworks, and methodologies emerge,
                      driving innovation and advancements in the software
                      development industry.
                    </p>
                  </Box>
                </Box>
              </Box>

              {/* SERVICE CAREER */}
              <Box className="service-area-block">
                <Box className="service-area-content section-block">
                  <h2 className="section-title">Which area we cover</h2>
                  <Box className="service-subtitle-text">
                    In Software Development Service, we cover most of the IT
                    problems that your company faces and we try to solve it.
                  </Box>
                  <Box className="w-richtext">
                    <p>
                      These are just a few areas within
                      <strong> software development</strong>, and the field is
                      continuously evolving with emerging technologies and
                      trends. Software developers may specialize in one or
                      multiple areas depending on their interests, skills, and
                      project requirements.
                    </p>

                    <ul className="ul" role="list">
                      <li className="li">
                        Web Development: Web development focuses on creating
                        websites and web applications using technologies such as
                        HTML, CSS, JavaScript, and various web frameworks such
                        as:React, Vue, Angular, Next. It involves front-end
                        development (client-side interface) and back-end
                        development (server-side logic and database integration)
                      </li>
                      <li className="li" role="list">
                        Mobile App Development: Mobile app development involves
                        creating applications specifically designed for mobile
                        devices, such as smartphones and tablets. It can include
                        native app development (using platform-specific
                        languages like Java or Swift) or cross-platform app
                        development (using frameworks like React Native or
                        Flutter).
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
                      We are <strong>Bridgekode</strong> provide the best
                      quality
                      <Link
                        href="https://www.blog.bridgekode.com"
                        target="_blank"
                        className="it-solution"
                      >
                        IT solution.
                      </Link>
                      Software development is a complex process that involves
                      designing, coding, testing, and deploying software
                      applications or systems. Here's a high-level overview of
                      how software development works:
                    </p>
                  </Box>
                  <Box className="inner-quote-block">
                    <Box className="service-quote w-richtext">
                      <p>
                        Requirements Gathering: The software development process
                        begins with gathering and documenting the requirements
                        for the software. This involves understanding the
                        objectives, functionalities, and constraints of the
                        software to be developed. It may involve meetings,
                        interviews, and discussions with stakeholders to ensure
                        a clear understanding of their needs.
                      </p>
                      <br />
                      <p>
                        System Design: Once the requirements are gathered, the
                        next step is to design the system architecture and
                        software components. This includes defining the overall
                        structure, data models, user interfaces, and
                        interactions between different parts of the system. The
                        design phase aims to create a blueprint for the software
                        solution.
                      </p>
                    </Box>
                    <Box className="inner-quote-border-left"></Box>
                  </Box>
                  <Box className="w-text">
                    <p>
                      Throughout the software development process, collaboration
                      and communication among the development team,
                      stakeholders, and users are crucial. Project management
                      methodologies, such as Agile or Waterfall, can be employed
                      to plan, track, and manage the development process
                      effectively.
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
                        Software development,
                      </Link>
                      These benefits highlight the significance of software
                      development in today's digital age. By leveraging
                      technology and custom solutions, individuals and
                      organizations can unlock new opportunities, improve
                      efficiency, and achieve their goals effectively.
                    </p>
                    <p>
                      Software development offers numerous benefits for
                      individuals, businesses, and society as a whole. Here are
                      some key benefits of software development:
                    </p>
                    <ul className="ul" role="list">
                      <li className="li">
                        Enhanced Productivity: Software applications provide
                        tools and features that enhance productivity and
                        collaboration. They enable users to organize and manage
                        tasks, share information, communicate effectively, and
                        work together efficiently, leading to increased
                        productivity and better outcomes.
                      </li>
                      <li className="li" role="list">
                        Competitive Advantage: Well-developed software can
                        provide a competitive edge in the market. It can
                        differentiate a business by offering unique features,
                        improved user experience, and efficient processes that
                        attract and retain customers.
                      </li>
                    </ul>
                  </Box>
                </Box>
                <Box className="service-benefit-image-block">
                  <Image
                    src={Benefits}
                    alt="Services Benefit Image"
                    loading="lazy"
                    className="image-cover img"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Singleservices;

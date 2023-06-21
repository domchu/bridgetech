import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Topnav from "./../../Components/Topnav/Topnav";
import Header from "./../../Components/Header/Header";
import NewsLetter from "./../../Components/NewsLetter";
import Footer from "./../../Components/Footer/Footer";
import humanR from "../../public/images/human.jpg";
import Boss from "../../public/images/boss.jpg";
import ServiceImage from "../../public/images/human4.jpg";
import ServiceWork from "../../public/images/human5.jpg";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const humanResources = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <DefaultSeo
        title="Human Resourses | Bridgekode Tech"
        description="HR plays a crucial role in recruiting, hiring, training, developing, & supporting employees throughout their employment lifecycle. "
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
                  <Box className="project-link-text">Human Resources(HR)</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* HUMAN RESOURCES CONTENT */}
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
                        src={Boss}
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
                      Human Resources [HR] & Mgmt
                    </h2>
                  </Box>
                  <Box className="service-section-top-text w-richtext">
                    <p>
                      Human resources (HR) refers to the department or function
                      within an organization that is responsible for managing
                      the organization's human capital. It involves a range of
                      activities and processes related to the recruitment,
                      selection, development, management, and well-being of
                      employees. The primary role of HR is to ensure that the
                      organization has the right people with the right skills,
                      knowledge, and abilities to achieve its goals and
                      objectives. HR professionals work closely with managers
                      and employees at all levels to create a positive work
                      environment, support employee development, and align human
                      capital strategies with the overall business strategy.
                    </p>
                  </Box>
                </Box>
              </Box>

              {/* SERVICE CAREER */}
              <Box className="service-area-block">
                <Box className="service-area-content section-block">
                  <h2 className="section-title">Which area we cover</h2>
                  <Box className="service-subtitle-text">
                    These areas in HR are interrelated and contribute to the
                    effective management and development of the organization's
                    human capital. HR professionals play a vital role in
                    aligning HR practices with the organization's overall
                    strategic goals and ensuring a productive and engaged
                    workforce.
                  </Box>
                  <Box className="w-richtext">
                    <p>
                      In human resources (HR), there are several key areas that
                      HR professionals need to cover to effectively manage the
                      organization's human capital. Here are some essential
                      areas in HR:
                    </p>

                    <ul className="ul" role="list">
                      <li className="li">
                        Onboarding and Orientation: HR ensures a smooth
                        onboarding process for new employees. This includes
                        providing orientation sessions to familiarize new hires
                        with the organization's culture, policies, procedures,
                        and introducing them to their roles and
                        responsibilities.
                      </li>
                      <li className="li" role="list">
                        Training and Development: HR plans and coordinates
                        training and development programs to enhance employee
                        skills and knowledge. This can include organizing
                        workshops, seminars, e-learning modules, and providing
                        opportunities for professional development and career
                        growth.
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
                      HR functions may vary depending on the size and industry
                      of the organization. HR professionals collaborate with
                      managers and employees at all levels to create a positive
                      work environment, support employee development, and align
                      human capital strategies with the overall business goals.
                    </p>
                  </Box>
                  <Box className="inner-quote-block">
                    <Box className="service-quote w-richtext">
                      <p>
                        Strategic Planning: HR professionals align HR strategies
                        with the overall goals and objectives of the
                        organization. They collaborate with senior management to
                        understand business needs, forecast workforce
                        requirements, and develop HR initiatives that support
                        the organization's strategic direction.
                      </p>
                      <p>
                        Recruitment and Selection: HR departments oversee the
                        recruitment process to attract and select qualified
                        candidates. They create job descriptions, advertise
                        positions, screen resumes, conduct interviews, and
                        coordinate the selection process. HR professionals
                        assess candidates' skills, qualifications, and cultural
                        fit to make informed hiring decisions.
                      </p>
                    </Box>
                    <Box className="inner-quote-border-left"></Box>
                  </Box>
                  <Box className="w-text">
                    <p>
                      Human resources (HR) departments are responsible for
                      managing the human capital within organizations. They
                      perform various functions to ensure effective recruitment,
                      development, and management of employees.
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
                        human resourses,
                      </Link>
                      By leveraging these benefits, organizations can create a
                      positive work environment, attract and retain top talent,
                      develop employee skills, and align human capital with
                      business objectives, ultimately contributing to the
                      overall success and growth of the organization.
                    </p>
                    <p>
                      Human resources (HR) play a crucial role in organizations
                      by managing the human capital and ensuring the effective
                      utilization of the workforce. Here are some key benefits
                      of having a strong HR function:
                    </p>
                    <ul className="ul" role="list">
                      <li className="li">
                        Talent Acquisition: HR departments are responsible for
                        attracting, recruiting, and selecting qualified
                        candidates for job positions. By having a strategic
                        approach to talent acquisition, HR professionals can
                        help organizations find the right people who align with
                        the company's culture, values, and skills requirements.
                      </li>
                      <li className="li" role="list">
                        Employee Onboarding and Development: HR teams facilitate
                        the onboarding process for new employees, ensuring a
                        smooth transition into the organization. They also
                        create and implement training and development programs
                        to enhance employees' skills, knowledge, and
                        capabilities, fostering continuous growth and
                        improvement.
                      </li>
                    </ul>
                  </Box>
                </Box>
                <Box className="service-benefit-image-block">
                  <Image
                    src={humanR}
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
      {/* END HUMAN RESOURCES CONTENT */}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default humanResources;

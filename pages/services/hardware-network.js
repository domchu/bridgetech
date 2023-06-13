import React from "react";
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

const hardwareNetwork = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <DefaultSeo
        title="Hardware & Networking | Bridgekode"
        description="It encompasses all the tangible parts of a computer or electronic system that you can touch, see, and interact with. "
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
                    Hardware & Networking
                  </Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* HARDWARE/NETWORK CONTENT */}
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
                      Hardware & Networking Engineering
                    </h2>
                  </Box>
                  <Box className="service-section-top-text w-richtext">
                    <p>
                      Hardware and networking are two interrelated aspects of
                      information technology that play crucial roles in the
                      functioning of computer systems and the establishment of
                      network connections. The synergy between hardware and
                      networking is essential for the effective functioning of
                      information technology systems. Hardware provides the
                      foundation for processing power, data storage, and user
                      interaction, while networking enables connectivity, data
                      exchange, and communication between devices and systems.
                      Together, they form the backbone of IT infrastructure,
                      supporting various applications and services that drive
                      modern businesses and organizations.
                    </p>
                  </Box>
                </Box>
              </Box>

              {/* SERVICE CAREER */}
              <Box className="service-area-block">
                <Box className="service-area-content section-block">
                  <h2 className="section-title">Which area we cover</h2>
                  <Box className="service-subtitle-text">
                    Hardware covers a broad range of components and devices that
                    are involved in computing and electronic systems. Here are
                    some key areas that hardware encompasses:
                  </Box>
                  <Box className="w-richtext">
                    <p>
                      It's important to note that <strong>hardware</strong> is
                      constantly evolving and advancing, with new technologies
                      and components being developed regularly.
                    </p>

                    <ul className="ul" role="list">
                      <li className="li">
                        Central Processing Unit (CPU): The CPU is the primary
                        component responsible for executing instructions and
                        performing calculations in a computer system. Memory:
                        Memory includes components such as RAM and ROM, which
                        provide temporary and permanent storage for data and
                        instructions.
                      </li>
                      <li className="li" role="list">
                        Input Devices: Hardware devices that allow users to
                        input commands or interact with the computer system,
                        such as keyboards, mice, touchscreens, scanners, and
                        microphones. Output Devices: Hardware devices that
                        present information or results generated by the computer
                        system, including monitors, printers, speakers, and
                        headphones.
                      </li>
                      <li className="li" role="list">
                        Network Devices: Hardware components and devices used
                        for network connectivity, including network interface
                        cards (NICs), routers, switches, and modems. Power
                        Supply Unit (PSU): Hardware component responsible for
                        providing electrical power to the computer system.
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
                      Hardware refers to the physical components and devices
                      that make up a computer system or electronic device.
                      Understanding how hardware works involves knowing how
                      different components interact and collaborate to perform
                      computing tasks. Here's a simplified explanation of how
                      hardware works in a typical computer system:
                    </p>
                  </Box>
                  <Box className="inner-quote-block">
                    <Box className="service-quote w-richtext">
                      <p>
                        Input Devices: Input devices allow users to provide
                        commands and interact with the computer. Examples
                        include keyboards, mice, touchscreens, scanners, and
                        microphones. Input devices convert user actions or
                        commands into digital signals that the computer can
                        understand.
                      </p>
                      <p>
                        Output Devices: Output devices present information or
                        results generated by the computer system. Common output
                        devices include monitors, printers, speakers, and
                        headphones. They convert digital data into a
                        human-readable form or produce visual or audio outputs.
                      </p>
                    </Box>
                    <Box className="inner-quote-border-left"></Box>
                  </Box>
                  <Box className="w-text">
                    <p>
                      It's important to note that this is a simplified overview,
                      and modern computer systems are much more complex,
                      incorporating additional components and technologies.
                    </p>
                    <p>
                      explanation provides a general understanding of how
                      hardware components work together to enable the
                      functioning of a computer system.
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
                        hardware and networking,
                      </Link>
                      It's worth noting that the benefits of hardware and
                      network infrastructure vary based on the specific needs
                      and objectives of an organization.
                    </p>
                    <p>
                      Effective planning, regular maintenance, and staying
                      up-to-date with technological advancements are crucial for
                      optimizing the benefits derived from hardware and network
                      investments. Hardware and network infrastructure provide
                      several benefits to organizations, including:
                    </p>
                    <ul className="ul" role="list">
                      <li className="li">
                        Improved Performance and Productivity: Up-to-date and
                        efficient hardware and network infrastructure can
                        significantly enhance system performance and overall
                        productivity. High-speed processors, ample memory, and
                        reliable network connections enable employees to work
                        more efficiently, access information quickly, and
                        perform tasks without delays.
                      </li>
                      <li className="li" role="list">
                        Enhanced Collaboration and Communication: Network
                        infrastructure, including local area networks (LANs) and
                        wide area networks (WANs), enable seamless communication
                        and collaboration among employees within an
                        organization. It allows for file sharing, email, video
                        conferencing, instant messaging, and other collaborative
                        tools that improve teamwork, knowledge sharing, and
                        decision-making.
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
      {/* END OF HARDWARE/NETWORK */}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default hardwareNetwork;

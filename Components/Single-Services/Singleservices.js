import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Benefit from "../../public/images/service-benefit.jpg";
import ServiceImage from "../../public/images/service-main.jpg";
import ServiceWork from "../../public/images/service-6.jpg";

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
                    <h2 className="section-title">Software Development</h2>
                  </Box>
                  <Box className="service-section-top-text w-richtext">
                    <p>
                      We are <strong>Bridgetech</strong> provide the best
                      quality
                      <Link
                        href="https://www.example.com"
                        target="_blank"
                        className="it-solution"
                      >
                        IT solution
                      </Link>
                      neque porro quisquam est qui dolore ipsum quia golor sit
                      amet, conse ctetur, adipisci velit, sed eligendi optio
                      cumque nihil take a trivial example, which of us ever
                      undertakes laborious physical exercise, except to obtain
                      some advantage from more than a great service that we
                      provide
                    </p>
                  </Box>
                </Box>
              </Box>

              {/* SERVICE CAREER */}
              <Box className="service-area-block">
                <Box className="service-area-content section-block">
                  <h2 className="section-title">Which area we cover</h2>
                  <Box className="service-subtitle-text">
                    In IT Management Service we cover most of the IT problems
                    that your company faces and we try to solve it.
                  </Box>
                  <Box className="w-richtext">
                    <p>
                      We are <strong>Bridgetech</strong>
                      provide the best quality
                      <Link
                        href="https://www.example.com"
                        target="_blank"
                        className="it-solution"
                      >
                        IT solution
                      </Link>
                      neque qui dolorem ipsum quia golor sit amet, conse ctetur,
                      adipisci velit, sed eligen optio cumque nihil impedit quo
                      minus id quod maxime placeat
                    </p>

                    <ul className="ul" role="list">
                      <li className="li">
                        IT Management provide the most service neque porro
                        quisquam est qui dolorem ipsum quia golor sit amet,
                        conse ctetur, adipisci velit
                      </li>
                      <li className="li" role="list">
                        IT Management provide the most service neque porro
                        quisquam est qui dolorem ipsum quia golor sit amet,
                        conse ctetur, adipisci velit
                      </li>
                      <li className="li" role="list">
                        IT Management provide the most service neque porro
                        quisquam est qui dolorem ipsum quia golor sit amet,
                        conse ctetur, adipisci velit
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
                      We are <strong>Bridgetech</strong> provide the best
                      quality
                      <Link
                        href="https://www.example.com"
                        target="_blank"
                        className="it-solution"
                      >
                        IT solution
                      </Link>
                      neque porro quisquam est qui dolorem ipsum quia golor sit
                      amet, conse ctetur, adipisci velit, sed eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat
                    </p>
                  </Box>
                  <Box className="inner-quote-block">
                    <Box className="service-quote w-richtext">
                      <p>
                        IT Management provide the most service neque porro
                        quisquam est qui dolorem ipsum quia golor sit amet,
                        conse ctetur, adipisci velit
                      </p>
                      <p>
                        IT Management provide the most service neque porro
                        quisquam est qui dolorem ipsum quia golor sit amet,
                        conse ctetur, adipisci velit
                      </p>
                    </Box>
                    <Box className="inner-quote-border-left"></Box>
                  </Box>
                  <Box className="w-text">
                    <p>
                      The main way to solve the the best quality
                      <Link
                        href="https://www.example.com"
                        target="_blank"
                        className="it-solution"
                      >
                        IT solution
                      </Link>
                      neque porro quisquam qui dolorem ipsum quia golor sit
                      amet, conse ctetur, adipisci velit, sed eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat
                    </p>
                    <p>
                      Great deal dolorem ipsum quia golor sit amet, conse
                      ctetur, adipisci velit, sed optio cumque nihil impedit quo
                      minus id quod maxime placeat
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
                        IT Management
                      </Link>
                      is the provide the best quality It solution neque qui
                      dolorem ipsum quia golor sit amet, conse ctetur, adipisci
                      velit, sed eligen optio cumque nihil impedit quo minus id
                      quod maxime placeat
                    </p>
                    <p>
                      Benefit of IT Management is the provide the best quality
                      more than neque qui dolorem ipsum quia golor sit amet,
                      conse ctetur, adipisci velit, sed eligen optio cumque
                      nihil impedit quo minus id quod maxime placeat
                    </p>
                    <ul className="ul" role="list">
                      <li className="li">
                        IT Management provide the most service neque porro
                        quisquam est qui dolorem ipsum quia golor sit amet,
                        conse ctetur, adipisci velit
                      </li>
                      <li className="li" role="list">
                        IT Management provide the most service neque porro
                        quisquam est qui dolorem ipsum quia golor sit amet,
                        conse ctetur, adipisci velit
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
    </>
  );
};

export default Singleservices;

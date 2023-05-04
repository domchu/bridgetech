import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import Benefit from "../../public/images/service-benefit.jpg";
import ServiceImage from "../../public/images/service-main.jpg";
import ServiceWork from "../../public/images/service-6.jpg";

const Singleservices = () => {
  return (
    <>
      <Box className="service-details-section wf-section">
        <Box className="section-gap-130">
          <Box className="container w-container">
            <Box className="service-details-block">
              <Box className="service-details-top-block"></Box>
              <Box className="service-area-block">
                <Box className="service-area-content">
                  <h2 className="section-title">Which area we cover</h2>
                  <Box className="service-subtitle-text">
                    In IT Management Service we cover most of the IT problems
                    that your company faces and we try to solve it.
                  </Box>
                  <Box className="w-richtext">
                    <p>
                      We are <strong>Bridgetech</strong>
                      provide the best quality
                      <Link href="https://www.example.com" target="_blank">
                        It solution
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
                      <li className="ul" role="list">
                        IT Management provide the most service neque porro
                        quisquam est qui dolorem ipsum quia golor sit amet,
                        conse ctetur, adipisci velit
                      </li>
                      <li className="ul" role="list">
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
              <Box className="service-how-to-block">
                <Box className="service-how-to-image-block">
                  <Image
                    src={ServiceWork}
                    alt="Software Development"
                    loading="lazy"
                    className="image-cover img"
                  />
                </Box>
                <Box className="service-how-to-content">
                  <h2 className="section-title">How it works</h2>
                  <Box className="w-richtext">
                    <p>
                      We are <strong>Optitech</strong> provide the best quality
                      <Link href="https://www.example.com" target="_blank">
                        It solution
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
                    <Box className="service-quote-border-left"></Box>
                  </Box>
                  <Box className="w-text">
                    <p>
                      The main way to solve the the best quality
                      <Link href="https://www.example.com">It solution</Link>
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
              <Box className="service-benefit-block">
                <Box className="service-benefit-content">
                  <h2 className="section-title">Benefits</h2>
                  <Box className="w-richtext">
                    <p>
                      Benefit of
                      <Link href="https://www.example.com" target="_blank">
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
                      <li className="ul" role="list">
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

import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import arrow from "../public/images/arrow-long-icon.png";
import project2 from "../public/images/sch-site.png";
import project3 from "../public/images/e-commerce.png";
import project1 from "../public/images/sch-portal.png";
import project5 from "../public/images/opay-ui.png";
import project7 from "../public/images/ict-site.png";
import project4 from "../public/images/blog.png";

const LatestProject = () => {
  return (
    <>
      <Box className="project-section wf-section">
        <Box className="blue-background-gradient-bottom">
          <Box className="section-gap-bottom-130">
            <Box className="container w-container">
              <Box className="section-block">
                <h2 className="section-title max-width-278">
                  Check our
                  <span className="section-title-inner-style">Latest</span>
                  Project
                </h2>
                <Box className="section-text max-width-370">
                  The underlisted projects are our latest and
                  <br />
                  affordable services completed.
                </Box>
              </Box>

              <Box className="project-collection-list-wrapper">
                <Box className="project-wrapper">
                  <Box className="project-item-wrapper">
                    <Box className="project-collection">
                      <Image
                        src={project2}
                        alt="Keyonaville School Website Image"
                        height={300}
                        width={300}
                        loading="lazy"
                        className="project__img"
                      />
                      <Box className="project__contents">
                        <Link href="/projects/website">
                          <h3>School Website</h3>
                        </Link>
                        <p className="service-text">
                          Technologies used to developed Keyonaville schools are
                          Javascript, Next.js, React.js, Chakra-Ui, HTML5, CSS3,
                          SASS, React libraries, etc.
                        </p>
                        <Link
                          href="https://www.keyonavilleschools.com.ng"
                          target="_blank"
                          rel="nofollow"
                        >
                          <Image
                            src={arrow}
                            alt="Pointer"
                            className="pointer-arrow"
                          />
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="project-item-wrapper">
                    <Box className="project-collection">
                      <Image
                        src={project3}
                        alt="Sebenstore Website Image"
                        height={300}
                        width={300}
                        loading="lazy"
                        className="project__img"
                      />
                      <Box className="project__contents">
                        <Link href="/projects/ecommerce">
                          <h3>E-Commerce Website</h3>
                        </Link>
                        <p className="service-text">
                          Technologies used to developed These E-commerce
                          website are Content Management System(CMS), Payment
                          integration, plugins, CSS3, Google analytic, Livechat
                          bot, backup wizzard, etc.
                        </p>
                        <Link
                          href="https://www.sebenstore.com"
                          target="_blank"
                          rel="nofollow"
                        >
                          <Image
                            src={arrow}
                            alt="Pointer"
                            className="pointer-arrow"
                          />
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="project-item-wrapper">
                    <Box className="project-collection">
                      <Image
                        src={project1}
                        alt="School Dashboard Image"
                        height={300}
                        width={300}
                        loading="lazy"
                        className="project__img"
                      />
                      <Box className="project__contents">
                        <Link href="/projects/database">
                          <h3>School Portal/Database</h3>
                        </Link>
                        <p className="service-text">
                          Technologies used to developed Keyonaville school
                          portal & database are PHP, MySQL, laravel, Mantie,
                          other libraries etc.
                        </p>
                        <Link
                          href="https://admin.keyonavilleschools.com.ng"
                          target="_blank"
                          rel="nofollow"
                        >
                          <Image
                            src={arrow}
                            alt="Pointer"
                            className="pointer-arrow"
                          />
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="project-item-wrapper">
                    <Box className="project-collection">
                      <Image
                        src={project4}
                        alt="Blogging Image"
                        height={300}
                        width={300}
                        loading="lazy"
                        className="project__img"
                      />
                      <Box className="project__contents">
                        <Link href="/projects/blog">
                          <h3>Bridgekode Blogging</h3>
                        </Link>
                        <p className="service-text">
                          The technologies used for these project are Contents
                          Management system[CMS], plugins, CSS3, Google
                          analytic, Livechat bot, backup wizzard, etc
                        </p>
                        <Link
                          href="https://www.bridgekodeblog.com"
                          target="_blank"
                          rel="nofollow"
                        >
                          <Image
                            src={arrow}
                            alt="Pointer"
                            className="pointer-arrow"
                          />
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="project-item-wrapper">
                    <Box className="project-collection">
                      <Image
                        src={project7}
                        alt="Florintech Website Images"
                        height={300}
                        width={300}
                        loading="lazy"
                        className="project__img"
                      />
                      <Box className="project__contents">
                        <Link href=" /projects/training">
                          <h3>ICT Website</h3>
                        </Link>
                        <p className="service-text">
                          Technologies used to developed Florintech Computer
                          College website are Javascript, Next.js, React.js,
                          Chakra-Ui, CSS3, HTML5, livechat plugin, other
                          libraries etc.
                        </p>
                        <Link
                          href="https://www.florintechcomputercollege.com"
                          target="_blank"
                        >
                          <Image
                            src={arrow}
                            alt="Pointer"
                            className="pointer-arrow"
                          />
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="project-item-wrapper">
                    <Box className="project-collection">
                      <Image
                        src={project5}
                        alt="UI / UX Design Profile"
                        height={300}
                        width={300}
                        loading="lazy"
                        className="project__img"
                      />
                      <Box className="project__contents">
                        <Link href="/projects/ux">
                          <h3>Opay UX/UI Design</h3>
                        </Link>
                        <p className="service-text">
                          The wireframe or template was done by the uses of
                          Figma, Illustrator, etc.
                        </p>
                        <Link
                          href="https://www.figma.com/file/iW8eCf0gwY4DgR132j46rB/Opay-app?type=design&node-id=0%3A1&mode=design&t=M4bNta7DiJQyKhK4-1"
                          target="_blank"
                          rel="nofollow"
                        >
                          <Image
                            src={arrow}
                            alt="Pointer"
                            className="pointer-arrow"
                          />
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LatestProject;

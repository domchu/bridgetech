import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import FaceBook from "../../public/images/facebook-icon.png";
import Twitter from "../../public/images/twitter-icon.png";
import Linkedin from "../../public/images/skype-icon.png";
import Instagram from "../../public/images/instagram-icon.png";
import TeamCeo from "../../public/images/team-ceo.jpg";

const Team = () => {
  return (
    <>
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                Our <span className="sub_heading_span">Team</span>
              </h1>
              <p>
                Neque porro quisquam est, qui quia lorem some golor sit amet,
                are more consectetur sed
              </p>
              <ul className="project-link">
                <li className="project-nav-items">
                  <Link href="/" className="project-nav-link">
                    Home
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">Team</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* OUR TEAM */}
      <Box className="team-section wf-section">
        <Box className="section-gap-130">
          <Box className="container w-container">
            <Box className="team-list-wrapper w-dyn-list">
              <Box className="team-list w-dyn-items" role="list">
                <Box className="team-item w-dyn-item" role="listiem">
                  <Box className="single-list-item" data-w-id="">
                    <Box className="team-image-block img">
                      <Image src={TeamCeo} alt="Ochu Dominic" loading="lazy" />
                    </Box>
                    <Box className="team-content">
                      <Box className="team-inner-content">
                        <Box className="team-top-conent">
                          <Box className="team-name-title">Ochu Dominic</Box>
                          <Box className="team-job-title">CEO, President</Box>
                        </Box>
                        <Box
                          className="team-separator"
                          style={{ opacity: 1 }}
                        ></Box>
                        <Box className="team-social-block">
                          <Link
                            href="hppts://www.facebook.com/"
                            className="team-social-link w-inline-block"
                          >
                            <Image src={FaceBook} alt="Facebook Icon" />
                          </Link>
                          <Link
                            href="hppts://www.Twitter.com/"
                            className="team-social-link w-inline-block"
                          >
                            <Image src={Twitter} alt="Twitter Icon" />
                          </Link>
                          <Link
                            href="hppts://Instagram.com/"
                            className="team-social-link w-inline-block"
                          >
                            <Image src={Instagram} alt="Instagram Icon" />
                          </Link>
                          <Link
                            href="hppts://www.linkedin.com/"
                            className="team-social-link w-inline-block"
                          >
                            <Image src={Linkedin} alt="Linkedin Icon" />
                          </Link>
                        </Box>
                        <Link href="/" className="team-view-profile-button">
                          View Profile
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

export default Team;

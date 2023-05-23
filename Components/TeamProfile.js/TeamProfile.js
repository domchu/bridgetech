import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Man from "../../public/images/team-ceo.jpg";
import Facebook from "../../public/images/facebook-icon.png";
import twitter from "../../public/images/twitter-icon.png";
import instagram from "../../public/images/instagram-icon.png";
import linkedin from "../../public/images/skype-icon.png";

const TeamProfile = () => {
  return (
    <>
      <Box className="team-details-section wf-section">
        <Box className="section-gap-130">
          <Box className="container w-container">
            <Box className="team-details-block">
              <Box className="team-details-image-block">
                <Image
                  src={Man}
                  alt="A man wearing suite"
                  loading="lazy"
                  className="image-responsie team-large-image img"
                />
                <Box className="team-details-image-shadow"></Box>
                <Box className="team-details-social-block">
                  <Link
                    href="https://www.facebook.com/"
                    className="team-social-link w-inline-block"
                  >
                    <Image src={Facebook} alt="Facebook Icon" loading="lazy" />
                  </Link>
                  <Link
                    href="https://www.twitter.com/"
                    className="team-social-link w-inline-block"
                  >
                    <Image src={twitter} alt="twitter Icon" loading="lazy" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/"
                    className="team-social-link w-inline-block"
                  >
                    <Image
                      src={instagram}
                      alt="instagram Icon"
                      loading="lazy"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/"
                    className="team-social-link w-inline-block"
                  >
                    <Image src={linkedin} alt="linkedin Icon" loading="lazy" />
                  </Link>
                </Box>
              </Box>
              {/* CONTENTS SIDE OF THE TEAM */}
              <Box className="team-details-content-block">
                <Box className="team-details-greeting-text">Hi there!</Box>
                <Box className="team-details-name">
                  <Box>I am</Box>
                  <Box>Luther Mathuis</Box>
                </Box>
                <Box className="team-details-job-title">CEO, President</Box>
                <Box className="contact-info-title">Biography</Box>
                <Box className="team-biography-text w-richtext">
                  <p>
                    I am expert on <strong>bridgekode</strong> provide the best
                    quality It solution neque porro quisqu qui dolorem ipsum
                    quia golor sit amet, conse ctetur, adipisci velit, sed
                    eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat most of the a people want to lear IT related
                    solution is very great reason
                  </p>
                </Box>
                <Box className="contact-info-title">Achievement</Box>
                <Box className="achivement-text">Best Entrepreneur - 2020</Box>
                <Box className="team-contact-details-info">
                  <Box className="contact-info-title">Contact Information</Box>
                  <Box className="contact-info-small-title">Office Address</Box>
                  <Box className="contact-info-text">
                    Shop H4, First Floor, Wharfedale Building
                    <br />
                    Alaba Int'l Mkt, Ojo-Lagos State. Nigeria
                  </Box>
                  <Box className="contact-info-small-title">Phone Number</Box>
                  <Box className="contact-info-text">
                    +234 0703 427 8995 || +234 0811 099 8914
                  </Box>
                  <Box className="contact-info-small-title">Email Address</Box>
                  <Box className="contact-info-text">
                    info@bridgekodetech.com or bridgekodetech@gmail.com
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

export default TeamProfile;

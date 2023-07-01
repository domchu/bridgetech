import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Facebook from "../../public/images/facebook-icon.png";
import twitter from "../../public/images/twitter-icon.png";
import instagram from "../../public/images/instagram-icon.png";
import linkedin from "../../public/images/skype-icon.png";

const TeamProfile = ({
  name,
  title,
  achievement,
  biography,
  facebooklink,
  twitterlink,
  instagramlink,
  linkedinlink,
  image,
}) => {
  return (
    <>
      <Box className="team-details-section wf-section">
        <Box className="section-gap-130">
          <Box className="container w-container">
            <Box className="team-details-block">
              <Box className="team-details-image-block">
                <Image
                  src={image}
                  height={625}
                  width={100}
                  alt="Team Member Image"
                  loading="lazy"
                  className="image-responsie team-large-image img"
                />
                <Box className="team-details-image-shadow"></Box>
                <Box className="team-details-social-block">
                  <Link
                    href={facebooklink}
                    className="team-social-link w-inline-block"
                    target="_blank"
                  >
                    <Image src={Facebook} alt="Facebook Icon" loading="lazy" />
                  </Link>
                  <Link
                    href={twitterlink}
                    className="team-social-link w-inline-block"
                    target="_blank"
                  >
                    <Image src={twitter} alt="twitter Icon" loading="lazy" />
                  </Link>
                  <Link
                    href={instagramlink}
                    className="team-social-link w-inline-block"
                    target="_blank"
                  >
                    <Image
                      src={instagram}
                      alt="instagram Icon"
                      loading="lazy"
                    />
                  </Link>
                  <Link
                    href={linkedinlink}
                    className="team-social-link w-inline-block"
                    target="_blank"
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
                  <Box>{name}</Box>
                </Box>
                <Box className="team-details-job-title">{title}</Box>
                <Box className="contact-info-title">Biography</Box>
                <Box className="team-biography-text w-richtext">
                  <p>{biography}</p>
                </Box>
                <Box className="contact-info-title">Achievement</Box>
                <Box className="achivement-text">{achievement}</Box>
                <Box className="team-contact-details-info">
                  <Box className="contact-info-title">Contact Information</Box>
                  <Box className="contact-info-small-title">Office Address</Box>
                  <Box className="contact-info-text">
                    No.53, Aka Road, White House Bus Stop.
                    <br />
                    Okokomaiko, Ojo-Lagos State. Nigeria
                  </Box>
                  <Box className="contact-info-small-title">Phone Number</Box>
                  <Box className="contact-info-text">
                    +234 0703 427 8995 || +234 0811 099 8914
                  </Box>
                  <Box className="contact-info-small-title">Email Address</Box>
                  <Box className="contact-info-text">
                    info@bridgekodetech.com || bridgekodetech@gmail.com
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

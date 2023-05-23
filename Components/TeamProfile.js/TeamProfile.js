import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Man from "../../public/images/digital-head.jpg";
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
                <Image src={Man} alt="A man wearing suite" loading="lazy" />
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
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TeamProfile;

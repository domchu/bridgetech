import React from "react";
import TeamPeople from "./TeamData";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import FaceBook from "../../public/images/facebook-icon.png";
import Twitter from "../../public/images/twitter-icon.png";
import Linkedin from "../../public/images/skype-icon.png";
import Instagram from "../../public/images/instagram-icon.png";
import TeamCeo from "../../public/images/team-ceo.jpg";

const TeamCard = () => {
  return (
    <>
      {TeamPeople.map((team) => {
        const {
          image,
          name,
          job,
          facebookLink,
          linkedinLink,
          instagramLink,
          twitterLink,
          profile,
        } = team;
        return (
          <div>
            <Box className="team-item w-dyn-item" role="listiem">
              <Box className="team-single-item" data-w-id="">
                <Box className="team-image-block img">
                  <Image
                    src={image}
                    alt="Ochu Dominic"
                    loading="lazy"
                    width={320}
                    height={320}
                  />
                </Box>
                <Box className="team-content">
                  <Box className="team-inner-content">
                    <Box className="team-top-conent">
                      <Box className="team-name-title">{name}</Box>
                      <Box className="team-job-title">{job} </Box>
                    </Box>
                    <Box
                      className="team-separator"
                      style={{ opacity: 1 }}
                    ></Box>
                    <Box className="team-social-block">
                      <Link
                        href={facebookLink}
                        className="team-social-link w-inline-block"
                      >
                        <Image src={FaceBook} alt="Facebook Icon" />
                      </Link>
                      <Link
                        href={twitterLink}
                        className="team-social-link w-inline-block"
                      >
                        <Image src={Twitter} alt="Twitter Icon" />
                      </Link>
                      <Link
                        href={instagramLink}
                        className="team-social-link w-inline-block"
                      >
                        <Image src={Instagram} alt="Instagram Icon" />
                      </Link>
                      <Link
                        href={linkedinLink}
                        className="team-social-link w-inline-block"
                      >
                        <Image src={Linkedin} alt="Linkedin Icon" />
                      </Link>
                    </Box>
                    <Link href="/" className="team-view-profile-button">
                      {profile}
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </div>
        );
      })}
    </>
  );
};

export default TeamCard;

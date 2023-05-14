import React from "react";
import TeamPeople from "./TeamData";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import FaceBook from "../../public/images/facebook-icon.png";
import Twitter from "../../public/images/twitter-icon.png";
import Linkedin from "../../public/images/skype-icon.png";
import Instagram from "../../public/images/instagram-icon.png";

const TeamCard = () => {
  return (
    <>
      {TeamPeople.map((team) => {
        const {
          id,
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
          <div key={id}>
            <Box className="team-item w-dyn-item" role="listiem">
              <Box className="team-single-item" data-w-id="">
                <Box className="team-image-block img">
                  <Image
                    src={image}
                    alt="Team Members Images"
                    loading="lazy"
                    width={300}
                    height={300}
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
                        <Image
                          src={FaceBook}
                          alt="Facebook Icon"
                          className="team-icon"
                        />
                      </Link>
                      <Link
                        href={twitterLink}
                        className="team-social-link w-inline-block"
                      >
                        <Image
                          src={Twitter}
                          alt="Twitter Icon"
                          className="team-icon"
                        />
                      </Link>
                      <Link
                        href={instagramLink}
                        className="team-social-link w-inline-block"
                      >
                        <Image
                          src={Instagram}
                          alt="Instagram Icon"
                          className="team-icon"
                        />
                      </Link>
                      <Link
                        href={linkedinLink}
                        className="team-social-link w-inline-block"
                      >
                        <Image
                          src={Linkedin}
                          alt="Linkedin Icon"
                          className="team-icon"
                        />
                      </Link>
                    </Box>
                    <Link href={profile} className="team-view-profile-button">
                      View Profile
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

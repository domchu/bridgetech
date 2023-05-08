import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import TeamCard from "./TeamCard";

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
                <TeamCard />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Team;

import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

const TeamSingleHead = () => {
  return (
    <>
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                Team <span className="sub_heading_span">Profile</span>
              </h1>
              <p>
                The underlisted details of bridgekode team members, expert &
                knowledgeable in he/her field of practice.
              </p>
              <ul className="project-link">
                <li className="project-nav-items">
                  <Link href="/" className="project-nav-link">
                    Home
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li className="project-nav-items">
                  <Link href="/pages/team/" className="project-nav-link">
                    Team
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">Team Details</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TeamSingleHead;

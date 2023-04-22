import React from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";

const SubHeading = () => {
  return (
    <>
      <Box>
        <h1>
          Our <span className="sub_heading_span">Project</span>
        </h1>
        <p>
          Neque porro quisquam est, qui quia lorem some golor sit amet, are more
          consectetur sed
        </p>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <Box className="separator">/</Box>
          <li>
            <Box>Projects</Box>
          </li>
        </ul>
      </Box>
    </>
  );
};

export default SubHeading;

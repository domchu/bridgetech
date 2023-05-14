import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import ProjectCont from "./ProjectData";
import arrow from "../../public/images/arrow-long-icon.png";

const ProjectCard = () => {
  return (
    <>
      {ProjectCont.map((ProjectDetail) => {
        const { id, title, url, comments, image } = ProjectDetail;
        return (
          <Box key={id}>
            <Box className="project-item-wrapper">
              <Box className="project-collection">
                <Image
                  src={image}
                  alt="Digital marketing"
                  loading="lazy"
                  className="project__img"
                  width={300}
                  height={300}
                />
                <Box className="project__contents">
                  <Link href={url}>
                    <h3>{title}</h3>
                  </Link>
                  <p>{comments}</p>
                  <Link href={url}>
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
        );
      })}
    </>
  );
};

export default ProjectCard;

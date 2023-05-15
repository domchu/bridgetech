import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import ProjectCont from "./ProjectData";
import arrow from "../../public/images/arrow-long-icon.png";

const ProjectCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const FirstIndex = lastIndex - recordsPerPage;
  const records = ProjectCont.slice(FirstIndex, lastIndex);
  const nPage = Math.ceil(ProjectCont.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changeCPage = (id) => {
    currentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {records.map((ProjectDetail) => {
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

      {/* <Box className="pagination-container"> */}
      {/* <Box aria-label="Page navigation example" className="page-holder"> */}
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" onClick={prePage}>
            Prev
          </a>
        </li>
        {numbers.map((n, i) => {
          <li
            className={`page-item ${currentPage === n ? "active" : ""}`}
            key={i}
          >
            <a href="#" className="page-link" onClick={() => changeCPage(n)}>
              {n}
            </a>
          </li>;
        })}
        <li className="page-item">
          <a className="page-link" href="#" onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
      {/* </Box> */}
      {/* </Box> */}
    </>
  );
};

export default ProjectCard;

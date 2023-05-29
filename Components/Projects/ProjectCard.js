import React, { useMemo, useState } from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import ProjectCont from "./ProjectData";
import arrow from "../../public/images/arrow-long-icon.png";

const RECORDS_PER_PAGE = 6;
const ProjectCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = useMemo(
    () => currentPage * RECORDS_PER_PAGE,
    [currentPage]
  );
  const firstIndex = useMemo(() => lastIndex - RECORDS_PER_PAGE, [lastIndex]);
  const records = useMemo(
    () => ProjectCont.slice(firstIndex, lastIndex),
    [firstIndex, lastIndex]
  );
  const nPage = useMemo(
    () => Math.ceil(ProjectCont.length / RECORDS_PER_PAGE),
    []
  );
  const numbers = useMemo(
    () =>
      (() => {
        const arr = [];
        for (let i = ProjectCont.length / RECORDS_PER_PAGE; i > 0; i--) {
          arr.unshift(i);
        }

        return arr;
      })(),
    []
  ); // IFFE

  // PREVIOUS PAGE
  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  // CHANGE CURRENT PAGE
  const changeCPage = (id) => {
    setCurrentPage(id);
  };
  // NEXT PAGE
  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {records.map((ProjectDetail) => {
        const { id, title, url, comments, image, projectUrl } = ProjectDetail;
        return (
          <Box key={id}>
            <Box className="project-item-wrapper">
              <Box className="project-collection">
                <Image
                  src={image}
                  alt="People brainstorming"
                  loading="lazy"
                  className="project__img"
                  width={320}
                  height={320}
                />
                <Box className="project__contents">
                  <Link href={url}>
                    <h3>{title}</h3>
                  </Link>
                  <p>{comments}</p>
                  <Link href={projectUrl} target="_blank" rel="nofollow">
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

      <Box className="pagination-container">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link next_prev" onClick={prePage}>
              Prev
            </button>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "current" : ""}`}
              key={i}
            >
              <button className="page-link" onClick={() => changeCPage(n)}>
                {n}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button className="page-link next_prev" onClick={nextPage}>
              Next
            </button>
          </li>
        </ul>
      </Box>
    </>
  );
};

export default ProjectCard;

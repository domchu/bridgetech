import React, { useMemo, useState } from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import ProjectCont from "./ProjectData";
import arrow from "../../public/images/arrow-long-icon.png";

const RECORDS_PER_PAGE = 3;
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

  console.log(records);

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
          <button className="page-link" onClick={prePage}>
            Prev
          </button>
        </li>
        {numbers.map((n, i) => (
          <li
            className={`page-item ${currentPage === n ? "active" : ""}`}
            key={i}
          >
            <button className="page-link" onClick={() => changeCPage(n)}>
              {n}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button className="page-link" href="#" onClick={nextPage}>
            Next
          </button>
        </li>
      </ul>
      {/* </Box> */}
      {/* </Box> */}
    </>
  );
};

export default ProjectCard;

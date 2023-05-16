import React, { useMemo, useState } from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import DataServ from "./ServiceData";

const RECORDS_PER_PAGE = 6;
const ServiceCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = useMemo(
    () => currentPage * RECORDS_PER_PAGE,
    [currentPage]
  );
  const firstIndex = useMemo(() => lastIndex - RECORDS_PER_PAGE, [lastIndex]);
  const records = useMemo(
    () => DataServ.slice(firstIndex, lastIndex),
    [firstIndex, lastIndex]
  );
  const nPage = useMemo(
    () => Math.ceil(DataServ.length / RECORDS_PER_PAGE),
    []
  );
  const numbers = useMemo(
    () =>
      (() => {
        const arr = [];
        for (let i = DataServ.length / RECORDS_PER_PAGE; i > 0; i--) {
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
      {records.map((serviceDetails) => {
        const { title, urlPath, image, text, id } = serviceDetails;
        return (
          <div>
            <Box className="section-collection-item w-dyn-item" role="listitem">
              <Box className="service-single-item-box" key={id}>
                <Link
                  href={urlPath}
                  className="service-thumbnail-image-block w-inline-block"
                >
                  <Image
                    src={image}
                    alt="Mobile App"
                    loading="lazy"
                    className="image-responsive img"
                    width={300}
                    height={300}
                  />
                </Link>
                <Box className="service-content">
                  <Link href={urlPath} className="service-title-link">
                    {title}
                  </Link>
                  <Box className="section-text">{text}</Box>
                </Box>
              </Box>
            </Box>
          </div>
        );
      })}

      {/* PAGINATION COMPONENETS */}
      <Box className="pagination-container">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link next_prev" onClick={prePage}>
              Prev
            </button>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item${currentPage === n ? "active" : ""}`}
              key={i}
            >
              <button className="page-link" onClick={() => changeCPage(n)}>
                {n}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button className="page-link next_prev" href="#" onClick={nextPage}>
              Next
            </button>
          </li>
        </ul>
      </Box>
    </>
  );
};

export default ServiceCard;

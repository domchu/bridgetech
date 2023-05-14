import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import DataServ from "./ServiceData";

const ServiceCard = () => {
  return (
    <>
      {DataServ.map((serviceDetails) => {
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
    </>
  );
};

export default ServiceCard;

import React from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";

const Map = () => {
  return (
    <>
      <Box className="container w-container">
        <Box>
          <Box className="contact-block"></Box>
          <Box className="contact-content-block">
            <Box className="section-block">
              <h3 className="section-title">Get in touch</h3>
              <Box className="section-text">
                I am expert on <strong>BridgeTech</strong> provide the best
                quality
                <Link href="/" target="_blank">
                  It solution
                </Link>
                neque porro quisqu qui dolorem ipsum quia golor sit amet, conse
                ctetur, adipisci velit, sed eligendi optio cumque nihil impedit
                quo minus id quod maxime placeat most of the a people want to
                lear IT related solution is very great reason
              </Box>
            </Box>
            <Box className="conact-details-info">
              <Box className="contact-info-title">Contact Info</Box>
              <Box className="contact-info-small-title">Address</Box>
              <Box className="contact-info-text">
                254, North City, Bulex Center, New York
              </Box>
              <Box className="contact-info-small-title">Phone</Box>
              <Box className="contact-info-text">
                09 (354) 587 874 or 10 (698) 852 741
              </Box>
              <Box className="contact-info-small-title">Email</Box>
              <Box className="contact-info-text">
                info@example.com or info@example.com
              </Box>
            </Box>
            <Link href="https://www.google.com" target="_blank">
              WWW.example.com
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Map;

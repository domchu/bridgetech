import React from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";
import Form from "./Form";

const Map = () => {
  return (
    <>
      <Box className="section-gap-130">
        <Box className="container-contact w-container">
          {/* Map section */}
          <Box className="contact-block">
            <Box className="contact-map-block">
              <Box className="map-container google-map w-widget">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.483702718627!2d3.191743074615611!3d6.460235093531328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8787ec5b147b%3A0x2b25e29d148eafdb!2sWharfedale%20house!5e0!3m2!1sen!2sng!4v1685408930375!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  className="map"
                  loading="lazy"
                ></iframe>
              </Box>
            </Box>
            {/* contact section */}
            <Box className="contact-content-block">
              <Box className="section-block">
                <h3 className="section-title">Get in touch</h3>
                <Box className="section-text">
                  To get in touch with <strong>Bridgekode</strong>, You can
                  reach out to Bridgekode via phone or email to inquire about
                  their services, request a consultation, or ask any questions
                  you may have. Additionally, you can visit their website to
                  explore more information about their offerings, browse their
                  portfolio, and find additional contact details or a contact
                  form.
                  <br />
                  It's recommended to directly contact
                  <strong>Bridgekode</strong> using the provided contact
                  information for the most accurate and up-to-date
                  communication.
                </Box>
              </Box>
              <Box className="conact-details-info">
                <Box className="contact-info-title">Contact Information</Box>
                <Box className="contact-info-small-title">Office Address</Box>
                <Box className="contact-info-text">
                  Shop H4, First Floor, Wharfedale Building
                  <br />
                  Alaba Int'l Mkt, Ojo-Lagos State. Nigeria
                </Box>
                <Box className="contact-info-small-title">Phone Numbers</Box>
                <Box className="contact-info-text">
                  +234 0703 427 8995 || +234 0811 099 8914
                </Box>
                <Box className="contact-info-small-title">Email Address</Box>
                <Box className="contact-info-text">
                  info@bridgekodetech.com || bridgekodetech@gmail.com
                </Box>
              </Box>
              <Link
                href="https://www.google.com"
                className="contact-site-url"
                target="_blank"
              >
                www.example.com
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* form section */}
      <Form />
    </>
  );
};

export default Map;

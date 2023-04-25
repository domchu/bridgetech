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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7928.753336234345!2d3.1731800210065506!3d6.4738819333213105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b819c6fba15b1%3A0xacc3dbc2fa9d737a!2sKeyonavilleschool!5e0!3m2!1sen!2sng!4v1675896538770!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  className="map"
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Box>

            {/* contact section */}
            <Box className="contact-content-block">
              <Box className="section-block">
                <h3 className="section-title">Get in touch</h3>
                <Box className="section-text">
                  I am expert on <strong>BridgeTech</strong> provide the best
                  quality
                  <Link href="/" target="_blank">
                    IT solution
                  </Link>
                  neque porro quisqu qui dolorem ipsum quia golor sit amet,
                  conse ctetur, adipisci velit, sed eligendi optio cumque nihil
                  impedit quo minus id quod maxime placeat most of the a people
                  want to lear IT related solution is very great reason
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

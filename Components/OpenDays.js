import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

const OpenDays = () => {
  const [getDays, setGetDays] = useState();

  const activateDays = () => {
    let today = new Date();
    let currentDay = today.getDay();
    setGetDays(currentDay);
  };

  useEffect(() => {
    activateDays();
  }, []);


  return (
    <>
      <Box className="open__day__container">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box
            width={{ base: "100%", sm: "70%", md: "70%", lg: "40%" }}
            textAlign="left"
            mb="2rem"
            // fontFamily=" Rajdhani, sans-serif"
          >
            <Box
              display="flex"
              justifyContent="space-around"
              fontWeight="bold"
              fontSize={{
                base: "1.5rem",
                sm: "1.5rem",
                md: "2rem",
                lg: "2rem",
              }}
              color="#023e8a"
              textAlign="left"
              mb=".5rem"
              fontFamily=" Rajdhani, sans-serif"
              textTransform="uppercase"
            >
              <span>Open Days</span>
              <span>Open Hours</span>
            </Box>

            <li
              className={getDays == 1 ? "open" : ""}
              style={{
                display: "flex",
                justifyContent: "space-around",
                textAlign: "left",
                fontSize: "1.2rem",
              }}
            >
              <span>Mondays</span>
              <span>9:00 AM - 5:00 PM</span>
            </li>
            <br />
            <li
              className={getDays == 2 ? "open" : ""}
              style={{
                display: "flex",
                justifyContent: "space-around",
                fontSize: "1.2rem",
              }}
            >
              <span>Tuesdays</span>
              <span>9:00 AM - 5:00 PM</span>
            </li>
            <br />
            <li
              className={getDays == 3 ? "open" : ""}
              style={{
                display: "flex",
                justifyContent: "space-around",
                fontSize: "1.2rem",
              }}
            >
              <span>Wednesdays</span>
              <span>9:00 AM - 5:00 PM</span>
            </li>
            <br />
            <li
              className={getDays == 4 ? "open" : ""}
              style={{
                display: "flex",
                justifyContent: "space-around",
                fontSize: "1.2rem",
              }}
            >
              <span>Thursdays</span>
              <span>9:00 AM - 5:00 PM</span>
            </li>
            <br />
            <li
              className={getDays == 5 ? "open" : ""}
              style={{
                display: "flex",
                justifyContent: "space-around",
                fontSize: "1.2rem",
              }}
            >
              <span>Fridays</span>
              <span>9:00 AM - 5:00 PM</span>
            </li>
            <br />
            <li
              className={getDays == 6 ? "open" : ""}
              style={{
                display: "flex",
                justifyContent: "space-around",
                fontSize: "1.2rem",
              }}
            >
              <span>Saturdays</span>
              <span>10:00 AM - 4:00 PM</span>
            </li>
            <br />
            <li
              className={getDays == 0 ? "open" : ""}
              style={{
                display: "flex",
                justifyContent: "space-around",
                fontSize: "1.2rem",
              }}
            >
              <span>Sundays</span>
              <span>
                Closed -
                <Link
                  href="tel:+234 7034278995"
                  className="primary-button open_day_link"
                  style={{ ml: "10px" }}
                >
                  Call Us
                </Link>
              </span>
            </li>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default OpenDays;
import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

const OpenDays = () => {
  const [getDays, setGetDays] = useState();

  const activateDays = () => {
    let today = new Date();
    let currentDay = today.getDay();
    setGetDays(currentDay);
    // console.log(currentDay)
    console.log(today);
  };

  useEffect(() => {
    activateDays;
  }, []);
  return (
    <>
      <Box>
        <Box>
          <Box width="25%" textAlign="left" mb="2rem">
            <Box
              display="flex"
              justifyContent="space-around"
              fontWeight="bold"
              fontSize="1.5rem"
              color="#023e8a"
              textAlign="left"
            >
              <span>Open Days</span>
              <span>Open Hours</span>
            </Box>
            <br />
            <Box
              className={getDays == 1 ? "active" : "days"}
              style={{
                display: "flex",
                justifyContent: "space-around",
                textAlign: "left",
                fontSize: "1.2rem",
              }}
            >
              <span>Mondays</span>
              <span>9:00 AM - 5:00 PM</span>
            </Box>
            <br />
            <li
              className={getDays == 2 ? "active" : "days"}
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
              className={getDays == 3 ? "active" : "days"}
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
              className={getDays == 4 ? "active" : "days"}
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
              className={getDays == 5 ? "active" : "days"}
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
              //   className={getDays == 6 ? "open" : "days"}
              style={{
                display: "flex",
                justifyContent: "space-around",
                fontSize: "1.2rem",
              }}
            >
              <span>Saturdays</span>
              <span>
                Closed
                <Link href="tel:+234 7034278995" className="primary-button">
                  Call Us
                </Link>
              </span>
            </li>
            <br />
            <li
              //   className={getDays == 0 ? "active" : "days"}
              style={{
                display: "flex",
                justifyContent: "space-around",
                fontSize: "1.2rem",
              }}
            >
              <span>Sundays</span>
              <span>
                Closed
                <a href="tel:+234 7034278995" className="primary-button">
                  Call Us
                </a>
              </span>
            </li>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default OpenDays;
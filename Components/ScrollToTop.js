import React, { useEffect, useState } from "react";
import { Box, transition } from "@chakra-ui/react";
import { FaChevronUp } from "react-icons/fa";

const Scroll = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  const handleClick = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth", transition: "2s" });
  };

  return (
    <Box>
      {show && (
        <Box onClick={handleClick} className="back-to-top">
          <FaChevronUp />
        </Box>
      )}
    </Box>
  );
};

export default Scroll;
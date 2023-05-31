import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = (ShowBelow) => {
  const [show, setShow] = useState(ShowBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > ShowBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (ShowBelow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  const handleClick = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {show && (
        <Box className="scroll-back-container" onClick={handleClick}>
          <FaChevronUp />
          <h1>Back to top</h1>
        </Box>
      )}
    </>
  );
};

export default ScrollToTop;

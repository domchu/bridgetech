import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, UseAnimation } from "framer-motion";

const Reveal = ({ children }) => {
  return (
    <>
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};
export default Reveal;

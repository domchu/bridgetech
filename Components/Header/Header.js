import React, { useState, useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { links, social } from "../Navbar/Navdata";
import outline from "../../public/images/outline.png";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <>
      <nav>
        <Box className="nav-center">
          {/* the logo section */}
          <Box className="nav-header">
            <Image src={outline} className="brand-logo" alt="brand Logo" />
            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </Box>
          {/* the navbar section */}
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <Link href={url} passhref="true">
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* the social media section */}
          <Box>
            <ul className="social-icons">
              {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon;
                return (
                  <li key={id}>
                    <Link href={url} passhref="true">
                      {icon}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Box>
        </Box>
      </nav>
    </>
  );
};

export default Navbar;

{
  /* <Link
href='/about'
className={currentRoute === '/about' ? styles.active : styles.nonActive}
>
About
</Link> */
}

/* Specific styles for non-active links */
// .nonActive {
//   color: white;
// }

/* Specific styles for active links */
// .active {
//   color: black;
//   background: orange;
// }

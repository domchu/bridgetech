import React, { useState, useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import action from "../../public/images/action.png";

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
            <Link href="/">
              <Image src={action} className="brand-logo" alt="brand Logo" />
            </Link>
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
              <li>
                <Link href="/" className="nav-link" passhref="true">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pages" className="nav-link" passhref="true">
                  Pages
                </Link>
              </li>
              <li>
                <Link href="/services" className="nav-link" passhref="true">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="nav-link" passhref="true">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="nav-link" passhref="true">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contactus" className="nav-link" passhref="true">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* the Quotes section */}
          <Box className="social-icons">
            <li className="quote-primary small">
              <Link href="/pages/quotes" passhref="true">
                Get a quote
              </Link>
            </li>
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

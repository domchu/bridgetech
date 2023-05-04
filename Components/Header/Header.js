import React, { useState, useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
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

  // active pages route
  const router = useRouter();
  const currentRoute = router.pathname;
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
                <Link
                  href="/"
                  id="nav-link"
                  className={currentRoute == "/" ? "active" : ""}
                  passhref="true"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pages" id="nav-link" passhref="true">
                  Pages
                </Link>
              </li>
              <li>
                <Link
                  href="/services/service-home"
                  id="nav-link"
                  className={
                    currentRoute == "/services/service-home" ? "active" : ""
                  }
                  passhref="true"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  id="nav-link"
                  className={currentRoute == "/projects" ? "active" : ""}
                  passhref="true"
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  id="nav-link"
                  className={currentRoute == "/blog" ? "active" : ""}
                  passhref="true"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  id="nav-link"
                  className={currentRoute == "/contactus" ? "active" : ""}
                  passhref="true"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* the Quotes section */}
          <Box className="quotes-container">
            <li className="quote-primary small">
              <Link
                href="/pages/quotes"
                className={currentRoute == "/pages/quotes" ? "active" : ""}
                passhref="true"
              >
                Get a Quote
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

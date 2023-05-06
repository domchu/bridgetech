// import React, { useState, useRef, useEffect } from "react";
import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
// import { FaBars } from "react-icons/fa";
import Brand from "../../public/images/brandlogo-blue.png";
import Dropdown from "../../public/images/arrow-down.svg";

const Navbar = () => {
  // active pages route
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <nav>
        <Box className=" header-navbar-block">
          {/* the logo section */}
          <Box className=" logo-block">
            <Link href="/">
              <Image src={Brand} className="brand-logo" alt="brand Logo" />
            </Link>
          </Box>
          {/* the navbar section */}
          <Box className="header-menu-wrapper">
            <div className="nav-menu w-nav-menu">
              <ul className="links-container-nav">
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
                  <Box
                    className="dropdown w-dropdown"
                    data_hover="fales"
                    data-delay="0"
                    style={{ zIndex: "901" }}
                  >
                    <Box
                      id="w-dropdown-toggle-0"
                      className="dropdown-toggle nav-link w-dropdown-toggle w--open"
                      aria-controls="w-dropdown-list-0"
                      aria-haspopup="menu"
                      aria-expanded="true"
                      role="button"
                      tabIndex={0}
                    >
                      <Box id="nav-link">Pages</Box>
                      <img
                        src={Dropdown}
                        alt="Arrow Down Icon"
                        loading="lazy"
                      />
                    </Box>
                    <Box
                      id="w-dropdown-toggle-0"
                      className="nav-dropdown-list w-dropdown-list w--open"
                      aria-labelledby="w-dropdown-toggle-0"
                    >
                      <Link
                      
                        href="/pages/aboutus"
                        id="nav-dropdown-link w-nav-link"
                        passhref="true"
                        className={currentRoute == "/" ? "active" : ""}
                        tabIndex={0}
                      >
                        About Us
                      </Link>
                      <Link
                        href="/pages/team"
                        id="nav-dropdown-link w-nav-link"
                        passhref="true"
                        className={
                          currentRoute == "/pages/team" ? "active" : ""
                        }
                        tabIndex={0}
                      >
                        Team
                      </Link>
                      <Link
                        href="/access/signin"
                        id="nav-dropdown-link w-nav-link"
                        passhref="true"
                        className={
                          currentRoute == "/access/signin" ? "active" : ""
                        }
                        tabIndex={0}
                      >
                        Signup
                      </Link>
                      <Link
                        href="/access/login"
                        id="nav-dropdown-link w-nav-link"
                        passhref="true"
                        className={
                          currentRoute == "/access/login" ? "active" : ""
                        }
                        tabIndex={0}
                      >
                        Login
                      </Link>
                      <Link
                        href="/pages/getquotes"
                        id="nav-dropdown-link w-nav-link"
                        passhref="true"
                        className={
                          currentRoute == "/pages/getquotes" ? "active" : ""
                        }
                        tabIndex={0}
                      >
                        Get A Quote
                      </Link>
                      <Link
                        href="/pages/faq"
                        id="nav-dropdown-link w-nav-link"
                        passhref="true"
                        className={currentRoute == "/pages/faq" ? "active" : ""}
                        tabIndex={0}
                      >
                        Faq
                      </Link>
                    </Box>
                  </Box>
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
            <Box className="header-event-button-group">
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

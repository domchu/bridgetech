import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import Brand from "../../public/images/bridgekode-blue.png";
import Dropdown from "../../public/images/arrow-down.svg";
import MobileView from "../Mobile/MobileView";

const Navbar = () => {
  // ACTIVE PAGES LINK
  const router = useRouter();
  const currentRoute = router.pathname;

  // TOGGLE PAGE AND DROPDOWN ICON
  const [toggle, setToggle] = useState(false);
  const [mobile, setMobile] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleMobileView = () => {
    setMobile(!mobile);
  };
  return (
    <>
      <nav>
        <Box className=" header-navbar-block">
          {/* THE BRAND LOGO SECTION */}
          <Box className=" logo-block">
            <Link href="/">
              <Image src={Brand} className="brand-logo" alt="brand Logo" />
            </Link>
          </Box>
          {/* THE NAVBAR SECTION */}
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
                <Box>
                  <Box
                    className="dropdown w-dropdown"
                    data_hover="false"
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
                      onClick={handleClick}
                    >
                      <Box id="nav-link">Pages</Box>
                      <Image
                        src={Dropdown}
                        alt="Arrow Down Icon"
                        loading="lazy"
                      />
                    </Box>
                    {toggle ? (
                      <Box
                        id="w-dropdown-toggle-0"
                        className="nav-dropdown-list w-dropdown-list w--open"
                        aria-labelledby="w-dropdown-toggle-0"
                      >
                        <li className="w-nav-link nav-dropdown-link">
                          <Link
                            href="/aboutus"
                            id="nav-dropdown-link "
                            passhref="true"
                            className={
                              currentRoute == "/aboutus" ? "active" : ""
                            }
                            tabIndex={0}
                          >
                            About Us
                          </Link>
                        </li>
                        <li className="w-nav-link nav-dropdown-link">
                          <Link
                            href="/team"
                            id="nav-dropdown-link"
                            passhref="true"
                            className={currentRoute == "/team" ? "active" : ""}
                            tabIndex={0}
                          >
                            Team
                          </Link>
                        </li>
                        <li className="w-nav-link nav-dropdown-link">
                          <Link
                            href="/form"
                            id="nav-dropdown-link "
                            passhref="true"
                            className={currentRoute == "/form" ? "active" : ""}
                            tabIndex={0}
                          >
                            Register
                          </Link>
                        </li>
                        <li className="w-nav-link nav-dropdown-link">
                          <Link
                            href="/login"
                            id="nav-dropdown-link "
                            passhref="true"
                            className={currentRoute == "/login" ? "active" : ""}
                            tabIndex={0}
                          >
                            Login
                          </Link>
                        </li>
                        <li className="w-nav-link nav-dropdown-link">
                          <Link
                            href="/courses"
                            id="nav-dropdown-link "
                            passhref="true"
                            className={
                              currentRoute == "/courses" ? "active" : ""
                            }
                            tabIndex={0}
                          >
                            Courses
                          </Link>
                        </li>
                        <li className="w-nav-link nav-dropdown-link">
                          <Link
                            href="/faq"
                            id="nav-dropdown-link "
                            passhref="true"
                            className={currentRoute == "/faq" ? "active" : ""}
                            tabIndex={0}
                          >
                            Faq
                          </Link>
                        </li>
                        <li className="w-nav-link nav-dropdown-link">
                          <Link
                            href="/services/web-design-training"
                            id="nav-dropdown-link "
                            passhref="true"
                            className={
                              currentRoute == "/services/web-design-training"
                                ? "active"
                                : ""
                            }
                            tabIndex={0}
                          >
                            Website Training
                          </Link>
                        </li>
                        <li className="w-nav-link nav-dropdown-link">
                          <Link
                            href="/getquote"
                            id="nav-dropdown-link "
                            passhref="true"
                            className={
                              currentRoute == "/getquote" ? "active" : ""
                            }
                            tabIndex={0}
                          >
                            Get A Quote
                          </Link>
                        </li>
                      </Box>
                    ) : (
                      <></>
                    )}
                  </Box>
                </Box>
                <li>
                  <Link
                    href="/services"
                    id="nav-link"
                    className={currentRoute == "/services" ? "active" : ""}
                    passhref="true"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project"
                    id="nav-link"
                    className={currentRoute == "/project" ? "active" : ""}
                    passhref="true"
                  >
                    Project
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.blog.bridgekode.com"
                    target="_blank"
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

            {/* THE QUOTES SECTION AT THE NAVBAR */}
            <Box className="header-event-button-group ">
              <Box className="">
                <FaBars
                  className="menu-button w-nav-button"
                  onClick={handleMobileView}
                />
              </Box>
              {/* MOBILE VIEW OF THE BRIDGEKODE */}
              <Box className={mobile == false ? "mobile" : "mobile on"}>
                <MobileView />
              </Box>
              <Box>
                <li className="primary-button small header-event-button">
                  <Link
                    href="/getquote"
                    className={currentRoute == "/getquote" ? "active" : ""}
                    passhref="true"
                  >
                    Get a Quote
                  </Link>
                </li>
              </Box>
            </Box>
          </Box>
        </Box>
      </nav>
    </>
  );
};

export default Navbar;


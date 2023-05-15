import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Brand from "../../public/images/brandlogo-blue.png";
import Dropdown from "../../public/images/arrow-down.svg";

const MobileView = () => {
  // ACTIVE PAGES LINK
  const router = useRouter();
  const currentRoute = router.pathname;

  // TOGGLE PAGE AND DROPDOWN ICON
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <nav className="mobile-container">
        <Box className="mobile-position">
          <Box className="">
            {/* THE BRAND LOGO SECTION */}
            <Box className=" logo-block">
              <Link href="/">
                <Image src={Brand} className="brand-logo" alt="brand Logo" />
              </Link>
            </Box>
            {/* THE NAVBAR SECTION */}
            <Box className="header-menu-wrapper">
              <div className="mobile-view">
                <ul className="mobile-link">
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
                        onClick={handleClick}
                      >
                        <Box id="nav-link" className="pages">
                          Pages
                        </Box>
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
                              href="/pages/aboutus"
                              id="nav-dropdown-link "
                              passhref="true"
                              className={
                                currentRoute == "/pages/aboutus" ? "active" : ""
                              }
                              tabIndex={0}
                            >
                              About Us
                            </Link>
                          </li>
                          <li className="w-nav-link nav-dropdown-link">
                            <Link
                              href="/pages/team"
                              id="nav-dropdown-link"
                              passhref="true"
                              className={
                                currentRoute == "/pages/team" ? "active" : ""
                              }
                              tabIndex={0}
                            >
                              Team
                            </Link>
                          </li>
                          <li className="w-nav-link nav-dropdown-link">
                            <Link
                              href="/access/signin"
                              id="nav-dropdown-link "
                              passhref="true"
                              className={
                                currentRoute == "/access/signin" ? "active" : ""
                              }
                              tabIndex={0}
                            >
                              Signup
                            </Link>
                          </li>
                          <li className="w-nav-link nav-dropdown-link">
                            <Link
                              href="/access/login"
                              id="nav-dropdown-link "
                              passhref="true"
                              className={
                                currentRoute == "/access/login" ? "active" : ""
                              }
                              tabIndex={0}
                            >
                              Login
                            </Link>
                          </li>
                          <li className="w-nav-link nav-dropdown-link">
                            <Link
                              href="/pages/faq"
                              id="nav-dropdown-link "
                              passhref="true"
                              className={
                                currentRoute == "/pages/faq" ? "active" : ""
                              }
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
                              href="/pages/getquotes"
                              id="nav-dropdown-link "
                              passhref="true"
                              className={
                                currentRoute == "/pages/getquotes"
                                  ? "active"
                                  : ""
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
                      // legacyBehavior
                      href="https://test.com"
                      target="_blank"
                      id="nav-link"
                      className={currentRoute == "/blog" ? "active" : ""}
                      passhref="true"
                    >
                      Blog
                      {/* <a target="_blank"> Blog</a> */}
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
            </Box>
          </Box>
        </Box>
      </nav>
    </>
  );
};

export default MobileView;

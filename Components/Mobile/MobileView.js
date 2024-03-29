import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Brand from "../../public/images/bridgekode-blue.png";
import Dropdown from "../../public/images/arrow-down.svg";
import { FaTimes } from "react-icons/fa";

const MobileView = () => {
  // ACTIVE PAGES ITS ROUTE LINK
  const router = useRouter();
  const currentRoute = router.pathname;

  // TOGGLE PAGE AND DROPDOWN ICON
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleCloseMobile = () => {};
  return (
    <>
      <nav className="mobile-container">
        <Box>
          <FaTimes className="closed-icons" onClick={handleCloseMobile} />
        </Box>
        <Box className="mobile-position">
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
          </Box>
        </Box>
      </nav>
    </>
  );
};

export default MobileView;

import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import SignupImage from "../../public/images/signup-image.svg";

const Signup = () => {
  return (
    <>
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                Signup <span className="sub_heading_span">Page</span>
              </h1>
              <p>
                Neque porro quisquam est, qui quia lorem some golor sit amet,
                are more consectetur sed
              </p>
              <ul className="project-link">
                <li className="project-nav-items">
                  <Link href="/" className="project-nav-link">
                    Home
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">Signup</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* SIGNUP FORM */}
      <Box className="login-section wf-section">
        <Box className="section-gap-130">
          <Box className="container w-container">
            <Box className="login-block">
              <Box className="login-form-area" id="w-node-order">
                <Box className="section-block">
                  <h2 className="section-title max-width-442">
                    Signup to
                    <span className="section-title-inner-style">
                      Bridgetech
                    </span>
                  </h2>
                  <Box className="section-text">
                    Neque porro quisquam est, qui dolorem ipsum quia golor sit
                    amet, conse ctetur, adipisci velit, sed eligendi optio
                    cumque nihil impedit quo minus id quod maxime
                  </Box>
                </Box>
                <Box className="section-form-block w-form">
                  <form
                    action=""
                    id="wf-form-signup-form"
                    className="signup-form"
                    data-name="Signup Form"
                    method="post"
                    name="wf-form-Signup-form"
                    aria-label="Signup Form"
                  >
                    <input
                      type="Text"
                      className="default-input-field w-input"
                      maxLength="256"
                      name="user-name"
                      id="signup-Username"
                      data-name="User Name"
                      placeholder="Enter Name*"
                      required={true}
                    />
                    <input
                      type="email"
                      className="default-input-field w-input"
                      maxLength="256"
                      name="email"
                      id="Login Email"
                      data-name="Email"
                      placeholder="Enter Email*"
                      required={true}
                    />
                    <input
                      type="password"
                      className="default-input-field w-input"
                      maxLength="256"
                      name="Password"
                      id="Login Password"
                      data-name="Password"
                      placeholder="Enter Password*"
                      required={true}
                    />
                    <input
                      type="password"
                      className="default-input-field w-input"
                      maxLength="256"
                      name="Password"
                      id="signup-confirm-password"
                      data-name="Password"
                      placeholder="Enter Your Password*"
                      required={true}
                    />
                    <input
                      type="submit"
                      value="Sign up"
                      className="primary-button w-button"
                      data-wait="Please Wait"
                    />
                  </form>
                </Box>
              </Box>
              <Box className="login-image-box">
                <Image
                  src={SignupImage}
                  alt="Login Image"
                  className="image-respomsive img"
                  loading="lazy"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Signup;

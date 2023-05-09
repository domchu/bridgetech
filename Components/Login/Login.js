import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                Login <span className="sub_heading_span">Page</span>
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
                  <Box className="project-link-text">Login</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* LOGIN FORM */}
      <Box className="login-section wf-section">
        <Box className="section-gap-130">
          <Box className="container w-container">
            <Box className="login-block">
              <Box className="login-form-area">
                <Box className="section-block">
                  <h2 className="section-title max-width-442">
                    Login to
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
                    id="wf-form-login-form"
                    className="login-form"
                    data-name="Login Form"
                    method="post"
                    name="wf-form-login-form"
                    aria-label="Login Form"
                  >
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
                      type="submit"
                      value="Login"
                      className="primary-button w-button"
                      data-wait="Please Wait"
                    />
                  </form>
                </Box>
              </Box>
              <Box className="login-image-box"></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;

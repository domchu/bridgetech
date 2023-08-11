import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "emailjs-com";
import SignupImage from "../../public/images/signup-image.svg";

const Register = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  // HANDLE THE SUBMIT FORM FUNCTION
  const handleSendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bk8yeji",
        "template_i85dg7c",
        e.target,
        "96iqhJ7BekdwKq5HK"
      )
      .then((result) => {
        setMessage(result.message);
        setError("");
      })
      .catch((error) => {
        setMessage("");
        setError(error, "An error occurred while sending email.");
      });

    // CLEAR THE FORM AFTER SUBMITTING.
    e.target.reset();
  };
  return (
    <>
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                Register <span className="sub_heading_span">Page</span>
              </h1>
              <p>
                Register to our wide variaties of IT skills most especially
                coding and developing software.
              </p>
              <ul className="project-link">
                <li className="project-nav-items">
                  <Link href="/" className="project-nav-link">
                    Home
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">Register</Box>
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
              {/* TEXT BLOCK */}
              <Box className="login-form-area" id="w-node-order">
                <Box className="section-block">
                  <h3 className="section-title max-width-442">
                    Register to
                    <span className="section-title-inner-style">
                      Bridgetech
                    </span>
                  </h3>
                  <Box className="section-text">
                    "There is no one who loves pain itself, who seeks after it
                    and wants to have it, simply because it is pain, but because
                    occasionally circumstances occur in which toil and pain can
                    procure him some great pleasure."
                  </Box>
                </Box>
                <Box className="login-image-box">
                  <Image
                    src={SignupImage}
                    alt="Login Image"
                    className="image-respomsve img"
                    loading="lazy"
                  />
                </Box>
              </Box>
              {/* IMAGE PART */}
              <Box className="section-form-block w-form">
                <form
                  action="value"
                  id="wf-form-signup-form"
                  className="signup-form"
                  data-name="Signup Form"
                  method="post"
                  name="wf-form-Signup-form"
                  aria-label="Signup Form"
                  onSubmit={handleSendMail}
                >
                  <input
                    type="Text"
                    className="default-input-field w-input"
                    maxLength="256"
                    name="user_name"
                    id="signup-Username"
                    data-name="User Name"
                    placeholder="Full Name*"
                    required={true}
                  />

                  <input
                    type="number"
                    className="default-input-field w-input"
                    maxLength="256"
                    name="user_number"
                    id="signup-Username"
                    data-name="User Number"
                    placeholder="Enter Number*"
                    required={true}
                  />
                  <input
                    type="email"
                    className="default-input-field w-input"
                    maxLength="256"
                    name="user_email"
                    id="Login Email"
                    data-name="Email"
                    placeholder="Enter Email*"
                    required={true}
                  />
                  <input
                    type="text"
                    className="default-input-field w-input"
                    maxLength="256"
                    name="user_subject"
                    id="Login text"
                    data-name="Subject"
                    placeholder="Subject*"
                    required={true}
                  />
                  <textarea
                    name="message"
                    id="Write us Message"
                    cols="10"
                    rows="10"
                    placeholder="Write us Message*"
                    className="default-input-fild w-input message"
                  ></textarea>
                  <input
                    type="submit"
                    value="Submit"
                    className="primary-button w-button"
                    data-wait="Please Wait"
                  />
                </form>
                {message && <p style={{ color: "green" }}>{message}</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Register;

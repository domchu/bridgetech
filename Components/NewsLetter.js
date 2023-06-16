import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { sanitize } from "./sanitize";
// import Loading from "./Loading";

const NewsLetter = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ email });
    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize(formattedMessage) : null;
  };

  return (
    <>
      <Box className=" newsletter-section wf-section">
        <Box className="section-gap-bottom-130">
          <Box className="container w-container">
            <Box className="newsletter-grid">
              <Box className="newsletter-content">
                <h2 className="section-title">
                  Subscribe to our
                  <span className="section-title-inner-style">NewsLetter</span>
                </h2>
                <Box className="section-text">
                  Subscribe to our newsletter for get laset update of
                  <span className="newsletter-text-span">
                    news, offers, promotions, blog post
                  </span>
                  in which toil and pain can procure him some great pleasure.
                </Box>
              </Box>
              <Box className="newsletter-form">
                <Box className="newsletter-form-block w-form">
                  <form
                    action=""
                    id="email-form"
                    className="newsletter-form"
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                  >
                    <input
                      type="email"
                      name="email-form"
                      id="newsletter-email"
                      className="newsletter-input-form w-input"
                      data-name="Email Form"
                      maxLength="256"
                      placeholder="Enter your email here ..."
                      required={true}
                      onChange={(event) => setEmail(event?.target?.value ?? "")}
                      onKeyUp={(event) => handleInputKeyEvent(event)}
                    />
                    <input
                      type="submit"
                      value="Subscribe"
                      data-wait="please wait..."
                      className="primary-button newsletter-button w-button"
                      onClick={handleFormSubmit}
                    />
                  </form>
                </Box>
                <div className="min-h-42px">
                  {"sending" === status ? (
                    <Loading
                      showSpinner
                      message="Sending..."
                      contentColorClass="text-white"
                      hasVisibilityToggle={false}
                    />
                  ) : null}
                  {"error" === status || error ? (
                    <div
                      className="text-red-700 pt-2"
                      dangerouslySetInnerHTML={{
                        __html: error || getMessage(message),
                      }}
                    />
                  ) : null}
                  {"success" === status && "error" !== status && !error && (
                    <div
                      className="text-green-200 font-bold pt-2"
                      dangerouslySetInnerHTML={{ __html: sanitize(message) }}
                    />
                  )}
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewsLetter;

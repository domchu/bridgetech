import React, { useRef } from "react";
import { Box, Button } from "@chakra-ui/react";
import emailjs from "emailjs-com";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Input,
} from "@chakra-ui/react";

// FUNCTIONAL .........................
const Form = () => {
  const [message, setMessage] = useState(null);
  // HANDLE CONTACT FORM
  const handleContactForm = (e) => {
    e.preventDefault();
    setMessage(null);

    emailjs
      .sendForm(
        "service_bk8yeji",
        "template_i85dg7c",
        e.target,
        "96iqhJ7BekdwKq5HK"
      )
      .then((result) => {
        console.log("Successfully submitted, we will be in touch soon", result);
        // setMessage(result.message="Successfully submitted, we will be in touch soon");
      })
      .catch(
        (err) =>
          console.log("Failed! This might be due to error in networt", err)
        // setMessage(err.message="Failed! This might be due to error in networt");
      );

    // CLEAR THE FORM AFTER SUBMITTING.
    e.target.reset();
  };
  return (
    <>
      <Box className="contact-form-section wf-section">
        <Box className="section-gap-bottom-130">
          <Box className="container w-container">
            <Box className="contact-form-wrapper">
              <Box className="contact-upper-text">Leave a Reply</Box>
              <Box id="w-form contact-form-block">
                {/* NEW FORM   */}
                <form
                  ref={form}
                  onSubmit={handleContactForm}
                  action="value"
                  id="wf-form-contact-form"
                  className="contact-form"
                  name="wf-form-Contact-form"
                  method="post"
                  data-name="Contact form"
                >
                  <Box className="contact-input-group">
                    <FormControl isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        style={{ border: "1px solid #77b6d8", height: "52px" }}
                        type="text"
                        name="user_name"
                        id="Contact-Name"
                        data-name="Contact-Name"
                        maxLength="256"
                        className="default-input-field w-input"
                        placeholder="First name*"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Email Address</FormLabel>
                      <Input
                        style={{ border: "1px solid #77b6d8", height: "52px" }}
                        type="email"
                        name="user_email"
                        id="email"
                        data-name="email"
                        maxLength="256"
                        className="default-input-field w-input"
                        placeholder="Email Address*"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Phone Number</FormLabel>
                      <Input
                        style={{ border: "1px solid #77b6d8", height: "52px" }}
                        type="tel"
                        name="user_number"
                        id="phone"
                        data-name="phone"
                        maxLength="256"
                        placeholder="Phone Number*"
                        className="default-input-field w-input"
                      />
                    </FormControl>
                  </Box>
                  <FormControl isRequired>
                    <FormLabel>Write Message</FormLabel>
                    <Box className="contact-input-group">
                      <Textarea
                        name="message"
                        type="message"
                        maxLength="5000"
                        data-name="field"
                        style={{ border: "1px solid #77b6d8" }}
                        // isInvalid
                        placeholder="Write Message...*"
                        className="default-input-field contact-text-area w-node-_0433b0ec-3f89-81ce-9f2e-3b04ff192a61-84d9bf7c w-input"
                        id="Contact-Message"
                      />
                    </Box>
                  </FormControl>
                  <Button
                    colorScheme="facebook"
                    type="submit"
                    value="Send Now"
                    className="primary-button margin-top-50 w-button"
                  >
                    Send Now
                  </Button>
                </form>
                {/* END OF FORM */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Form;

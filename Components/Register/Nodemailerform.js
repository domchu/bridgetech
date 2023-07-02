import React, { useState } from "react";
import {
  Container,
  FormControl,
  Heading,
  FormLabel,
  FormErrorMessage,
  //   FormHelperText,
} from "@chakra-ui/react";

const initValues = {
  name: "",
  email: "",
  number: "",
  subject: "",
  message: "",
};

const initState = { values: initValues };

const Nodemailerform = () => {
  const [state, setState] = useState(initState);

  const { values } = state;

  //   HANDLE INPUT CHANGE
  const handleInputChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  return (
    <>
      <Container maxw={450} mt={12}>
        <Heading>Contact</Heading>
        <FormControl isRequired isInvalid={!values.name} mb={5}>
          <FormLabel>Full Name</FormLabel>
          <input
            style={{ border: "1px solid #000" }}
            placeholder="Full Name*"
            type="text"
            name="name"
            errorBorderColor="red:300"
            value={values.name}
            onChange={handleInputChange}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!values.email} mb={5}>
          <FormLabel>Email Address</FormLabel>
          <input
            style={{ border: "1px solid #000" }}
            placeholder="Email Address*"
            type="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!values.number} mb={5}>
          <FormLabel>Phone Number</FormLabel>
          <input
            style={{ border: "1px solid #000" }}
            placeholder="Phone Number*"
            type="number"
            name="number"
            value={values.number}
            onChange={handleInputChange}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!values.subject} mb={5}>
          <FormLabel>Subject</FormLabel>
          <input
            style={{ border: "1px solid #000" }}
            placeholder="Subject*"
            type="text"
            name="subject"
            value={values.subject}
            onChange={handleInputChange}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!values.message} mb={5}>
          <FormLabel>Message</FormLabel>
          <textarea
            style={{ border: "1px solid #000" }}
            placeholder="Write Us Message*"
            type="text"
            rows={5}
            name="message"
            value={values.message}
            onChange={handleInputChange}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
      </Container>
    </>
  );
};

export default Nodemailerform;

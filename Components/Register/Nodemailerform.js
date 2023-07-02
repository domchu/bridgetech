import React, { useState } from "react";
import {
  Container,
  FormControl,
  Heading,
  FormLabel,
  FormErrorMessage,
  Button,
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
  const [touched, setTouched] = useState({});
  const { values, isLoading } = state;

  // HANDLE ON SUBMIT BUTTON
  const handleOnSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
  };
  // VALIDATION ON TOUCH
  const onBlur = ({ target }) =>
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }));

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
        <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
          <FormLabel>Full Name</FormLabel>
          <input
            style={{ border: "1px solid #000", width: "480px" }}
            placeholder="Full Name*"
            type="text"
            name="name"
            errorBorderColor="red:300"
            value={values.name}
            onChange={handleInputChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.email && !values.email}
          mb={5}
        >
          <FormLabel>Email Address</FormLabel>
          <input
            style={{ border: "1px solid #000", width: "480px" }}
            placeholder="Email Address*"
            type="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.number && !values.number}
          mb={5}
        >
          <FormLabel>Phone Number</FormLabel>
          <input
            style={{ border: "1px solid #000", width: "480px" }}
            placeholder="Phone Number*"
            type="number"
            name="number"
            value={values.number}
            onChange={handleInputChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.subject && !values.subject}
          mb={5}
        >
          <FormLabel>Subject</FormLabel>
          <input
            style={{ border: "1px solid #000", width: "480px" }}
            placeholder="Subject*"
            type="text"
            name="subject"
            value={values.subject}
            onChange={handleInputChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.message && !values.message}
          mb={5}
        >
          <FormLabel>Message</FormLabel>
          <textarea
            style={{ border: "1px solid #000", width: "480px" }}
            placeholder="Write Us Message*"
            type="text"
            rows={5}
            name="message"
            value={values.message}
            onChange={handleInputChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <Button
          varaint="outline"
          colorScheme="blue"
          isLoading={isLoading}
          disabled={
            !values.name ||
            !values.email ||
            !values.number ||
            !values.subject ||
            !values.message
          }
          onClick={handleOnSubmit}
        >
          Submit
        </Button>
      </Container>
    </>
  );
};

export default Nodemailerform;

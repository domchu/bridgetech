import React, { useState } from "react";
import {
  Container,
  FormControl,
  Heading,
  FormLabel,

  //   FormErrorMessage,
  //   FormHelperText,
} from "@chakra-ui/react";

const initValues = {
  name: "",
  email: "",
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
        <FormControl isRequired>
          <FormLabel>Full Name</FormLabel>
          <input
            style={{ border: "1px solid #000" }}
            placeholder="Full Name*"
            type="text"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
        </FormControl>
      </Container>
    </>
  );
};

export default Nodemailerform;

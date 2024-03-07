// ContactMe.js

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMe = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values) => {
      submit(values)
        .then((response) => {
          if (response.type === "success") {
            onOpen({
              title: "Success!",
              description: `Thank you, ${values.firstName}! Your message has been submitted successfully.`,
              status: "success",
            });
            formik.resetForm();
          } else {
            onOpen({
              title: "Error!",
              description: `Oops! Something went wrong. Please try again later.`,
              status: "error",
            });
          }
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          onOpen({
            title: "Error!",
            description: `Oops! Something went wrong. Please try again later.`,
            status: "error",
          });
        });
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string(),
      comment: Yup.string().min(25, "Must be at least 25 characters").required("Required"),
    }),
  });

  return (
    <FullScreenSection isDarkBackground backgroundColor="#512DA8" py={16} spacing={8}>
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                backgroundColor="white"
                color="black"
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl  isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                color="black"
                  backgroundColor="white"
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.type && formik.errors.type}>
  <FormLabel htmlFor="type">Type of enquiry</FormLabel>
  <Select
    backgroundColor="white"
    color={formik.isOpen ? "black" : "black"} // Set color to black when the dropdown is open
    id="type"
    name="type"
    {...formik.getFieldProps("type")}
  >
    <option value="hireMe">Freelance project proposal</option>
    <option value="openSource">Open source consultancy session</option>
    <option value="other">Other</option>
  </Select>
  <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
</FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                backgroundColor="white"
                color="black"
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>

      </VStack>
        <Button style={{width: "75%", backgroundColor: "black"}} onClick={scrollToTop} colorScheme="purple" width="full" mt={8}>
  Back to Top
</Button>
    </FullScreenSection>
  );
};

export default ContactMe;

import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Yan 'Nazzim' Gonzalez!";
const bio1 = "A dedicated Front-end Developer";
const bio2 = "specialized in React.js";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#319499"
  >
    <VStack spacing={4}>
    <Avatar style={{border: "solid 3px white"}} size="2x" src={require("../images/avatar.jpg")} alt="Avatar" />
      <Heading as="h1" size="2xl" color="white" textAlign="center">
        {greeting}
      </Heading>
      <Heading as="h2" size="lg" color="white" textAlign="center">
        {bio1}
      </Heading>
      <Heading as="h2" size="lg" color="white" textAlign="center">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

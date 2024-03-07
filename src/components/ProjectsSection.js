import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Simple Stock",
    description:
      "Simple Stock is a static web-app designed for effortless product and client tracking. It boasts a straightforward, user-friendly interface for managing transactions seamlessly.",
    getImageSrc: () => require("../images/simplestock.png"),
    projectUrl: "https://github.com/YanNazzim/Simple_Stock", // Add the URL for each project
  },
  {
    title: "Study Buddy - Time Clock",
    description:
      "A time tracking app designed with a group of friends to help us manage our study schedule and work hours. Built for linux using Python.",
    getImageSrc: () => require("../images/timeclock.jpg"),
    projectUrl: "https://github.com/YanNazzim/Time_Clock",
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
    projectUrl: "https://github.com/YanNazzim/Calculator-App-React-Lab"
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            projectUrl={project.projectUrl}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

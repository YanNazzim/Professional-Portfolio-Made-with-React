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
    title: "React Calculator Web-App",
    description:
      "A React-based calculator app designed for quick and efficient calculations. It's user-friendly, with a simple interface for basic arithmetic operations. The app provides a responsive and smooth user experience, making number crunching a breeze.",
    getImageSrc: () => require("../images/react-calculator.png"),
    projectUrl: "https://github.com/YanNazzim/Calculator-App-React-Lab",
  },
  {
    title: "Shopplet Android App",
    description:
      "Marketplace app for local services and unique items, global reach, direct communication, cost-efficient. Positioned against template-based platforms, enabling buying and selling with a focus on personalized experiences and financial prudence.",
    getImageSrc: () => require("../images/shopplet.jpg"),
    projectUrl: "https://github.com/YanNazzim/Shopplet-Android-App"
  },  {
    title: "Toggle Light/Dark Theme React App",
    description:
      "Practice React web app featuring a toggleable light and dark theme for a personalized visual experience.",
    getImageSrc: () => require("../images/toggle-light.png"),
    projectUrl: "https://github.com/YanNazzim/Toggle-Dark-and-Light-Theme-React-Lab"
  },  {
    title: "Track Cursor Position React App (SEO)",
    description:
      "SEO-optimized React app for tracking cursor positions. Enhances user experience by providing valuable insights into cursor movements, aiding in website optimization strategies.",
    getImageSrc: () => require("../images/mouse-cursor.jpg"),
    projectUrl: "https://github.com/YanNazzim/Tracking-Cursor-Position-React-Lab"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#154a46"
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

import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Restaurant",
    description:
      "A fully responsive restaurant website built with React, designed to provide an intuitive and seamless user experience across all devices. The website features a dynamic menu, reservation functionality, and an engaging homepage with visually appealing sections.",
    getImageSrc: () => require("../images/Restaurant.jpg"),
    urlProject: "https://alex-tiuzhin-restaurant.netlify.app/",
  },
  {
    title: "React Online-shop",
    description:
      "Online plant shop built with React, designed to offer an intuitive and seamless shopping experience for plant enthusiasts. The platform features a dynamic product catalog with detailed plant descriptions, pricing, and categories. It includes user-friendly features like a search bar, filtering options, and a shopping cart.",
    getImageSrc: () => require("../images/Online-shop-prog.jpg"),
  },
  {
    title: "Calculator",
    description:
      "A calculator that was built with React that offers basic arithmetic operations in a clean and intuitive user interface.",
    getImageSrc: () => require("../images/Calculator.jpg"),
    urlProject: "https://alex-tiuzhin-calculator.netlify.app/",
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
      backgroundColor="#c0d6df"
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
            urlProject={project.urlProject}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

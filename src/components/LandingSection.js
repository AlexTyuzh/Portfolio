import React from "react";
import { Image, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import AlexTiuzhin from "../images/AlexTiuzhin.jpg";

const greeting = "Hey, I am Alex Tiuzhin!";
const bio1 = "A front-end developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#274c77"
  >
    <VStack spacing={[5, 8, 10]}>
      <VStack>
        <Image
          src={AlexTiuzhin}
          boxSize={["100px", "150px", "200px"]}
          borderRadius="full"
          fit="cover"
          alt="Alex Tiuzhin"
        />
        <Heading size="xl" fontSize={["2xl", "3xl", "4xl"]}>
          {greeting}
        </Heading>
      </VStack>

      <VStack>
        <Heading size="3xl" fontSize={["xl", "2xl", "3xl"]}>
          {bio1}
        </Heading>
        <Heading size="3xl" fontSize={["xl", "2xl", "3xl"]}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

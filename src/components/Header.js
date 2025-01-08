import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: alexey.tyuzhin@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/AlexTyuzh",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/aleksei-tiuzhin",
  },
  {
    icon: faWhatsapp,
    url: "https://wa.me/+972533207900",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      const currHeaderElement = headerRef.current;

      if (!currHeaderElement) {
        return;
      }

      if (prevScrollPos > currScrollPos) {
        currHeaderElement.style.transform = "translateY(0)";
      } else {
        currHeaderElement.style.transform = "translateY(-200px)";
      }

      prevScrollPos = currScrollPos;
    };

    // Set up listeners for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Remove listeners for the scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      className="nav-bar"
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#001d3d"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={[4, 10, 16]}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={[2, 4, 6]}>
              {socials.map(({ icon, url }) => (
                <a
                  key={url}
                  href={url}
                  icon={icon}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon key={url} icon={icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={[4, 6, 8]} fontSize={["md", "xl", "2xl"]}>
              <a href="/#contactme-section" onClick={handleClick}>
                Contact Me
              </a>
              <a href="/#projects-section" onClick={handleClick}>
                My Projects
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

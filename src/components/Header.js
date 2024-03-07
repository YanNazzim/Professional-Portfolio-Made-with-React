import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, IconButton } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: ygonz42@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/YanNazzim",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/yangonzalez",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY.current) {
      // Scrolling down
      headerRef.current.style.transform = "translateY(-200px)";
    } else {
      // Scrolling up
      headerRef.current.style.transform = "translateY(0)";
    }

    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => (event) => {
    event.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor="#18181b"
      zIndex="1000"
      transition="transform 0.3s ease-in-out"
      style={{ scrollBehavior: "smooth" }}
    >
      <HStack
        px={16}
        py={4}
        justifyContent="space-between"
        alignItems="center"
        color="white"
      >
        <HStack spacing={4}>
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              isExternal
            >
              <IconButton
                icon={<FontAwesomeIcon icon={social.icon} size="2x" />}
                variant="ghost"
                aria-label={`${social.icon.iconName} link`}
              />
            </Link>
          ))}
        </HStack>
        <HStack spacing={8}>
          <Link href="#projects-section" onClick={handleClick("projects")}>
            Projects
          </Link>
          <Link href="#contactme-section" onClick={handleClick("contactme")}>
            Contact Me
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;

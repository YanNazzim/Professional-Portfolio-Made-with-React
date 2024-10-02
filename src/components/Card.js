import { Heading, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, projectUrl }) => {
  const handleClick = () => {
    // Open the project URL in a new tab
    if (projectUrl) {
      window.open(projectUrl, '_blank');
    }
  };
  return (
    <VStack
      spacing={4}
      borderRadius="md"
      overflow="hidden"
      boxShadow="lg"
      backgroundColor="white"
      p={4}
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)" }}
      onClick={handleClick}
      cursor="pointer" // Add a pointer cursor to indicate clickability
    >
      <Image src={imageSrc} alt={title} maxH="200px" objectFit="cover" />
      <VStack spacing={2} align="start">
        <Heading as="h3" size="md" color="black">
          {title}
        </Heading>
        <Text color="black">{description}</Text>
      </VStack>
      <HStack justifyContent="space-between" w="100%" align="flex-end">
        <Text color="teal.500">Go To Project</Text>
        {projectUrl && (
          <Link href={projectUrl} isExternal>
            <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
          </Link>
        )}
      </HStack>
    </VStack>
  );
};

export default Card;

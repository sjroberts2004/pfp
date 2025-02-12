import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const skills = [
  "Python", "C++", "Java", "JavaScript/TypeScript", "React", "NodeJS", "HTML/CSS",
  "Kafka", "AWS", "MongoDB", "MySQL", "Firebase", "Google Cloud", "Docker", "Git/Github", "Splunk", "Spring Boot"
];

const Skills = () => {
  return (
    <VStack spacing={6} align="start">
      <Heading as="h2" size="xl">Skills & Technologies</Heading>
      <Box p={4} borderRadius="md" bg="gray.100" w="100%">
        <Text>{skills.join(" • ")}</Text>
      </Box>
    </VStack>
  );
};

export default Skills;

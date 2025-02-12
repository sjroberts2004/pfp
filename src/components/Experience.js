import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const experienceData = [
  {
    company: "Southwest Airlines",
    role: "Software Engineering Intern",
    duration: "Jan 2025 - Apr 2025",
    description: "I will be joining the Customer Communications Services and Southwest Vacations Services teams this upcoming Spring.",
  },
  {
    company: "Chewy",
    role: "Software Engineering Intern",
    duration: "Jun 2024 - Aug 2024",
    description:
      "Utilized Kafka and Spring Boot for REST API creation, leveraging Kotlin as a reference to identify admin endpoints, saving 10 hours per week.",
  },
  {
    company: "Chewy",
    role: "Software Engineering Co-op",
    duration: "Jun 2023 - Dec 2023",
    description:
      "Developed REST API endpoints using Spring Boot, Java, and Kafka to fetch and process data related to user pets and animal records, reducing response time by 10%.",
  },
];

const Experience = () => {
  return (
    <VStack spacing={6} align="start">
      <Heading as="h2" size="xl">Experience</Heading>
      {experienceData.map((exp, index) => (
        <Box key={index} p={4} borderRadius="md" bg="gray.100" w="100%">
          <Heading as="h3" size="md">{exp.company}</Heading>
          <Text fontWeight="bold">{exp.role} ({exp.duration})</Text>
          <Text>{exp.description}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default Experience;

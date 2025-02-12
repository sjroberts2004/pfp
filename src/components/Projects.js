import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";

const projects = [
  {
    name: "cardfor.me",
    description: "No-affiliate credit card suggester optimizing Plaid API service.",
    stack: "Python, FastAPI, Flask, Next.js, PlaidAPI, TypeScript",
    link: "https://github.com/MiniHacks/cardforme",
  },
  {
    name: "Dinologue",
    description: "Interactive language learning platform using Google Gemini API.",
    stack: "Next.js, TypeScript, Three.js, Google Gemini, Python",
    link: "https://github.com/MiniHacks/dinologue",
  },
];

const Projects = () => {
  return (
    <VStack spacing={6} align="start">
      <Heading as="h2" size="xl">Projects</Heading>
      {projects.map((proj, index) => (
        <Box key={index} p={4} borderRadius="md" bg="gray.100" w="100%">
          <Heading as="h3" size="md">{proj.name}</Heading>
          <Text>{proj.description}</Text>
          <Text fontSize="sm" fontStyle="italic">{proj.stack}</Text>
          <Link href={proj.link} color="blue.500" isExternal>GitHub</Link>
        </Box>
      ))}
    </VStack>
  );
};

export default Projects;

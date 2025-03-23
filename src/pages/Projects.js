// src/pages/Projects.js
import { Box, Heading, Text } from '@chakra-ui/react';

const Projects = () => {
  return (
    <Box
      pt="100px"
      minHeight="100vh"
      px={6}
      bg="transparent"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Heading
        as="h1"
        size="2xl"
        fontWeight="bold"
        color="autumn.accent"
        mb={4}
      >
        Projects
      </Heading>
      <Text fontSize="lg" color="gray.400">
        This section is still under construction. Check back soon!
      </Text>
    </Box>
  );
};

export default Projects;

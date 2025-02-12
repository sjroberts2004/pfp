import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Education = () => {
  return (
    <VStack spacing={6} align="start">
      <Heading as="h2" size="xl">Education</Heading>
      <Box p={4} borderRadius="md" bg="gray.100" w="100%">
        <Heading as="h3" size="md">University of Minnesota - Twin Cities</Heading>
        <Text>B.S. in Computer Science, Expected May 2026</Text>
      </Box>
    </VStack>
  );
};

export default Education;

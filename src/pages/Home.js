import { Box, Heading, Text, Button, VStack, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // For navigation
import { useTheme } from "../context/ThemeContext"; // Theme toggle if using a custom theme provider

const Home = () => {
  const { toggleColorMode, colorMode } = useTheme(); // For Light/Dark mode toggle

  return (
    <VStack spacing={8} align="center" justify="center" h="100vh">
      {/* Hero Section */}
      <Box textAlign="center">
        <Heading as="h1" size="2xl">
          Hi, I'm Samuel Roberts 👋
        </Heading>
        <Text fontSize="lg" mt={3}>
          Software Engineer | AI Enthusiast | Hackathon Winner 🚀
        </Text>
      </Box>

      {/* Introduction */}
      <Text textAlign="center" maxW="600px">
        Passionate about full-stack development, AI, and building innovative solutions. I enjoy
        hackathons, open-source projects, and solving complex technical problems.
      </Text>

      {/* Navigation Buttons */}
      <HStack spacing={4}>
        <Button as={RouterLink} to="/experience" colorScheme="blue">
          Experience
        </Button>
        <Button as={RouterLink} to="/projects" colorScheme="teal">
          Projects
        </Button>
        <Button as={RouterLink} to="/contact" colorScheme="purple">
          Contact
        </Button>
        <Button as={Link} href="/resume.pdf" download colorScheme="gray">
          Download Resume
        </Button>
      </HStack>

      {/* Theme Toggle Button */}
      <Button onClick={toggleColorMode} mt={4}>
        Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
    </VStack>
  );
};

export default Home;

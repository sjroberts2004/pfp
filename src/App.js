import { ChakraProvider, Box, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contacts from "./components/Contacts";

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <Container maxW="container.md" mt={8}>
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contacts />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;

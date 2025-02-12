import { HStack, Link, Button, useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing={4} p={4} bg="gray.200">
      <Link href="/">Home</Link>
      <Link href="/experience">Experience</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/education">Education</Link>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </Button>
    </HStack>
  );
};

export default Navbar;

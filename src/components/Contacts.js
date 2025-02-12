import { useState } from "react";
import { Box, Text, VStack, Input, Textarea, Button, Link, Icon, HStack } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

const Contacts = () => {
  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <Box textAlign="center" p={6}>
      <VStack spacing={4}>
        <Text fontSize="xl" fontWeight="bold">
          Contact Me
        </Text>

        <Text textAlign="center" mb={4}>
          Feel free to reach out via email or connect with me on LinkedIn and GitHub BUT DO NOT USE THE SECTION BELOW, TBD!
        </Text>

        {/* Contact Icons */}
        <HStack spacing={6} justify="center">
          <Link href="mailto:your.email@example.com" isExternal>
            <Icon as={FaEnvelope} boxSize={6} />
          </Link>
          <Link href="https://www.linkedin.com/in/your-linkedin" isExternal>
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>
          <Link href="https://github.com/your-github" isExternal>
            <Icon as={FaGithub} boxSize={6} />
          </Link>
          <Link
            href="https://drive.google.com/file/d/1sfg7Ad-FCA97EndJC-1Tu3lhk68SsKuM/view?usp=sharing"
            isExternal
          >
            <Icon as={FaFilePdf} boxSize={6} />
          </Link>
        </HStack>

        {/* Contact Form */}
        <VStack spacing={4} mt={6} w="100%" maxW="400px">
          <Input
            placeholder="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            placeholder="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button colorScheme="blue" onClick={handleSubmit}>
            Send Message
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Contacts;

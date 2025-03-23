import { Box, Heading, Text, Container, VStack, Link } from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <Box id="aboutme" py={16} bg="transparent">
      <Container maxW="container.md">
        <VStack align="start" spacing={4}>
          <Heading
            as="h2"
            size="lg"
            borderBottom="2px solid"
            borderColor="autumn.accent"
            pb={1}
            fontWeight="semibold"
          >
            About Me
          </Heading>

          <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="medium" lineHeight="1.8">
            I am Sam, {' '}
            <Link
              href="https://genius.com/Dr-seuss-green-eggs-and-ham-excerpt-annotated"
              isExternal
              textDecoration="underline"
              color="autumn.accent"
              _hover={{ opacity: 0.8 }}
            >
              have you ever had green eggs and...
            </Link>{' '}
            anyways! I am a developer who makes projects and participates in hackathons! I am always looking to sharpen my skills in order to help the
            world in any way that I can! In my free time I love to learn more about powerlifting,
            nutrition, and everything I can to get stronger{' '}
            <span role="img" aria-label="flexing arm">
              💪
            </span>
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutMe;

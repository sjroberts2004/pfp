// src/pages/Home.js
import { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  Container,
  VStack,
  Image,
  Stack,
} from '@chakra-ui/react';
import { Typewriter } from 'react-simple-typewriter';
import personalPhoto from '../components/personalphoto.PNG';
import AboutMe from '../sections/AboutMe';
import Experience from '../sections/Experience';

function Home() {
  const [useEmojis, setUseEmojis] = useState(false);

  useEffect(() => {
    const testEmoji = document.createElement('div');
    testEmoji.innerText = '💻📱💪';
    document.body.appendChild(testEmoji);

    if (testEmoji.innerText !== '💻📱💪') {
      setTimeout(() => {
        setUseEmojis(true);
      }, 1000);
    }
    document.body.removeChild(testEmoji);
  }, []);

  return (
    <Box pt="80px">
      {/* Typewriter Section Above Header */}
      <Box textAlign="center" pb={6}>
        <Heading as="h2" size="xl" fontWeight="semibold" color="autumn.accent">
          <Typewriter
            words={useEmojis
              ? ['Software Engineer 💻', 'Backend Developer 📱', 'Muscle Enthusiast 💪']
              : ['Software Engineer', 'Backend Developer', 'Muscle Enthusiast']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </Heading>
      </Box>

      <Container maxW="container.md" px={3} py={10}>
        <Stack
          spacing={6}
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center', md: 'center' }}
          justify="space-between"
        >
          {/* Text content */}
          <VStack
            align={{ base: 'center', md: 'start' }}
            spacing={3}
            flex="1"
            textAlign={{ base: 'center', md: 'left' }}
          >
            <Heading
              as="h1"
              size="2xl"
              fontWeight="bold"
              borderBottom="3px solid"
              borderColor="autumn.accent"
              pb={1}
            >
              Samuel Roberts
            </Heading>

            <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="medium" lineHeight="1.5">
              Currently a junior at the University of Minnesota majoring in Computer Science and a
              part-time muscle enthusiast who dreams to compete nationally someday{' '}
              <span role="img" aria-label="cool emoji">
                😎
              </span>
            </Text>
          </VStack>

          {/* Responsive image */}
          <Image
            src={personalPhoto}
            alt="Samuel Roberts"
            width={{ base: '160px', md: '200px' }}
            maxW="200px"
            height="auto"
            border="3px solid"
            borderColor="autumn.accent"
            borderRadius="2xl"
            objectFit="cover"
            alignSelf={{ base: 'center', md: 'flex-start' }}
          />
        </Stack>
      </Container>

      <AboutMe />
      <Experience />
    </Box>
  );
}

export default Home;

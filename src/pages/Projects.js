import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Link,
  Button,
  VStack,
} from '@chakra-ui/react';
import minervaImg from '../assets/minerva-map-preview.png';
import dinologueImg from '../assets/dinologue-preview.png';
import cardformeImg from '../assets/cardforme-preview.png';
import portfolioImg from '../assets/portfolio-preview.png';

const projects = [
  {
    title: 'CardForMe',
    image: cardformeImg,
    description: 'Credit card recommender built with FastAPI, Next.js, and Plaid API. 4th @ HackUIowa.',
    github: 'https://github.com/MiniHacks/cardforme',
  },
  {
    title: 'Dinologue',
    image: dinologueImg,
    description: 'Interactive language learning platform with a dino mascot using Gemini API and Three.js.',
    github: 'https://github.com/MiniHacks/dinologue',
  },
  {
    title: 'Minerva',
    image: minervaImg,
    description: 'Mapped event directions using the Google Maps API during MinneHack 2022.',
    github: 'https://github.com/sjroberts2004/Minerva',
  },
  {
    title: 'Personal Portfolio',
    image: portfolioImg,
    description: 'Fully responsive personal website built with React and Chakra UI. Designed to showcase projects and resume.',
    github: 'https://github.com/sjroberts2004/pfp',
  }
];


const Projects = () => (
  <Container id="projects" maxW="container.md" py={16} px={6} bg="transparent">
    <Heading as="h2" size="xl" mb={10} textAlign="center" color="autumn.text">
      Projects
    </Heading>
    <VStack spacing={10} align="stretch" width="100%">
      {projects.map((project, index) => (
        <Box
          key={index}
          borderWidth="1px"
          borderRadius="xl"
          overflow="hidden"
          shadow="lg"
          p={4}
          bg="autumn.card"
        >
          <Image
  src={project.image}
  alt={`${project.title} preview`}
  borderRadius="md"
  mb={4}
  width="100%"
  height="200px"
  objectFit="cover"
/>

          <Heading as="h3" size="md" color="autumn.accent" mb={2}>
            {project.title}
          </Heading>
          <Text fontSize="sm" color="autumn.text" mb={4}>
            {project.description}
          </Text>
          <Link href={project.github} isExternal>
            <Button colorScheme="orange" variant="outline">
              View on GitHub
            </Button>
          </Link>
        </Box>
      ))}
    </VStack>
  </Container>
);

export default Projects;

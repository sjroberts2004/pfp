import {
    Box,
    Heading,
    Text,
    Container,
    VStack,
    HStack,
    Image,
  } from '@chakra-ui/react';
  import { motion } from 'framer-motion';
  
  import chewyLogo from '../assets/chewy-logo.jpg';
  import southwestLogo from '../assets/southwest-logo.jpg';
  import bsciLogo from '../assets/bsci-logo.jpg'; // ✅ confirmed
  
  const MotionBox = motion(Box);
  
  const experiences = [
    {
      company: 'Boston Scientific',
      role: 'Software Engineering Intern',
      duration: 'Planned for Summer 2025',
      description:
        'I will be joining Boston Scientific as a Software Engineering Intern, where I plan to contribute to impactful medical technology solutions while deepening my backend and systems-level development skills.',
      logo: bsciLogo,
    },
    {
      company: 'Southwest Airlines',
      role: 'Software Engineering Intern',
      duration: 'Jan 2025 – Present',
      description:
        'Currently working on the Customer Communications Services and Southwest Vacations Services teams, contributing to scalable backend systems that power customer experiences.',
      logo: southwestLogo,
    },
    {
      company: 'Chewy',
      role: 'Software Engineering Intern',
      duration: 'Jun 2024 – Aug 2024',
      description:
        'Utilized Kafka and Spring Boot for REST API creation, leveraging Kotlin to identify admin endpoints, saving ~10 hours/week. Retired Kyrios platform and identified 25 missing Admin REST endpoints.',
      logo: chewyLogo,
    },
    {
      company: 'Chewy',
      role: 'Software Engineering Co-op',
      duration: 'Jun 2023 – Dec 2023',
      description:
        'Developed APIs with Spring Boot and Kafka, optimized pet data with DynamoDB for 10x speed boost, created a React/TypeScript UI, and implemented GraphQL schemas to replace legacy APIs.',
      logo: chewyLogo,
    },
  ];
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.3,
        ease: 'easeOut',
      },
    }),
  };
  
  const Experience = () => {
    return (
      <Box id="experience" py={20}>
        <Container maxW="container.md">
          <Heading
            as="h2"
            size="lg"
            borderBottom="2px solid"
            borderColor="autumn.accent"
            pb={1}
            fontWeight="semibold"
            mb={10}
          >
            Experience
          </Heading>
  
          <VStack align="start" spacing={8}>
            {experiences.map((exp, i) => (
              <MotionBox
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                variants={itemVariants}
                border="1px solid"
                borderColor="autumn.accent"
                bg="autumn.accent"
                borderRadius="lg"
                p={5}
                w="100%"
              >
                <HStack spacing={4} align="flex-start">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    boxSize="50px"
                    objectFit="contain"
                    borderRadius="md"
                    bg="white"
                  />
                  <VStack align="start" spacing={1} color="#2B1E1E"> {/* Dark text color */}
                    <Text fontWeight="bold" fontSize="lg">
                      {exp.role}
                    </Text>
                    <Text fontSize="sm">
                      {exp.company} • {exp.duration}
                    </Text>
                    <Text fontSize="md" mt={2}>
                      {exp.description}
                    </Text>
                  </VStack>
                </HStack>
              </MotionBox>
            ))}
          </VStack>
        </Container>
      </Box>
    );
  };
  
  export default Experience;
  
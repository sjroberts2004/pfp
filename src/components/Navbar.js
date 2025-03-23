import {
    Box,
    Flex,
    HStack,
    IconButton,
    Link as ChakraLink,
    useDisclosure,
    Stack,
    Text,
    Container,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  import { FiFileText } from 'react-icons/fi';
  import { motion } from 'framer-motion';
  import ThemeToggle from './ThemeToggle';
  import { Link as ScrollLink } from 'react-scroll';
  import { Link as RouterLink } from 'react-router-dom';
  
  const dashboardLinks = ['Projects', 'Contact'];
  
  const MotionLink = motion(ChakraLink);
  const MotionBox = motion(Box);
  const MotionIconButton = motion(IconButton);
  
  const NavLink = ({ children, to = '/', isScroll = false }) =>
    isScroll ? (
      <ScrollLink to={to} smooth={true} duration={500}>
        <MotionLink
          px={4}
          py={2}
          rounded="md"
          fontWeight="semibold"
          initial={{ opacity: 1 }}
          whileHover={{
            opacity: 0.8,
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
          _hover={{
            textDecoration: 'none',
            bg: 'autumn.accent',
            color: 'white',
          }}
        >
          {children}
        </MotionLink>
      </ScrollLink>
    ) : (
      <MotionLink
        as={RouterLink}
        to={to}
        px={4}
        py={2}
        rounded="md"
        fontWeight="semibold"
        initial={{ opacity: 1 }}
        whileHover={{
          opacity: 0.8,
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
        _hover={{
          textDecoration: 'none',
          bg: 'autumn.accent',
          color: 'white',
        }}
      >
        {children}
      </MotionLink>
    );
  
  export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box
        bg="transparent"
        backdropFilter="blur(10px)"
        position="fixed"
        top={0}
        width="100%"
        zIndex={999}
      >
        <Container maxW="container.md" px={3}>
          <Flex h={16} alignItems="center" justifyContent="space-between">
            {/* ✅ Clickable SR logo routes to home */}
            <MotionBox
              as={RouterLink}
              to="/"
              whileHover={{
                rotate: [-1, 1, -0.5, 0.5, 0],
                scale: 1.1,
                transition: { duration: 0.5, ease: 'easeInOut' },
              }}
              whileTap={{ scale: 0.95 }}
              _hover={{ textDecoration: 'none' }}
            >
              <Text fontWeight="extrabold" fontSize="2xl">
                SR
              </Text>
            </MotionBox>
  
            {/* Nav links (desktop) */}
            <HStack spacing={4} alignItems="center" display={{ base: 'none', md: 'flex' }}>
              <MotionLink
                href="https://drive.google.com/file/d/1CMpuKs2GU_6agE_IWhXbMahvN0Tu9tsT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                px={4}
                py={2}
                rounded="md"
                fontWeight="semibold"
                display="flex"
                alignItems="center"
                gap={2}
                initial={{ opacity: 1 }}
                whileHover={{
                  opacity: 0.85,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                _hover={{
                  textDecoration: 'none',
                  bg: 'autumn.accent',
                  color: 'white',
                }}
              >
                <FiFileText size={18} />
                Resume
              </MotionLink>
  
              {dashboardLinks.map((link) =>
                link === 'Contact' ? (
                  <NavLink key={link} to="footer" isScroll>
                    {link}
                  </NavLink>
                ) : (
                  <NavLink key={link} to={`/${link.toLowerCase()}`}>
                    {link}
                  </NavLink>
                )
              )}
              <ThemeToggle />
            </HStack>
  
            {/* ☰ Mobile Hamburger */}
            <MotionIconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Toggle Menu"
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              color="inherit"
              variant="ghost"
              whileHover={{ scale: 1.1, opacity: 0.9 }}
              whileTap={{ scale: 0.95 }}
            />
          </Flex>
  
          {/* 📱 Mobile Nav */}
          {isOpen && (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as="nav" spacing={4}>
                <NavLink to="https://drive.google.com/file/d/1CMpuKs2GU_6agE_IWhXbMahvN0Tu9tsT/view?usp=sharing">
                  <HStack spacing={2}>
                    <FiFileText size={18} />
                    <span>Resume</span>
                  </HStack>
                </NavLink>
                {dashboardLinks.map((link) =>
                  link === 'Contact' ? (
                    <NavLink key={link} to="footer" isScroll>
                      {link}
                    </NavLink>
                  ) : (
                    <NavLink key={link} to={`/${link.toLowerCase()}`}>
                      {link}
                    </NavLink>
                  )
                )}
                <ThemeToggle />
              </Stack>
            </Box>
          )}
        </Container>
      </Box>
    );
  }
  
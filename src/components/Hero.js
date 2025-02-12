import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(Text);

const Hero = () => {
  return (
    <Box textAlign="center" py={20}>
      <MotionText
        fontSize="3xl"
        fontWeight="bold"
        color="teal.400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hey, I'm Samuel! 🚀
      </MotionText>
      <MotionText fontSize="xl" color="gray.500" mt={2}>
        Full-Stack Developer | AI Enthusiast | Hackathon Winner
      </MotionText>
    </Box>
  );
};

export default Hero;

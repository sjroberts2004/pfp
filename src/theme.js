// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    autumn: {
      accent: '#F4A261',      // Warm orange for highlights
      background: '#2D1E1E',  // Dark chocolate for dark mode background
      secondary: '#FFDDC1',   // Light peach for highlights
    },
  },
  styles: {
    global: {
      body: {
        bg: 'autumn.background',
        color: 'autumn.secondary',
      },
    },
  },
});

export default theme;

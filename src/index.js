// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import App from './App';

const autumnTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    autumn: {
      lightBg: '#FFF8F0',   // soft cream
      lightText: '#3C2F2F', // warm brown
      darkBg: '#2E1F1C',    // deep brown
      darkText: '#FFD6A5',  // peachy highlight
      accent: '#FFB347',    // pumpkin orange
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'light' ? 'autumn.lightBg' : 'autumn.darkBg',
        color: props.colorMode === 'light' ? 'autumn.lightText' : 'autumn.darkText',
        transition: 'background-color 0.2s ease, color 0.2s ease',
      },
    }),
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={autumnTheme}>
      <ColorModeScript initialColorMode={autumnTheme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

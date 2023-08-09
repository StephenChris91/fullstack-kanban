import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import { extendTheme } from '@chakra-ui/react'


const colors = {
  brand: {
    900: '#000',
    800: '#153e75',
    700: '#fff',
  },
}

const theme = extendTheme({ colors })



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider  theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

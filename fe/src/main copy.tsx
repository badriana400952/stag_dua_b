import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/rootReduc'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
        <App />
        
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)

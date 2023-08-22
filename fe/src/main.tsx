import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './store/rootReduc'

const store = configureStore({
  reducer: rootReducer,
});

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

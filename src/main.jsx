import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import ConfigureStore from './store/store.js'
import { BrowserRouter } from 'react-router-dom'

const store = ConfigureStore();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <BrowserRouter>
          <ToastContainer />
          <App />
        </BrowserRouter>
      </NextUIProvider>
    </Provider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import 'aos/dist/aos.css'
import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store.js'
import Aos from 'aos'
Aos.init();

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

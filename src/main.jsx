import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import ConfigureStore from './store/store.js'
const store = ConfigureStore();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <ToastContainer />
        <App />
      </NextUIProvider>
    </Provider>
  </StrictMode>,
)

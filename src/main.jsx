// import "./index.css";
// import App from "./App.jsx";
// import ConfigureStore from "./store/store.js";


import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import 'aos/dist/aos.css'
import { NextUIProvider } from '@nextui-org/react'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store.js'
import Aos from 'aos'
import Loading from './components/Loading.jsx';
const App = lazy(() => import("./App.jsx"));
Aos.init();

// const store = ConfigureStore();
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <BrowserRouter>
          <ToastContainer />
          {/* <App /> */}
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </BrowserRouter>
      </NextUIProvider>
    </Provider>
  </StrictMode>
);

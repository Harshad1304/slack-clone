import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store, { presistor } from './app/store.js'
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersistGate loading={null} persistor={presistor}>
    <Provider store={store}>
    <App />
      </Provider>
    </PersistGate>
   
  </StrictMode>,
)

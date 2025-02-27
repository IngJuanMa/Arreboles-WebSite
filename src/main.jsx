import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CarritoProvider } from './Components/Context/CarritoContext.jsx'

createRoot(document.getElementById('root')).render(
  <CarritoProvider>
    <App />
  </CarritoProvider>,
)

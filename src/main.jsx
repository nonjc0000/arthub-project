import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './ForDisplay.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

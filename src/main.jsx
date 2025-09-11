import { HashRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './ArtHub_App'
// import App from './components/Map_api';
import './css/all.min.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  // </StrictMode>,
)

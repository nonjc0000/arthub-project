import { HashRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './ArtHub_App'
// import App from './components/Map_api';
import './css/all.min.css'
import Clarity from '@microsoft/clarity'

// 全局初始化 Clarity
const projectId = "tc4d2awk9v";
Clarity.init(projectId);

// 設定用戶識別
let userId = localStorage.getItem('clarity_user_id');
if (!userId) {
  userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  localStorage.setItem('clarity_user_id', userId);
}
Clarity.identify(userId);

// 調試用 - 可以在部署時移除
console.log('Clarity 全局初始化完成，用戶 ID:', userId);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  // </StrictMode>,
)

import { Link } from 'react-router-dom'
import styles from '../css/modules/NavBar.module.css'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <ul>
                <li> <Link to="/Find_type">找類型</Link></li>
                <li> <Link to="/Find_map">找地圖</Link></li>
                <li><Link to="/Find_schedule">找行程</Link></li>
                <li><Link to="/Blog">部落格</Link></li>
                <li><Link to="/About">關於我們</Link></li>
                <li><Link to="/User">會員登入</Link></li>
            </ul>
            &copy; 2025 art hub
        </div >
    )
}

export default Footer
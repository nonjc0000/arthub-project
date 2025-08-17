import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='FooterBox'>
            <ul className='sitemap'>
                <li className='find_type'><img src="src/images/icons/find_type.svg" style={{width:'24px'}}/><Link to="/Find_type">找類型</Link></li>
                <li className='find_map'><img src="src/images/icons/find_map.svg" style={{width:'24px'}}/><Link to="/Find_map">找地圖</Link></li>
                <li className='find_schedule'><img src="src/images/icons/find_schedule.svg" style={{width:'24px'}}/><Link to="/Find_schedule">找行程</Link></li>
                <li className='blog'><img src="src/images/icons/blog.svg" style={{width:'24px'}}/><Link to="/Blog">部落格</Link></li>
                <li className='about'><img src="src/images/icons/about.svg" style={{width:'24px'}}/><Link to="/About">關於我們</Link></li>
                <li className='user'><img src="src/images/icons/user.svg" style={{width:'24px'}}/><Link to="/User">會員登入</Link></li>
            </ul>
            <small className='copyright'>&copy; 2025 art hub</small>
        </div >
    )
}

export default Footer
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='FooterBox'>
            <ul className='sitemap'>
                <li className='find_type'>
                    <Link to="/Find_type">
                        <span className='sitemap_item_content'>
                            <img src="src/images/icons/find_type.svg" style={{ width: '24px' }} />
                            <span>找類型</span>
                        </span>
                    </Link>
                </li>
                <li className='find_map'>
                    <Link to="/Find_map">
                        <span className='sitemap_item_content'>
                            <img src="src/images/icons/find_map.svg" style={{ width: '24px' }} />
                            <span>找地圖</span>
                        </span>
                    </Link>
                </li>
                <li className='find_schedule'>

                    <Link to="/Find_schedule">
                        <span className='sitemap_item_content'>
                            <img src="src/images/icons/find_schedule.svg" style={{ width: '24px' }} />
                            <span>找行程</span>
                        </span>
                    </Link>
                </li>
                <li className='blog'>
                    <Link to="/Blog">
                    <span className='sitemap_item_content'>
                    <img src="src/images/icons/blog.svg" style={{ width: '24px' }} />
                    <span>部落格</span>
                    </span>
                    </Link>
                </li>
                <li className='about'>
                    <Link to="/About">
                    <span className='sitemap_item_content'>
                    <img src="src/images/icons/about.svg" style={{ width: '24px' }} />
                    <span>關於我們</span>
                    </span>
                    </Link>
                </li>
                <li className='user'>
                    <Link to="/User">
                    <span className='sitemap_item_content'>
                    <img src="src/images/icons/user.svg" style={{ width: '24px' }} />
                    <span>會員登入</span>
                    </span>
                    </Link>
                </li>
            </ul>
            <small className='copyright'>&copy; 2025 art hub</small>
        </div >
    )
}

export default Footer
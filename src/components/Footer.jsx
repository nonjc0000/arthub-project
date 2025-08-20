import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='FooterBox'>
            <ul className='sitemap'>
                <li className='find_type'>
                    <Link to="/Find_type">
                        <p className='sitemap_item_content'>
                            <img src="../images/icons/find_type.svg" style={{ width: '24px' }} />
                            找類型
                        </p>
                    </Link>
                </li>
                <li className='find_map'>
                    <Link to="/Find_map">
                        <p className='sitemap_item_content'>
                            <img src="../images/icons/find_map.svg" style={{ width: '24px' }} />
                            找地圖
                        </p>
                    </Link>
                </li>
                <li className='find_schedule'>

                    <Link to="/Find_schedule">
                        <p className='sitemap_item_content'>
                            <img src="../images/icons/find_schedule.svg" style={{ width: '24px' }} />
                            找行程
                        </p>
                    </Link>
                </li>
                <li className='blog'>
                    <Link to="/Blog">
                    <p className='sitemap_item_content'>
                    <img src="../images/icons/blog.svg" style={{ width: '24px' }} />
                    部落格
                    </p>
                    </Link>
                </li>
                <li className='about'>
                    <Link to="/About">
                    <p className='sitemap_item_content'>
                    <img src="../images/icons/about.svg" style={{ width: '24px' }} />
                    關於我們
                    </p>
                    </Link>
                </li>
                <li className='user'>
                    <Link to="/User">
                    <p className='sitemap_item_content'>
                    <img src="../images/icons/user.svg" style={{ width: '24px' }} />
                    會員登入
                    </p>
                    </Link>
                </li>
            </ul>
            <small className='copyright'>&copy; 2025 art hub</small>
        </div >
    )
}

export default Footer
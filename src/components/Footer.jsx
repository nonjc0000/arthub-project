import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

const Footer = () => {
    const { user, isLoggedIn, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        if (window.confirm('確定要登出嗎？')) {
            logout();
            navigate('/');
        }
    };

    return (
        <div className='FooterBox' style={{ backgroundImage: 'url("./images/Footer/Footer.svg")' }}>
            <ul className='sitemap'>
                <li className='find_type'>
                    <Link to="/Find_type">
                        <p className='sitemap_item_content'>
                            <img src="./images/icons/find_type.svg" style={{ width: '24px' }} />
                            找類型
                        </p>
                    </Link>
                </li>
                <li className='find_map'>
                    <Link to="/Find_map">
                        <p className='sitemap_item_content'>
                            <img src="./images/icons/find_map.svg" style={{ width: '24px' }} />
                            找地圖
                        </p>
                    </Link>
                </li>
                <li className='find_schedule'>
                    <Link to="/Find_schedule">
                        <p className='sitemap_item_content'>
                            <img src="./images/icons/find_schedule.svg" style={{ width: '24px' }} />
                            找行程
                        </p>
                    </Link>
                </li>
                <li className='blog'>
                    <Link to="/Blog">
                        <p className='sitemap_item_content'>
                            <img src="./images/icons/blog.svg" style={{ width: '24px' }} />
                            部落格
                        </p>
                    </Link>
                </li>
                <li className='about'>
                    <Link to="/About">
                        <p className='sitemap_item_content'>
                            <img src="./images/icons/about.svg" style={{ width: '24px' }} />
                            關於我們
                        </p>
                    </Link>
                </li>
                <li className='user'>
                    {isLoggedIn ? (
                        <div className='footer_user_info'>
                            <Link to="/My_footprint">
                                <p className='sitemap_item_content'>
                                    <img src="./images/icons/user.svg" style={{ width: '24px' }} />
                                    {user?.name || '會員'} 
                                </p>
                            </Link>
                        </div>
                    ) : (
                        <Link to="/Member_login">
                            <p className='sitemap_item_content'>
                                <img src="./images/icons/user.svg" style={{ width: '24px' }} />
                                會員登入
                            </p>
                        </Link>
                    )}
                </li>
            </ul>
            <small className='copyright'>Copyright &copy; 2025 art.hub 保留一切權利。</small>
        </div>
    )
}

export default Footer
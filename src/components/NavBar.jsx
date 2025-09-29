import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';  // 引入 useAuth

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const navRef = useRef(null);
    const userMenuRef = useRef(null);
    const hamburgerRef = useRef(null); // 漢堡按鈕的 ref
    const navigate = useNavigate();

    // 使用 AuthContext
    const { user, isLoggedIn, logout } = useAuth();

    // 切換選單
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // 關閉選單
    const closeMenu = () => {
        setIsOpen(false);
    };

    // 切換用戶選單
    const toggleUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    };

    // 處理登出
    const handleLogout = () => {
        if (window.confirm('確定要登出嗎？')) {
            logout();
            setShowUserMenu(false);
            navigate('/');
        }
    };

    // 點擊外部關閉
    useEffect(() => {
        const handleClickOutside = (event) => {
            // 排除漢堡按鈕的點擊
            if (navRef.current &&
                !navRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setShowUserMenu(false);
            }
        };

        if (isOpen || showUserMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, showUserMenu]);

    return (
        <div className='topbar'>
            {/* logo */}
            <Link to='/' className='logo' onClick={closeMenu}>
                <img src="./images/logo.svg" alt="Logo" />
            </Link>

            <div className='navbar'>
                {/* 漢堡按鈕 */}
                <button
                    ref={hamburgerRef}
                    className={`hamburger ${isOpen ? 'is-active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span className="bar" style={{ width: '80px' }}></span>
                    <span className="bar" style={{ width: '70px' }}></span>
                    <span className="bar" style={{ width: '60px' }}></span>
                </button>

                <nav className={`navigation ${isOpen ? 'show' : ''}`} ref={navRef}>
                    <ul>
                        <li className='find_type'>
                            <Link to="/Find_type" onClick={closeMenu}>
                                <p className='sitemap_item_content'>
                                    <img src="./images/icons/find_type-accent.svg" style={{ width: '24px' }} alt="" />
                                    找類型
                                </p>
                            </Link>
                        </li>
                        <li className='find_map'>
                            <Link to="/Find_map" onClick={closeMenu}>
                                <p className='sitemap_item_content'>
                                    <img src="./images/icons/find_map-accent.svg" style={{ width: '24px' }} alt="" />
                                    找地圖
                                </p>
                            </Link>
                        </li>
                        <li className='find_schedule'>
                            <Link to="/Find_schedule" onClick={closeMenu}>
                                <p className='sitemap_item_content'>
                                    <img src="./images/icons/find_schedule-accent.svg" style={{ width: '24px' }} alt="" />
                                    找行程
                                </p>
                            </Link>
                        </li>
                        <li className='blog'>
                            <Link to="/Blog" onClick={closeMenu}>
                                <p className='sitemap_item_content'>
                                    <img src="./images/icons/blog-accent.svg" style={{ width: '24px' }} alt="" />
                                    部落格
                                </p>
                            </Link>
                        </li>
                        <li className='about'>
                            <Link to="/About" onClick={closeMenu}>
                                <p className='sitemap_item_content'>
                                    <img src="./images/icons/about-accent.svg" style={{ width: '24px' }} alt="" />
                                    關於我們
                                </p>
                            </Link>
                        </li>
                        <li className='user'>
                            {isLoggedIn ? (
                                // 已登入：顯示用戶名稱和下拉選單
                                <div className='user_menu_container' ref={userMenuRef}>
                                    <button
                                        className='user_menu_button'
                                        onClick={toggleUserMenu}
                                    >
                                        <p className='sitemap_item_content'>
                                            <img src="./images/icons/user-accent.svg" style={{ width: '24px' }} alt="" />
                                            {user?.name || '會員'}
                                        </p>
                                    </button>

                                    {showUserMenu && (
                                        <div className='user_dropdown'>
                                            <Link to="/My_footprint" onClick={() => { closeMenu(); setShowUserMenu(false); }}>
                                                我的足跡
                                            </Link>
                                            <Link to="/Notifications" onClick={() => { closeMenu(); setShowUserMenu(false); }}>
                                                訊息通知
                                            </Link>
                                            <Link to="/Order_management" onClick={() => { closeMenu(); setShowUserMenu(false); }}>
                                                訂單管理
                                            </Link>
                                            <button onClick={handleLogout} className='logout_button'>
                                                登出
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                // 未登入：顯示登入連結
                                <Link to="/Member_login" onClick={closeMenu}>
                                    <p className='sitemap_item_content'>
                                        <img src="./images/icons/user-accent.svg" style={{ width: '24px' }} alt="" />
                                        會員登入
                                    </p>
                                </Link>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
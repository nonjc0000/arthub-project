import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    // 切換選單
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // 關閉選單
    const closeMenu = () => {
        setIsOpen(false);
    };

    // 點擊外部關閉選單
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className='topbar'>
            {/* logo */}
            <Link to='/' className='logo' onClick={closeMenu}>
                <img src="./images/logo.svg" alt="Logo" />
            </Link>

            <div className='navbar'>
                {/* 漢堡按鈕 */}
                <button
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
                        <Link to="/Member_login" onClick={closeMenu}>
                            <p className='sitemap_item_content'>
                                <img src="./images/icons/user-accent.svg" style={{ width: '24px' }} alt="" />
                                會員登入
                            </p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        </div >
    )
}

export default NavBar
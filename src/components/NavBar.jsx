import { Link } from 'react-router-dom'
import $ from 'jquery'
import { useEffect } from 'react';

const NavBar = () => {
    useEffect(() => {
        // 漢堡按鈕
        const handler = function () {
            $(this).toggleClass('is-active');
            $('.navigation').toggleClass('show');
        };

        const $btn = $('.hamburger');
        // 先解除同一個 handler，避免重複綁定
        $btn.off('click', handler).on('click', handler);

        // 清理（StrictMode 下第二次 mount/unmount 也不會殘留）
        return () => {
            $btn.off('click', handler);
        };
    }, []);

    return (
        <div className='topbar'>
            {/* logo */}
            <Link to='/' className='logo'>
                <img src="./images/logo.svg" alt="Logo" />
            </Link>

            <div className='navbar'>
                {/* 漢堡按鈕 */}
                <button className="hamburger">
                    <span className="bar" style={{ width: '80px' }}></span>
                    <span className="bar" style={{ width: '70px' }}></span>
                    <span className="bar" style={{ width: '60px' }}></span>
                </button>

                <nav className='navigation'>
                    <ul>
                        <li className='find_type'>
                            <Link to="/Find_type">
                                <p className='sitemap_item_content'>
                                    <img src="./images/icons/find_type-accent.svg" style={{ width: '24px' }} />
                                    找類型
                                </p>
                            </Link>
                        </li>
                        <li className='find_map'>
                            <Link to="/Find_map">
                                <p className='sitemap_item_content'>
                                    <img src="./images/icons/find_map-accent.svg" style={{ width: '24px' }} />
                                    找地圖
                                </p>
                            </Link>
                        </li>
                        <li className='find_schedule'>

                            <Link to="/Find_schedule">
                                <p className='sitemap_item_content'>
                                    <img src="./images/icons/find_schedule-accent.svg" style={{ width: '24px' }} />
                                    找行程
                                </p>
                            </Link>
                        </li>
                        <li className='blog'>
                            <Link to="/Blog">
                                <p className='sitemap_item_content'>
                                    <img src="./images/icons/blog-accent.svg" style={{ width: '24px' }} />
                                    部落格
                                </p>
                            </Link>
                        </li>
                        <li className='about'>
                            <Link to="/About">
                                <p className='sitemap_item_content'>
                                    <img src="./images/icons/about-accent.svg" style={{ width: '24px' }} />
                                    關於我們
                                </p>
                            </Link>
                        </li>
                        <li className='user'>
                            <Link to="/My_footprint">
                                <p className='sitemap_item_content'>
                                    <img src="./images/icons/user-accent.svg" style={{ width: '24px' }} />
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
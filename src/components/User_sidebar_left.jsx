import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const User_sidebar_left = () => {

    const location = useLocation();

    return (
        <aside className="user_sidebar_left">

            <Link to={'/My_footprint'} className='sidebar_item'>
                <div className={`pageToggle ${location.pathname === '/My_footprint' ? 'active' : ''}`}></div>
                <p>我的足跡</p>
            </Link>
            <Link to={'/Notifications'} className='sidebar_item'>
                <div className={`pageToggle ${location.pathname === '/Notifications' ? 'active' : ''}`} ></div>
                <p>訊息通知</p>
            </Link>
            <Link to={'/Order_management'} className='sidebar_item'>
                <div className={`pageToggle ${location.pathname === '/Order_management' ? 'active' : ''}`}></div>
                <p>訂單管理</p>
            </Link>

        </aside>
    )
}

export default User_sidebar_left
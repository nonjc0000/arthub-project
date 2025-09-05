import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const User_sidebar_left = ({ isActive }) => {

    return (
        <aside className="user_sidebar_left">

            <Link to={'/My_footprint'} className='sidebar_item'>
                <div className={`pageToggle ${isActive ? 'active' : ''}`}></div>
                <p>我的足跡</p>
            </Link>
            <Link to={'/Notifications'} className='sidebar_item'>
                <div className='pageToggle'></div>
                <p>訊息通知</p>
            </Link>
            <Link to={'/Order_management'} className='sidebar_item'>
                <div className='pageToggle'></div>
                <p>訂單管理</p>
            </Link>

        </aside>
    )
}

export default User_sidebar_left
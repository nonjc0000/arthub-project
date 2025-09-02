import React from 'react'
import { Link } from 'react-router-dom'

const Notifications = () => {
    return (
        <main className='notifications_main'>
            <h1 className='titleBox_h1'>
                <img className='titleBox' src="./images/titlebox/notifications_titlebox.svg" alt='訊息通知Notifications' />
            </h1>

            <div className="hr_square_deco" style={{ backgroundImage: 'url("./images/decorations/hr_square_deco.svg")' }}></div>

            <section className="notifications_content_box">

                <aside className="user_sidebar_left">
                    <Link to={'/My_footprint'} className='sidebar_item'>
                        <div className='pageToggle My_footprint'></div>
                        <p>我的足跡</p>
                    </Link>
                    <Link to={'/Notifications'} className='sidebar_item'>
                        <div className='pageToggle Notifications'></div>
                        <p>訊息通知</p>
                    </Link>
                    <Link to={'/Order_management'} className='sidebar_item'>
                        <div className='pageToggle Order_management'></div>
                        <p>訂單管理</p>
                    </Link>
                </aside>

                <div className="notifications_content">
                    <div className='notifications_content_header'>
                        <h2>最新消息</h2>
                    </div>

                    <div className='notifications_layout'>
                        <div className='notifications_image'>
                            <img src="./images/Notifications/market_street.jpg" alt="市集街景" />
                        </div>

                        <div className='notifications_list'>
                            <div className='notification_item'>
                                <div className='notification_date'>
                                    <span className='year'>2025</span>
                                    <span className='date'>Jun.15</span>
                                </div>
                                <div className='notification_content'>
                                    <h3>主辦關主標題主標題</h3>
                                    <p>我是內容我是內容我是我是內容我是內容</p>
                                    <p>我是內容我是內容我是我是內容我是內容</p>
                                </div>
                            </div>

                            <div className='notification_item'>
                                <div className='notification_date'>
                                    <span className='year'>2025</span>
                                    <span className='date'>Jun.15</span>
                                </div>
                                <div className='notification_content'>
                                    <h3>主辦關主標題主標題</h3>
                                    <p>我是內容我是內容我是我是內容我是內容</p>
                                    <p>我是內容我是內容我是我是內容我是內容</p>
                                </div>
                            </div>

                            <div className='notification_item'>
                                <div className='notification_date'>
                                    <span className='year'>2025</span>
                                    <span className='date'>Jun.15</span>
                                </div>
                                <div className='notification_content'>
                                    <h3>主辦關主標題主標題</h3>
                                    <p>我是內容我是內容我是我是內容我是內容</p>
                                    <p>我是內容我是內容我是我是內容我是內容</p>
                                </div>
                            </div>

                            <div className='notification_item'>
                                <div className='notification_date'>
                                    <span className='year'>2025</span>
                                    <span className='date'>Jun.15</span>
                                </div>
                                <div className='notification_content'>
                                    <h3>主辦關主標題主標題</h3>
                                    <p>我是內容我是內容我是我是內容我是內容</p>
                                    <p>我是內容我是內容我是我是內容我是內容</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <div className='notifications_deco-box'>
                <figure className='notifications_deco1'>
                    <img src="./images/decorations/deco-reading_teddy_bear.svg" alt="閱讀泰迪熊裝飾" />
                </figure>
            </div>

        </main>
    )
}

export default Notifications
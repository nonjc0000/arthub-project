import React from 'react'
import { Link } from 'react-router-dom'

const Order_management = () => {
    return (
        <main className='order_management_main'>
            <h1 className='titleBox_h1'>
                <img className='titleBox' src="./images/titlebox/order_management_titlebox.svg" alt='訂單管理Order Management' />
            </h1>

            <div className="hr_square_deco" style={{ backgroundImage: 'url("./images/decorations/hr_square_deco.svg")' }}></div>

            <section className="order_management_content_box">

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

                <div className="order_management_content">
                    <div className='order_status_tabs'>
                        <button className='status_tab active'>即將到來</button>
                        <button className='status_tab'>已完成</button>
                        <button className='status_tab'>取消中/已取消</button>
                    </div>

                    <div className='order_content_layout'>
                        <div className='order_list'>
                            <div className='order_card'>
                                <div className='order_image'>
                                    <img src="./images/order_management/market1.jpg" alt="華山設計選物日" />
                                    <div className='order_date'>
                                        <span className='month'>8月</span>
                                        <span className='day'>24</span>
                                    </div>
                                    <div className='order_status_badge upcoming'>即將到來</div>
                                </div>
                                <div className='order_info'>
                                    <h3>華山設計選物日</h3>
                                    <p className='order_location'>臺北市華山 × 文創園區</p>
                                    <div className='order_actions'>
                                        <button className='btn_outline'>完成會籤</button>
                                        <button className='btn_link'>詳情</button>
                                    </div>
                                </div>
                            </div>

                            <div className='order_card'>
                                <div className='order_image'>
                                    <img src="./images/order_management/market2.jpg" alt="華山設計選物日" />
                                    <div className='order_date'>
                                        <span className='month'>8月</span>
                                        <span className='day'>24</span>
                                    </div>
                                    <div className='order_status_badge upcoming'>即將到來</div>
                                </div>
                                <div className='order_info'>
                                    <h3>華山設計選物日</h3>
                                    <p className='order_location'>臺北市華山 × 文創園區</p>
                                    <div className='order_actions'>
                                        <button className='btn_outline'>完成會籤</button>
                                        <button className='btn_link'>詳情</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='recommended_section'>
                            <h3>屬於你的市集靈感</h3>
                            
                            <div className='recommended_card'>
                                <img src="./images/order_management/recommended1.jpg" alt="大稻埕貓路微章" />
                                <div className='recommended_info'>
                                    <h4>大稻埕貓路微章</h4>
                                    <div className='recommended_tags'>
                                        <span className='tag'>藝文展場</span>
                                        <span className='tag'>小型市集</span>
                                        <span className='tag'>河岸夕陽</span>
                                    </div>
                                    <div className='recommended_rating'>
                                        <span className='stars'>★★★★★</span>
                                        <span className='rating_text'>4.8(93) | 200人參加過</span>
                                    </div>
                                    <p className='price'>NT $800元起</p>
                                </div>
                            </div>

                            <div className='recommended_card'>
                                <img src="./images/order_management/recommended2.jpg" alt="大稻埕貓路微章" />
                                <div className='recommended_info'>
                                    <h4>大稻埕貓路微章</h4>
                                    <div className='recommended_tags'>
                                        <span className='tag'>藝文展場</span>
                                        <span className='tag'>小型市集</span>
                                        <span className='tag'>河岸夕陽</span>
                                    </div>
                                    <div className='recommended_rating'>
                                        <span className='stars'>★★★★★</span>
                                        <span className='rating_text'>4.8(93) | 200人參加過</span>
                                    </div>
                                    <p className='price'>NT $800元起</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <div className='order_management_deco-box'>
                <figure className='order_management_deco1'>
                    <img src="./images/decorations/deco-reading_elephant.svg" alt="閱讀大象裝飾" />
                </figure>
            </div>

        </main>
    )
}

export default Order_management